const skills = [
  'React', 'Tailwind CSS', 'JavaScript', 'C#', '.NET', 'SQL Server',
  'Git / GitHub', 'Figma',
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="font-display text-2xl font-bold">Skills</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-white/10 bg-bg-soft px-3 py-1.5 font-mono text-sm text-ink-soft"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
