"use client";

import { useEffect, useState } from "react";

const MIN_DURATION = 2600;
const MAX_DURATION = 6500;

export default function useLoadProgress() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let frame = 0;
    let current = 0;
    let loaded = false;
    const start = performance.now();

    const finish = () => {
      loaded = true;
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    const tick = (now) => {
      const elapsed = now - start;
      let target = 18;

      if (document.readyState === "interactive") target = 48;
      if (document.readyState === "complete") target = loaded ? 100 : 82;

      if (elapsed < MIN_DURATION) {
        const timeCap = (elapsed / MIN_DURATION) * 72;
        target = Math.min(target, timeCap);
      }

      current += (target - current) * 0.07;

      if (elapsed >= MIN_DURATION && loaded && current >= 98) {
        current = 100;
      }

      if (elapsed >= MAX_DURATION) {
        current = 100;
      }

      const next = Math.min(100, Math.round(current));
      setProgress(next);

      if (next >= 100) {
        setIsComplete(true);
        return;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("load", finish);
    };
  }, []);

  return { progress, isComplete };
}
