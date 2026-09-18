export const projects = [
  {
    title: 'Élaris de Élite',
    description:
      'Proyecto colaborativo en el que participé, incluido como parte de mi portafolio personal. Tienda en línea de maquillaje premium con catálogo, autenticación, carrito persistente, checkout, pedidos, reseñas y panel de administración; el repositorio pertenece al equipo.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    repo: 'https://github.com/Ayala-Carlos/Elaris-De-Elite.git',
    demo: '',
    image: '/images/projects/elaris-de-elite.jpg',
  },
  {
    title: 'Jupaca Proyecta',
    description:
      'Proyecto colaborativo en el que participé, incluido como parte de mi portafolio personal. Plataforma para centralizar la gestión de talento humano, nóminas, contratos, horas extras, cuentas por cobrar y facturas proforma; el repositorio pertenece al equipo.',
    stack: ['React', 'Node.js', 'MongoDB', 'React Native'],
    repo: "",
    image: '/images/projects/jupaca-proyecta.jpg',
  },
  {
    title: 'Gastos Mensuales',
    description: 'Aplicación de escritorio para control de gastos, hecha en C# WinForms.',
    stack: ['C#', 'WinForms'],
    repo: "",
    demo: '',
    image: '/images/projects/gastos-mensuales.jpg',
  },
  {
    title: 'PackLens',
    description:
      'Sistema de rastreo de paquetes en tiempo real, multi-tenant, pensado para negocios de logística y envíos. Los clientes siguen su pedido en un mapa en vivo mientras los conductores reportan su ubicación. Monorepo con backend REST, app Android para clientes (sin login, por código de tracking o deep link) y app Android para conductores (con Foreground Service que transmite GPS cada 5 segundos). Proyecto privado, todos los derechos reservados.',
    stack: [
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Kotlin',
      'Android',
      'Google Maps SDK',
      'Retrofit',
      'Docker',
    ],
    repo: '',
    demo: '',
    image: '/images/projects/packlens.jpg',
  },
  {
    title: 'Api Trackline',
    description:
      'API REST para "Trackline", sistema de rastreo de paquetes. Maneja autenticación con JWT, seguridad, validación de datos, acceso a base de datos Oracle, envío de correos y almacenamiento de imágenes en la nube.',
    stack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JPA',
      'Oracle',
      'JWT',
      'Cloudinary',
      'Maven',
    ],
    repo: 'https://github.com/MarioIvan44/ApiTrackline.git',
    demo: '',
    image: '',
  },
  {
    title: 'Trackline App Routes',
    description:
      'Aplicación Android para conductores de "Trackline", que consume la API ApiTrackline. Permite visualizar rutas y ubicación en tiempo real sobre Google Maps, con una interfaz construida en Jetpack Compose.',
    stack: [
      'Kotlin',
      'Android',
      'Jetpack Compose',
      'Retrofit',
      'Google Maps SDK',
      'Google Play Services (Location)',
    ],
    repo: 'https://github.com/MarioIvan44/TracklineAppRoutes.git',
    demo: '',
    image: '/images/projects/tracklineapproutes.png',
  },
]
