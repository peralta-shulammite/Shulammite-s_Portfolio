"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import styles from "./about.module.css";

export default function About() {
  const { about } = site;

  return (
    <section id="about" className={styles.aboutSection}>
      <Container>
        <div className={styles.aboutGrid}>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.portraitWrap}
          >
            <div className={styles.frameBack} aria-hidden />
            <div className={styles.portraitCard}>
              <Image
                src={about.image}
                alt={about.imageAlt}
                width={600}
                height={600}
                className={styles.portraitImg}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className={styles.aboutTitle}>{about.title}</h2>
            {about.paragraphs.map((para, i) => (
              <p key={i} className={styles.aboutText}>
                {para}
              </p>
            ))}
            <ul className={styles.highlights}>
              {about.highlights.map((item) => (
                <li key={item} className={styles.highlightItem}>
                  <span className={styles.checkIcon} aria-hidden>
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
