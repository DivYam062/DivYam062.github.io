import { motion } from 'motion/react'
import { HiOutlineArrowDown, HiOutlineMail } from 'react-icons/hi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { profile } from '../data/resume'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  }),
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-28 pb-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-144 w-xl -translate-x-1/2 rounded-full bg-accent-2/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-112 w-md rounded-full bg-accent/15 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-8">
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-display text-sm text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to impactful frontend & full-stack work
          </motion.p>

          <motion.h1
            custom={0.1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
          >
            Hi, I'm {profile.name.split(' ')[0]} —<br />
            I build <span className="text-gradient">scalable web products.</span>
          </motion.h1>

          <motion.p
            custom={0.2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            custom={0.3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/60 hover:text-accent"
            >
              <HiOutlineMail size={18} />
              Get in touch
            </a>
          </motion.div>

          <motion.div
            custom={0.4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-10 flex items-center gap-5"
          >
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
            <span className="h-5 w-px bg-white/10" />
            <span className="text-sm text-slate-500">{profile.location}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/30 to-accent-2/30 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/40">
            <img
              src={profile.avatarFull}
              alt={profile.name}
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-surface/90 px-5 py-4 backdrop-blur-lg">
            <p className="font-display text-2xl font-semibold text-white">3+</p>
            <p className="text-xs text-slate-400">Years of experience</p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-500"
      >
        Scroll
        <HiOutlineArrowDown className="animate-bounce" />
      </motion.a>
    </section>
  )
}
