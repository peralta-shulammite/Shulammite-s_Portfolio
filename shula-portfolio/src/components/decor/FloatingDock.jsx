"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail, HiOutlineChatAlt2 } from "react-icons/hi";
import { site } from "@/data/site";
import { EASE_OUT } from "@/lib/motion";

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

      <motion.button
        type="button"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.45, ease: EASE_OUT }}
        onClick={scrollToContact}
        aria-label="Contact me"
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-lilac/50 bg-white/85 text-navy shadow-[var(--shadow-elevated)] backdrop-blur-xl lg:hidden"
      >
        <HiOutlineMail size={20} aria-hidden />
      </motion.button>
    </>
  );
}
