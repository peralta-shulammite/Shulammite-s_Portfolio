"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import styles from "./projects.module.css";

export default function ProjectCard({ project, isCenter = false }) {
  return (
    <motion.article
      className={styles.card}
      whileHover={isCenter ? { y: -8, boxShadow: "var(--shadow-hover)" } : undefined}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <div className={styles.imageWrap}>
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={520}
          className={styles.image}
          sizes={isCenter ? "380px" : "300px"}
        />
        <div className={styles.imageOverlay} aria-hidden />
        {project.rating && (
          <span className={styles.ratingBadge}>
            <span className={styles.ratingStar} aria-hidden>
              ★
            </span>
            {project.rating}
          </span>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.metaRow}>
          <span className={styles.metaLocation}>
            <MapPin size={12} strokeWidth={2} aria-hidden />
            {project.location}
          </span>
          <span>{project.duration}</span>
        </div>

        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardSubtitle}>{project.subtitle}</p>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link href={project.href || "#"} className={styles.viewBtn}>
            View Project
            <HiOutlineArrowUpRight size={14} aria-hidden />
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
}
