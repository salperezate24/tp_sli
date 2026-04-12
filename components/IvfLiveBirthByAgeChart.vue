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

// Gradiente de azul UNAL (#3981BF) a rojo (#DC2626) según posición
function barColorAt(index: number): string {
  const total = props.rows.length - 1
  if (total === 0) return props.barColor
  const t = index / total
  const r = Math.round(57 + t * (220 - 57))
  const g = Math.round(129 + t * (38 - 129))
  const b = Math.round(191 + t * (38 - 191))
  return `rgb(${r}, ${g}, ${b})`
}

// Valor numérico redondeado para mostrar sobre la barra
function displayValue(row: AgeBarRow): string {
  return `${Math.round((row.widthPercent * props.maxScale) / 100)} %`
}

// Primera y última barra se destacan con borde
function isHighlighted(index: number): boolean {
  return index === 0 || index === props.rows.length - 1
}

// Etiqueta dentro de la barra si es suficientemente ancha, fuera si no
function labelStyle(row: AgeBarRow, index: number): Record<string, string> {
  if (row.widthPercent > 30) {
    return { right: '6px', color: '#1f2937' }
  }
  return { left: `calc(${row.widthPercent}% + 5px)`, color: barColorAt(index) }
}
</script>

<template>
  <div class="mt-0 flex gap-1.5 text-[11px] text-unal-gray sm:gap-2 sm:text-[13px]">
    <!-- Etiquetas de edad -->
    <div class="flex w-11 shrink-0 flex-col gap-2 sm:w-12">
      <span
        v-for="(row, i) in rows"
        :key="row.label"
        class="flex h-3 items-center leading-none sm:h-4"
        :class="isHighlighted(i) ? 'font-bold' : ''"
      >{{ row.label }}</span>
    </div>

    <!-- Área del gráfico -->
    <div class="flex min-w-0 flex-1 flex-col rounded-md border border-gray-300/70 bg-gray-50/80 shadow-sm">
      <div class="relative px-2 pt-1 pb-0">
        <!-- Líneas de cuadrícula -->
        <div class="pointer-events-none absolute inset-x-2 top-0.5 bottom-0" aria-hidden="true">
          <div class="relative h-full border-l border-gray-300/90">
            <div class="absolute bottom-0 top-0 w-px bg-gray-300/90" style="left: 33.333%" />
            <div class="absolute bottom-0 top-0 w-px bg-gray-300/90" style="left: 66.667%" />
            <div class="absolute right-0 bottom-0 top-0 w-px bg-gray-300/90" />
          </div>
        </div>

        <!-- Barras -->
        <div class="relative z-[1] space-y-1.5">
          <div
            v-for="(row, i) in rows"
            :key="`bar-${row.label}`"
            class="relative h-3 w-full rounded-sm bg-gray-200/90 sm:h-4"
          >
            <!-- Barra coloreada -->
            <div
              class="h-3 rounded-sm sm:h-4"
              :style="{
                width: `${row.widthPercent}%`,
                backgroundColor: barColorAt(i),
                ...(isHighlighted(i) ? { boxShadow: `0 0 0 1.5px ${barColorAt(i)}` } : {}),
              }"
            />
            <!-- Etiqueta de valor -->
            <span
              class="absolute top-1/2 -translate-y-1/2 text-[10px] font-semibold leading-none sm:text-[11px]"
              :style="labelStyle(row, i)"
            >{{ displayValue(row) }}</span>
          </div>
        </div>
      </div>

      <!-- Eje X -->
      <div class="mt-1 flex flex-col gap-0 border-t border-unal-gray/80 px-0 py-0 leading-none">
        <div class="flex justify-between font-medium tabular-nums text-[10px] leading-none text-unal-gray sm:text-[10px]">
          <span v-for="t in tickValues" :key="t">{{ t }}</span>
        </div>
        <p class="-mt-px mb-0 text-center text-[10px] font-medium leading-tight text-gray-600 sm:text-[11px]">
          {{ xAxisLabel }}
        </p>
      </div>
    </div>
  </div>
</template>
