import { projects } from '../data/resume'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="A mix of enterprise-style systems and independent builds, spanning the full MERN stack."
      />

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
