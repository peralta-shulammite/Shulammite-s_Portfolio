"use client";

import { motion, useReducedMotion } from "framer-motion";

const variants = {
  wave: {
    fillTop: "var(--white)",
    fillBottom: "var(--lilac-soft)",
    opacity: 0.35,
    path: "M0,64 C240,120 480,0 720,48 C960,96 1200,24 1440,64 L1440,120 L0,120 Z",
  },
  soft: {
    fillTop: "transparent",
    fillBottom: "var(--dirty-white)",
    opacity: 0.5,
    path: "M0,80 C360,20 720,100 1080,40 C1260,10 1380,50 1440,70 L1440,120 L0,120 Z",
  },
  glow: {
    fillTop: "transparent",
    fillBottom: "var(--lilac-soft)",
    opacity: 0.25,
    path: "M0,90 Q360,30 720,70 T1440,50 L1440,120 L0,120 Z",
  },
};

export default function SectionDivider({ variant = "wave", flip = false, className = "" }) {
  const reduceMotion = useReducedMotion();
  const config = variants[variant] || variants.wave;

  return (
    <div
      className={`pointer-events-none relative w-full leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden
    >
      <motion.div
        className="absolute inset-x-[10%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-lilac/60 to-transparent"
        initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="relative block h-[48px] w-full sm:h-[64px] lg:h-[80px]"
        style={{ opacity: config.opacity }}
      >
        <path fill={config.fillBottom} d={config.path} />
      </svg>
    </div>
  );
}
