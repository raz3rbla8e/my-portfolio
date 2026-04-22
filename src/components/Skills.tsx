import Reveal from './ScrollReveal'

const skillGroups = [
  {
    title: 'Languages',
    tags: ['Python', 'Java', 'C', 'JavaScript', 'SQL', 'Bash'],
  },
  {
    title: 'AI / ML',
    tags: ['PyTorch', 'scikit-learn', 'NumPy', 'Pandas', 'LLM APIs', 'Prompt Engineering'],
  },
  {
    title: 'Tools & Infra',
    tags: ['Jenkins', 'Git', 'Docker', 'Linux', 'REST APIs', 'Selenium'],
  },
  {
    title: 'Specialties',
    tags: ['Test Automation', 'Real-time Systems', 'Embedded Systems', 'Browser Automation', 'AI Tooling'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-12 border-t border-line max-sm:px-6">
      <div className="flex items-center gap-4 text-[11px] tracking-[0.2em] uppercase text-accent mb-14">
        <span className="text-line text-[10px]">02</span>
        Skills
        <div className="flex-1 max-w-[60px] h-px bg-accent opacity-40" />
      </div>

      <Reveal>
        <div className="grid grid-cols-2 gap-px bg-line border border-line rounded overflow-hidden max-sm:grid-cols-1">
          {skillGroups.map(({ title, tags }) => (
            <div key={title} className="bg-canvas p-10">
              <div className="flex items-center gap-[0.6rem] text-[11px] tracking-[0.18em] uppercase text-teal mb-6">
                <span className="text-line text-[12px] font-normal not-italic">//</span>
                {title}
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-line rounded-[2px] text-[11.5px] text-muted cursor-default transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
