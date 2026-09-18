export default function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start px-6 py-28">
      <p className="mb-4 font-mono text-sm text-accent">Hola, soy</p>
      <h1 className="font-display text-4xl font-bold leading-tight sm:text-6xl">
        Mario Iván
      </h1>
      <p className="mt-4 max-w-xl text-lg text-ink-soft">
        Estudiante de Bachillerato Técnico en Desarrollo de Software. Construyo
        aplicaciones full-stack con React, Node.js y Java/Spring Boot, además
        de apps móviles nativas en Kotlin para Android.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          Ver proyectos
        </a>
        <a
          href="#contact"
          className="rounded-md border border-white/10 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-bg-soft"
        >
          Contactarme
        </a>
      </div>
    </section>
  )
}
