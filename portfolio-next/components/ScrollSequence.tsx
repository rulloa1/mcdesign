"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";

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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const isMobile = useIsMobile();

  // On mobile, load every 3rd frame for faster loading and less memory usage
  const frameStep = isMobile ? 3 : 1;
  const effectiveFrameCount = Math.ceil(frameCount / frameStep);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: isMobile ? 80 : 100,
    damping: isMobile ? 25 : 30,
    restDelta: 0.001,
  });

  // Fade scroll indicator out as soon as the user starts scrolling
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  // Resize canvas to match viewport — runs on mount and window resize only, not per frame
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  // Preload frames (every Nth on mobile for performance)
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
      const img = new Image();
      img.src = `/sequence/ezgif-frame-${frameNum}.jpg`;
      img.onload = onSettle;
      img.onerror = onSettle;
      imgArray.push(img);
    }
  }, [frameCount, frameStep, effectiveFrameCount]);

  // Set canvas size on mount and on window resize
  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  // Draw the correct frame on every scroll tick
  useEffect(() => {
    if (loading || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const render = (progressValue: number) => {
      const frameIndex = Math.min(
        effectiveFrameCount - 1,
        Math.max(0, Math.floor(progressValue * effectiveFrameCount))
      );

      const img = imagesRef.current[frameIndex];

      // clearRect is enough — no need to reset canvas.width/height every frame
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Placeholder animation when an asset failed to load
      if (!img?.complete || img.naturalWidth === 0) {
        const size = Math.min(canvas.width, canvas.height) * 0.4 + progressValue * 200;

        context.save();
        context.translate(canvas.width / 2, canvas.height / 2);
        context.rotate(progressValue * Math.PI * 2);
        context.strokeStyle = "rgba(255, 255, 255, 0.1)";
        context.lineWidth = 2;
        context.strokeRect(-size / 2, -size / 2, size, size);
        context.rotate(-progressValue * Math.PI * 4);
        context.strokeStyle = "rgba(255, 255, 255, 0.3)";
        context.lineWidth = 4;
        context.strokeRect(-size / 4, -size / 4, size / 2, size / 2);
        context.restore();

        context.fillStyle = "rgba(255, 255, 255, 0.4)";
        context.font = "16px sans-serif";
        context.textAlign = "center";
        context.fillText(
          `[ AWAITING IMAGE ASSETS: ezgif-frame-${(frameIndex + 1).toString().padStart(3, "0")}.jpg ]`,
          canvas.width / 2,
          canvas.height - 80
        );
        return;
      }

      // Contain-fit: preserve aspect ratio and letterbox
      const ratio = Math.min(canvas.width / img.width, canvas.height / img.height);
      const offsetX = (canvas.width - img.width * ratio) / 2;
      const offsetY = (canvas.height - img.height * ratio) / 2;

      context.drawImage(
        img,
        0, 0, img.width, img.height,
        offsetX, offsetY, img.width * ratio, img.height * ratio
      );
    };

    const unsubscribe = smoothProgress.on("change", render);
    render(smoothProgress.get());

    return unsubscribe;
  }, [loading, effectiveFrameCount, smoothProgress]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "400vh" }}>
      {/* Loading Screen */}
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white">
          <div className="w-12 h-12 border-2 border-white/20 border-t-white/90 rounded-full animate-spin mb-8" />
          <p className="text-white/60 uppercase tracking-widest text-sm mb-4 font-light">Loading Assets</p>
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-white/90 transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}

      {/* Scroll indicator — fades out as the user starts scrolling */}
      {!loading && (
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40 text-white/50 text-xs tracking-widest uppercase flex flex-col items-center pointer-events-none"
        >
          Scroll to Explore
          <div className="w-[1px] h-8 bg-white/30 mt-4" />
        </motion.div>
      )}

      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    </div>
  );
}
