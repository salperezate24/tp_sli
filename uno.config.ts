import { defineConfig } from 'unocss'

/**
 * Slidev fusiona este archivo con su configuración interna de UnoCSS.
 * @see https://sli.dev/custom/config-unocss
 *
 * Todos los breakpoints en 0px: `sm:`, `md:`, `lg:`… equivalen a “siempre activo”.
 * El deck se comporta igual en móvil y en escritorio (mismas columnas, mismos tamaños);
 * lo único que cambia es cómo Slidev escala el lienzo al tamaño de pantalla.
 */
export default defineConfig({
  theme: {
    breakpoints: {
      sm: '0px',
      md: '0px',
      lg: '0px',
      xl: '0px',
      '2xl': '0px',
    },
    /** Paleta UNAL: usar en HTML del deck sin `text-[#…]` (Vue rompe `[]` / `#` en atributos). */
    colors: {
      unal: {
        blue: '#3981BF',
        green: '#A0BF5E',
        gray: '#262626',
      },
    },
  },
  shortcuts: {
    /** Subtítulos pequeños en columnas PLM (arbitrary aquí; en .md no usar `text-[9px]` / `text-[#…]` → Vue). */
    'plm-section-label':
      'mb-1 text-[9px] font-bold uppercase tracking-wide text-unal-blue sm:text-[10px]',
    'plm-section-label-center':
      'mb-1 w-full text-center text-[9px] font-bold uppercase tracking-wide text-unal-blue sm:text-[10px]',
    /** KaTeX dentro de columnas estrechas. */
    'plm-katex-col-left':
      '[&_.katex-display]:my-1 [&_.katex-display]:text-[0.56rem] sm:[&_.katex-display]:text-[0.62rem]',
    'plm-katex-col-right':
      '[&_.katex-display]:my-0.5 [&_.katex-display]:text-[0.48rem] sm:[&_.katex-display]:text-[0.52rem]',
    /** Imagen central PLM (compacta para 3 columnas). */
    'plm-retardo-img':
      'relative mx-auto h-auto max-h-[min(22vh,150px)] w-full max-w-[min(100%,175px)] object-contain sm:max-h-[min(26vh,185px)]',
    /** Pie de figura bajo la imagen PLM (solo en uno.config). */
    'plm-figcaption':
      'm-0 mt-2 w-full max-w-full hyphens-auto break-words text-left text-[10px] leading-tight text-unal-gray opacity-90 sm:text-[11px] sm:leading-snug',
    /** Contenedor slide (evita `pb-[6rem]` en .md → Vue/Markdown). */
    'slide-deck-shell':
      'relative flex h-full min-h-0 flex-col pb-[6rem] pr-1 sm:pb-[6.5rem]',
    /** Rejilla 3 columnas PLM: flujo natural en la diapositiva, sin scroll interno. */
    'plm-three-col-grid':
      'isolate grid min-w-0 w-full max-w-6xl grid-cols-1 gap-3 overflow-visible pr-0.5 sm:gap-4 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.88fr)_minmax(0,1.22fr)] lg:items-start lg:gap-3',
  },
})
