"use client";

import { motion } from "framer-motion";
import {
  HiOutlineBadgeCheck,
  HiOutlineAcademicCap,
  HiOutlineSparkles,
  HiOutlinePresentationChartLine,
} from "react-icons/hi";
import { SiPython } from "react-icons/si";
import { TbCertificate } from "react-icons/tb";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { EASE_OUT, hoverLift, viewportOnce } from "@/lib/motion";
import styles from "./certifications.module.css";

const certIconMap = {
  ux: HiOutlinePresentationChartLine,
  analytics: TbCertificate,
};

const trainingIconMap = {
  ai: HiOutlineSparkles,
  python: SiPython,
};

function CertCard({ item, index, iconMap, badgeLabel }) {
  const Icon = iconMap[item.icon] || HiOutlineBadgeCheck;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE_OUT }}
      whileHover={hoverLift}
      className={styles.certCard}
    >
      <span className={styles.cardBadge}>
        <HiOutlineBadgeCheck size={11} aria-hidden />
        {badgeLabel}
      </span>
      <div className={styles.cardIconWrap}>
        <Icon size={22} aria-hidden />
      </div>
      <h3 className={styles.cardTitle}>{item.title}</h3>
      <p className={styles.cardIssuer}>{item.issuer}</p>
      <p className={styles.cardDescription}>{item.description}</p>
    </motion.article>
  );
}

function CategoryHeader({ title, icon: Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.45, ease: EASE_OUT }}
      className={styles.categoryHeader}
    >
      <span className={styles.categoryIcon}>
        <Icon size={18} aria-hidden />
      </span>
      <h3 className={styles.categoryTitle}>{title}</h3>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.65, delay: 0.1, ease: EASE_OUT }}
        className={styles.categoryLine}
        style={{ transformOrigin: "left center" }}
        aria-hidden
      />
    </motion.div>
  );
}

function CategoryDivider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5 }}
      className={styles.categoryDivider}
      aria-hidden
    >
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8, ease: EASE_OUT }}
        className={styles.dividerLine}
        style={{ transformOrigin: "right center" }}
      />
      <motion.span
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.45, delay: 0.15, ease: EASE_OUT }}
        className={styles.dividerShape}
      >
        <HiOutlineAcademicCap size={14} />
      </motion.span>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8, ease: EASE_OUT }}
        className={styles.dividerLine}
        style={{ transformOrigin: "left center" }}
      />
    </motion.div>
  );
}

export default function Certifications() {
  const { certifications } = site;

  return (
    <section id="certifications" className={styles.section}>
      <motion.div
        className={styles.bgOrbOne}
        animate={{ x: [0, 14, 0], y: [0, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className={styles.bgOrbTwo}
        animate={{ x: [0, -12, 0], y: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <div className={styles.bgLine} aria-hidden />
      <motion.div
        className={styles.shapeRing}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />

      <Container>
        <SectionHeading title={certifications.title} />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className={styles.intro}
        >
          {certifications.intro}
        </motion.p>

        <div className={styles.categoryBlock}>
          <CategoryHeader
            title={certifications.certificationsTitle}
            icon={TbCertificate}
          />
          <div className={styles.cardGrid}>
            {certifications.certifications.map((item, index) => (
              <CertCard
                key={item.id}
                item={item}
                index={index}
                iconMap={certIconMap}
                badgeLabel="Certified"
              />
            ))}
          </div>
        </div>

        <CategoryDivider />

        <div className={styles.categoryBlock}>
          <CategoryHeader
            title={certifications.trainingsTitle}
            icon={HiOutlineAcademicCap}
          />
          <div className={styles.cardGrid}>
            {certifications.trainings.map((item, index) => (
              <CertCard
                key={item.id}
                item={item}
                index={index}
                iconMap={trainingIconMap}
                badgeLabel="Attendee"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
