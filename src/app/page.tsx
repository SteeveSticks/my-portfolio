import About from "@/components/About";
import Hero from "@/components/Hero";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div className="font-sans border-b border-l border-r max-w-3xl mx-auto">
      <Hero />
      <About />
      <Project />
    </div>
  );
}
