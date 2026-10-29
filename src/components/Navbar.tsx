import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { navLinks, profile } from '../data/resume'
import { useActiveSection } from '../hooks/useActiveSection'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeId = useActiveSection(navLinks.map((link) => link.href.slice(1)))

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'border-b border-white/10 bg-ink/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-white">
          Divyam<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-px w-full bg-accent"
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href={profile.resumeUrl}
          download
          className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent/60 hover:text-accent md:inline-flex"
        >
          Resume
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-white/10 bg-ink/95 backdrop-blur-lg md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeUrl}
                  download
                  onClick={() => setIsOpen(false)}
                  className="mt-1 block rounded-lg border border-white/15 px-3 py-2.5 text-center text-sm font-medium text-white"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
