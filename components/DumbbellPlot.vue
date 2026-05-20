<script setup lang="ts">
import { computed } from 'vue'

export interface DumbbellRow {
  label: string
  leftVal: number
  rightVal: number
  highlight?: boolean
  separator?: boolean
  leftColor?: string
  rightColor?: string
}

const props = withDefaults(
  defineProps<{
    rows: DumbbellRow[]
    xMin?: number
    xMax?: number
    xLabel?: string
    caption?: string
    leftLabel?: string
    rightLabel?: string
    leftColor?: string
    rightColor?: string
    showDelta?: boolean
    compact?: boolean
    chartWidth?: string
  }>(),
  {
    xMin: 0,
    xMax: 1,
    xLabel: 'mAP50',
    leftLabel: 'Control',
    rightLabel: 'Con transferencia de aprendizaje',
    leftColor: '#9ca3af',
    rightColor: '#3981BF',
    showDelta: true,
    compact: false,
    chartWidth: '77%',
  },
)

// ── Layout ──────────────────────────────────────────────────────────────────
// W=1640 mirrors the reference dumbbell() in archive/thesis-charts.js.
// The Slidev canvas is ~870px wide, so the SVG scales DOWN to 0.53× — this
// is the only reliable way to avoid row-stacking in a flex container.
const W       = 1640
const LABEL_W = 330
const DELTA_W = 250
const CHART_L = LABEL_W
const CHART_W = W - LABEL_W - DELTA_W  // 1060

const PAD_TOP   = 44
const PAD_BOT   = 130
const SEP_EXTRA = 20
const DOT_R     = 9

const RH = computed(() => (props.compact ? 38 : 60))

// ── Geometry ────────────────────────────────────────────────────────────────
const rowYs = computed<number[]>(() => {
  const ys: number[] = []
  let y = PAD_TOP
  for (let i = 0; i < props.rows.length; i++) {
    if (i > 0 && props.rows[i].separator) y += SEP_EXTRA
    ys.push(y + RH.value / 2)
    y += RH.value
  }
  return ys
})

const svgH = computed(() => {
  const last = rowYs.value.at(-1) ?? PAD_TOP
  return Math.ceil(last + RH.value / 2 + PAD_BOT)
})

function xPx(v: number): number {
  return CHART_L + ((v - props.xMin) / (props.xMax - props.xMin)) * CHART_W
}

const ticks = computed(() => {
  const step = 0.25
  const result: number[] = []
  for (let t = props.xMin; t <= props.xMax + 0.001; t = Math.round((t + step) * 1000) / 1000)
    result.push(t)
  return result
})

const minorTicks = computed(() => {
  const step = 0.05
  const result: number[] = []
  for (let t = props.xMin; t <= props.xMax + 0.001; t = Math.round((t + step) * 1000) / 1000)
    result.push(t)
  return result.filter(t => !ticks.value.includes(t))
})

const maxDeltaIndex = computed(() => {
  let maxD = -Infinity, idx = -1
  props.rows.forEach((row, i) => {
    const d = row.rightVal - row.leftVal
    if (d > maxD) { maxD = d; idx = i }
  })
  return idx
})

// ── Helpers ──────────────────────────────────────────────────────────────────
function fmtDelta(row: DumbbellRow): string {
  const d = row.rightVal - row.leftVal
  return `${d >= 0 ? '+' : ''}${d.toFixed(3)}`
}

function rowLeftColor(row: DumbbellRow): string {
  return row.leftColor ?? props.leftColor
}
function rowRightColor(row: DumbbellRow): string {
  return row.rightColor ?? props.rightColor
}
// Track color + weight encode jump magnitude: larger Δ → darker, thicker
function trackStroke(row: DumbbellRow): string {
  const d = Math.abs(row.rightVal - row.leftVal)
  if (d >= 0.50) return '#A3AEBF'
  if (d >= 0.36) return '#C8D0DC'
  return '#DFE4EC'
}
function trackWidth(row: DumbbellRow): number {
  const d = Math.abs(row.rightVal - row.leftVal)
  if (d >= 0.50) return 6
  if (d >= 0.36) return 5
  return 4
}
</script>

