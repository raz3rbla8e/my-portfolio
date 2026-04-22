'use client'

import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Journey', 'Contact']

const RESUME_URL = 'https://drive.google.com/file/d/1JUMe9CrlDAlWjx9qHy5iZGKoqYGL4Gse/view?usp=sharing'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-[1.4rem] border-b transition-all duration-300 max-sm:px-6 ${
          scrolled || menuOpen
            ? 'bg-canvas/[0.92] border-line backdrop-blur-md'
            : 'border-transparent'
        }`}
      >
        <div className="font-serif italic text-accent text-[1.15rem] tracking-[0.02em]">
          Shri.
        </div>

        {/* Desktop links */}
        <ul className="flex items-center gap-8 list-none sm:flex hidden">
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden flex flex-col justify-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer p-1"
        >
          <span
            className={`block h-px bg-copy transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[6px] w-5' : 'w-5'
            }`}
          />
          <span
            className={`block h-px bg-copy transition-all duration-300 ${
              menuOpen ? 'opacity-0 w-5' : 'w-3'
            }`}
          />
          <span
            className={`block h-px bg-copy transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[6px] w-5' : 'w-5'
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-canvas flex flex-col justify-center px-8 transition-all duration-300 sm:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="list-none flex flex-col gap-1 mb-10">
          {links.map((item, i) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className={`block font-serif text-[clamp(2.2rem,8vw,3rem)] font-normal text-copy no-underline py-2 border-b border-line transition-all duration-200 hover:text-accent hover:pl-2 ${
                  menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
              >
                <span className="text-muted text-[11px] tracking-[0.15em] uppercase mr-4 font-mono align-middle">
                  0{i + 1}
                </span>
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className={`self-start px-6 py-3 border border-accent text-accent text-[12px] tracking-[0.14em] uppercase no-underline rounded-[2px] transition-all duration-200 hover:bg-accent hover:text-canvas ${
            menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          style={{ transitionDelay: menuOpen ? `${links.length * 60}ms` : '0ms' }}
        >
          View Resume ↗
        </a>
      </div>
    </>
  )
}
