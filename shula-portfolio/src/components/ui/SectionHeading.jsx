"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

export default function SectionHeading({
  title,
  align = "center",
  showDivider = true,
  className = "",
}) {
  const alignClass =
    align === "left"
      ? "text-left"
      : align === "right"
        ? "text-right"
        : "text-center";

  const dividerOrigin = align === "left" ? 0 : align === "right" ? 1 : 0.5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px", amount: 0.35 }}
      transition={{ duration: 0.55, ease: EASE_OUT }}
      className={`mb-12 lg:mb-16 ${alignClass} ${className}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
        className="font-[family-name:var(--font-sora)] text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {showDivider && (
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT }}
          style={{ transformOrigin: `${dividerOrigin * 100}% center` }}
          className={`section-divider ${align === "left" ? "section-divider-left" : ""}`}
        />
      )}
    </motion.div>
  );
}
