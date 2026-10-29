import { motion } from 'motion/react'
import { experiences } from '../data/resume'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've built things"
        description="A track record of shipping production features across startups and enterprise product teams."
      />

      <div className="relative mt-14">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10 sm:left-[9px]" aria-hidden />

        <ol className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.li
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              className="relative pl-8 sm:pl-10"
            >
              <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-ink sm:h-5 sm:w-5" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-xl font-semibold text-white">
                  {exp.role} <span className="text-slate-500">·</span>{' '}
                  <span className="text-gradient">{exp.company}</span>
                </h3>
                <span className="text-sm font-medium text-slate-500">{exp.duration}</span>
              </div>
              <p className="mt-1 text-sm text-slate-500">{exp.location}</p>

              <ul className="mt-4 space-y-2.5">
                {exp.highlights.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
