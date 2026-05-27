"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Settings, Palette, Paintbrush, ChevronLeft, ChevronRight } from "lucide-react";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap = {
  code: Code2,
  settings: Settings,
  palette: Palette,
  brush: Paintbrush,
};

export default function Skills() {
  const { skills } = site;
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="skills" className="relative py-20 lg:py-28">
      <Container>
        <SectionHeading title={skills.title} />

        <div className="relative">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll skills left"
            className="absolute -left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-lilac bg-white/80 text-navy shadow-md backdrop-blur-sm transition-all hover:border-navy/30 hover:bg-lilac-soft lg:flex"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll skills right"
            className="absolute -right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-lilac bg-white/80 text-navy shadow-md backdrop-blur-sm transition-all hover:border-navy/30 hover:bg-lilac-soft lg:flex"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {skills.items.map((item, index) => {
              const Icon = iconMap[item.icon] || Code2;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="glass-card min-w-[260px] flex-shrink-0 snap-start rounded-2xl p-6 transition-shadow hover:shadow-[var(--shadow-hover)] sm:min-w-[280px] lg:min-w-[calc(25%-15px)]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-lilac-soft to-lilac">
                    <Icon size={22} className="text-navy" strokeWidth={1.5} aria-hidden />
                  </div>
                  <h3 className="font-[family-name:var(--font-sora)] text-base font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {item.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-text-muted before:mr-2 before:text-lilac before:content-['•']"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
