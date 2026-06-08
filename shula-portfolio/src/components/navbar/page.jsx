"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import useActiveSection from "@/hooks/useActiveSection";
import { EASE_OUT } from "@/lib/motion";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sectionIds = useMemo(
    () => site.nav.map((item) => item.href.replace("#", "")),
    []
  );
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = useCallback((event, href) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  }, []);

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
          <Link href="#home" className={styles.logo} onClick={(e) => handleNavClick(e, "#home")}>
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

          <motion.button
            type="button"
            className={styles.menuToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            whileTap={{ scale: 0.94 }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
              className={styles.mobilePanel}
            >
              {site.nav.map((item, index) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className={`${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ""}`}
                      onClick={(e) => handleNavClick(e, item.href)}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}