<template>
  <svg
    :viewBox="`0 0 ${W} ${svgH}`"
    :style="`width:${chartWidth};height:auto;display:block`"
  >
    <!-- ── Background grid lines ─────────────────────────────────────────── -->
    <line
      v-for="t in minorTicks"
      :key="`mg${t}`"
      :x1="xPx(t)" :x2="xPx(t)"
      :y1="PAD_TOP - 4" :y2="svgH - PAD_BOT"
      stroke="#C8C4BE" stroke-width="0.5"
    />
    <line
      v-for="t in ticks"
      :key="`g${t}`"
      :x1="xPx(t)" :x2="xPx(t)"
      :y1="PAD_TOP - 4" :y2="svgH - PAD_BOT"
      stroke="#A09A92" stroke-width="1"
    />
    <!-- ── Row rules (horizontal) — guías de lectura por fila ────────────── -->
    <line
      v-for="(y, i) in rowYs"
      :key="`ry${i}`"
      :x1="CHART_L" :x2="CHART_L + CHART_W"
      :y1="y" :y2="y"
      stroke="#C8C4BE" stroke-width="0.5" stroke-dasharray="3 4"
    />

    <!-- ── Legend ────────────────────────────────────────────────────────── -->
    <circle :cx="CHART_L + 14"  :cy="22" :r="DOT_R - 2" :fill="leftColor" />
    <text   :x="CHART_L + 30"   y="28"  font-size="7" fill="#9CA3AF" font-family="IBM Plex Sans,sans-serif">{{ leftLabel }}</text>
    <circle :cx="CHART_L + 380" :cy="22" :r="DOT_R - 2" :fill="rightColor" />
    <text   :x="CHART_L + 396"  y="28"  font-size="7" fill="#9CA3AF" font-family="IBM Plex Sans,sans-serif">{{ rightLabel }}</text>
    <text   v-if="showDelta" :x="W - DELTA_W + 8" y="28" font-size="6" fill="#9CA3AF" font-family="IBM Plex Sans,sans-serif">Con TL</text>

    <!-- ── Data rows ─────────────────────────────────────────────────────── -->
    <g v-for="(row, i) in rows" :key="`r${i}`">

      <!-- Family separator: dashed rule + extra whitespace above this row -->
      <line
        v-if="row.separator && i > 0"
        :x1="CHART_L - 6" :x2="CHART_L + CHART_W"
        :y1="rowYs[i] - RH / 2 - SEP_EXTRA / 2"
        :y2="rowYs[i] - RH / 2 - SEP_EXTRA / 2"
        stroke="#D1D5DB" stroke-width="0.75" stroke-dasharray="4 3"
      />

      <!-- Row label — highlighted models in UNAL blue, heavier weight -->
      <text
        :x="CHART_L - 14"
        :y="rowYs[i] + 7"
        font-size="7"
        text-anchor="end"
        :fill="row.highlight ? '#3981BF' : '#374151'"
        :font-weight="row.highlight ? '700' : '400'"
        font-family="IBM Plex Sans,sans-serif"
      >{{ row.label }}</text>

      <!-- Connecting track — darker/thicker when the jump is large -->
      <line
        :x1="xPx(Math.min(row.leftVal, row.rightVal))"
        :x2="xPx(Math.max(row.leftVal, row.rightVal))"
        :y1="rowYs[i]" :y2="rowYs[i]"
        :stroke="trackStroke(row)"
        :stroke-width="trackWidth(row)"
        stroke-linecap="round"
      />

      <!-- Left dot — control (no TL) -->
      <circle
        :cx="xPx(row.leftVal)" :cy="rowYs[i]"
        :r="DOT_R" :fill="rowLeftColor(row)"
        stroke="white" stroke-width="2"
      />

      <!-- Right dot — with TL (or custom color) -->
      <circle
        :cx="xPx(row.rightVal)" :cy="rowYs[i]"
        :r="DOT_R" :fill="rowRightColor(row)"
        stroke="white" stroke-width="2"
      />

      <!-- Valor real del punto derecho (con TL) — azul si la fila está destacada -->
      <text
        v-if="showDelta"
        :x="W - DELTA_W + 8" :y="rowYs[i] + 5"
        font-size="7" font-weight="600" :fill="row.highlight ? '#3981BF' : '#374151'"
        font-family="IBM Plex Sans,sans-serif"
      >{{ row.rightVal.toFixed(3) }}</text>

      <!-- Delta solo para la fila con mayor salto — sub-columna a la derecha del valor -->
      <text
        v-if="showDelta && i === maxDeltaIndex"
        :x="W - DELTA_W + 140" :y="rowYs[i] + 5"
        font-size="5.5" font-weight="400" fill="#9CA3AF"
        font-family="IBM Plex Sans,sans-serif"
      >(Δ{{ fmtDelta(row) }})</text>
    </g>

    <!-- ── X axis ─────────────────────────────────────────────────────────── -->
    <line
      :x1="CHART_L" :x2="CHART_L + CHART_W"
      :y1="svgH - PAD_BOT" :y2="svgH - PAD_BOT"
      stroke="#CBD5E1" stroke-width="1"
    />
    <g v-for="t in ticks" :key="`t${t}`">
      <line
        :x1="xPx(t)" :x2="xPx(t)"
        :y1="svgH - PAD_BOT" :y2="svgH - PAD_BOT + 3"
        stroke="#CBD5E1" stroke-width="1"
      />
      <text
        :x="xPx(t)" :y="svgH - PAD_BOT + 28"
        font-size="7" text-anchor="middle"
        fill="#9CA3AF" font-family="IBM Plex Sans,sans-serif"
      >{{ t.toFixed(2) }}</text>
    </g>
    <text
      :x="CHART_L + CHART_W / 2" :y="svgH - 60"
      font-size="7" text-anchor="middle"
      fill="#6B7280" font-weight="500" font-family="IBM Plex Sans,sans-serif"
    >{{ xLabel }}</text>

    <!-- ── Caption ───────────────────────────────────────────────────────── -->
    <text
      v-if="caption"
      :x="CHART_L + CHART_W / 2" :y="svgH - 24"
      font-size="7" font-style="italic" text-anchor="middle"
      fill="#9CA3AF" font-family="IBM Plex Sans,sans-serif"
    >{{ caption }}</text>
  </svg>
</template>
