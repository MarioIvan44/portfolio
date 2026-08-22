/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta "Dark tech"
        bg: {
          DEFAULT: '#0f172a', // fondo principal
          soft: '#1e293b',    // fondo de cards/secciones
        },
        accent: {
          DEFAULT: '#22d3ee', // cyan — botones, links, highlights
          muted: '#0e7490',
        },
        ink: {
          DEFAULT: '#f8fafc', // texto principal
          soft: '#94a3b8',    // texto secundario
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
