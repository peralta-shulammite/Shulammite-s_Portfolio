"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import styles from "./projects.module.css";

function getIndex(i, length) {
  return ((i % length) + length) % length;
}

export default function Portfolio() {
  const { portfolio } = site;
  const { projects } = portfolio;
  const [active, setActive] = useState(0);
  const touchStartX = useRef(null);

  const goPrev = useCallback(() => {
    setActive((i) => getIndex(i - 1, projects.length));
  }, [projects.length]);

  const goNext = useCallback(() => {
    setActive((i) => getIndex(i + 1, projects.length));
  }, [projects.length]);

  const prevIndex = getIndex(active - 1, projects.length);
  const nextIndex = getIndex(active + 1, projects.length);

  const slots = [
    { project: projects[prevIndex], position: "side", key: `prev-${prevIndex}` },
    { project: projects[active], position: "center", key: `center-${active}` },
    { project: projects[nextIndex], position: "side", key: `next-${nextIndex}` },
  ];

  return (
    <section id="work" className={styles.section}>
      <Container>
        <SectionHeading title={portfolio.title} />

        <div
          className={styles.carouselWrap}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;
            const deltaX = event.changedTouches[0]?.clientX - touchStartX.current;
            touchStartX.current = null;
            if (Math.abs(deltaX) < 48) return;
            if (deltaX < 0) goNext();
            else goPrev();
          }}
        >
          <motion.button
            type="button"
            className={`${styles.navBtn} ${styles.navBtnLeft}`}
            onClick={goPrev}
            aria-label="Previous project"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
          >
            <ChevronLeft size={22} />
          </motion.button>

          <div className={styles.track}>
            <AnimatePresence mode="popLayout" initial={false}>
              {slots.map(({ project, position, key }) => (
                <motion.div
                  key={key}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`${styles.cardSlot} ${
                    position === "center"
                      ? styles.cardSlotCenter
                      : styles.cardSlotSide
                  }`}
                >
                  <ProjectCard
                    project={project}
                    isCenter={position === "center"}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.button
            type="button"
            className={`${styles.navBtn} ${styles.navBtnRight}`}
            onClick={goNext}
            aria-label="Next project"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
          >
            <ChevronRight size={22} />
          </motion.button>
        </div>

        <div className={styles.dots}>
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Go to project ${p.title}`}
              aria-current={i === active ? "true" : undefined}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
