"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Network, Palette, Settings, Users } from "lucide-react";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { hoverLift, viewportOnce } from "@/lib/motion";

const iconMap = {
  code: Code2,
  settings: Settings,
  palette: Palette,
  network: Network,
  briefcase: Briefcase,
  users: Users,
};

export default function Skills() {
  const { skills } = site;

  return (
    <section id="skills" className="relative overflow-x-clip py-14 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading title={skills.title} className="mb-6 sm:mb-12 lg:mb-16" />

        <div className="grid w-full min-w-0 grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {skills.items.map((item, index) => {
            const Icon = iconMap[item.icon] || Code2;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={hoverLift}
                className="glass-card min-w-0 w-full rounded-2xl p-3.5 sm:p-5 lg:p-6"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-lilac-soft to-lilac sm:mb-4 sm:h-11 sm:w-11">
                  <Icon
                    size={18}
                    className="text-navy sm:hidden"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <Icon
                    size={22}
                    className="hidden text-navy sm:block"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
                <h3 className="font-[family-name:var(--font-sora)] text-xs font-bold leading-snug text-text-primary sm:text-base">
                  {item.title}
                </h3>
                <ul className="mt-2 space-y-1 sm:mt-3 sm:space-y-1.5">
                  {item.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-[0.7rem] leading-snug text-text-muted before:mr-1.5 before:text-lilac before:content-['•'] sm:text-sm sm:before:mr-2"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
