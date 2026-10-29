import { motion } from 'motion/react'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      <span className="inline-flex items-center gap-2 font-display text-sm font-medium tracking-wide text-accent uppercase">
        <span className="h-px w-6 bg-accent/70" />
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>}
    </motion.div>
  )
}
