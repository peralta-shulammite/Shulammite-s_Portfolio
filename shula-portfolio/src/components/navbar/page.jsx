"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import useActiveSection from "@/hooks/useActiveSection";
import { EASE_OUT } from "@/lib/motion";
import styles from "./navbar.module.css";

const dropdownSpring = { type: "spring", stiffness: 420, damping: 32, mass: 0.65 };

const dropdownItem = {
  hidden: { opacity: 0, y: 8 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.04 + index * 0.05, ease: EASE_OUT },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

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
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    const onPointerDown = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
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

          <div ref={menuRef} className={styles.menuWrapper}>
            <motion.button
              type="button"
              className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ""}`}
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-dropdown"
              aria-haspopup="true"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              whileTap={{ scale: 0.94 }}
            >
              {menuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
            </motion.button>

            <AnimatePresence>
              {menuOpen && (
                <motion.nav
                  id="mobile-nav-dropdown"
                  role="menu"
                  aria-label="Mobile navigation"
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: -6 }}
                  transition={dropdownSpring}
                  className={styles.dropdown}
                >
                  <motion.ul
                    className={styles.dropdownList}
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.05, delayChildren: 0.06 } },
                    }}
                  >
                    {site.nav.map((item, index) => {
                      const id = item.href.replace("#", "");
                      const isActive = activeSection === id;

                      return (
                        <motion.li key={item.href} custom={index} variants={dropdownItem}>
                          <Link
                            href={item.href}
                            role="menuitem"
                            className={`${styles.dropdownLink} ${isActive ? styles.dropdownLinkActive : ""}`}
                            onClick={(e) => handleNavClick(e, item.href)}
                            aria-current={isActive ? "page" : undefined}
                          >
                            {item.label}
                            {isActive && (
                              <motion.span
                                layoutId="dropdownActiveIndicator"
                                className={styles.dropdownIndicator}
                                transition={dropdownSpring}
                                aria-hidden
                              />
                            )}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </Container>
    </motion.header>
  );
}
