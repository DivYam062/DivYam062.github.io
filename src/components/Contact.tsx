import { motion } from 'motion/react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data/resume'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-16 text-center sm:px-16"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[100px]"
        />

        <span className="inline-flex items-center gap-2 font-display text-sm font-medium uppercase tracking-wide text-accent">
          <span className="h-px w-6 bg-accent/70" /> Contact
        </span>
        <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-semibold text-white sm:text-4xl">
          Let's build something worth shipping.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-slate-400">
          Open to frontend and full-stack opportunities. Reach out — I usually reply within a day.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={profile.socials.email}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            <FiMail size={18} /> {profile.email}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <FiGithub size={22} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <FiLinkedin size={22} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
