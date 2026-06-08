"use client";

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { site } from "@/data/site";
import useLoadProgress from "@/hooks/useLoadProgress";
import { EASE_OUT } from "@/lib/motion";
import styles from "./preloader.module.css";

const MESSAGES = [
  "Loading Experience...",
  "Preparing Portfolio...",
  "Crafting Digital Experience...",
];

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${(i * 13 + 6) % 94}%`,
  top: `${(i * 19 + 8) % 88}%`,
  size: i % 3 === 0 ? 5 : 3,
  duration: 10 + (i % 5) * 1.5,
  delay: i * 0.25,
}));

function getMessage(progress) {
  if (progress < 34) return MESSAGES[0];
  if (progress < 67) return MESSAGES[1];
  return MESSAGES[2];
}

export default function Preloader() {
  const reduceMotion = useReducedMotion();
  const { progress, isComplete } = useLoadProgress();
  const [phase, setPhase] = useState("loading");
  const [displayPercent, setDisplayPercent] = useState(0);

  const smoothProgress = useSpring(0, {
    stiffness: reduceMotion ? 300 : 45,
    damping: reduceMotion ? 40 : 22,
    mass: 0.8,
  });

  useMotionValueEvent(smoothProgress, "change", (value) => {
    setDisplayPercent(Math.round(value));
  });

  useEffect(() => {
    smoothProgress.set(progress);
  }, [progress, smoothProgress]);

  useEffect(() => {
    if (!isComplete) return undefined;

    const exitDelay = setTimeout(() => setPhase("exiting"), 320);
    const doneDelay = setTimeout(
      () => setPhase("done"),
      reduceMotion ? 520 : 1300
    );

    return () => {
      clearTimeout(exitDelay);
      clearTimeout(doneDelay);
    };
  }, [isComplete, reduceMotion]);

  useEffect(() => {
    if (phase === "done") return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [phase]);

  if (phase === "done") return null;

  const exiting = phase === "exiting";
  const message = getMessage(displayPercent);

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 1 }}
      animate={{
        opacity: exiting ? 0 : 1,
        scale: exiting ? 1.04 : 1,
      }}
      transition={{ duration: 0.75, ease: EASE_OUT, delay: exiting ? 0.25 : 0 }}
      aria-live="polite"
      aria-busy={!isComplete}
      role="status"
      aria-label="Loading portfolio"
    >
      {!reduceMotion && (
        <>
          <motion.div
            className={styles.blobOne}
            animate={{ x: [0, 20, 0], y: [0, -14, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className={styles.blobTwo}
            animate={{ x: [0, -16, 0], y: [0, 12, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className={styles.blobThree}
            animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.75, 0.5] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          {PARTICLES.map((p) => (
            <motion.span
              key={p.id}
              className={styles.particle}
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
              }}
              animate={{ y: [0, -14, 0], opacity: [0.2, 0.55, 0.2] }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
            />
          ))}
        </>
      )}

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{
          opacity: exiting ? 0 : 1,
          y: exiting ? -24 : 0,
          scale: exiting ? 0.92 : 1,
        }}
        transition={{ duration: 0.45, ease: EASE_OUT }}
      >
        <p className={styles.monogram}>{site.name}</p>

        <div className={styles.percentRow}>
          <motion.span
            className={styles.percentValue}
            key={displayPercent}
            initial={{ opacity: 0.7, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
          >
            {displayPercent}
          </motion.span>
          <span className={styles.percentSign}>%</span>
        </div>

        <div className={styles.barTrack} aria-hidden>
          <motion.div
            className={styles.barFill}
            animate={{ width: `${displayPercent}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 22 }}
          />
          {!reduceMotion && displayPercent > 2 && (
            <motion.span
              className={styles.barGlow}
              style={{ left: `${displayPercent}%` }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={message}
            className={styles.message}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: exiting ? 0 : 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
          >
            {message}
          </motion.p>
        </AnimatePresence>
      </motion.div>

      {exiting && !reduceMotion && (
        <>
          <motion.div
            className={styles.curtainTop}
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.12 }}
          />
          <motion.div
            className={styles.curtainBottom}
            initial={{ y: 0 }}
            animate={{ y: "100%" }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.12 }}
          />
        </>
      )}
    </motion.div>
  );
}
