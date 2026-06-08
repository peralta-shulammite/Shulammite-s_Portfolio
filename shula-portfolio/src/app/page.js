import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer";
import AmbientBackground from "@/components/decor/AmbientBackground";
import CursorGlow from "@/components/decor/CursorGlow";
import ScrollProgress from "@/components/decor/ScrollProgress";
import FloatingDock from "@/components/decor/FloatingDock";
import SectionDivider from "@/components/decor/SectionDivider";
import Hero from "@/sections/hero";
import About from "@/sections/about";
import Education from "@/sections/education";
import Certifications from "@/sections/certifications";
import Skills from "@/sections/skills";
import Services from "@/sections/services";
import Portfolio from "@/sections/projects";
import Contact from "@/sections/contact";

export default function Home() {
  return (
    <main className="relative">
      <AmbientBackground />
      <CursorGlow />
      <ScrollProgress />
      <div className="relative z-[2]">
        <Navbar />
        <FloatingDock />
        <Hero />
        <SectionDivider variant="wave" />
        <About />
        <SectionDivider variant="soft" flip />
        <Education />
        <SectionDivider variant="glow" />
        <Certifications />
        <SectionDivider variant="soft" flip />
        <Skills />
        <SectionDivider variant="soft" flip />
        <Services />
        <SectionDivider variant="wave" />
        <Portfolio />
        <SectionDivider variant="glow" flip />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
