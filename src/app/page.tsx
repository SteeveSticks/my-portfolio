import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div className="font-sans border-b border-l border-r max-w-3xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Project />
    </div>
  );
}
