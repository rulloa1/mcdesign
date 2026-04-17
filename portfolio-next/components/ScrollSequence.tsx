"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useSpring } from "framer-motion";

interface ScrollSequenceProps {
  frameCount: number;
}

export default function ScrollSequence({ frameCount }: ScrollSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Preload images
  useEffect(() => {
    let loaded = 0;
    const imgArray: HTMLImageElement[] = [];

    for (let i = 0; i < frameCount; i++) {
        // Assume sequence frames are named frame_0.webp to frame_[frameCount-1].webp
      const img = new Image();
      img.src = `/sequence/frame_${i}.webp`;
      img.onload = () => {
        loaded++;
        setProgress((loaded / frameCount) * 100);
        if (loaded === frameCount) {
          setLoading(false);
          setImages(imgArray);
        }
      };
      
      // Error handling just in case images are missing, so it doesn't hang forever
      img.onerror = () => {
        loaded++;
        setProgress((loaded / frameCount) * 100);
        if (loaded === frameCount) {
          setLoading(false);
          setImages(imgArray);
        }
      };

      imgArray.push(img);
    }

    return () => {
        // cleanup references if component unmounts
    };
  }, [frameCount]);

  // Draw canvas frame
  useEffect(() => {
    if (loading || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const render = (progressValue: number) => {
      const frameIndex = Math.min(
        frameCount - 1,
        Math.max(0, Math.floor(progressValue * frameCount))
      );

      const img = images[frameIndex];
      // Skip rendering if image failed to load properly
      if (!img || !img.complete || img.naturalWidth === 0) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Ensure 'contain' fitting logic
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.min(hRatio, vRatio);
      
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        img,
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );
    };

    const unsubscribe = smoothProgress.on("change", render);

    // Initial render
    render(0);

    const handleResize = () => render(smoothProgress.get());
    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [loading, images, frameCount, smoothProgress]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "400vh" }}>
      {/* Loading Screen */}
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white">
          <div className="w-12 h-12 border-2 border-white/20 border-t-white/90 rounded-full animate-spin mb-8"></div>
          <p className="text-white/60 uppercase tracking-widest text-sm mb-4 font-light">Loading Assets</p>
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-white/90 transition-all duration-300" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}

      {/* Scroll indicator - vanishes quickly */}
      {!loading && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40 text-white/50 text-xs tracking-widest uppercase flex flex-col items-center animate-pulse">
           Scroll to Explore
           <div className="w-[1px] h-8 bg-white/30 mt-4"></div>
        </div>
      )}

      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    </div>
  );
}
