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
  "tech-top-left": styles.techTopLeft,
  "tech-mid-right": styles.techMidRight,
  "tech-bottom-right": styles.techBottomRight,
};

function FloatingChip({
  label,
  position,
  delay = 0,
  index,
  variant = "role",
  icon: Icon,
  reduceMotion,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.55 + index * 0.1, duration: 0.5, ease: EASE_OUT }}
      className={`${styles.floatingChip} ${positionClass[position] || ""}`}
    >
      <motion.button
        type="button"
        aria-label={label}
        whileHover={reduceMotion ? undefined : { scale: 1.05 }}
        whileTap={reduceMotion ? undefined : { scale: 0.96 }}
        className={`${styles.chipInner} ${
          variant === "tech" ? styles.chipTech : styles.chipRole
        }`}
      >
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
          transition={{
            duration: 3.8 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
          className={styles.chipContent}
        >
          {Icon ? (
            <Icon size={13} className={styles.chipIcon} aria-hidden />
          ) : (
            <HiOutlineSparkles size={12} className={styles.chipIcon} aria-hidden />
          )}
          <span className={styles.chipLabel}>{label}</span>
        </motion.span>
      </motion.button>
    </motion.div>
  );
}

export default function FloatingBadges({ badges = [], techTags = [] }) {
  const reduceMotion = useReducedMotion();

  const normalizedTechTags = techTags.map((tag, index) =>
    typeof tag === "string"
      ? { label: tag, position: "tech-bottom-right", delay: index * 0.15 }
      : tag
  );

  return (
    <div className={styles.floatingBadges}>
      {badges.map((badge, index) => (
        <FloatingChip
          key={badge.label}
          label={badge.label}
          position={badge.position}
          delay={badge.delay || 0}
          index={index}
          variant="role"
          reduceMotion={reduceMotion}
        />
      ))}

      {normalizedTechTags.map((tag, index) => {
        const Icon = techIconMap[tag.label];
        return (
          <FloatingChip
            key={tag.label}
            label={tag.label}
            position={tag.position}
            delay={tag.delay ?? index * 0.15}
            index={badges.length + index}
            variant="tech"
            icon={Icon}
            reduceMotion={reduceMotion}
          />
        );
      })}
    </div>
  );
}
