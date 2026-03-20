<script setup lang="ts">
/**
 * Paleta alineada con Beamer UNAL:
 * - blue_unal  #3981BF  → autor (y bloque izquierdo del pie)
 * - dark_gray  #262626  → título en pie
 * - green_unal #A0BF5E  → fecha + numeración
 * - background_slide #F2F2F2 → fondo de diapositiva (en slides.md)
 */
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $page, $nav, $slidev } = useSlideContext()

// Slidev ya maneja correctamente el índice de página (`$page`) y el total (`$nav.total`).
// Quitamos los offsets "- 1" para que el footer coincida con la paginación real de Slidev.
const slideNo = computed(() => Math.max(0, $page.value))
const slideTotal = computed(() => Math.max(0, ($nav.value?.total ?? 0)))
// Mantenemos oculto el pie en la portada (página 1) para conservar el comportamiento previo.
const show = computed(() => $page.value > 1 && slideTotal.value > 0)

const formattedDate = computed(() =>
  new Intl.DateTimeFormat('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date()),
)

const cfg = computed(() => {
  const c = $slidev.configs as Record<string, unknown>
  return c ?? {}
})

const leftLine = computed(() => {
  const author = String(cfg.value.shortAuthor ?? '').trim()
  const inst = String(cfg.value.shortInstitute ?? '').trim()
  if (author && inst)
    return `${author} · ${inst}`
  return author || inst
})

const shortTitle = computed(() =>
  String(cfg.value.shortTitle ?? cfg.value.title ?? '').trim(),
)
</script>

<template>
  <div
    v-if="show"
    class="absolute bottom-0 left-0 right-0 z-10 grid overflow-hidden text-[9px] leading-tight text-white shadow-[0_-1px_0_rgba(0,0,0,0.08)] sm:text-[10px] sm:leading-none"
    style="grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr) minmax(0, 0.95fr);"
  >
    <!-- author in head/foot: bg=blue_unal, fg=white -->
    <div
      class="min-w-0 truncate bg-[#3981BF] px-1.5 py-1.5 text-left font-medium sm:px-2.5 sm:py-1"
      :title="leftLine"
    >
      {{ leftLine }}
    </div>
    <!-- title in head/foot: bg=dark_gray, fg=white -->
    <div
      class="min-w-0 truncate bg-[#262626] px-1.5 py-1.5 text-center font-medium sm:px-2.5 sm:py-1"
      :title="shortTitle"
    >
      {{ shortTitle }}
    </div>
    <!-- date in head/foot: bg=green_unal, fg=white -->
    <div
      class="min-w-0 truncate bg-[#A0BF5E] px-1.5 py-1.5 text-right tabular-nums sm:px-2.5 sm:py-1"
    >
      <span class="hidden sm:inline">{{ formattedDate }}</span>
      <span class="sm:hidden">{{ formattedDate.replace(/\s+de\s+/g, ' ') }}</span>
      <span class="ml-2 font-semibold text-white sm:ml-3">{{ slideNo }}/{{ slideTotal }}</span>
    </div>
  </div>
</template>
