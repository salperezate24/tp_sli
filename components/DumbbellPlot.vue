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
    leftLabel?: string
    rightLabel?: string
    leftColor?: string
    rightColor?: string
    showDelta?: boolean
    compact?: boolean
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
  },
)

// Internal SVG coordinate system (560 wide, height computed from rows)
const W = 560
const LABEL_W = 132
const DELTA_W = 50
const CHART_L = LABEL_W
const CHART_W = W - LABEL_W - DELTA_W // 378
const PAD_TOP = 20
const PAD_BOT = 20
const SEP_EXTRA = 7
const DOT_R = 6

const RH = computed(() => (props.compact ? 14 : 20))

// Cumulative Y center for each row, accounting for separator gaps
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

const ticks = [0, 0.25, 0.5, 0.75, 1.0]

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
function deltaFill(row: DumbbellRow): string {
  return row.rightVal >= row.leftVal ? rowRightColor(row) : '#ef4444'
}
</script>

<template>
  <svg :viewBox="`0 0 ${W} ${svgH}`" style="width: 100%; height: auto; display: block">
    <!-- Vertical grid lines -->
    <line
      v-for="t in ticks"
      :key="`g${t}`"
      :x1="xPx(t)" :x2="xPx(t)"
      :y1="PAD_TOP - 4" :y2="svgH - PAD_BOT"
      stroke="#EDECEA" stroke-width="1.5"
    />

    <!-- Legend -->
    <circle :cx="CHART_L + 5" :cy="10" :r="DOT_R - 1" :fill="leftColor" />
    <text :x="CHART_L + 14" y="14" font-size="8" fill="#6b7280" font-family="IBM Plex Sans,sans-serif">{{ leftLabel }}</text>
    <circle :cx="CHART_L + 118" :cy="10" :r="DOT_R - 1" :fill="rightColor" />
    <text :x="CHART_L + 127" y="14" font-size="8" fill="#6b7280" font-family="IBM Plex Sans,sans-serif">{{ rightLabel }}</text>

    <!-- Data rows -->
    <g v-for="(row, i) in rows" :key="`r${i}`">
      <!-- Dashed separator line above this row -->
      <line
        v-if="row.separator && i > 0"
        :x1="CHART_L - 4" :x2="CHART_L + CHART_W"
        :y1="rowYs[i] - RH / 2 - SEP_EXTRA / 2"
        :y2="rowYs[i] - RH / 2 - SEP_EXTRA / 2"
        stroke="#e5e7eb" stroke-width="0.75" stroke-dasharray="3 2"
      />

      <!-- Row label -->
      <text
        :x="CHART_L - 5"
        :y="rowYs[i] + 3.5"
        font-size="9.5"
        text-anchor="end"
        :fill="row.highlight ? '#3981BF' : '#374151'"
        :font-weight="row.highlight ? '700' : '400'"
        font-family="IBM Plex Sans,sans-serif"
      >{{ row.label }}</text>

      <!-- Connecting track between dots -->
      <line
        :x1="xPx(Math.min(row.leftVal, row.rightVal))"
        :x2="xPx(Math.max(row.leftVal, row.rightVal))"
        :y1="rowYs[i]" :y2="rowYs[i]"
        stroke="#E5E7EB" stroke-width="4"
      />

      <!-- Left dot (control) -->
      <circle
        :cx="xPx(row.leftVal)" :cy="rowYs[i]"
        :r="DOT_R" :fill="rowLeftColor(row)"
        stroke="white" stroke-width="2.5"
      />

      <!-- Right dot (TL or custom) -->
      <circle
        :cx="xPx(row.rightVal)" :cy="rowYs[i]"
        :r="DOT_R" :fill="rowRightColor(row)"
        stroke="white" stroke-width="2.5"
      />

      <!-- Delta annotation in fixed right column -->
      <text
        v-if="showDelta"
        :x="W - DELTA_W + 2" :y="rowYs[i] + 3.5"
        font-size="8" font-weight="600"
        :fill="deltaFill(row)"
        font-family="IBM Plex Sans,sans-serif"
      >{{ fmtDelta(row) }}</text>
    </g>

    <!-- X axis line -->
    <line
      :x1="CHART_L" :x2="CHART_L + CHART_W"
      :y1="svgH - PAD_BOT" :y2="svgH - PAD_BOT"
      stroke="#d1d5db" stroke-width="1"
    />

    <!-- Tick marks and value labels -->
    <g v-for="t in ticks" :key="`t${t}`">
      <line
        :x1="xPx(t)" :x2="xPx(t)"
        :y1="svgH - PAD_BOT" :y2="svgH - PAD_BOT + 3"
        stroke="#d1d5db" stroke-width="1"
      />
      <text
        :x="xPx(t)" :y="svgH - PAD_BOT + 13"
        font-size="7.5" text-anchor="middle"
        fill="#9ca3af" font-family="IBM Plex Sans,sans-serif"
      >{{ t.toFixed(2) }}</text>
    </g>

    <!-- X axis label -->
    <text
      :x="CHART_L + CHART_W / 2" :y="svgH - 2"
      font-size="8" text-anchor="middle"
      fill="#6b7280" font-weight="500" font-family="IBM Plex Sans,sans-serif"
    >{{ xLabel }}</text>
  </svg>
</template>
