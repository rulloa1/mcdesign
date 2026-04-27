"use client";

import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import ScrollSequence from "@/components/ScrollSequence";

// ─── Spring config: heavy architectural elements with realistic weight ───────
const SPRING = { stiffness: 100, damping: 30 };

// ─── Beat timing map ─────────────────────────────────────────────────────────
// Beat A  0–20%   | Beat B  25–45%  | Beat C  50–70%  | Beat D  75–95%
// Each beat fades in over 8%, holds, then fades out over 8%

export default function Home() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, SPRING);

  // ── Beat A: 0–20% ──────────────────────────────────────────────────────────
  const opA  = useTransform(smooth, [0, 0.06, 0.14, 0.20], [0, 1, 1, 0]);
  const yA   = useTransform(smooth, [0, 0.06, 0.14, 0.20], [28, 0, 0, -28]);

  // ── Beat B: 25–45% ─────────────────────────────────────────────────────────
  const opB  = useTransform(smooth, [0.25, 0.31, 0.39, 0.45], [0, 1, 1, 0]);
  const yB   = useTransform(smooth, [0.25, 0.31, 0.39, 0.45], [28, 0, 0, -28]);

  // ── Beat C: 50–70% ─────────────────────────────────────────────────────────
  const opC  = useTransform(smooth, [0.50, 0.56, 0.64, 0.70], [0, 1, 1, 0]);
  const yC   = useTransform(smooth, [0.50, 0.56, 0.64, 0.70], [28, 0, 0, -28]);

  // ── Beat D: 75–95% ─────────────────────────────────────────────────────────
  const opD  = useTransform(smooth, [0.75, 0.81, 0.89, 0.95], [0, 1, 1, 0]);
  const yD   = useTransform(smooth, [0.75, 0.81, 0.89, 0.95], [28, 0, 0, -28]);

  // Gold accent line width for Beat D (snaps together)
  const lineW = useTransform(smooth, [0.75, 0.88], ["0%", "100%"]);

  return (
    <main className="relative min-h-screen bg-[#050505] overflow-x-hidden selection:bg-white/20">

      {/* ── Scroll-driven canvas sequence ─────────────────────────────────── */}
      <ScrollSequence frameCount={294} />

      {/* ── Fixed overlay: all 4 beats ────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none z-10">

        {/* ── BEAT A: 0–20% — THE VISION ──────────────────────────────────── */}
        <motion.div
          style={{ opacity: opA, y: yA }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center text-center px-6"
        >
          {/* Eyebrow label */}
          <p className="text-[var(--gold)] text-xs tracking-label uppercase mb-6 font-medium">
            Construction Officer · Hospitality
          </p>

          {/* Hero title */}
          <h1
            className="text-[clamp(3rem,10vw,9rem)] font-semibold tracking-architectural text-white/95 leading-none mb-5"
          >
            BEYOND THE<br />BLUEPRINT.
          </h1>

          {/* Subtitle */}
          <p className="text-[clamp(1rem,2vw,1.375rem)] text-white/50 font-light max-w-xl leading-relaxed">
            Precision hospitality construction management.
          </p>

          {/* Decorative rule */}
          <div className="mt-10 w-px h-16 bg-gradient-to-b from-[var(--gold)] to-transparent opacity-60" />
        </motion.div>

        {/* ── BEAT B: 25–45% — STRUCTURAL INTEGRITY ───────────────────────── */}
        <motion.div
          style={{ opacity: opB, y: yB }}
          className="absolute left-6 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 max-w-md"
        >
          <p className="text-[var(--gold)] text-xs tracking-label uppercase mb-5 font-medium">
            Structural Integrity
          </p>

          <h2
            className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold tracking-architectural text-white/95 leading-none mb-6"
          >
            ENGINEERED<br />FOUNDATIONS.
          </h2>

          <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
            Coordinating 40+ sub-trades with<br className="hidden md:block" />
            zero-tolerance for error.
          </p>

          {/* Stat callout */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-4xl font-semibold tracking-architectural text-white/90">40+</span>
            <span className="text-sm text-white/40 font-light leading-snug uppercase tracking-label">
              Sub-trades<br />Coordinated
            </span>
          </div>
        </motion.div>

        {/* ── BEAT C: 50–70% — LUXURY DETAIL ──────────────────────────────── */}
        <motion.div
          style={{ opacity: opC, y: yC }}
          className="absolute right-6 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 max-w-md text-right"
        >
          <p className="text-[var(--gold)] text-xs tracking-label uppercase mb-5 font-medium">
            Luxury Detail
          </p>

          <h2
            className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold tracking-architectural text-white/95 leading-none mb-6"
          >
            THE FINISH<br />STANDARD.
          </h2>

          <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
            Curating world-class materials<br className="hidden md:block" />
            and custom millwork.
          </p>

          {/* Material tags */}
          <div className="mt-8 flex flex-wrap gap-2 justify-end">
            {["Marble", "Custom Millwork", "Bespoke Fixtures", "Artisan Tile"].map((tag) => (
              <span
                key={tag}
                className="text-xs text-white/40 border border-white/10 rounded-full px-3 py-1 font-light tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── BEAT D: 75–95% — THE RESULT ──────────────────────────────────── */}
        <motion.div
          style={{ opacity: opD, y: yD }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center text-center px-6"
        >
          <p className="text-[var(--gold)] text-xs tracking-label uppercase mb-6 font-medium">
            The Result
          </p>

          {/* Domain as hero */}
          <h2
            className="text-[clamp(3rem,10vw,8rem)] font-semibold tracking-architectural text-white/95 leading-none mb-4"
          >
            MCDESIGN.BIO
          </h2>

          {/* Animated gold rule — snaps together as the structure assembles */}
          <div className="relative w-full max-w-sm h-px bg-white/10 my-6 overflow-hidden">
            <motion.div
              style={{ width: lineW }}
              className="absolute left-0 top-0 h-full bg-[var(--gold)]"
            />
          </div>

          <p className="text-base md:text-lg text-white/50 font-light max-w-sm leading-relaxed mb-10">
            Delivering five-star environments<br />
            on time and under budget.
          </p>

          {/* CTA — pointer-events re-enabled */}
          <a
            href="mailto:mike.rcccon@yahoo.com"
            className="pointer-events-auto inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-[var(--gold)] hover:text-white transition-all duration-300 shadow-2xl"
          >
            Start Inquiry
            <span className="text-lg leading-none">→</span>
          </a>

          {/* Social proof stats */}
          <div className="mt-12 flex items-center gap-10 md:gap-16">
            {[
              { value: "$500M+", label: "Portfolio Value" },
              { value: "37+",    label: "Years Experience" },
              { value: "100%",   label: "On-Time Delivery" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="text-2xl md:text-3xl font-semibold tracking-architectural text-white/90">
                  {value}
                </span>
                <span className="text-xs text-white/35 uppercase tracking-label font-light">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </main>
  );
}
