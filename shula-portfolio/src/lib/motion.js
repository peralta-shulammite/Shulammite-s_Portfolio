export const EASE_OUT = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

export const slideFromLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

export const slideFromRight = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

export const staggerContainer = (stagger = 0.1, delayChildren = 0.08) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const viewportOnce = {
  once: true,
  margin: "-60px",
  amount: 0.2,
};

export const hoverLift = {
  y: -6,
  scale: 1.02,
  transition: { type: "spring", stiffness: 320, damping: 22 },
};

export const hoverScale = {
  scale: 1.06,
  transition: { type: "spring", stiffness: 400, damping: 20 },
};
