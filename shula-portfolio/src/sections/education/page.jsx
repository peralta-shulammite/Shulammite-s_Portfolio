"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { hoverLift, viewportOnce } from "@/lib/motion";

function ExperienceTimelineItem({ item, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative flex gap-3 sm:gap-5"
    >
      <div className="flex flex-col items-center">
        <span
          className={`relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 bg-white shadow-sm ${
            item.current ? "border-navy bg-lilac-soft" : "border-lilac"
          }`}
        >
          <Briefcase size={18} className="text-navy" strokeWidth={1.5} aria-hidden />
        </span>
        {!isLast && (
          <span
            className="mt-2 w-px flex-1 min-h-[2rem] bg-lilac"
            aria-hidden
          />
        )}
      </div>

      <motion.div
        whileHover={hoverLift}
        className={`glass-card flex-1 rounded-2xl p-4 sm:p-5 lg:p-6 transition-[box-shadow,border-color] hover:border-lilac ${isLast ? "" : "mb-4 sm:mb-5"}`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-text-light">
            {item.period}
          </span>
          {item.badge && (
            <span className="rounded-full bg-lilac/60 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy">
              {item.badge}
            </span>
          )}
        </div>
        <h4 className="mt-2 font-[family-name:var(--font-sora)] text-base font-bold text-text-primary lg:text-lg">
          {item.title}
        </h4>
        <p className="mt-1 text-sm font-medium text-navy-muted">{item.company}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Education() {
  const { education } = site;
  const experience = [...education.experience].sort(
    (a, b) => b.startYear - a.startYear
  );

  return (
    <section id="education" className="relative bg-lilac-soft/30 py-14 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading title={education.title} />

        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.45 }}
          >
            <h3 className="mb-6 flex items-center gap-2 font-[family-name:var(--font-sora)] text-sm font-bold uppercase tracking-widest text-navy">
              <GraduationCap size={18} aria-hidden />
              Education
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5 }}
              whileHover={hoverLift}
              className="glass-card rounded-2xl p-5 sm:p-6 lg:p-8 transition-[box-shadow,border-color] hover:border-lilac"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-lilac-soft to-lilac">
                <GraduationCap size={22} className="text-navy" strokeWidth={1.5} aria-hidden />
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest text-text-light">
                Academic Honors
              </p>
              <h4 className="mt-2 font-[family-name:var(--font-sora)] text-2xl font-bold leading-tight text-navy sm:text-3xl">
                {education.honor}
              </h4>

              <div className="mt-5 border-t border-lilac/45 pt-5">
                <h5 className="font-[family-name:var(--font-sora)] text-lg font-bold leading-snug text-text-primary sm:text-xl">
                  {education.degree}
                </h5>
                <p className="mt-1.5 text-sm font-medium text-navy-muted">
                  {education.classOf}
                </p>
              </div>

              <div className="mt-6 border-t border-lilac/45 pt-6">
                <h5 className="mb-4 flex items-center gap-2 font-[family-name:var(--font-sora)] text-xs font-bold uppercase tracking-widest text-navy">
                  <Award size={16} aria-hidden />
                  {education.awardsTitle}
                </h5>
                <ul className="space-y-3">
                  {education.awards.map((award, index) => (
                    <motion.li
                      key={award}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.15 + index * 0.06 }}
                      className="flex items-start gap-3 text-sm leading-relaxed text-text-muted"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-lilac"
                        aria-hidden
                      />
                      {award}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <h3 className="mb-6 flex items-center gap-2 font-[family-name:var(--font-sora)] text-sm font-bold uppercase tracking-widest text-navy">
              <Briefcase size={18} aria-hidden />
              Experience
            </h3>

            <div className="relative">
              {experience.map((item, index) => (
                <ExperienceTimelineItem
                  key={item.id}
                  item={item}
                  index={index}
                  isLast={index === experience.length - 1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
