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

const show = computed(() => SECTIONS.some(s => s.id === section.value))

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
      <template v-for="(s, i) in SECTIONS" :key="s.id">
        <span
          v-if="i > 0"
          class="pointer-events-none shrink-0 select-none text-[8px] font-light text-[#262626] opacity-30 sm:text-[9px]"
          aria-hidden="true"
        >·</span>
        <button
          type="button"
          class="shrink-0 cursor-pointer whitespace-nowrap border-0 bg-transparent p-0 text-[7px] font-semibold uppercase tracking-[0.1em] transition-opacity duration-200 sm:text-[8px] sm:tracking-[0.14em] md:text-[9px] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#3981BF]"
          :class="section === s.id
            ? 'text-[#3981BF] opacity-100'
            : 'text-[#262626] opacity-25 hover:opacity-60'"
          @click="goToSection(s.id)"
        >
          {{ s.label }}
        </button>
      </template>
    </div>
  </nav>
</template>
