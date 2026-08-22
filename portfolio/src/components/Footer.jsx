export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto max-w-5xl px-6 text-center font-mono text-xs text-ink-soft">
        © {new Date().getFullYear()} Mario Iván
      </div>
    </footer>
  )
}
