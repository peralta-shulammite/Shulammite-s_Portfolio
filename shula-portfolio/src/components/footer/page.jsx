"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
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
    <footer
      id="contact"
      className="relative border-t border-lilac/35 bg-navy py-8 text-white sm:py-9"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lilac/50 to-transparent"
        aria-hidden
      />

      <Container>
        <div className="flex min-h-[40px] items-center justify-center">
          <p className="text-xs font-medium text-lilac-soft/85 sm:text-sm">
            © {year} {site.shortName}. {site.footer.copyright}
          </p>
        </div>
      </Container>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-lilac/95 text-navy shadow-[0_14px_26px_rgba(13,27,61,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-lilac ${
          showTop ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-2"
        }`}
      >
        <ArrowUp size={18} aria-hidden />
      </button>
    </footer>
  );
}
