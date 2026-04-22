'use client'

import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Journey', 'Contact']

const RESUME_URL = 'https://drive.google.com/file/d/1JUMe9CrlDAlWjx9qHy5iZGKoqYGL4Gse/view?usp=sharing'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-[1.4rem] border-b transition-all duration-300 max-sm:px-6 ${
        scrolled
          ? 'bg-canvas/[0.92] border-line backdrop-blur-md'
          : 'border-transparent'
      }`}
    >
      <div className="font-serif italic text-accent text-[1.15rem] tracking-[0.02em]">
        Shri.
      </div>
      <ul className="flex items-center gap-8 list-none max-sm:hidden">
        {links.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-muted text-[12px] tracking-[0.12em] uppercase no-underline hover:text-copy transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
        <li>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-[0.45rem] border border-accent text-accent text-[11px] tracking-[0.14em] uppercase no-underline rounded-[2px] transition-all duration-200 hover:bg-accent hover:text-canvas"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}
