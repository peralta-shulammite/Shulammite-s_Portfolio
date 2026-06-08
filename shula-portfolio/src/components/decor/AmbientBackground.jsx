"use client";

import { motion, useReducedMotion } from "framer-motion";

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 8) % 95}%`,
  top: `${(i * 23 + 5) % 90}%`,
  size: i % 3 === 0 ? 4 : 3,
  duration: 14 + (i % 6) * 2,
  delay: (i % 5) * 0.8,
}));

export default function AmbientBackground() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 10%, rgba(214,198,230,0.25), transparent 55%), radial-gradient(ellipse 60% 40% at 85% 75%, rgba(242,239,230,0.5), transparent 50%), radial-gradient(ellipse 50% 35% at 50% 50%, rgba(214,198,230,0.12), transparent 60%)",
        }}
      />

      <motion.div
        className="absolute -left-[10%] top-[18%] h-72 w-72 rounded-full bg-lilac/25 blur-3xl"
        animate={{
          x: [0, 24, 0],
          y: [0, -18, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[5%] top-[42%] h-56 w-56 rounded-full bg-dirty-white/80 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 14, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[12%] left-[28%] h-64 w-64 rounded-full bg-lilac-soft/50 blur-3xl"
        animate={{
          x: [0, 16, 0],
          y: [0, -12, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-lilac/30"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
