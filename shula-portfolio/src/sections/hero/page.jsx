"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import styles from "./hero.module.css";

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.4 23.5h4.2V7.9H0.4v15.6zM8.1 7.9h4v2.1h.1c.6-1.1 2.1-2.3 4.4-2.3 4.7 0 5.6 3.1 5.6 7.2v8.6H18V15.9c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 4v7.7H8.1V7.9z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.26.79-.57 0-.28-.01-1.2-.02-2.18-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.78 2.71 1.27 3.37.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.72 0-1.27.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.19a10.9 10.9 0 0 1 5.8 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.59.24 2.77.12 3.06.74.81 1.19 1.84 1.19 3.11 0 4.45-2.69 5.42-5.26 5.7.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.57a11.53 11.53 0 0 0 7.85-10.9C23.5 5.66 18.35.5 12 .5z" />
    </svg>
  );
}

const socialItems = [
  { id: "linkedin", href: site.socials.linkedin.href, label: "LinkedIn", icon: <LinkedInIcon /> },
  { id: "github", href: site.socials.github.href, label: "GitHub", icon: <GithubIcon /> },
  {
    id: "email",
    href: site.socials.email.href,
    label: "Email",
    icon: <Mail size={20} strokeWidth={2} aria-hidden />,
  },
];

export default function Hero() {
  const { hero } = site;

  return (
    <section id="home" className={styles.heroSection}>
      <Container className="relative">
        <div className={styles.heroGrid}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={styles.copyBlock}
          >
            <span className={styles.greeting}>{hero.greeting}</span>
            <h1 className={styles.headline}>
              <span className={styles.headlineLine}>{hero.headlineLine1}</span>
              <span className={styles.headlineLine}>{hero.headlineLine2}</span>
            </h1>
            <span className={styles.roleBadge}>{hero.roleBadge}</span>
            <p className={styles.intro}>{hero.intro}</p>
            <div className={styles.ctaRow}>
              <Button href={hero.workHref} variant="secondary">
                {hero.workCta}
              </Button>
              <Button href={hero.hireHref}>{hero.hireCta}</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className={styles.portraitColumn}
          >
            <div className={styles.portraitWrapper}>
              <div className={styles.blob1} aria-hidden />
              <div className={styles.blob2} aria-hidden />
              <div className={styles.frameBack} aria-hidden />
              <div className={styles.portraitCard}>
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
                    width={800}
                    height={1000}
                    priority
                    className={styles.portraitImg}
                  />
                </div>
              </div>
              <div className={styles.heroSocials} aria-label="Social links">
                {socialItems.map((item) => {
                  const isExternal = item.href.startsWith("http");
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className={styles.socialIconBtn}
                      aria-label={item.label}
                      title={item.label}
                    >
                      {item.icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
