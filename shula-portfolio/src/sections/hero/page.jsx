"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import FloatingShapes from "@/components/decor/FloatingShapes";
import FloatingBadges from "@/components/decor/FloatingBadges";
import ScrollIndicator from "@/components/decor/ScrollIndicator";
import { EASE_OUT, staggerContainer } from "@/lib/motion";
import styles from "./hero.module.css";

const textItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export default function Hero() {
  const { hero } = site;
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className={styles.heroSection}>
      <FloatingShapes />
      <motion.div
        className={styles.heroGradientOrb}
        aria-hidden
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.08, 1],
              }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative">
        <div className={styles.heroGrid}>
          <motion.div
            variants={staggerContainer(0.1, 0.15)}
            initial="hidden"
            animate="visible"
            className={styles.copyBlock}
          >
            <motion.span variants={textItem} className={styles.greeting}>
              {hero.greeting}
            </motion.span>
            <motion.h1 variants={textItem} className={styles.headline}>
              <span className={styles.headlineLine}>{hero.headlineLine1}</span>
              <span className={styles.headlineLine}>{hero.headlineLine2}</span>
            </motion.h1>
            <motion.span variants={textItem} className={styles.roleBadge}>
              {hero.roleBadge}
            </motion.span>
            <motion.p variants={textItem} className={styles.intro}>
              {hero.intro}
            </motion.p>
            <motion.div variants={textItem} className={styles.ctaRow}>
              <Button href={hero.workHref} variant="secondary">
                {hero.workCta}
              </Button>
              <Button href={hero.hireHref}>{hero.hireCta}</Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT }}
            className={styles.portraitColumn}
          >
            <div className={styles.portraitWrapper}>
              <FloatingBadges
                badges={hero.floatingBadges}
                techTags={hero.techTags}
              />
              <motion.div
                className={styles.blob1}
                aria-hidden
                animate={
                  reduceMotion
                    ? undefined
                    : { x: [0, 12, 0], y: [0, -10, 0] }
                }
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className={styles.blob2}
                aria-hidden
                animate={
                  reduceMotion
                    ? undefined
                    : { x: [0, -10, 0], y: [0, 8, 0] }
                }
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className={styles.frameBack} aria-hidden />
              <motion.div
                className={styles.portraitCard}
                animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div
                  className={`${styles.floatingShape} ${styles.shapeTop} animate-float`}
                  aria-hidden
                />
                <div
                  className={`${styles.floatingShape} ${styles.shapeBottom} animate-float-slow`}
                  aria-hidden
                />
                <div className={styles.portraitInner}>
                  <Image
                    src={hero.image}
                    alt={hero.imageAlt}
                    width={912}
                    height={1079}
                    priority
                    quality={90}
                    sizes="(max-width: 640px) 84vw, (max-width: 1024px) 380px, 360px"
                    className={styles.portraitImg}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      <ScrollIndicator href="#about" />
    </section>
  );
}
