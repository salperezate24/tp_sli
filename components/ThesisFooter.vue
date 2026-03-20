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

const slideNo = computed(() => Math.max(0, $page.value - 1))
const slideTotal = computed(() => Math.max(0, ($nav.value?.total ?? 0) - 1))
const show = computed(() => slideNo.value > 0 && slideTotal.value > 0)

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
    class="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-3 overflow-hidden text-[10px] leading-none text-white shadow-[0_-1px_0_rgba(0,0,0,0.08)] sm:text-[11px]"
  >
    <!-- author in head/foot: bg=blue_unal, fg=white -->
    <div
      class="min-w-0 bg-[#3981BF] px-2 py-1 text-center font-medium sm:px-3"
    >
      {{ leftLine }}
    </div>
    <!-- title in head/foot: bg=dark_gray, fg=white -->
    <div
      class="min-w-0 truncate bg-[#262626] px-2 py-1 text-center font-medium sm:px-3"
    >
      {{ shortTitle }}
    </div>
    <!-- date in head/foot: bg=green_unal, fg=white -->
    <div
      class="min-w-0 bg-[#A0BF5E] px-2 py-1 text-right tabular-nums sm:px-3"
    >
      <span>{{ formattedDate }}</span>
      <span class="ml-3 font-semibold text-white">{{ slideNo }}/{{ slideTotal }}</span>
    </div>
  </div>
</template>
