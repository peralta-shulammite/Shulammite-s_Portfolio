"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Lock, Images } from "lucide-react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import styles from "./projects.module.css";

export default function ProjectCard({
  project,
  isCenter = false,
  onOpenGallery,
}) {
  const isGallery = project.linkType === "gallery";

  const handleCardClick = () => {
    if (isGallery && isCenter && onOpenGallery) {
      onOpenGallery(project);
    }
  };

  const handleGalleryClick = (e) => {
    e.stopPropagation();
    if (onOpenGallery) onOpenGallery(project);
  };

  return (
    <motion.article
      className={`${styles.card} ${isGallery && isCenter ? styles.cardGallery : ""}`}
      whileHover={isCenter ? { y: -8, boxShadow: "var(--shadow-hover)" } : undefined}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      onClick={isGallery && isCenter ? handleCardClick : undefined}
      style={isGallery && isCenter ? { cursor: "pointer" } : undefined}
    >
      <div className={styles.logoWrap}>
        <div className={styles.logoInner}>
          <Image
            src={project.image}
            alt={`${project.title} logo`}
            fill
            className={styles.logo}
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 360px, 380px"
            priority={isCenter}
          />
        </div>
        <div className={styles.logoOverlay} aria-hidden />
        {isGallery && isCenter && (
          <span className={styles.confidentialBadge}>
            <Lock size={11} aria-hidden />
            Confidential
          </span>
        )}
        {isGallery && isCenter && (
          <span className={styles.galleryHoverHint} aria-hidden>
            <Images size={14} />
            Explore Gallery
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

        {isCenter && project.description && (
          <p className={styles.cardDescription}>{project.description}</p>
        )}

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        {isCenter && (
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            {isGallery ? (
              <button
                type="button"
                className={`${styles.viewBtn} ${styles.viewBtnGallery}`}
                onClick={handleGalleryClick}
              >
                <Images size={14} aria-hidden />
                Explore Gallery
              </button>
            ) : (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewBtn}
                onClick={(e) => e.stopPropagation()}
              >
                View Project
                <HiOutlineArrowUpRight size={14} aria-hidden />
              </a>
            )}
          </motion.div>
        )}
      </div>
    </motion.article>
  );
}
