# Portafolio

Portafolio personal construido con React, Vite y Tailwind CSS.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Estructura

```
src/
  components/   → una sección o pieza de UI por archivo
  data/         → contenido separado del render (proyectos, etc.)
  App.jsx       → ensambla las secciones
  main.jsx      → entry point de React
  index.css     → directivas de Tailwind + estilos globales
```

## Pendientes antes de publicar

- [ ] Reemplazar los textos de ejemplo en `About.jsx` y `Contact.jsx`
- [ ] Completar los links reales en `src/data/projects.js`
- [ ] Agregar capturas de pantalla de cada proyecto
- [ ] Agregar favicon (`public/favicon.svg`) y og:image
- [ ] Deploy en Vercel o GitHub Pages
