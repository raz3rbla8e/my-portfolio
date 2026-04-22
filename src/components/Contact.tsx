import Reveal from './ScrollReveal'

const contactLinks = [
  {
    icon: '✉',
    label: 'razor2191@gmail.com',
    href: 'mailto:razor2191@gmail.com',
  },
  {
    icon: 'in',
    label: 'https://linkedin.com/in/shri-mahesh/',
    href: 'https://linkedin.com/in/shri-mahesh/',
  },
  {
    icon: '⌥',
    label: 'github.com/raz3rbla8e',
    href: 'https://github.com/raz3rbla8e',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-12 border-t border-line max-sm:px-6">
      <div className="flex items-center gap-4 text-[11px] tracking-[0.2em] uppercase text-accent mb-14">
        <span className="text-line text-[10px]">04</span>
        Contact
        <div className="flex-1 max-w-[60px] h-px bg-accent opacity-40" />
      </div>

      <div className="max-w-[600px]">
        <Reveal>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.1] mb-6">
            Let&apos;s build something
            <br />
            <em className="italic text-accent">together.</em>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-muted mb-12 max-w-[420px] leading-[1.9]">
            I&apos;m open to Fall 2026 internship opportunities across the US
            — especially SF, Seattle, and the East Coast. Feel free to reach
            out.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-col gap-3">
            {contactLinks.map(({ icon, label, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 text-copy no-underline px-6 py-4 border border-line rounded-[3px] bg-surface text-[13px] transition-all duration-200 hover:border-accent hover:text-accent hover:translate-x-1 group"
              >
                <span className="opacity-60 w-4 text-center">{icon}</span>
                <span className="flex-1">{label}</span>
                <span className="text-muted text-[12px] transition-all duration-200 group-hover:translate-x-[3px] group-hover:text-accent">
                  →
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
