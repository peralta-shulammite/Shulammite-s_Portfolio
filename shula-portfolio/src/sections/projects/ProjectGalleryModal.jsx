"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Lock } from "lucide-react";
import styles from "./projects.module.css";

const EASE = [0.22, 1, 0.36, 1];
const SWIPE_THRESHOLD = 48;

export default function ProjectGalleryModal({ project, isOpen, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const touchStartX = useRef(null);
  const gallery = project?.gallery ?? [];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) setActiveIndex(0);
  }, [isOpen, project?.id]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i > 0 ? i - 1 : gallery.length - 1));
      if (e.key === "ArrowRight") setActiveIndex((i) => (i < gallery.length - 1 ? i + 1 : 0));
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose, gallery.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i > 0 ? i - 1 : gallery.length - 1));
  }, [gallery.length]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i < gallery.length - 1 ? i + 1 : 0));
  }, [gallery.length]);

  const handleTouchStart = useCallback((event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }, []);

  const handleTouchEnd = useCallback(
    (event) => {
      if (touchStartX.current === null) return;
      const deltaX = event.changedTouches[0]?.clientX - touchStartX.current;
      touchStartX.current = null;
      if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
      if (deltaX < 0) goNext();
      else goPrev();
    },
    [goNext, goPrev]
  );

  if (!mounted || !project) return null;

  const current = gallery[activeIndex];

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.galleryOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} project gallery`}
        >
          <motion.div
            className={styles.galleryBackdrop}
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            className={styles.galleryPanel}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <header className={styles.galleryHeader}>
              <div className={styles.galleryHeaderInfo}>
                <span className={styles.galleryConfidential}>
                  <Lock size={12} aria-hidden />
                  Confidential Project
                </span>
                <h2 className={styles.galleryTitle}>{project.title}</h2>
                <p className={styles.gallerySubtitle}>{project.subtitle}</p>
              </div>
              <motion.button
                type="button"
                className={styles.galleryClose}
                onClick={onClose}
                aria-label="Close gallery"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
              >
                <X size={20} aria-hidden />
              </motion.button>
            </header>

            <div
              className={styles.galleryViewer}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <motion.button
                type="button"
                className={`${styles.galleryNav} ${styles.galleryNavPrev}`}
                onClick={goPrev}
                aria-label="Previous screenshot"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
              >
                <ChevronLeft size={22} />
              </motion.button>

              <div className={styles.galleryMain}>
                <div className={styles.gallerySlideMeta}>
                  <span className={styles.galleryCounter}>
                    {activeIndex + 1} / {gallery.length}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    className={styles.galleryImageWrap}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    <Image
                      src={current.src}
                      alt={current.alt}
                      width={1400}
                      height={900}
                      className={styles.galleryImage}
                      sizes="(max-width: 768px) 100vw, 88vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                <div className={styles.galleryCaptionBlock}>
                  <h3 className={styles.galleryCaption}>{current.label}</h3>
                  {current.description && (
                    <p className={styles.gallerySlideDescription}>
                      {current.description}
                    </p>
                  )}
                </div>
              </div>

              <motion.button
                type="button"
                className={`${styles.galleryNav} ${styles.galleryNavNext}`}
                onClick={goNext}
                aria-label="Next screenshot"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
              >
                <ChevronRight size={22} />
              </motion.button>
            </div>

            <div className={styles.galleryThumbs}>
              {gallery.map((item, i) => (
                <motion.button
                  key={item.alt}
                  type="button"
                  className={`${styles.galleryThumb} ${i === activeIndex ? styles.galleryThumbActive : ""}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`View ${item.label}`}
                  aria-current={i === activeIndex ? "true" : undefined}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={160}
                    height={100}
                    className={styles.galleryThumbImage}
                    sizes="80px"
                  />
                  <span className={styles.galleryThumbLabel}>{item.label}</span>
                </motion.button>
              ))}
            </div>

            <p className={styles.galleryDescription}>{project.description}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
