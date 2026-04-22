import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <footer className="px-12 py-8 border-t border-line flex justify-between items-center text-muted text-[11px] tracking-[0.08em] max-sm:flex-col max-sm:gap-2 max-sm:text-center max-sm:px-6">
        <div>Built with intention. 2026.</div>
        <span className="font-serif italic text-accent text-[13px]">Shri.</span>
        <div>Ottawa → Anywhere.</div>
      </footer>
    </>
  );
}
