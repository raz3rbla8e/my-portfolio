import Reveal from './ScrollReveal'

const stats = [
  { number: '4th', label: 'Year CS @ Carleton' },
  { number: '2×', label: 'Co-op intern' },
  { number: 'Ford', label: 'Current Internship' },
  { number: 'AI/ML', label: 'Concentration' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-12 border-t border-line max-sm:px-6">
      <div className="flex items-center gap-4 text-[11px] tracking-[0.2em] uppercase text-accent mb-14">
        <span className="text-line text-[10px]">01</span>
        About
        <div className="flex-1 max-w-[60px] h-px bg-accent opacity-40" />
      </div>

      <div className="grid grid-cols-2 gap-20 items-start max-sm:grid-cols-1 max-sm:gap-12">
        <Reveal>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.15] mb-8">
            Building things that
            <br />
            <em className="italic text-teal">actually work.</em>
          </h2>
          <div className="text-muted leading-[2] space-y-5">
            <p>
              I&apos;m a fourth-year Computer Science student at Carleton
              University, specialising in AI &amp; Machine Learning. I care
              about writing clean systems, solving real problems, and making
              technology feel effortless.
            </p>
            <p>
              When I&apos;m not in class or on co-op, I&apos;m building
              tools — a real-time League of Legends stats overlay, household
              expense trackers, browser automation scripts. Basically anything
              that makes life a bit more frictionless.
            </p>
            <p>
              I&apos;m targeting Fall 2026 software engineering internships at
              top US tech companies. Open to roles across infrastructure, ML,
              and full-stack engineering — preferably in SF, Seattle, or the
              East Coast.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid grid-cols-2 gap-6 mt-2">
            {stats.map(({ number, label }) => (
              <div key={label} className="border border-line rounded p-6 bg-surface">
                <div className="font-serif text-[2.8rem] font-semibold text-accent leading-none mb-1">
                  {number}
                </div>
                <div className="text-[11px] tracking-[0.1em] text-muted uppercase">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
