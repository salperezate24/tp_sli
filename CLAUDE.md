# CLAUDE.md — Contexto del Proyecto

## ¿Qué es este proyecto?

Presentación de defensa de tesis de Maestría construida con **Slidev** (framework de presentaciones sobre Vue 3 + Vite).

**Título de la tesis:** *Desarrollo de un modelo de red neuronal profunda para la identificación de ovocitos y sus características a través de microscopía polarizada*

**Autor:** Salomón Pérez Atencia  
**Director:** Alejandro Restrepo Martínez, Ph.D.  
**Institución:** Universidad Nacional de Colombia, Sede Medellín — Facultad de Minas  
**Programa:** Maestría en Ingeniería — Ciencias de la Computación  
**Idioma:** Español

---

## Estructura del proyecto

```
slides.md              # Punto de entrada principal (orquesta todos los pages/)
pages/                 # Contenido modular por sección
  01_justificacion.md
  02_marco_teorico.md
  03_estado_del_arte.md
  04_pregunta_hipotesis.md
  05_objetivos.md
  06_metodologia.md
  07_resultados.md
  08_conclusiones.md
  09_trabajo_futuro.md
  10_referencias.md
components/            # Componentes Vue personalizados
  ThesisFooter.vue          # Footer con metadatos en cada slide
  ThesisSectionNav.vue      # Navegación de secciones
  IvfLiveBirthByAgeChart.vue # Gráfico interactivo de tasas IVF
  Counter.vue
layouts/               # Plantillas de layout para Slidev
images/                # Logos institucionales (GPIMA, UNAL) y figuras
archive/               # Versiones anteriores, transcripciones de reuniones y borradores
  script_20260420.txt       # Guion oral completo (665 líneas, slides 1–39)
  Thesis Slides.html        # Versión HTML alternativa — referencia de diseño y maquetación
  oocyte_maturity.txt       # Protocolo clínico de PLM para ICSI (fuente de referencia para el guion)
  discovering_human_ooocyte.txt  # Conferencia sobre PLM cuantitativa (fuente de referencia para el guion)
BACKLOG.md             # Tareas pendientes (contenido, slides, externos)
dist/                  # Build output (no editar manualmente)
```

---

## Comandos principales

```bash
npm run dev          # Servidor de desarrollo con hot-reload
npm run build        # Build para GitHub Pages (base: /tp_sli/)
npm run build:local  # Build local (base: /)
npm run preview      # Preview del build (npx serve dist)
npm run export:pdf   # Exportar como PDF (requiere Playwright)
```

**Requiere:** Node.js >= 20

---

## Tecnologías clave

| Tecnología | Uso |
|---|---|
| Slidev 52.14.1 | Framework de presentaciones |
| Vue 3 | Componentes reactivos |
| UnoCSS | Estilos atómicos (configurado en `uno.config.ts`) |
| Vite | Build tool (`vite.config.ts`) |

**Colores institucionales UNAL** (en `uno.config.ts`):
- Azul: `#3981BF`
- Verde: `#A0BF5E`
- Gris oscuro: `#262626`

---

## Despliegue

- **GitHub Pages** via `.github/workflows/pages.yml`
- Se despliega automáticamente al hacer push a `main`
- Branch de desarrollo: `develop` → merge a `main` para publicar

---

## Convenciones de contenido

- Todo el contenido está en **español**
- Cada sección temática es un archivo `.md` separado en `pages/`
- `slides.md` importa los pages con la directiva `src: pages/XX_nombre.md`
- Los slides usan frontmatter YAML para configurar layout, transiciones y metadatos por slide
- Las figuras se referencian desde `images/figures/` o `images/logos/`
- El footer con logos institucionales se aplica globalmente vía `ThesisFooter.vue`

---

## Convenciones de estilos (UnoCSS)

**Sistema de colores — usar siempre las clases semánticas, nunca hex directo:**

| Color | Hex | Clase Tailwind/UnoCSS |
|---|---|---|
| Azul UNAL | `#3981BF` | `text-unal-blue`, `bg-unal-blue`, `border-unal-blue`, etc. |
| Verde UNAL | `#A0BF5E` | `text-unal-green`, `bg-unal-green`, `border-unal-green`, etc. |
| Gris oscuro | `#262626` | `text-unal-gray`, `bg-unal-gray`, `border-unal-gray`, etc. |

Los hex solo aparecen en `uno.config.ts` (definición canónica) y en comentarios/documentación.

**Shortcuts disponibles en `uno.config.ts`:**
- `slide-deck-shell` — contenedor principal de slide con padding y posicionamiento correcto
- `plm-three-col-grid` — rejilla 3 columnas para slides de microscopía PLM
- `plm-section-label`, `plm-section-label-center` — etiquetas de sección PLM
- `plm-katex-col-left`, `plm-katex-col-right` — columnas KaTeX en PLM
- `plm-retardo-img`, `plm-figcaption` — imagen y pie de figura PLM
- `thesis-footer-grid` — rejilla del footer (autor | título | fecha)

**Al agregar slides nuevos:** usar `slide-deck-shell` como clase del contenedor principal.

---

## Convenciones anti-overflow (slides 16:9)

Los slides tienen altura fija sin scroll. Estas reglas evitan desbordamiento vertical/horizontal:

**Texto dentro de contenedores flex:**
- Usar `<span>` en lugar de `<p>` — los `<p>` tienen `margin: 1em 0` por defecto que rompe el layout.
- Si se necesita usar `<p>`, agregar `my-0` explícitamente.
- Para agrupar líneas de texto: `<div class="flex flex-col gap-0.5 leading-none">` con `<span>` hijos.

