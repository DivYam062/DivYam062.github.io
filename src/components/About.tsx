import { motion } from 'motion/react'
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineLocationMarker } from 'react-icons/hi'
import { education, profile } from '../data/resume'
import { SectionHeading } from './SectionHeading'

const facts = [
  {
    icon: HiOutlineBriefcase,
    label: 'Experience',
    value: '3+ years across product & enterprise teams',
  },
  {
    icon: HiOutlineAcademicCap,
    label: 'Education',
    value: `${education.degree}, ${education.school}`,
  },
  {
    icon: HiOutlineLocationMarker,
    label: 'Based in',
    value: profile.location,
  },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="About me"
        title="Engineering clean, scalable interfaces end to end"
        description="From enterprise WMS/OMS dashboards to greenfield MERN products, I focus on component architecture, state management, and performance that holds up at scale."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {facts.map((fact, index) => (
          <motion.div
            key={fact.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-accent/30"
          >
            <fact.icon className="text-accent" size={26} />
            <p className="mt-4 text-sm font-medium uppercase tracking-wide text-slate-500">{fact.label}</p>
            <p className="mt-2 font-display text-lg text-white">{fact.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
