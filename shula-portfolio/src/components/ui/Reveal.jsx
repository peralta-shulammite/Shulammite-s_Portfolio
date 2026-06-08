"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function Reveal({
  children,
  className = "",
  as: Component = motion.div,
  delay = 0,
  y = 24,
  ...props
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.55, delay, ease: fadeUp.visible.transition.ease }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
