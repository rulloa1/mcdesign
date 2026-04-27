"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";

// ─── Spring config: stiffness 100 / damping 30 gives heavy architectural feel
const SPRING_CONFIG = { stiffness: 100, damping: 30, restDelta: 0.001 };

interface ScrollSequenceProps {
  frameCount: number;
}

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}

export default function ScrollSequence({ frameCount }: ScrollSequenceProps) {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef    = useRef<HTMLImageElement[]>([]);
  const [loading, setLoading]   = useState(true);
  const [progress, setProgress] = useState(0);
  const isMobile = useIsMobile();

  // Mobile: load every 3rd frame to reduce memory pressure
  const frameStep          = isMobile ? 3 : 1;
  const effectiveFrameCount = Math.ceil(frameCount / frameStep);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Weighted spring — makes heavy architectural elements feel like they have mass
  const smoothProgress = useSpring(scrollYProgress, {
    ...SPRING_CONFIG,
    stiffness: isMobile ? 80 : SPRING_CONFIG.stiffness,
    damping:   isMobile ? 25 : SPRING_CONFIG.damping,
  });

  // Scroll indicator fades out as soon as user starts scrolling
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

  // ── Resize canvas to viewport ─────────────────────────────────────────────
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  // ── Preload frames ────────────────────────────────────────────────────────
  useEffect(() => {
    let loaded = 0;
    const imgArray: HTMLImageElement[] = [];

    const onSettle = () => {
      loaded++;
      setProgress((loaded / effectiveFrameCount) * 100);
      if (loaded === effectiveFrameCount) {
        imagesRef.current = imgArray;
        setLoading(false);
      }
    };

    for (let i = 0; i < frameCount; i += frameStep) {
      const frameNum = (i + 1).toString().padStart(3, "0");
      const img      = new Image();
      img.src        = `/sequence/ezgif-frame-${frameNum}.jpg`;
      img.onload     = onSettle;
      img.onerror    = onSettle;
      imgArray.push(img);
    }
  }, [frameCount, frameStep, effectiveFrameCount]);

  // ── Canvas resize on mount + window resize ────────────────────────────────
  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  // ── Draw frame on every spring tick ──────────────────────────────────────
  useEffect(() => {
    if (loading || !canvasRef.current) return;

    const canvas  = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const render = (progressValue: number) => {
      const frameIndex = Math.min(
        effectiveFrameCount - 1,
        Math.max(0, Math.floor(progressValue * effectiveFrameCount))
      );

      const img = imagesRef.current[frameIndex];
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Fallback placeholder when assets haven't loaded
      if (!img?.complete || img.naturalWidth === 0) {
        const size = Math.min(canvas.width, canvas.height) * 0.4 + progressValue * 200;
        context.save();
        context.translate(canvas.width / 2, canvas.height / 2);
        context.rotate(progressValue * Math.PI * 2);
        context.strokeStyle = "rgba(201,168,76,0.15)";
        context.lineWidth   = 1;
        context.strokeRect(-size / 2, -size / 2, size, size);
        context.rotate(-progressValue * Math.PI * 4);
        context.strokeStyle = "rgba(201,168,76,0.4)";
        context.lineWidth   = 2;
        context.strokeRect(-size / 4, -size / 4, size / 2, size / 2);
        context.restore();

        context.fillStyle = "rgba(255,255,255,0.25)";
        context.font      = "13px monospace";
        context.textAlign = "center";
        context.fillText(
          `[ FRAME ${(frameIndex + 1).toString().padStart(3, "0")} / ${effectiveFrameCount} ]`,
          canvas.width / 2,
          canvas.height - 60
        );
        return;
      }

      // Cover-fit: fill viewport, crop edges (cinematic)
      const scaleX = canvas.width  / img.width;
      const scaleY = canvas.height / img.height;
      const scale  = Math.max(scaleX, scaleY);
      const drawW  = img.width  * scale;
      const drawH  = img.height * scale;
      const offsetX = (canvas.width  - drawW) / 2;
      const offsetY = (canvas.height - drawH) / 2;

      context.drawImage(img, 0, 0, img.width, img.height, offsetX, offsetY, drawW, drawH);

      // Subtle dark vignette to keep text legible over any frame
      const vignette = context.createRadialGradient(
        canvas.width / 2, canvas.height / 2, canvas.height * 0.2,
        canvas.width / 2, canvas.height / 2, canvas.height * 0.85
      );
      vignette.addColorStop(0, "rgba(5,5,5,0)");
      vignette.addColorStop(1, "rgba(5,5,5,0.65)");
      context.fillStyle = vignette;
      context.fillRect(0, 0, canvas.width, canvas.height);
    };

    const unsubscribe = smoothProgress.on("change", render);
    render(smoothProgress.get());
    return unsubscribe;
  }, [loading, effectiveFrameCount, smoothProgress]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "500vh" }}>

      {/* ── Loading screen ─────────────────────────────────────────────────── */}
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white">
          <div className="w-10 h-10 border border-white/20 border-t-white/80 rounded-full animate-spin mb-8" />
          <p className="text-white/40 uppercase tracking-[0.2em] text-xs mb-5 font-light">
            Loading Assets
          </p>
          <div className="w-56 h-px bg-white/10 overflow-hidden">
            <div
              className="h-full bg-[var(--gold)] transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/20 text-xs mt-3 font-light tabular-nums">
            {Math.round(progress)}%
          </p>
        </div>
      )}

      {/* ── Scroll indicator ───────────────────────────────────────────────── */}
      {!loading && (
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center pointer-events-none"
        >
          <p className="text-white/30 text-[10px] tracking-[0.25em] uppercase font-light mb-3">
            Scroll to Explore
          </p>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      )}

      {/* ── Fixed canvas — locked to viewport ─────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    </div>
  );
}
