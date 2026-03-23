---
theme: seriph
colorSchema: light
background: #F2F2F2
title: Desarrollo de un modelo de red neuronal profunda para la identificación de ovocitos y sus características a través de microscopía polarizada
# Pie de página: visible desde la diapositiva 2 (portada sin pie; ver `ThesisFooter.vue`)
shortAuthor: Salomón Pérez Atencia
shortInstitute: Facultad de Minas
shortTitle: Sustentación de tesis de maestría
# Sin `class: text-center` global: la portada se centra con su propio div; el resto se alinea mejor a la izquierda (p. ej. `class: text-left` en la agenda).
info: |
  Sustentación de tesis de maestría — presentación en Slidev.
drawings:
  persist: false
comark: true
duration: 45min
transition: slide-left

---




<div class="flex h-full flex-col text-center">

<div class="text-3xl leading-tight tracking-tight max-w-5xl mx-auto text-[#3981BF]">
<div class="font-semibold">
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
    <div class="text-lg leading-snug">
      Ingeniero mecánico
    </div>
  </div>

  <div class="mt-4 text-base">
    <div class="font-semibold leading-snug">
      Alejandro Restrepo Martínez, Ph. D.
    </div>
    <div class="leading-snug">
      Director de tesis
    </div>
  </div>

  <div class="mt-4 text-base">
    {{ formattedDate }}
  </div>

  <div class="mt-6 text-base">
    Grupo de Promoción e Investigación en Mecánica Aplicada<br/>
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

---
transition: slide-left
class: text-left
---

<div class="mx-auto flex h-full max-w-6xl -translate-y-6 flex-col justify-center px-10 pb-10 md:-translate-y-10">

<header class="mb-6">
  <h1 class="text-3xl font-bold tracking-tight text-[#262626] sm:text-4xl">Agenda</h1>
  <div class="mt-3 h-1 w-28 max-w-full rounded-full bg-[#A0BF5E]" />
</header>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">

<div class="rounded-xl border border-gray-300/60 border-l-4 border-l-[#3981BF] bg-white/95 px-6 py-5 shadow-md ring-1 ring-gray-900/5 backdrop-blur-sm">
  <p class="mb-3 border-b border-gray-200/90 pb-2.5 text-[11px] font-bold uppercase tracking-wider text-[#3981BF]">Secciones 1–5</p>
  <ol class="list-decimal space-y-2.5 pl-5 text-sm leading-relaxed text-[#262626] marker:font-semibold marker:text-[#3981BF] sm:text-[0.95rem]">
    <li><span class="font-semibold">Justificación</span></li>
    <li><span class="font-semibold">Marco teórico</span></li>
    <li><span class="font-semibold">Estado del arte</span></li>
    <li><span class="font-semibold">Pregunta de investigación e hipótesis</span></li>
    <li><span class="font-semibold">Objetivos</span></li>
  </ol>
</div>

<div class="rounded-xl border border-gray-300/60 border-l-4 border-l-[#A0BF5E] bg-white/95 px-6 py-5 shadow-md ring-1 ring-gray-900/5 backdrop-blur-sm">
  <p class="mb-3 border-b border-gray-200/90 pb-2.5 text-[11px] font-bold uppercase tracking-wider text-[#3981BF]">Secciones 6–10</p>
  <ol class="list-decimal space-y-2.5 pl-5 text-sm leading-relaxed text-[#262626] marker:font-semibold marker:text-[#3981BF] sm:text-[0.95rem]" start="6">
    <li><span class="font-semibold">Metodología</span></li>
    <li><span class="font-semibold">Resultados</span></li>
    <li><span class="font-semibold">Conclusiones</span></li>
    <li><span class="font-semibold">Trabajo futuro</span></li>
    <li><span class="font-semibold">Referencias</span></li>
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
