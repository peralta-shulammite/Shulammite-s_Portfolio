"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function CursorGlow() {
  const reduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const onMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1] hidden lg:block"
      aria-hidden
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.35 }}
    >
      <motion.div
        className="absolute h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lilac/15 blur-3xl"
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 120, damping: 28, mass: 0.4 }}
      />
    </motion.div>
  );
}
