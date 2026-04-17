"use client";

import ScrollSequence from "@/components/ScrollSequence";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Opacity maps: [start, start + 0.1, end - 0.1, end] -> [0, 1, 1, 0]
  // With y transform dropping it in from 20px and pushing it out to -20px.

  // Beat A: 0 - 20%
  const opacityA = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const yA = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [20, 0, 0, -20]);

  // Beat B: 25 - 45%
  const opacityB = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const yB = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [20, 0, 0, -20]);

  // Beat C: 50 - 70%
  const opacityC = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const yC = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [20, 0, 0, -20]);

  // Beat D: 75 - 95%
  const opacityD = useTransform(scrollYProgress, [0.75, 0.85, 0.95, 1], [0, 1, 1, 0]);
  const yD = useTransform(scrollYProgress, [0.75, 0.85, 0.95, 1], [20, 0, 0, -20]);

  return (
    <main className="relative min-h-screen bg-[#050505] selection:bg-white/20 overflow-x-hidden">
      {/* 
        This scroll sequence dictates the overall scroll height of the page,
        which we set to 400vh in the component logic so that the user has time 
        to read and experience the scrub.
      */}
      <ScrollSequence frameCount={294} />

      {/* Scrollytelling Overlay Container */}
      <div className="fixed inset-0 pointer-events-none z-10">

        {/* Beat A: 0-20% Scroll (Centered) */}
        <motion.div 
          style={{ opacity: opacityA, y: yA }} 
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center"
        >
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white/90 mb-4">
            MICHAEL CHANDLER
          </h1>
          <p className="text-xl md:text-2xl text-white/60 tracking-wide font-light">
            Strategic Construction Executive
          </p>
        </motion.div>

        {/* Beat B: 25-55% Scroll (Left-aligned) */}
        <motion.div 
          style={{ opacity: opacityB, y: yB }} 
          className="absolute left-6 md:left-24 top-1/2 -translate-y-1/2 max-w-lg"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white/90 mb-4">
            $500M+ Portfolio
          </h2>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
            End-to-end management of complex structural developments from architecture to execution. 100% on-time delivery across 37+ years of expertise.
          </p>
        </motion.div>

        {/* Beat C: 50-80% Scroll (Right-aligned) */}
        <motion.div 
          style={{ opacity: opacityC, y: yC }} 
          className="absolute right-6 md:right-24 top-1/2 -translate-y-1/2 max-w-lg text-right"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white/90 mb-4">
            Crafting Legacy
          </h2>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
            Delivering boutique coastal estates at an institutional scale and navigating immense global logistics for offshore developments.
          </p>
        </motion.div>

        {/* Beat D: 75-100% Scroll (Centered CTA) */}
        <motion.div 
          style={{ opacity: opacityD, y: yD }} 
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center flex flex-col items-center"
        >
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white/90 mb-8 max-w-4xl leading-tight">
            Ready to Elevate Your Next Development?
          </h2>
          <button className="pointer-events-auto bg-white text-black px-10 py-5 rounded-full font-medium tracking-wide hover:bg-gray-200 transition-colors shadow-2xl">
            Start Inquiry
          </button>
        </motion.div>

      </div>
    </main>
  );
}
