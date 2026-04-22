export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-12 relative overflow-hidden max-sm:px-6"
    >
      {/* Vertical grid line */}
      <div className="absolute top-0 bottom-0 right-[38%] w-px bg-gradient-to-b from-transparent via-line to-transparent max-sm:hidden" />

      {/* Year marker */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 rotate-90 text-[11px] tracking-[0.25em] text-muted uppercase max-sm:hidden">
        © 2026
      </div>

      <div
        className="animate-fade-up flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-accent mb-7"
        style={{ animationDelay: '0.2s' }}
      >
        <span className="block w-7 h-px bg-accent" />
        Available for Fall 2026
      </div>

      <h1
        className="animate-fade-up font-serif text-[clamp(4rem,10vw,9rem)] font-normal leading-[0.9] tracking-[-0.02em] mb-[0.15em]"
        style={{ animationDelay: '0.35s' }}
      >
        Shri Vaibhav
        <br />
        <em className="italic text-accent">Mahesh Kumar.</em>
      </h1>

      <p
        className="animate-fade-up font-serif text-[clamp(1.1rem,2.5vw,1.8rem)] font-normal text-muted mb-12"
        style={{ animationDelay: '0.5s' }}
      >
        Software Engineer & AI/ML enthusiast
      </p>

      <p
        className="animate-fade-up max-w-[480px] text-muted text-[13px] leading-[1.9]"
        style={{ animationDelay: '0.65s' }}
      >
        CS student at Carleton University building real-world systems — from
        test automation pipelines at Ford to AI-powered tooling and automation to make life easier
      </p>

      <div
        className="animate-fade-up mt-10 flex gap-4 flex-wrap"
        style={{ animationDelay: '0.8s' }}
      >
        <a
          href="#contact"
          className="px-7 py-3 bg-accent text-canvas text-[11px] tracking-[0.14em] uppercase rounded-[2px] transition-colors duration-200 hover:bg-[#e0b866]"
        >
          Get in touch
        </a>
        <a
          href="#journey"
          className="px-7 py-3 bg-transparent text-copy text-[11px] tracking-[0.14em] uppercase rounded-[2px] border border-line transition-all duration-200 hover:border-accent hover:text-accent"
        >
          See my journey
        </a>
      </div>

      <div
        className="animate-fade-up absolute bottom-10 left-12 flex items-center gap-[0.6rem] text-[11px] tracking-[0.15em] uppercase text-muted max-sm:left-6"
        style={{ animationDelay: '1.1s' }}
      >
        <div className="w-px h-10 bg-gradient-to-b from-muted to-transparent scroll-pulse" />
        Scroll
      </div>
    </section>
  )
}
