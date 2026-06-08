"use client";

import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  ...motionProps
}) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "var(--shadow-hover)" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`glass-card group rounded-2xl p-6 lg:p-8 transition-[box-shadow,border-color] duration-300 hover:border-lilac hover:shadow-[var(--shadow-hover)] ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
