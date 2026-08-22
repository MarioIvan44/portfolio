import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-display text-2xl font-bold">Proyectos</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-white/10 bg-bg-soft p-5 transition-colors hover:border-accent/40"
          >
            <h3 className="font-display font-bold text-ink">{project.title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="font-mono text-xs text-accent">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-soft hover:text-accent transition-colors font-medium text-sm"
                >
                  Repositorio →
                </a>
              ) : (
                <span className="text-ink-soft font-medium text-sm">
                  Repositorio Privado 🔒
                </span>
              )}
              {project.demo && (
                <a href={project.demo} className="text-ink-soft hover:text-ink">
                  Demo →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
