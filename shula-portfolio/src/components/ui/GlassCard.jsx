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
      className={`glass-card rounded-2xl p-6 lg:p-8 transition-shadow duration-300 hover:border-lilac ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
