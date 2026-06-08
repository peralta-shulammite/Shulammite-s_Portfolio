"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi";

export default function ScrollIndicator({ href = "#about" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.55 }}
      className="group absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-navy-muted sm:bottom-8 sm:flex"
      aria-label="Scroll to explore"
    >
      <div className="flex h-11 w-7 items-start justify-center rounded-full border-2 border-lilac/70 bg-white/50 p-1.5 backdrop-blur-sm transition-colors group-hover:border-navy/30">
        <motion.div
          className="h-2 w-1 rounded-full bg-navy/70"
          animate={reduceMotion ? undefined : { y: [0, 10, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <motion.span
        animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-light"
      >
        Scroll
        <HiOutlineChevronDown size={12} aria-hidden />
      </motion.span>
    </motion.a>
  );
}
