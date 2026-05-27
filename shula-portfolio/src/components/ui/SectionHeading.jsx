"use client";

import { motion } from "framer-motion";

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 lg:mb-16 ${alignClass} ${className}`}
    >
      <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {showDivider && (
        <div
          className={`section-divider ${align === "left" ? "section-divider-left" : ""}`}
        />
      )}
    </motion.div>
  );
}
