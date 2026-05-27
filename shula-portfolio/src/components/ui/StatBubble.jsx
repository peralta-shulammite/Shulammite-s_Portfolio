"use client";

import { motion } from "framer-motion";

const positionClasses = {
  "top-left": "top-0 left-0 -translate-x-1/4 -translate-y-1/4",
  "top-right": "top-8 right-0 translate-x-1/4",
  bottom: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4",
};

export default function StatBubble({ value, label, position = "top-left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className={`absolute z-10 ${positionClasses[position] || positionClasses["top-left"]}`}
    >
      <div className="glass-card glow-ring flex h-24 w-24 flex-col items-center justify-center rounded-full p-3 text-center sm:h-28 sm:w-28">
        <span className="font-[family-name:var(--font-sora)] text-lg font-bold gradient-text sm:text-xl">
          {value}
        </span>
        <span className="mt-0.5 text-[10px] leading-tight text-silver-muted sm:text-xs">
          {label}
        </span>
      </div>
    </motion.div>
  );
}
