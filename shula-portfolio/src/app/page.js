import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer";
import Hero from "@/sections/hero";
import Services from "@/sections/services";
import About from "@/sections/about";
import Portfolio from "@/sections/projects";
import Skills from "@/sections/skills";
import CtaBanner from "@/sections/cta";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Skills />
      <CtaBanner />
      <Footer />
    </main>
  );
}