**Contenedores flexbox:**
- El contenedor principal del contenido siempre: `flex min-h-0 flex-1 flex-col gap-X`
- Grillas que deben estirarse verticalmente: `grid min-h-0 flex-1 grid-cols-N`
- Nunca usar `style="flex: N 1 0"` (colapsa a altura 0) — preferir `flex-1 min-h-0` en Tailwind.

**Diagramas horizontales:**
- Usar `flex items-center` con anchos porcentuales fijos (`w-[16%]`, `w-[22%]`, etc.) en lugar de `grid-cols` con `auto` o `1fr` — los porcentuales garantizan que la suma sea 100% sin overflow horizontal.
- Flechas como columnas de ancho fijo: `w-[5%]` o `w-[7%]`.

**Patrón de caja `.co.bl` (del archivo HTML de referencia):**
```html
<div class="rounded-lg border-l-4 border-unal-blue/60 bg-unal-blue/[0.07] px-3 py-1.5 text-[0.72rem] leading-[1.45] text-unal-gray">
```
Equivalente verde: `border-unal-green/60 bg-unal-green/[0.08]`

**`line-height` recomendado:** `leading-[1.45]` para texto descriptivo (más legible que `leading-tight` sin ocupar más espacio significativo).

**Referencia de diseño:** `archive/Thesis Slides.html` contiene una versión HTML alternativa con CSS propio. Antes de refactorizar un slide complejo, revisar cómo lo resuelve esa versión — sus clases `.attn`, `.co`, `.g2` son buenas referencias de proporciones y espaciado.

---

## Estructura de la presentación

**Duración:** 45 min | **Límite:** máximo 40 diapositivas (las referencias no se cuentan)

| Sección | Sugerido (profe) | Real | Estado actual |
|---|:---:|:---:|---|
| Portada | 1 | 1 | ✓ |
| Agenda | 1 | 1 | ✓ |
| Justificación | 2 | 2 | ✓ |
| Marco teórico | 4 | 5 | ✓ |
| Estado del arte | 6 | 7 | ✓ |
| Problema / Hipótesis | 1 | 1 | ✓ |
| Objetivos | 2 | 2 | ✓ |
| Metodología | 8 | 9 | ✓ |
| Resultados | 10 | 9 | ✓ |
| Conclusiones | 2 | 2 | ✓ |
| Trabajo futuro | 1 | 1 | ✓ |
| **Total** | **38** | **40** | ⚠️ 2 sobre el sugerido · = límite máximo |

> Resultados incluye 3 slides con videos de YouTube (Secuencias 1-3) comparando YOLOv9m vs YOLOv9m-CBAM — requiere conexión a internet en la defensa.

Fuente: `archive/estructura_presentacion.md`

---

## Documento de tesis completo

La fuente de verdad para todo el contenido es el documento LaTeX en:

```
/Users/salperezate/Documents/GitHub/thesis/
```

Capítulos relevantes para completar los slides:

| Archivo | Contenido |
|---|---|
| `chapters/02_marco_teorico.tex` | Marco teórico (ovocito, PLM, redes neuronales) |
| `chapters/03_estado_arte.tex` | Estado del arte |
| `chapters/04_generacion_datos.tex` | Generación de base de datos sintética |
| `chapters/05_metodologia.tex` | Metodología experimental |
| `chapters/06_customyolo.tex` | Arquitecturas, entrenamiento y resultados |
| `chapters/07_conclusiones.tex` | Conclusiones |
| `chapters/08_trabajos_futuros.tex` | Trabajo futuro |
| `references.bib` | Todas las referencias bibliográficas |

Al redactar o completar slides, leer primero el capítulo correspondiente para mantener coherencia con la tesis.

---

## Guion oral (`archive/script_20260420.txt`)

El guion oral vive en `archive/script_20260420.txt` (665 líneas). Contiene el texto que se dirá en cada diapositiva durante la defensa.

**Convenciones:**
- Cada bloque empieza con `SLIDE N:` (número correlativo al orden de la presentación)
- Máximo ~1 minuto por diapositiva ≈ 130–150 palabras a ritmo normal
- El guion debe ser coherente con el contenido visual de la diapositiva correspondiente y con los datos de la tesis

**Estado actual del guion:** ✓ completo — cubre slides 1–39 (toda la presentación)

**Fuentes de referencia para redactar el guion:**
- `archive/oocyte_maturity.txt` — protocolo clínico de PLM para ICSI; útil para slides de justificación y marco teórico
- `archive/discovering_human_ooocyte.txt` — conferencia sobre PLM cuantitativa y gradación de ovocitos; útil para datos cuantitativos (5–10% de potencial de desarrollo, retardo 2–3 nm, etc.)
- Capítulos LaTeX en `/Users/salperezate/Documents/GitHub/thesis/` — fuente de verdad para todo el contenido técnico

---

## Notas de trabajo

- El directorio `archive/` contiene notas de reuniones y borradores — no es contenido de producción
- Al editar contenido, mantener coherencia con la terminología técnica establecida (ovocitos, microscopía polarizada, red neuronal profunda, etc.)
- Los logos GPIMA y UNAL deben aparecer siempre en la esquina inferior derecha — se implementan como HTML inline al final de cada slide (no vía ThesisFooter.vue)
- Las referencias en `10_referencias.md` llegan actualmente hasta **[34]** — al agregar nuevas, continuar desde [35]
- **Tareas pendientes:** ver `BACKLOG.md` en la raíz del proyecto
