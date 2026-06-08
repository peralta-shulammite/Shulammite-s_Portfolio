"use client";

import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { EASE_OUT, staggerContainer } from "@/lib/motion";

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

export default function Contact() {
  const { contact } = site;

  return (
    <section id="contact" className="relative py-14 sm:py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-dirty-white via-lilac-soft to-lilac/40 px-5 py-10 text-center shadow-[var(--shadow-elevated)] sm:rounded-3xl sm:px-8 sm:py-14 lg:px-16 lg:py-16"
        >
          <motion.div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lilac/40 blur-3xl"
            aria-hidden
            animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/60 blur-3xl"
            aria-hidden
            animate={{ x: [0, -10, 0], y: [0, 6, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            variants={staggerContainer(0.1, 0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="relative"
          >
            <motion.h2
              variants={item}
              className="font-[family-name:var(--font-sora)] text-2xl font-bold text-navy sm:text-3xl lg:text-4xl"
            >
              {contact.title}
            </motion.h2>
            <motion.p
              variants={item}
              className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base"
            >
              {contact.subtitle}
            </motion.p>

            <motion.a
              variants={item}
              href={`mailto:${contact.email}`}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="relative mt-6 inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 break-all text-sm font-medium text-navy transition-colors hover:bg-white/50 hover:text-navy-muted sm:break-normal sm:text-base"
            >
              <HiOutlineMail size={18} aria-hidden />
              {contact.email}
            </motion.a>

            <motion.div
              variants={item}
              className="relative mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <Button href={contact.hireHref}>{contact.hireCta}</Button>
              <Button href={contact.workHref} variant="secondary">
                {contact.workCta}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
