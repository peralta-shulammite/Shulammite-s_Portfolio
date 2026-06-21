"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { HiOutlineLightBulb } from "react-icons/hi";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import styles from "./about.module.css";

export default function About() {
  const { about } = site;
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [32, -32]);
  const contentY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section id="about" ref={sectionRef} className={styles.aboutSection}>
      <div className={styles.bgAccentOne} aria-hidden />
      <div className={styles.bgAccentTwo} aria-hidden />

      <Container>
        <div className={styles.aboutGrid}>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.portraitWrap}
            style={reduceMotion ? undefined : { y: portraitY }}
          >
            <div className={styles.frameBack} aria-hidden />
            <div className={styles.portraitCard}>
              <Image
                src={about.image}
                alt={about.imageAlt}
                width={912}
                height={1093}
                quality={90}
                sizes="(max-width: 1024px) 420px, 480px"
                className={styles.portraitImg}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={styles.contentCol}
            style={reduceMotion ? undefined : { y: contentY }}
          >
            <div className={styles.titleRow}>
              <span className={styles.titleLine} aria-hidden />
              <h2 className={styles.aboutTitle}>
                <span className="inline-flex items-center gap-2">
                  <HiOutlineLightBulb size={20} className="text-lilac" aria-hidden />
                  {about.title}
                </span>
              </h2>
            </div>

            <p className={styles.aboutText}>{about.paragraph}</p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              whileHover={{ y: -4, boxShadow: "var(--shadow-hover)" }}
              className={styles.quoteCard}
            >
              <span className={styles.quoteLabel}>{about.philosophyLabel}</span>
              <blockquote className={styles.quoteText}>
                &ldquo;{about.philosophy}&rdquo;
              </blockquote>
              <div className={styles.quoteFooter}>
                <span className={styles.quoteDivider} aria-hidden />
                <p className={styles.signature}>{about.signature}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
