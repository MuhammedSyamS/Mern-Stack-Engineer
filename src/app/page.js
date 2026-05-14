import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Tools from "@/components/Tools/Tools";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";
import PageTransition from "@/components/PageTransition/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <Projects />
      <Tools />
      <Experience />
      <Contact />
    </PageTransition>
  );
}
