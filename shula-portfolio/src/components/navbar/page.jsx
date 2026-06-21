"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import useActiveSection from "@/hooks/useActiveSection";
import { EASE_OUT } from "@/lib/motion";
import styles from "./navbar.module.css";

const overlaySpring = { type: "spring", stiffness: 380, damping: 34, mass: 0.72 };

const overlayItem = {
  hidden: { opacity: 0, y: 18 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.08 + index * 0.06, ease: EASE_OUT },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const sectionIds = useMemo(
    () => site.nav.map((item) => item.href.replace("#", "")),
    []
  );
  const activeSection = useActiveSection(sectionIds);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  const handleNavClick = useCallback(
    (event, href) => {
      if (!href.startsWith("#")) return;
      event.preventDefault();
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      closeMenu();
    },
    [closeMenu]
  );

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: EASE_OUT }}
      className={`${styles.header} ${
        scrolled ? styles.headerScrolled : styles.headerDefault
      }`}
    >
      <Container>
        <nav className={styles.navInner} aria-label="Main">
          <Link
            href="#home"
            className={styles.logo}
            onClick={(e) => handleNavClick(e, "#home")}
          >
            <span className={styles.logoName}>{site.name}</span>
          </Link>

          <ul className={styles.navLinks}>
            {site.nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className={styles.menuWrapper}>
            <motion.button
              type="button"
              className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ""}`}
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-overlay"
              aria-haspopup="dialog"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              whileTap={{ scale: 0.94 }}
            >
              <Menu size={20} aria-hidden />
            </motion.button>
          </div>
        </nav>
      </Container>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                id="mobile-nav-overlay"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: EASE_OUT }}
                className={styles.mobileOverlay}
              >
                <motion.button
                  type="button"
                  className={styles.overlayClose}
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.35, delay: 0.05, ease: EASE_OUT }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={22} strokeWidth={1.75} aria-hidden />
                </motion.button>

                <motion.nav
                  aria-label="Mobile navigation links"
                  className={styles.overlayNav}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.4, ease: EASE_OUT }}
                >
                  <motion.ul
                    className={styles.overlayList}
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                    }}
                  >
                    {site.nav.map((item, index) => {
                      const id = item.href.replace("#", "");
                      const isActive = activeSection === id;

                      return (
                        <motion.li
                          key={item.href}
                          custom={index}
                          variants={overlayItem}
                          className={styles.overlayItem}
                        >
                          <Link
                            href={item.href}
                            className={`${styles.overlayLink} ${isActive ? styles.overlayLinkActive : ""}`}
                            onClick={(e) => handleNavClick(e, item.href)}
                            aria-current={isActive ? "page" : undefined}
                          >
                            <motion.span
                              className={styles.overlayLinkText}
                              whileHover={{ x: 6 }}
                              whileTap={{ scale: 0.97, opacity: 0.85 }}
                              transition={overlaySpring}
                            >
                              {item.label}
                            </motion.span>
                            {isActive && (
                              <motion.span
                                layoutId="mobileNavActiveIndicator"
                                className={styles.overlayIndicator}
                                transition={overlaySpring}
                                aria-hidden
                              />
                            )}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </motion.header>
  );
}
