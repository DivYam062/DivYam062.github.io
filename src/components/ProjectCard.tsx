import { motion } from 'motion/react'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { HiOutlineCube } from 'react-icons/hi'
import type { Project } from '../data/resume'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/3 transition-colors hover:border-accent/30"
    >
      <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-linear-to-br from-surface to-ink">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-grid">
            <HiOutlineCube className="text-white/20" size={56} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <ul className="mt-4 space-y-2">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-slate-400">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              <FiGithub size={16} /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-white"
            >
              Live demo <FiArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
