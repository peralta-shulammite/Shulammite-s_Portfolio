import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import styles from "./projects.module.css";

export default function ProjectCard({ project, isCenter = false }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={520}
          className={styles.image}
          sizes={isCenter ? "380px" : "300px"}
        />
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

        <Link href={project.href || "#"} className={styles.viewBtn}>
          View Project
          <ArrowUpRight size={14} strokeWidth={2} aria-hidden />
        </Link>
      </div>
    </article>
  );
}
