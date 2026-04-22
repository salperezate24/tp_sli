<script setup lang="ts">
const bars = [
  { label: '<35',   value: 50.3, color: '#4a8f1e' },
  { label: '35–37', value: 40.5, color: '#7aab10' },
  { label: '38–40', value: 28.1, color: '#d49010' },
  { label: '41–42', value: 14.9, color: '#d05818' },
  { label: '>42',   value: 4.1,  color: '#dc2626' },
]

const W = 480, H = 270
const PL = 44, PB = 46, PT = 30, PR = 10
const CW = W - PL - PR
const CH = H - PT - PB
const BW = CW / bars.length
const MAX = 55

function yp(v: number) {
  return PT + CH - (v / MAX) * CH
}

const gridLines = [0, 20, 40]

const rects = bars.map((b, i) => {
  const bx = PL + i * BW + BW * 0.15
  const bwi = BW * 0.70
  const by = yp(b.value)
  return { ...b, bx, bwi, by, bh: CH - (by - PT), cx: PL + i * BW + BW / 2 }
})
</script>

<template>
  <svg
    :viewBox="`0 0 ${W} ${H}`"
    xmlns="http://www.w3.org/2000/svg"
    style="width:100%;max-width:340px;height:auto;display:block;font-size:0"
    aria-label="Tasas de nacidos vivos por edad materna (SART 2024)"
  >
    <!-- Líneas de cuadrícula -->
    <template v-for="v in gridLines" :key="v">
      <line :x1="PL" :y1="yp(v)" :x2="W - PR" :y2="yp(v)" stroke="#EDECEA" stroke-width="1" />
      <text
        :x="PL - 4" :y="yp(v) + 3.5"
        style="font-size:11px" text-anchor="end"
        fill="#9CA3AF" font-family="IBM Plex Sans,sans-serif"
      >{{ v }}%</text>
    </template>

    <!-- Barras -->
    <template v-for="b in rects" :key="b.label">
      <rect :x="b.bx" :y="b.by" :width="b.bwi" :height="b.bh" rx="3" :fill="b.color" opacity="0.88" />
      <!-- Valor sobre la barra -->
      <text
        :x="b.cx" :y="b.by - 5"
        style="font-size:12px;font-weight:700" text-anchor="middle"
        :fill="b.color" font-family="IBM Plex Sans,sans-serif"
      >{{ b.value }}%</text>
      <!-- Etiqueta de edad bajo el eje -->
      <text
        :x="b.cx" :y="H - PB + 14"
        style="font-size:11px" text-anchor="middle"
        fill="#374151" font-family="IBM Plex Sans,sans-serif"
      >{{ b.label }}</text>
    </template>

    <!-- Eje X -->
    <line :x1="PL" :y1="H - PB" :x2="W - PR" :y2="H - PB" stroke="#D1D5DB" stroke-width="1" />
  </svg>
</template>
