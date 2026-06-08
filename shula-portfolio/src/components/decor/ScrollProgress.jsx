"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  if (reduceMotion) return null;

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-transparent"
        aria-hidden
      >
        <motion.div
          className="h-full w-full origin-left bg-gradient-to-r from-navy via-lilac to-navy"
          style={{ scaleX }}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed right-3 top-0 z-[59] hidden h-full w-[2px] origin-top bg-lilac/20 lg:block"
        aria-hidden
      >
        <motion.div
          className="w-full origin-top bg-gradient-to-b from-navy via-lilac to-lilac-soft"
          style={{ scaleY: scaleX }}
        />
      </motion.div>
    </>
  );
}
