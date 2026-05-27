"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function Contact() {
  const { contact } = site;

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card glow-ring mx-auto max-w-3xl rounded-2xl px-8 py-16 text-center lg:px-16"
        >
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-4 text-silver-muted">{contact.subtitle}</p>
          <div className="mt-8">
            <Button href={contact.ctaHref}>{contact.cta}</Button>
          </div>
        </motion.div>
      </Container>

      <footer className="mt-16 border-t border-white/5 py-8">
        <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-silver-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {site.socials.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-silver-muted transition-colors hover:text-orchid-bright"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Container>
      </footer>
    </section>
  );
}
