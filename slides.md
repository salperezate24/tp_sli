---
theme: seriph
colorSchema: light
background: #F2F2F0
title: Desarrollo de un modelo de red neuronal profunda para la identificación
  de ovocitos y sus características a través de microscopía polarizada
# Pie de página: visible desde la diapositiva 2 (portada sin pie; ver `ThesisFooter.vue`)
shortAuthor: Salomón Pérez Atencia
shortInstitute: Facultad de Minas
shortTitle: Sustentación de Tesis de Maestría
# Sin `class: text-center` global: la portada se centra con su propio div; el resto se alinea mejor a la izquierda (p. ej. `class: text-left` en la agenda).
info: |
  Sustentación de tesis de maestría — presentación en Slidev.
drawings:
  persist: false
comark: true
duration: 45min
transition: slide-left
fonts:
  sans: 'IBM Plex Sans'
  provider: google
---

<div class="flex h-full flex-col text-center">

<p class="text-sm font-medium uppercase text-gray-500 mb-7" style="letter-spacing:.08em">Sustentación de tesis de maestría</p>

<div class="text-3xl leading-tight tracking-tight max-w-5xl mx-auto text-unal-blue">
<div class="font-bold">
  Desarrollo de un modelo de red neuronal profunda para la identificación de ovocitos y sus características a través de microscopía polarizada
  </div>
</div>

<script setup lang="ts">
const formattedDate = new Intl.DateTimeFormat('es-CO', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}).format(new Date())
</script>

<div class="mt-6 text-2xl leading-relaxed">
  <div>
    <div class="font-semibold leading-snug">
      Salomón Pérez Atencia
    </div>
    <div class="text-lg leading-snug text-gray-500">
      Ingeniero mecánico
    </div>
  </div>

  <div class="mt-4 text-base text-gray-500">
    <div class="font-semibold leading-snug text-unal-gray">
      Alejandro Restrepo Martínez, Ph. D.
    </div>
    <div class="leading-snug">
      Director de tesis
    </div>
  </div>

  <div class="mt-4 text-sm text-gray-500">
    {{ formattedDate }}
  </div>

  <div class="mt-6 text-xs text-gray-500 leading-relaxed">
    Maestría en Ingeniería — Analítica<br/>
    Departamento de Ciencias de la Computación<br/>
    Facultad de Minas<br/>
    Universidad Nacional de Colombia Sede Medellín
  </div>
</div>

</div>

<!-- Portada: mismos logos abajo a la derecha que Agenda y secciones (antes: GPIMA abs-bl + UNAL abs-br) -->
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img
    src="./images/logos/gpima_logo.png"
    alt="GPIMA"
    class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6"
  />
  <img
    src="./images/logos/unal_logo_lateral.png"
    alt="Universidad Nacional de Colombia"
    class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14"
  />
</div>

<!--
Buenos días, apreciados jurados, señoras y señores. Mi nombre es Salomón Pérez Atencia, ingeniero mecánico. Autor de la tesis titulada "Desarrollo de un modelo de red neuronal profunda para la identificación de ovocitos y sus características a través de microscopía polarizada" para optar al título de Maestría en Ingeniería - Analítica.

Agradezco a los jurados por su tiempo, por la lectura del documento y por estar presentes hoy en la defensa.

El director de esta tesis es el profesor Alejandro Restrepo Martínez, y este trabajo se realizó en el marco del Grupo de Promoción e Investigación en Mecánica Aplicada (GPIMA) de la Facultad de Minas de la Universidad Nacional de Colombia, Sede Medellín.
-->

---
transition: slide-left
class: text-left
---

<script setup>
import { useNav } from '@slidev/client'
const nav = useNav()

function goToSection(id) {
  const found = nav.slides.value.find(r => {
    const fm = r.meta?.slide?.frontmatter
    return typeof fm?.deckSection === 'string' && fm.deckSection === id
  })
  if (found?.no != null) nav.go(found.no, 0)
}
</script>

<div class="mx-auto flex h-full max-w-6xl -translate-y-6 flex-col justify-center px-10 pb-10 md:-translate-y-10">

<header class="mb-6">
  <h1 class="text-3xl font-bold tracking-tight text-unal-gray sm:text-4xl">Agenda</h1>
  <div class="mt-3 h-1 w-28 max-w-full rounded-full bg-unal-green" />
</header>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">

