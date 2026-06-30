import { defineBlogConfig } from 'astro-blog-kit';

export default defineBlogConfig({
  wpUrl: import.meta.env.WP_API_URL || 'http://paneldetecho.local/',
  postsPerPage: 4,
  defaultLayout: 'featured',
  locale: 'en',

  theme: {
    accent: '#f97316',     // Naranja industrial/corporativo (aporta contraste y combina con las miniaturas)
    background: '#0a0a0a', // Un negro más profundo para dar más contraste a las tarjetas
    surface: '#161616',    // Tarjetas sutilmente más claras que el fondo para dar volumen
    text: '#ffffff',       // Blanco puro para los títulos principales (legibilidad máxima)
    muted: '#a3a3a3',      // Gris claro intermedio para fechas y extractos (antes era #666666, invisible en dark mode)
    mutedLight: '#cbd5e1', // Gris aún más claro para textos pequeños legibles
    border: '#262626',     // Bordes finos y limpios para separar las tarjetas
    black: '#0a0a0a',
    white: '#ffffff',
    fontHeading: '"DM Sans", sans-serif',
    fontBody: '"Inter", sans-serif',
    fontMono: '"IBM Plex Mono", monospace',
    fontDisplay: '"DM Sans", sans-serif',
    containerMax: '1200px',
  },

  // ── Hero ──────────────────────────────────────────────────────
  hero: {
    en: {
      tagline: 'Our Blog',
      titleLine1: 'Latest',
      titleLine2: 'Articles', // Tip: Asegúrate de que tu kit no meta un span background blanco aquí
      description: 'Welcome to our blog.',
    },
    es: {
      tagline: 'Nuestro Blog',
      titleLine1: 'Últimos',
      titleLine2: 'Artículos',
      description: 'Bienvenido a nuestro blog.',
    },
  },

  // ── UI labels ────────────────────────────────────────────────
  ui: {
    en: {
      readMoreLabel: 'Read more →',
      btnPrev: 'Previous',
      btnNext: 'Next',
      // ── Paginación integrada con la nueva paleta de contraste ──
      commentButtonColor: 'var(--bk-accent)',
      commentButtonTextColor: 'var(--bk-white)',
      paginationStyle: 'minimal',
      paginationBtnBg: '#161616',          // Fondo de la superficie
      paginationBtnText: '#ffffff',        // Texto blanco
      paginationBtnHoverBg: '#f97316',     // Hover cambia al naranja industrial
      paginationBtnHoverText: '#0a0a0a',   // Texto oscuro en hover para legibilidad
      paginationActiveBg: '#f97316',       // Activo en naranja
      paginationActiveText: '#0a0a0a',
    },
    es: {
      readMoreLabel: 'Leer más →',
      btnPrev: 'Anterior',
      btnNext: 'Siguiente',
    },
  },
});