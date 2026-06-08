"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function FloatingShapes({ className = "" }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <motion.div
        className="absolute left-[8%] top-[22%] h-14 w-14 rounded-xl border border-lilac/40 bg-white/30 backdrop-blur-sm"
        animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[12%] top-[30%] h-10 w-10 rounded-full border border-lilac/50 bg-lilac-soft/40"
        animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[28%] left-[18%] h-px w-24 bg-gradient-to-r from-transparent via-lilac/70 to-transparent"
        animate={{ scaleX: [0.8, 1.1, 0.8], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[20%] bottom-[35%] h-16 w-16 rounded-full border border-dashed border-lilac/35"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-[55%] right-[6%] h-20 w-px bg-gradient-to-b from-transparent via-lilac/50 to-transparent"
        animate={{ scaleY: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
