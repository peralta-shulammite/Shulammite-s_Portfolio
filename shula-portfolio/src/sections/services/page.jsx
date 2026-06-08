"use client";

import { Code2, Settings, Palette } from "lucide-react";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const iconMap = {
  code: Code2,
  settings: Settings,
  palette: Palette,
};

export default function Services() {
  const { services } = site;

  return (
    <section id="services" className="relative bg-dirty-white py-14 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading title={services.title} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.items.map((item, index) => {
            const Icon = iconMap[item.icon] || Code2;

            return (
              <GlassCard
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col text-center md:text-left"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-lilac-soft to-lilac transition-transform duration-300 sm:h-16 sm:w-16 [@media(hover:hover)]:group-hover:scale-110 md:mx-0">
                  <Icon
                    size={32}
                    strokeWidth={1.5}
                    className="text-navy"
                    aria-hidden
                  />
                </div>
                <h3 className="font-[family-name:var(--font-sora)] text-lg font-bold uppercase tracking-wide text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
