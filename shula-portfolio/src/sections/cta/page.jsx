"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function CtaBanner() {
  const { cta } = site;

  return (
    <section className="relative py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-dirty-white via-lilac-soft to-lilac/40 px-8 py-16 text-center shadow-[var(--shadow-elevated)] lg:px-16 lg:py-20"
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lilac/40 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/60 blur-3xl"
            aria-hidden
          />

          <h2 className="relative font-[family-name:var(--font-sora)] text-2xl font-bold leading-snug text-navy sm:text-3xl lg:text-4xl">
            {cta.title}
          </h2>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={cta.hireHref}>{cta.hireCta}</Button>
            <Button href={cta.workHref} variant="secondary">
              {cta.workCta}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
