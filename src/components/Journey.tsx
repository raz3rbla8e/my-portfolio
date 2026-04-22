import Reveal from './ScrollReveal'

const timeline = [
  {
    date: 'September 2025 – August 2026',
    company: 'Ford Motor Company',
    role: 'Test Automation Intern — FNV Stability Team',
    desc: 'Built Jenkins-integrated remote automation pipelines for ECU stability testing. Developed token generation scripts and integrated AI tooling to streamline repetitive QA workflows. Shipped real improvements to how the team tested vehicle network firmware.',
    dotColor: 'border-accent',
  },
  {
    date: 'May 2025 – August 2025',
    company: 'Wizr.ai',
    role: 'Software Engineering Intern',
    desc: "Worked on AI-powered B2B SaaS tooling, contributing to backend services and helping shape the product's ML-assisted features during an early growth phase.",
    dotColor: 'border-teal',
  },  
  {
    date: 'September 2024 – December 2024',
    company: 'Carleton University',
    role: 'Teaching Assistant',
    desc: "Supported undergraduate CS courses — running labs, holding office hours, and helping students build intuition for algorithms and software design. One of the more rewarding things I've done.",
    dotColor: 'border-teal',
  },
  {
    date: 'September 2022 – April 2027',
    company: 'Carleton University',
    role: 'B.CS — AI/ML Concentration',
    desc: 'Coursework spanning machine learning, algorithms, embedded systems, and software engineering. Building a strong foundation while shipping real-world projects on the side.',
    dotColor: 'border-line',
  },
]

export default function Journey() {
  return (
    <section id="journey" className="py-28 px-12 border-t border-line max-sm:px-6">
      <div className="flex items-center gap-4 text-[11px] tracking-[0.2em] uppercase text-accent mb-14">
        <span className="text-line text-[10px]">03</span>
        Journey
        <div className="flex-1 max-w-[60px] h-px bg-accent opacity-40" />
      </div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-teal to-line" />

        {timeline.map(({ date, company, role, desc, dotColor }, i) => (
          <Reveal key={role} delay={i * 80}>
            <div className="pl-10 pb-14 relative group">
              <div
                className={`absolute left-[-5px] top-[0.3rem] w-[11px] h-[11px] rounded-full bg-canvas border-2 ${dotColor} transition-colors duration-200 group-hover:bg-accent`}
              />
              <div className="flex items-center gap-5 mb-[0.6rem]">
                <span className="text-[11px] tracking-[0.1em] text-accent uppercase">
                  {date}
                </span>
                <span className="text-[11px] tracking-[0.08em] text-muted uppercase">
                  {company}
                </span>
              </div>
              <div className="font-serif text-[1.35rem] font-normal mb-[0.6rem]">
                {role}
              </div>
              <p className="text-muted text-[13px] max-w-[550px] leading-[1.9]">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
