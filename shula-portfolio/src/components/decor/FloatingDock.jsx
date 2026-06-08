"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail, HiOutlineChatAlt2, HiOutlineX, HiOutlineArrowUp } from "react-icons/hi";
import { site } from "@/data/site";
import { EASE_OUT } from "@/lib/motion";
import styles from "./floatingDock.module.css";

const dockItems = [
  {
    id: "linkedin",
    href: site.socials.linkedin.href,
    label: "LinkedIn",
    icon: FaLinkedin,
    external: true,
  },
  {
    id: "github",
    href: site.socials.github.href,
    label: "GitHub",
    icon: FaGithub,
    external: true,
  },
  {
    id: "email",
    href: site.socials.email.href,
    label: "Email",
    icon: HiOutlineMail,
    external: true,
  },
];

/** Bottom → top: LinkedIn (nearest trigger), GitHub, Email */
const mobileFabItems = [
  {
    id: "linkedin",
    href: site.socials.linkedin.href,
    label: "LinkedIn",
    icon: FaLinkedin,
    external: true,
  },
  {
    id: "github",
    href: site.socials.github.href,
    label: "GitHub",
    icon: FaGithub,
    external: true,
  },
  {
    id: "email",
    href: site.socials.email.href,
    label: "Email",
    icon: HiOutlineMail,
    external: true,
  },
];

const fabSpring = { type: "spring", stiffness: 440, damping: 30, mass: 0.6 };

const actionVariants = {
  hidden: { opacity: 0, scale: 0.55, y: 28 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ...fabSpring, delay: index * 0.08 },
  }),
  exit: (index) => ({
    opacity: 0,
    scale: 0.55,
    y: 20,
    transition: {
      ...fabSpring,
      delay: (mobileFabItems.length - 1 - index) * 0.05,
    },
  }),
};

function MobileFab() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop((window.scrollY || window.pageYOffset) > 160);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={close}
            className={styles.backdrop}
            aria-label="Close social menu"
          />
        )}
      </AnimatePresence>

      <motion.div
        layout
        className={styles.mobileFab}
        role="group"
        aria-label="Mobile quick actions"
      >
        <AnimatePresence>
          {showTop && (
            <motion.button
              type="button"
              layout
              initial={{ opacity: 0, scale: 0.85, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 8 }}
              transition={fabSpring}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              whileTap={{ scale: 0.92 }}
              className={styles.scrollTopBtn}
            >
              <HiOutlineArrowUp size={18} aria-hidden />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.div layout className={styles.actionStack}>
          <AnimatePresence>
            {open &&
              mobileFabItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    aria-label={item.label}
                    title={item.label}
                    onClick={close}
                    custom={index}
                    variants={actionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileTap={{ scale: 0.88 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    className={styles.actionBtn}
                  >
                    <Icon size={18} aria-hidden />
                  </motion.a>
                );
              })}
          </AnimatePresence>
        </motion.div>

        <motion.button
          type="button"
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.45, ease: EASE_OUT }}
          onClick={toggle}
          aria-label={open ? "Close social menu" : "Open social menu"}
          aria-expanded={open}
          aria-haspopup="true"
          whileTap={{ scale: 0.92 }}
          className={`${styles.triggerBtn} ${open ? styles.triggerBtnOpen : ""}`}
        >
          <motion.span
            animate={{ rotate: open ? 90 : 0 }}
            transition={fabSpring}
            className={styles.iconWrap}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={fabSpring}
                  className={styles.iconWrap}
                >
                  <HiOutlineX size={22} aria-hidden />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={fabSpring}
                  className={styles.iconWrap}
                >
                  <HiOutlineChatAlt2 size={20} aria-hidden />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.span>
        </motion.button>
      </motion.div>
    </>
  );
}

export default function FloatingDock() {
  const [hovered, setHovered] = useState(null);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.aside
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5, ease: EASE_OUT }}
        className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
        aria-label="Social links dock"
      >
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-lilac/50 bg-white/75 p-2 shadow-[var(--shadow-card)] backdrop-blur-xl">
          {dockItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.id}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                aria-label={item.label}
                title={item.label}
                onHoverStart={() => setHovered(item.id)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.94 }}
                className="relative flex h-10 w-10 items-center justify-center rounded-xl text-navy transition-colors hover:bg-lilac-soft hover:text-navy"
              >
                <Icon size={18} aria-hidden />
                <AnimatePresence>
                  {hovered === item.id && (
                    <motion.span
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -4 }}
                      className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-lg border border-lilac/40 bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-navy shadow-sm backdrop-blur-sm"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.a>
            );
          })}
          <span className="my-1 h-px w-6 bg-lilac/60" aria-hidden />
          <motion.button
            type="button"
            onClick={scrollToContact}
            aria-label="Go to contact section"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.94 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-white shadow-sm"
          >
            <HiOutlineChatAlt2 size={18} aria-hidden />
          </motion.button>
        </div>
      </motion.aside>

      <MobileFab />
    </>
  );
}
