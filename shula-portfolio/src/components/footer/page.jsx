"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowUp } from "react-icons/hi";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";

export default function Footer() {
  // Per your spec: hardcode 2026 to match “© 2026 Shulammite. All rights reserved.”
  const year = 2026;
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setShowTop(y > 160);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative border-t border-lilac/35 bg-navy py-8 text-white sm:py-9">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lilac/50 to-transparent"
        aria-hidden
      />

      <Container>
        <div className="flex min-h-[40px] items-center justify-center">
          <p className="px-2 text-center text-xs font-medium leading-relaxed text-lilac-soft/85 sm:text-sm">
            © {year} {site.shortName}. {site.footer.copyright}
          </p>
        </div>
      </Container>

      <motion.button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        initial={false}
        animate={{
          opacity: showTop ? 1 : 0,
          y: showTop ? 0 : 8,
        }}
        whileHover={showTop ? { scale: 1.08, y: -2 } : undefined}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-50 hidden h-11 w-11 items-center justify-center rounded-full border border-lilac/50 bg-lilac/95 text-navy shadow-[0_14px_26px_rgba(13,27,61,0.22)] backdrop-blur-sm hover:bg-lilac lg:flex ${
          showTop ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <HiOutlineArrowUp size={18} aria-hidden />
      </motion.button>
    </footer>
  );
}
