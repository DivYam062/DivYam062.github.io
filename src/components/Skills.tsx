import { motion } from 'motion/react'
import { skillGroups } from '../data/resume'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I reach for"
        description="A toolkit shaped by building production frontends, reusable design systems, and the APIs that power them."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
            className="rounded-2xl border border-white/10 bg-white/3 p-6 transition-colors hover:border-accent/30"
          >
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
