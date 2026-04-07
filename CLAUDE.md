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

## Estructura de la presentación

**Duración:** 45 min | **Límite:** máximo 40 diapositivas (las referencias no se cuentan)

| Sección | Sugerido (profe) | Real | Estado actual |
|---|:---:|:---:|---|
| Portada | 1 | 1 | ✓ |
| Agenda | 1 | 1 | ✓ |
| Justificación | 2 | 2 | ✓ |
| Marco teórico | 4 | 4 | ✓ |
| Estado del arte | 6 | 6 | ✓ |
| Problema / Hipótesis | 1 | 1 | ✓ |
| Objetivos | 2 | 2 | ✓ |
| Metodología | 8 | 6 | ✓ |
| Resultados | 10 | 7 | ✓ |
| Conclusiones | 2 | 2 | ✓ |
| Trabajo futuro | 1 | 1 | ✓ |
| **Total** | **38** | **33** | |

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

## Notas de trabajo

- El directorio `archive/` contiene notas de reuniones y borradores — no es contenido de producción
- Al editar contenido, mantener coherencia con la terminología técnica establecida (ovocitos, microscopía polarizada, red neuronal profunda, etc.)
- Los logos GPIMA y UNAL deben aparecer siempre en la esquina inferior derecha — se implementan como HTML inline al final de cada slide (no vía ThesisFooter.vue)
- Las referencias en `10_referencias.md` llegan actualmente hasta **[32]** — al agregar nuevas, continuar desde [33]
- **Tareas pendientes:** ver `BACKLOG.md` en la raíz del proyecto