<div class="rounded-xl border border-gray-300/60 border-l-4 border-l-unal-blue bg-white/95 px-6 py-5 shadow-md ring-1 ring-gray-900/5 backdrop-blur-sm">
  <p class="mb-3 border-b border-gray-200/90 pb-2.5 text-[11px] font-bold uppercase tracking-wider text-unal-blue">Secciones 1–5</p>
  <ol class="list-decimal space-y-2.5 pl-5 text-sm leading-relaxed text-unal-gray marker:font-semibold marker:text-unal-blue sm:text-[0.95rem]">
    <li><button type="button" class="font-semibold cursor-pointer border-0 bg-transparent p-0 text-inherit hover:text-unal-blue transition-colors duration-200" @click="goToSection('justificacion')">Justificación</button></li>
    <li><button type="button" class="font-semibold cursor-pointer border-0 bg-transparent p-0 text-inherit hover:text-unal-blue transition-colors duration-200" @click="goToSection('marco')">Marco teórico</button></li>
    <li><button type="button" class="font-semibold cursor-pointer border-0 bg-transparent p-0 text-inherit hover:text-unal-blue transition-colors duration-200" @click="goToSection('estado')">Estado del arte</button></li>
    <li><button type="button" class="font-semibold cursor-pointer border-0 bg-transparent p-0 text-inherit hover:text-unal-blue transition-colors duration-200" @click="goToSection('pregunta')">Pregunta de investigación e hipótesis</button></li>
    <li><button type="button" class="font-semibold cursor-pointer border-0 bg-transparent p-0 text-inherit hover:text-unal-blue transition-colors duration-200" @click="goToSection('objetivos')">Objetivos</button></li>
  </ol>
</div>

<div class="rounded-xl border border-gray-300/60 border-l-4 border-l-unal-green bg-white/95 px-6 py-5 shadow-md ring-1 ring-gray-900/5 backdrop-blur-sm">
  <p class="mb-3 border-b border-gray-200/90 pb-2.5 text-[11px] font-bold uppercase tracking-wider text-unal-blue">Secciones 6–10</p>
  <ol class="list-decimal space-y-2.5 pl-5 text-sm leading-relaxed text-unal-gray marker:font-semibold marker:text-unal-blue sm:text-[0.95rem]" start="6">
    <li><button type="button" class="font-semibold cursor-pointer border-0 bg-transparent p-0 text-inherit hover:text-unal-blue transition-colors duration-200" @click="goToSection('metodologia')">Metodología</button></li>
    <li><button type="button" class="font-semibold cursor-pointer border-0 bg-transparent p-0 text-inherit hover:text-unal-blue transition-colors duration-200" @click="goToSection('resultados')">Resultados</button></li>
    <li><button type="button" class="font-semibold cursor-pointer border-0 bg-transparent p-0 text-inherit hover:text-unal-blue transition-colors duration-200" @click="goToSection('conclusiones')">Conclusiones</button></li>
    <li><button type="button" class="font-semibold cursor-pointer border-0 bg-transparent p-0 text-inherit hover:text-unal-blue transition-colors duration-200" @click="goToSection('trabajo_futuro')">Trabajo futuro</button></li>
    <li><button type="button" class="font-semibold cursor-pointer border-0 bg-transparent p-0 text-inherit hover:text-unal-blue transition-colors duration-200" @click="goToSection('referencias')">Referencias</button></li>
  </ol>
</div>

</div>

</div>

<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img
    src="./images/logos/gpima_logo.png"
    alt="GPIMA"
    class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6"
  />
  <img
    src="./images/logos/unal_logo_lateral.png"
    alt="Universidad Nacional de Colombia"
    class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14"
  />
</div>

<!--
La presentación del día de hoy está estructurada de la siguiente manera:

Comenzaremos con la justificación y relevancia de este trabajo; luego presentaremos el marco teórico del problema de investigación, seguido por el estado del arte, a partir de estos estudios y conocimientos se plantea la hipótesis de investigación, se presentarán los objetivos, se explicará la metodología, los resultados, y terminaremos con las conclusiones y un poco sobre el trabajo futuro.

Comencemos con la justificación.
-->

---
level: 2
src: ./pages/01_justificacion.md
---

---
level: 2
src: ./pages/02_marco_teorico.md
---

---
level: 2
src: ./pages/03_estado_del_arte.md
---

---
level: 2
src: ./pages/04_pregunta_hipotesis.md
---

---
level: 2
src: ./pages/05_objetivos.md
---

---
level: 2
src: ./pages/06_metodologia.md
---

---
level: 2
src: ./pages/07_resultados.md
---

---
level: 2
src: ./pages/08_conclusiones.md
---

---
level: 2
src: ./pages/09_trabajo_futuro.md
---

---
level: 2
src: ./pages/10_referencias.md
---
