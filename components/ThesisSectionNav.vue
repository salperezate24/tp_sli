<script setup lang="ts">
/**
 * Barra de secciones alineada con la Agenda (sin Referencias).
 * Activa la entrada según `deckSection` en el frontmatter de cada slide.
 * Clic en un nombre → `nav.go()` a la primera diapositiva de esa sección.
 */
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const SECTIONS = [
  { id: 'justificacion', label: 'Introducción' },
  { id: 'marco', label: 'Marco teórico' },
  { id: 'estado', label: 'Estado del arte' },
  { id: 'pregunta', label: 'Pregunta e hipótesis' },
  { id: 'objetivos', label: 'Objetivos' },
  { id: 'metodologia', label: 'Metodología' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'conclusiones', label: 'Conclusiones' },
  { id: 'trabajo_futuro', label: 'Trabajo futuro' },
] as const

type SectionId = (typeof SECTIONS)[number]['id']

const nav = useNav()

const section = computed(() => {
  const fm = nav.currentSlideRoute.value?.meta?.slide?.frontmatter as
    | Record<string, unknown>
    | undefined
  const raw = fm?.deckSection
  return typeof raw === 'string' ? raw : ''
})

const show = computed(() =>
  SECTIONS.some(s => s.id === section.value) || section.value === 'referencias'
)

function frontmatterDeckSection(route: (typeof nav.slides.value)[number]): string {
  const fm = route.meta?.slide?.frontmatter as Record<string, unknown> | undefined
  const raw = fm?.deckSection
  return typeof raw === 'string' ? raw : ''
}

/** Primera diapositiva de cada `deckSection` (mismo orden que en el deck). */
function firstSlideNoForSection(id: SectionId): number | undefined {
  const found = nav.slides.value.find(r => frontmatterDeckSection(r) === id)
  return found?.no
}

async function goToSection(id: SectionId) {
  const no = firstSlideNoForSection(id)
  if (no != null)
    await nav.go(no, 0)
}

async function goToReferencias() {
  const found = nav.slides.value.find(r => frontmatterDeckSection(r) === 'referencias')
  if (found?.no != null)
    await nav.go(found.no, 0)
}
</script>

<template>
  <!-- Spacer en flujo (altura según diseño del slide); la barra va en absolute encima. -->
  <div
    v-if="show"
    class="h-0 w-full shrink-0 sm:h-0"
    aria-hidden="true"
  />
  <nav
    v-if="show"
    class="absolute top-2 left-3 right-3 z-[5] flex justify-center overflow-x-auto overflow-y-hidden [scrollbar-width:none] sm:top-3 sm:left-4 sm:right-4 [&::-webkit-scrollbar]:hidden"
    aria-label="Ir a sección de la presentación"
  >
    <!-- Una sola línea: nowrap + scroll horizontal si el ancho no alcanza -->
    <div class="flex w-max max-w-none flex-none flex-nowrap items-center gap-x-1 sm:gap-x-1.5">
      <!-- Botón de inicio → diapositiva 1 (portada) -->
      <button
        type="button"
        class="shrink-0 cursor-pointer border-0 bg-transparent p-0 text-unal-gray opacity-25 transition-opacity duration-200 hover:opacity-60 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-unal-blue"
        title="Ir a la portada"
        @click="nav.go(1, 0)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-[9px] w-[9px] sm:h-[10px] sm:w-[10px]"
          aria-hidden="true"
        >
          <path d="M10.707 2.293a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 3 11h1v6a1 1 0 0 0 1 1h4v-4h2v4h4a1 1 0 0 0 1-1v-6h1a1 1 0 0 0 .707-1.707l-7-7Z" />
        </svg>
      </button>
      <span
        class="pointer-events-none shrink-0 select-none text-[8px] font-light text-unal-gray opacity-30 sm:text-[9px]"
        aria-hidden="true"
      >·</span>
      <template v-for="(s, i) in SECTIONS" :key="s.id">
        <span
          v-if="i > 0"
          class="pointer-events-none shrink-0 select-none text-[8px] font-light text-unal-gray opacity-30 sm:text-[9px]"
          aria-hidden="true"
        >·</span>
        <button
          type="button"
          class="shrink-0 cursor-pointer whitespace-nowrap border-0 bg-transparent p-0 text-[6px] font-semibold uppercase tracking-[0.07em] transition-opacity duration-200 sm:text-[7px] sm:tracking-[0.1em] md:text-[8px] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-unal-blue"
          :class="section === s.id
            ? 'text-unal-blue opacity-100'
            : 'text-unal-gray opacity-25 hover:opacity-60'"
          @click="goToSection(s.id)"
        >
          {{ s.label }}
        </button>
      </template>
      <!-- Botón de bibliografía → diapositiva de referencias -->
      <span
        class="pointer-events-none shrink-0 select-none text-[8px] font-light text-unal-gray opacity-30 sm:text-[9px]"
        aria-hidden="true"
      >·</span>
      <button
        type="button"
        class="shrink-0 cursor-pointer border-0 bg-transparent p-0 transition-opacity duration-200 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-unal-blue"
        :class="section === 'referencias'
          ? 'text-unal-blue opacity-100'
          : 'text-unal-gray opacity-25 hover:opacity-60'"
        title="Ir a referencias"
        @click="goToReferencias()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-[9px] w-[9px] sm:h-[10px] sm:w-[10px]"
          aria-hidden="true"
        >
          <path d="M10.75 16.82A7.462 7.462 0 0 1 15 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0 0 18 15.06v-11a.75.75 0 0 0-.546-.721A9.006 9.006 0 0 0 15 3a8.963 8.963 0 0 0-4.25 1.065V16.82ZM9.25 4.065A8.963 8.963 0 0 0 5 3c-.85 0-1.673.118-2.454.339A.75.75 0 0 0 2 4.06v11a.75.75 0 0 0 .954.721A7.506 7.506 0 0 1 5 15.5c1.579 0 3.042.487 4.25 1.32V4.065Z" />
        </svg>
      </button>
    </div>
  </nav>
</template>
