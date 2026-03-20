<!--
  Ensayo: gráfico de barras horizontales (tasas por edad) extraído de la diapositiva de justificación.

  Alternativa tipo Looker Studio / Data Studio:
  - Publicas un informe o gráfico en Looker Studio, copias «Insertar informe» (iframe) y lo envuelves
    en un componente con <iframe src="..." /> (requiere URL pública, conexión a datos y estilo del iframe).
  - Pros: datos vivos, filtros. Contras: dependencia de red, menos control tipográfico UNAL, riesgo si el embed deja de ser público.
  Este componente: offline, mismo look que la tesis, versionado en git.
-->
<script setup lang="ts">
import { computed } from 'vue'

export interface AgeBarRow {
  label: string
  /** % del ancho del track (eje 0–maxScale; p. ej. 54/60 ≈ 90 %) */
  widthPercent: number
}

const props = withDefaults(
  defineProps<{
    /** Escala máxima del eje X (etiquetas equiespaciadas) */
    maxScale?: number
    rows?: AgeBarRow[]
    xAxisLabel?: string
    barColor?: string
  }>(),
  {
    maxScale: 60,
    xAxisLabel: 'Tasa aprox. de nacidos vivos (%)',
    barColor: '#3981BF',
    rows: () => [
      { label: '<35', widthPercent: 90 },
      { label: '35–37', widthPercent: 70 },
      { label: '38–40', widthPercent: 46.667 },
      { label: '41–42', widthPercent: 21.667 },
      { label: '43–44', widthPercent: 8.333 },
      { label: '>44', widthPercent: 3.333 },
    ],
  },
)

const tickValues = computed(() => {
  const step = props.maxScale / 3
  return [0, step, step * 2, props.maxScale].map((n) =>
    Number.isInteger(n) ? n : Math.round(n),
  )
})
</script>

<template>
  <div class="mt-0 flex gap-1.5 text-[11px] text-[#262626] sm:gap-2 sm:text-[13px]">
    <div class="flex w-11 shrink-0 flex-col gap-1 sm:w-12">
      <span
        v-for="row in rows"
        :key="row.label"
        class="flex h-3 items-center leading-none sm:h-3.5"
      >{{ row.label }}</span>
    </div>
    <div class="flex min-w-0 flex-1 flex-col rounded-md border border-gray-300/70 bg-gray-50/80 shadow-sm">
      <div class="relative px-2 pt-0.5 pb-0">
        <div
          class="pointer-events-none absolute inset-x-2 top-0.5 bottom-0"
          aria-hidden="true"
        >
          <div class="relative h-full border-l border-gray-300/90">
            <div
              class="absolute bottom-0 top-0 w-px bg-gray-300/90"
              style="left: 33.333%"
            />
            <div
              class="absolute bottom-0 top-0 w-px bg-gray-300/90"
              style="left: 66.667%"
            />
            <div
              class="absolute right-0 bottom-0 top-0 w-px bg-gray-300/90"
            />
          </div>
        </div>
        <div class="relative z-[1] space-y-1">
          <div
            v-for="row in rows"
            :key="`bar-${row.label}`"
            class="h-2.5 w-full rounded-sm bg-gray-200/90 sm:h-3"
          >
            <div
              class="h-2.5 rounded-sm shadow-sm sm:h-3"
              :style="{
                width: `${row.widthPercent}%`,
                backgroundColor: barColor,
              }"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-0 border-t border-[#262626]/80 px-0 py-0 leading-none">
        <div class="flex justify-between font-medium tabular-nums text-[10px] leading-none text-[#262626] sm:text-[10px]">
          <span v-for="t in tickValues" :key="t">{{ t }}</span>
        </div>
        <p class="-mt-px mb-0 text-center text-[10px] font-medium leading-tight text-gray-600 sm:text-[11px]">
          {{ xAxisLabel }}
        </p>
      </div>
    </div>
  </div>
</template>
