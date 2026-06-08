"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi";
import { SiReact, SiNextdotjs, SiFigma } from "react-icons/si";
import { EASE_OUT } from "@/lib/motion";
import styles from "@/sections/hero/hero.module.css";

const techIconMap = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  Figma: SiFigma,
};

const positionClass = {
  "top-right": styles.badgeTopRight,
  "mid-left": styles.badgeMidLeft,
  "bottom-left": styles.badgeBottomLeft,
  "bottom-right": styles.badgeBottomRight,
};

export default function FloatingBadges({ badges = [], techTags = [] }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={styles.floatingBadges} aria-hidden>
      {badges.map((badge, index) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + index * 0.12, duration: 0.5, ease: EASE_OUT }}
          className={`${styles.floatingBadge} ${positionClass[badge.position] || ""}`}
        >
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: badge.delay || 0,
            }}
            className={styles.floatingBadgeInner}
          >
            <HiOutlineSparkles size={12} className="text-lilac" aria-hidden />
            {badge.label}
          </motion.span>
        </motion.div>
      ))}

      <div className={styles.techTags}>
        {techTags.map((tag, index) => {
          const Icon = techIconMap[tag];
          return (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.45, ease: EASE_OUT }}
              className={styles.techTag}
            >
              <motion.span
                animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
                transition={{
                  duration: 3.5 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                className="inline-flex items-center gap-1.5"
              >
                {Icon && <Icon size={12} aria-hidden />}
                {tag}
              </motion.span>
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}
