---
transition: slide-up
deckSection: resultados
---

<div class="slide-deck-shell">
<header class="mb-5 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Resultados: base de datos sintética</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-2">
  <!-- Texto arriba -->
  <div class="flex flex-col gap-1.5 mt-1">
    <ul class="list-none space-y-1 text-[0.75rem] leading-snug text-unal-gray">
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span>
          <span class="font-semibold text-unal-blue">526 392 imágenes</span> generadas · subconjunto de <span class="font-semibold">21 600</span> para entrenamiento
          <span class="ml-1 inline-flex gap-1">
            <span class="rounded bg-unal-blue/10 px-1.5 py-0.5 text-[0.58rem] font-semibold text-unal-blue">train 15 120</span>
            <span class="rounded bg-unal-gray/10 px-1.5 py-0.5 text-[0.58rem] font-semibold text-unal-gray">val 3 240</span>
            <span class="rounded bg-unal-gray/10 px-1.5 py-0.5 text-[0.58rem] font-semibold text-unal-gray">test 3 240</span>
          </span>
        </span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span>4 clases: huso meiótico, ZP, límite citoplasmático, cuerpo polar · etiquetado 100% automático</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span>Imágenes sintéticas reproducen características morfológicas y de contraste de PLM real, validando la consistencia física del modelo</span>
      </li>
    </ul>
    <div class="rounded-md border-l-4 border-unal-green bg-unal-green/10 px-2.5 py-1">
      <p class="text-[0.72rem] leading-snug text-unal-gray">
        <span class="font-bold text-[#3a6a18]">Aporte:</span> primera base de datos de imágenes PLM de ovocitos con anotación multi-clase — no existe ninguna pública equivalente
      </p>
    </div>
  </div>
  <!-- Imágenes abajo en paralelo -->
  <div class="grid min-h-0 flex-1 grid-cols-2 items-end gap-4 max-w-[72%]">
    <figure class="m-0 min-w-0">
      <img
        src="../images/figures/oocyte_synth.png"
        alt="Imagen sintética PLM de ovocito"
        class="h-auto max-h-[min(34vh,215px)] w-full object-contain"
      />
      <figcaption lang="es" class="plm-figcaption text-center">
        <span class="font-semibold text-unal-gray">Sintético</span> — generado en MATLAB
      </figcaption>
    </figure>
    <figure class="m-0 min-w-0">
      <img
        src="../images/figures/diagrams/oocyte_plm.png"
        alt="Imagen PLM real de ovocito"
        class="h-auto max-h-[min(34vh,215px)] w-full object-contain"
      />
      <figcaption lang="es" class="plm-figcaption text-center">
        <span class="font-semibold text-unal-gray">Real</span> — imagen PLM de literatura
      </figcaption>
    </figure>
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>


---
transition: slide-up
deckSection: resultados
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Preentrenamiento sintético y experimento control</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="grid min-h-0 flex-1 grid-cols-2 gap-5">
  <!-- Panel izquierdo: preentrenamiento sintético -->
  <div class="flex flex-col gap-2 rounded-lg border border-unal-blue/30 bg-unal-blue/5 px-3.5 py-3">
    <p class="text-[0.68rem] !font-bold uppercase tracking-wide text-unal-blue">Etapa 1 — Preentrenamiento sintético</p>
    <ul class="list-none space-y-1.5 text-[0.8rem] leading-snug text-unal-gray">
      <li class="flex gap-2">
        <span class="shrink-0 text-unal-green">▸</span>
        <span>Todos los modelos YOLO: <span class="font-semibold text-unal-blue">mAP50 ≈ 0,995</span> · mAP50-95 ≈ 0,995</span>
      </li>
      <li class="flex gap-2">
        <span class="shrink-0 text-unal-green">▸</span>
        <span>RT-DETR: mAP50 = 0,986–0,992</span>
      </li>
      <li class="flex gap-2">
        <span class="shrink-0 text-unal-green">▸</span>
        <span>Convergencia: 61–80 épocas (YOLO) · 86–136 (RT-DETR)</span>
      </li>
      <li class="flex gap-2">
        <span class="shrink-0 text-unal-green">▸</span>
        <span>Precisión y recall ≈ 1,0 en todos los modelos sobre datos sintéticos</span>
      </li>
    </ul>
    <div class="mt-auto rounded bg-unal-blue/10 px-2 py-1 text-[0.7rem] font-semibold text-unal-blue">
      ✓ El flujo de síntesis produce datos de entrenamiento de alta calidad
    </div>
  </div>
  <!-- Panel derecho: experimento control -->
  <div class="flex flex-col gap-2 rounded-lg border border-gray-300 bg-gray-50 px-3.5 py-3">
    <p class="text-[0.68rem] !font-bold uppercase tracking-wide text-unal-gray">Experimento control — Sin transferencia de aprendizaje</p>
    <ul class="list-none space-y-1.5 text-[0.8rem] leading-snug text-unal-gray">
      <li class="flex gap-2">
        <span class="shrink-0 text-red-400">▸</span>
        <span>mAP50 redes estándar (13 config.): <span class="font-semibold text-red-500">0,195 – 0,521</span></span>
      </li>
      <li class="flex gap-2">
        <span class="shrink-0 text-red-400">▸</span>
        <span>mAP50 redes personalizadas (4 config.): <span class="font-semibold text-red-500">0,319 – 0,499</span></span>
      </li>
      <li class="flex gap-2">
        <span class="shrink-0 text-red-400">▸</span>
        <span>mAP50-95: 0,079 – 0,346 — caída severa respecto al dominio sintético</span>
      </li>
      <li class="flex gap-2">
        <span class="shrink-0 text-unal-green">▸</span>
        <span>Mejor control estándar: <span class="font-semibold">YOLOv9s</span> (mAP50 = 0,521) · mejor personalizado: <span class="font-semibold">YOLOv9m-Triple Attention</span> (0,499 vs 0,328 de YOLOv9m base)</span>
      </li>
    </ul>
    <div class="mt-auto rounded bg-red-50 px-2 py-1 text-[0.7rem] font-semibold text-red-600 border border-red-200">
      ✗ La brecha sintético–real es significativa → la transferencia de aprendizaje es indispensable
    </div>
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>


---
transition: slide-up
deckSection: resultados
---

<script setup>
const dumbbell1Rows = [
  { label: 'YOLOv9m',      leftVal: 0.328, rightVal: 0.902, highlight: true },
  { label: 'YOLOv8m',      leftVal: 0.393, rightVal: 0.899 },
  { label: 'YOLOv11s',     leftVal: 0.511, rightVal: 0.892 },
  { label: 'YOLOv11l',     leftVal: 0.425, rightVal: 0.875 },
  { label: 'YOLOv9s',      leftVal: 0.521, rightVal: 0.862 },
  { label: 'YOLOv12s',     leftVal: 0.195, rightVal: 0.855 },
  { label: 'YOLOv11m',     leftVal: 0.501, rightVal: 0.849 },
  { label: 'YOLOv10m',     leftVal: 0.375, rightVal: 0.843 },
  { label: 'YOLOv10s',     leftVal: 0.310, rightVal: 0.834 },
  { label: 'YOLOv8s',      leftVal: 0.232, rightVal: 0.833 },
  { label: 'RT-DETR-R101', leftVal: 0.448, rightVal: 0.902, highlight: true, separator: true },
  { label: 'RT-DETR-R50',  leftVal: 0.348, rightVal: 0.890 },
  { label: 'RT-DETR-L',    leftVal: 0.503, rightVal: 0.857 },
]
</script>

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Impacto de la transferencia de aprendizaje</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-2">
  <div class="grid shrink-0 grid-cols-3 gap-2">
    <div class="rounded-md border-l-4 border-unal-blue bg-unal-blue/10 px-2.5 py-1.5">
      <p class="text-[0.68rem] leading-snug text-unal-gray">
        <span class="font-bold text-unal-blue">Mejores modelos:</span> YOLOv9m y RT-DETR-R101 — mAP50 = 0,902 con TL · YOLOv9m lidera en mAP50-95 (0,627) y velocidad (7,4 ms)
      </p>
    </div>
    <div class="rounded-md border-l-4 border-unal-green bg-unal-green/10 px-2.5 py-1.5">
      <p class="text-[0.68rem] leading-snug text-unal-gray">
        <span class="font-bold text-[#3a6a18]">Mayor salto:</span> YOLOv12s Δ+0,660 · todos los 13 modelos mejoran entre Δ+0,341 y Δ+0,660 — la TL es universal
      </p>
    </div>
    <div class="rounded-md border-l-4 border-gray-400 bg-gray-50 px-2.5 py-1.5">
      <p class="text-[0.68rem] leading-snug text-unal-gray">
        <span class="font-bold text-unal-gray">Sin TL:</span> rango 0,195–0,521 mAP50 · la brecha sintético-real requiere adaptación en todos los casos
      </p>
    </div>
  </div>
  <div class="w-full shrink-0 overflow-hidden">
    <DumbbellPlot
      :rows="dumbbell1Rows"
      leftLabel="Control (sin TL)"
      rightLabel="Con transferencia de aprendizaje"
      :compact="true"
      caption="mAP50 por modelo: control vs. transferencia de aprendizaje"
    />
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>


---
transition: slide-up
deckSection: resultados
---

<script setup>
const dumbbell2Rows = [
  { label: 'Zona pelúcida',      leftVal: 0.457, rightVal: 0.995 },
  { label: 'Huso meiótico',      leftVal: 0.504, rightVal: 0.993 },
  { label: 'Lím. citoplasmático', leftVal: 0.344, rightVal: 0.979 },
  { label: 'Cuerpo polar',       leftVal: 0.007, rightVal: 0.642, highlight: true, leftColor: '#ef4444' },
]
</script>

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Rendimiento por clase — lo que los promedios ocultan</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-4">
  <!-- Tarjetas arriba — compactas -->
  <div class="grid shrink-0 grid-cols-2 gap-2">
    <div class="rounded-md border-l-4 border-unal-green bg-unal-green/10 px-2.5 py-2">
      <span class="text-[0.72rem] font-bold text-[#3a6a18]">Clínicamente relevante:</span><span class="text-[0.72rem] leading-snug text-unal-gray"> ZP (0,995) y huso meiótico (0,993) — los marcadores de madurez nuclear — alcanzan detección casi perfecta.</span>
    </div>
    <div class="flex flex-col gap-1 rounded-lg border border-red-200 bg-red-50 px-2.5 py-1.5">
      <span class="text-[0.65rem] font-bold uppercase tracking-wide text-red-600">Cuerpo polar — el salto más dramático</span>
      <div class="flex items-center justify-center gap-3">
        <div class="text-center shrink-0">
          <div class="text-[1.5rem] font-extrabold leading-none text-red-300">0,007</div>
          <div class="text-[0.58rem] text-gray-400">control</div>
        </div>
        <span class="text-base font-bold text-gray-400">→</span>
        <div class="text-center shrink-0">
          <div class="text-[1.5rem] font-extrabold leading-none text-unal-blue">0,642</div>
          <div class="text-[0.58rem] text-gray-400">con TL</div>
        </div>
      </div>
      <span class="text-[0.63rem] leading-snug text-unal-gray text-center">Morfología variable impide sintetizarlo — la TL en datos reales es indispensable.</span>
    </div>
  </div>
  <!-- Gráfico -->
  <div class="w-full shrink-0 overflow-hidden">
    <DumbbellPlot
      :rows="dumbbell2Rows"
      leftLabel="Control (sin TL)"
      rightLabel="Con transferencia de aprendizaje"
      :compact="false"
      leftColor="#9ca3af"
      chartWidth="85%"
      caption="mAP50 por clase · YOLOv9m: control vs. transferencia de aprendizaje"
    />
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>


---
transition: slide-up
deckSection: resultados
---

<script setup>
const dumbbell3Rows = [
  { label: 'YOLOv9m',             leftVal: 0.328, rightVal: 0.902, highlight: true },
  { label: 'YOLOv9m-CBAM',        leftVal: 0.470, rightVal: 0.868, rightColor: '#A0BF5E' },
  { label: 'YOLOv9m-Triple Att.', leftVal: 0.499, rightVal: 0.878, rightColor: '#A0BF5E' },
  { label: 'YOLO11m',             leftVal: 0.501, rightVal: 0.849, separator: true },
  { label: 'YOLO11m-Cons. Att.',  leftVal: 0.319, rightVal: 0.846, rightColor: '#A0BF5E' },
  { label: 'YOLO11m-Trans. Enh.', leftVal: 0.381, rightVal: 0.841, rightColor: '#A0BF5E' },
]
</script>

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <div class="flex items-center gap-3">
    <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Módulos de atención — ventaja en control, convergencia con TL</h1>
    <span class="shrink-0 rounded-md bg-unal-green/25 px-2.5 py-0.5 text-[0.65rem] font-bold text-[#3a6a18] ring-1 ring-unal-green/50">★ Aporte</span>
  </div>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-3">
  <div class="grid shrink-0 grid-cols-2 gap-2">
    <div class="rounded-md border-l-4 border-unal-green bg-unal-green/10 px-2.5 py-2">
      <span class="text-[0.72rem] font-bold text-[#3a6a18]">Control (sin TL):</span>
      <span class="text-[0.72rem] leading-snug text-unal-gray"> CBAM (+0,142) y Triple Att. (+0,171) superan al baseline — la atención mejora la transferencia sintético→real.</span>
    </div>
    <div class="rounded-md border-l-4 border-unal-blue bg-unal-blue/10 px-2.5 py-2">
      <span class="text-[0.72rem] font-bold text-unal-blue">Con TL:</span>
      <span class="text-[0.72rem] leading-snug text-unal-gray"> brecha &lt;3 puntos — todos convergen en 0,84–0,90 · CBAM mantiene ventaja en citolimit (0,986 vs 0,979).</span>
    </div>
  </div>
  <div class="w-full shrink-0 overflow-hidden">
    <DumbbellPlot
      :rows="dumbbell3Rows"
      leftLabel="Control"
      rightLabel="Con TL (azul = estándar · verde = atención)"
      :compact="false"
      chartWidth="85%"
      caption="mAP50 global: modelos con atención vs. baseline — control y con transferencia de aprendizaje"
    />
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>


---
transition: slide-up
deckSection: resultados
---

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <div class="flex items-center gap-3">
    <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Módulos de atención — mapas de activación (P4)</h1>
    <span class="shrink-0 rounded-md bg-unal-green/25 px-2.5 py-0.5 text-[0.65rem] font-bold text-[#3a6a18] ring-1 ring-unal-green/50">★ Aporte</span>
  </div>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="grid min-h-0 flex-1 grid-cols-2 gap-6">
  <!-- YOLOv9m base (sin atención) -->
  <div class="flex flex-col gap-2">
    <figure class="m-0 min-h-0 flex-1">
      <img
        src="../images/figures/results/stage18_yolov9m_features.png"
        alt="Mapas de características YOLOv9m — stage 18, P4"
        class="h-full w-full object-contain"
      />
    </figure>
    <figcaption lang="es" class="shrink-0 text-center text-[0.65rem] italic text-gray-500">
      <span class="font-semibold text-unal-gray">(a) YOLOv9m</span> — activaciones difusas, sin foco en ZP ni citolimit.
    </figcaption>
  </div>
  <!-- YOLOv9m-CBAM activation map -->
  <div class="flex flex-col gap-2">
    <figure class="m-0 min-h-0 flex-1">
      <img
        src="../images/figures/results/stage19_yolov9m_cbam_features.png"
        alt="Mapas de características YOLOv9m-CBAM — stage 19, P4"
        class="h-full w-full object-contain"
      />
    </figure>
    <figcaption lang="es" class="shrink-0 text-center text-[0.65rem] italic text-gray-500">
      <span class="font-semibold text-unal-gray">(b) YOLOv9m-CBAM</span> — activaciones localizadas en ZP y citolimit.
    </figcaption>
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>


---
transition: slide-up
deckSection: resultados
---

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Evaluación en video</h1>
  <div class="mt-1 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-2">
  <p class="shrink-0 text-[0.7rem] leading-snug text-unal-gray/70">Las métricas sobre imágenes estáticas no capturan el comportamiento temporal. Evaluamos YOLOv9m vs. YOLOv9m-CBAM en 3 secuencias PLM reales.</p>
  <div class="grid min-h-0 flex-1 grid-cols-3 gap-3">
    <!-- Secuencia 1 -->
    <div class="flex flex-col gap-1.5 rounded-xl border border-gray-200 bg-white shadow-sm border-l-[5px] border-l-unal-blue px-3 py-2.5">
      <div class="flex items-center gap-2">
        <span class="rounded-full bg-unal-blue/10 px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-wide text-unal-blue">Sec. 1</span>
        <span class="text-[0.7rem] font-bold text-unal-blue font-mono">OpenPolScope</span>
      </div>
      <span class="text-[0.63rem] leading-none text-unal-gray/60">Meiosis I · 100 fotogramas</span>
      <div class="rounded border-l-4 border-gray-300 bg-gray-50 px-2 py-1">
        <span class="text-[0.6rem] font-semibold text-gray-500">Reto — </span><span class="text-[0.6rem] leading-tight text-unal-gray">El huso cambia de posición — visibilidad variable entre fotogramas</span>
      </div>
      <div class="rounded bg-unal-blue/10 border-l-4 border-unal-blue px-2 py-1">
        <span class="text-[0.6rem] font-semibold text-unal-blue">Hallazgo — </span><span class="text-[0.6rem] leading-tight text-unal-gray">Citolimit: YOLOv9m 4/100 → CBAM <span class="font-bold text-unal-blue">100/100</span> fotogramas</span>
      </div>
    </div>
    <!-- Secuencia 2 -->
    <div class="flex flex-col gap-1.5 rounded-xl border border-gray-200 bg-white shadow-sm border-l-[5px] border-l-unal-blue px-3 py-2.5">
      <div class="flex items-center gap-2">
        <span class="rounded-full bg-unal-blue/10 px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-wide text-unal-blue">Sec. 2</span>
        <span class="text-[0.7rem] font-bold text-unal-blue font-mono">OOSIGHT</span>
      </div>
      <span class="text-[0.63rem] leading-none text-unal-gray/60">ICSI · 150 fotogramas</span>
      <div class="rounded border-l-4 border-gray-300 bg-gray-50 px-2 py-1">
        <span class="text-[0.6rem] font-semibold text-gray-500">Reto — </span><span class="text-[0.6rem] leading-tight text-unal-gray">Aguja de inyección en campo — artefacto de alto contraste que confunde al modelo</span>
      </div>
      <div class="rounded bg-unal-blue/10 border-l-4 border-unal-blue px-2 py-1">
        <span class="text-[0.6rem] font-semibold text-unal-blue">Hallazgo — </span><span class="text-[0.6rem] leading-tight text-unal-gray">YOLOv9m: <span class="font-bold text-red-500">538 FP</span> de huso · CBAM: solo <span class="font-bold text-unal-blue">7 FP</span></span>
      </div>
    </div>
    <!-- Secuencia 3 -->
    <div class="flex flex-col gap-1.5 rounded-xl border border-gray-200 bg-white shadow-sm border-l-[5px] border-l-unal-green px-3 py-2.5">
      <div class="flex items-center gap-2">
        <span class="rounded-full bg-unal-green/15 px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-wide text-[#3a6a18]">Sec. 3</span>
        <span class="text-[0.7rem] font-bold text-[#3a6a18] font-mono">OptimFert</span>
      </div>
      <span class="text-[0.63rem] leading-none text-unal-gray/60">Prague IVF · 660 fotogramas</span>
      <div class="rounded border-l-4 border-gray-300 bg-gray-50 px-2 py-1">
        <span class="text-[0.6rem] font-semibold text-gray-500">Reto — </span><span class="text-[0.6rem] leading-tight text-unal-gray">Logotipo superpuesto + herramienta de micromanipulación — múltiples fuentes de falsos positivos</span>
      </div>
      <div class="rounded bg-unal-green/15 border-l-4 border-unal-green px-2 py-1">
        <span class="text-[0.6rem] font-semibold text-[#3a6a18]">Hallazgo — </span><span class="text-[0.6rem] leading-tight text-unal-gray">YOLOv9m: <span class="font-bold text-red-500">1.710 FP</span> · CBAM: 4 clases en <span class="font-bold text-[#3a6a18]">todos los 660 fotogramas</span></span>
      </div>
    </div>
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>


---
transition: slide-up
deckSection: resultados
---

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Secuencia 1: <span class="font-mono text-unal-blue">OpenPolScope</span> — meiosis I</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-2">
  <div class="grid grid-cols-2 gap-4 max-w-[92%] mx-auto">
    <figure class="m-0 min-w-0">
      <div class="aspect-video w-full min-w-0 overflow-hidden rounded-lg bg-black/5 shadow-md ring-1 ring-gray-900/10">
        <iframe
          class="h-full w-full border-0"
          width="560" height="315"
          src="https://www.youtube.com/embed/a1OraXCZyKk?si=vNbHO_YAyjI98A__&autoplay=1&mute=1&playsinline=1&loop=1&playlist=a1OraXCZyKk"
          title="YOLOv9m — Secuencia 1 OpenPolScope meiosis I"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
      <figcaption lang="es" class="plm-figcaption">
        <span class="font-semibold text-unal-gray">Video 1.</span>
        YOLOv9m — detección en secuencia 1 (<span class="font-mono">OpenPolScope</span>, meiosis I).
      </figcaption>
    </figure>
    <figure class="m-0 min-w-0">
      <div class="aspect-video w-full min-w-0 overflow-hidden rounded-lg bg-black/5 shadow-md ring-1 ring-gray-900/10">
        <iframe
          class="h-full w-full border-0"
          width="560" height="315"
          src="https://www.youtube.com/embed/lKPqXQZH1k0?si=8EwhGaEoiE1JphMS&autoplay=1&mute=1&playsinline=1&loop=1&playlist=lKPqXQZH1k0"
          title="YOLOv9m-CBAM — Secuencia 1 OpenPolScope meiosis I"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
      <figcaption lang="es" class="plm-figcaption">
        <span class="font-semibold text-unal-gray">Video 2.</span>
        YOLOv9m-CBAM — detección en secuencia 1 (<span class="font-mono">OpenPolScope</span>, meiosis I).
      </figcaption>
    </figure>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full border-collapse text-[0.65rem] leading-snug text-unal-gray sm:text-[0.68rem]">
      <thead>
        <tr class="border-b-2 border-unal-gray">
          <th class="py-1 pr-3 text-left font-semibold">Clase</th>
          <th class="px-2 py-1 text-center font-semibold" colspan="3">YOLOv9m (100 fotogr.)</th>
          <th class="px-2 py-1 text-center font-semibold" colspan="3">YOLOv9m-CBAM (100 fotogr.)</th>
        </tr>
        <tr class="border-b border-gray-300 text-[0.62rem] text-gray-500">
          <th class="py-0.5 pr-3 text-left font-normal"></th>
          <th class="px-2 py-0.5 text-center font-medium">Detecc.</th>
          <th class="px-2 py-0.5 text-center font-medium">Fotogr.</th>
          <th class="px-2 py-0.5 text-center font-medium">Confianza</th>
          <th class="px-2 py-0.5 text-center font-medium">Detecc.</th>
          <th class="px-2 py-0.5 text-center font-medium">Fotogr.</th>
          <th class="px-2 py-0.5 text-center font-medium">Confianza</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-gray-200">
          <td class="py-0.5 pr-3 font-medium">Zona pelúcida (zp)</td>
          <td class="px-2 py-0.5 text-center">100</td>
          <td class="px-2 py-0.5 text-center">100</td>
          <td class="px-2 py-0.5 text-center">[0,48; 0,92]</td>
          <td class="px-2 py-0.5 text-center">100</td>
          <td class="px-2 py-0.5 text-center">100</td>
          <td class="px-2 py-0.5 text-center font-semibold text-unal-blue">[0,94; 0,95]</td>
        </tr>
        <tr class="border-b border-gray-200 bg-unal-blue/5">
          <td class="py-0.5 pr-3 font-semibold text-unal-blue">Límite citopl. (citolimit)</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">4</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">4</td>
          <td class="px-2 py-0.5 text-center">[0,51; 0,89]</td>
          <td class="px-2 py-0.5 text-center font-semibold text-unal-blue">100</td>
          <td class="px-2 py-0.5 text-center font-semibold text-unal-blue">100</td>
          <td class="px-2 py-0.5 text-center font-semibold text-unal-blue">[0,90; 0,96]</td>
        </tr>
        <tr class="border-b border-gray-200">
          <td class="py-0.5 pr-3 font-medium">Huso meiótico (spindle)</td>
          <td class="px-2 py-0.5 text-center">74</td>
          <td class="px-2 py-0.5 text-center">73</td>
          <td class="px-2 py-0.5 text-center">[0,58; 0,95]</td>
          <td class="px-2 py-0.5 text-center">74</td>
          <td class="px-2 py-0.5 text-center">74</td>
          <td class="px-2 py-0.5 text-center">[0,45; 0,89]</td>
        </tr>
        <tr>
          <td class="py-0.5 pr-3 font-medium">Cuerpo polar (pb)</td>
          <td class="px-2 py-0.5 text-center">5</td>
          <td class="px-2 py-0.5 text-center">5</td>
          <td class="px-2 py-0.5 text-center">[0,46; 0,82]</td>
          <td class="px-2 py-0.5 text-center">6</td>
          <td class="px-2 py-0.5 text-center">6</td>
          <td class="px-2 py-0.5 text-center">[0,46; 0,58]</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="rounded-md border-l-4 border-unal-blue bg-unal-blue/10 px-2 py-0.5">
    <p class="text-[0.72rem] leading-snug text-unal-gray">
      <span class="font-bold uppercase tracking-wide text-unal-blue">Diferencia más marcada:</span> <span class="font-semibold">Citolimit:</span> YOLOv9m lo detecta en solo 4 fotogramas; YOLOv9m-CBAM lo detecta en <span class="font-semibold text-unal-blue">todos los 100</span> con confianza estable [0,90; 0,96].
    </p>
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img
    src="../images/logos/gpima_logo.png"
    alt="GPIMA"
    class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6"
  />
  <img
    src="../images/logos/unal_logo_lateral.png"
    alt="Universidad Nacional de Colombia"
    class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14"
  />
</div>


---
transition: slide-up
deckSection: resultados
---

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Secuencia 2: <span class="font-mono text-unal-blue">OOSIGHT-Spindle View</span> — ICSI</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-2">
  <div class="grid grid-cols-2 gap-4 max-w-[92%] mx-auto">
    <figure class="m-0 min-w-0">
      <div class="aspect-video w-full min-w-0 overflow-hidden rounded-lg bg-black/5 shadow-md ring-1 ring-gray-900/10">
        <iframe
          class="h-full w-full border-0"
          width="560" height="315"
          src="https://www.youtube.com/embed/01CZ1IEIHjI?autoplay=1&mute=1&playsinline=1&loop=1&playlist=01CZ1IEIHjI"
          title="YOLOv9m — Secuencia 2 OOSIGHT-Spindle View ICSI"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
      <figcaption lang="es" class="plm-figcaption">
        <span class="font-semibold text-unal-gray">Video 3.</span>
        YOLOv9m — detección en secuencia 2 (<span class="font-mono">OOSIGHT-Spindle View</span>, ICSI).
      </figcaption>
    </figure>
    <figure class="m-0 min-w-0">
      <div class="aspect-video w-full min-w-0 overflow-hidden rounded-lg bg-black/5 shadow-md ring-1 ring-gray-900/10">
        <iframe
          class="h-full w-full border-0"
          width="560" height="315"
          src="https://www.youtube.com/embed/mO-GYGNMnw8?autoplay=1&mute=1&playsinline=1&loop=1&playlist=mO-GYGNMnw8"
          title="YOLOv9m-CBAM — Secuencia 2 OOSIGHT-Spindle View ICSI"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
      <figcaption lang="es" class="plm-figcaption">
        <span class="font-semibold text-unal-gray">Video 4.</span>
        YOLOv9m-CBAM — detección en secuencia 2 (<span class="font-mono">OOSIGHT-Spindle View</span>, ICSI).
      </figcaption>
    </figure>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full border-collapse text-[0.65rem] leading-snug text-unal-gray sm:text-[0.68rem]">
      <thead>
        <tr class="border-b-2 border-unal-gray">
          <th class="py-1 pr-3 text-left font-semibold">Clase</th>
          <th class="px-2 py-1 text-center font-semibold" colspan="3">YOLOv9m (146 fotogr.)</th>
          <th class="px-2 py-1 text-center font-semibold" colspan="3">YOLOv9m-CBAM (150 fotogr.)</th>
        </tr>
        <tr class="border-b border-gray-300 text-[0.62rem] text-gray-500">
          <th class="py-0.5 pr-3 text-left font-normal"></th>
          <th class="px-2 py-0.5 text-center font-medium">Detecc.</th>
          <th class="px-2 py-0.5 text-center font-medium">Fotogr.</th>
          <th class="px-2 py-0.5 text-center font-medium">Confianza</th>
          <th class="px-2 py-0.5 text-center font-medium">Detecc.</th>
          <th class="px-2 py-0.5 text-center font-medium">Fotogr.</th>
          <th class="px-2 py-0.5 text-center font-medium">Confianza</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-gray-200">
          <td class="py-0.5 pr-3 font-medium">Zona pelúcida (zp)</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">18</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">17</td>
          <td class="px-2 py-0.5 text-center">[0,41; 0,80]</td>
          <td class="px-2 py-0.5 text-center font-semibold text-unal-blue">150</td>
          <td class="px-2 py-0.5 text-center font-semibold text-unal-blue">150</td>
          <td class="px-2 py-0.5 text-center font-semibold text-unal-blue">[0,81; 0,96]</td>
        </tr>
        <tr class="border-b border-gray-200 bg-unal-blue/5">
          <td class="py-0.5 pr-3 font-semibold text-unal-blue">Límite citopl. (citolimit)</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">1</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">1</td>
          <td class="px-2 py-0.5 text-center">0,44</td>
          <td class="px-2 py-0.5 text-center font-semibold text-unal-blue">148</td>
          <td class="px-2 py-0.5 text-center font-semibold text-unal-blue">148</td>
          <td class="px-2 py-0.5 text-center font-semibold text-unal-blue">[0,67; 0,95]</td>
        </tr>
        <tr class="border-b border-gray-200">
          <td class="py-0.5 pr-3 font-medium">Huso meiótico (spindle)</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">538*</td>
          <td class="px-2 py-0.5 text-center">144</td>
          <td class="px-2 py-0.5 text-center">[0,40; 0,94]</td>
          <td class="px-2 py-0.5 text-center">151†</td>
          <td class="px-2 py-0.5 text-center">146</td>
          <td class="px-2 py-0.5 text-center">[0,42; 0,87]</td>
        </tr>
        <tr>
          <td class="py-0.5 pr-3 font-medium">Cuerpo polar (pb)</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">61*</td>
          <td class="px-2 py-0.5 text-center text-red-500">44</td>
          <td class="px-2 py-0.5 text-center">[0,40; 0,87]</td>
          <td class="px-2 py-0.5 text-center">3</td>
          <td class="px-2 py-0.5 text-center">3</td>
          <td class="px-2 py-0.5 text-center">[0,55; 0,75]</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="7" class="pt-1 text-[0.6rem] text-gray-500 leading-snug">* YOLOv9m: numerosos falsos positivos sobre la herramienta de inyección. † YOLOv9m-CBAM: 7 falsos positivos de spindle.</td>
        </tr>
      </tfoot>
    </table>
  </div>
  <div class="rounded-md border-l-4 border-unal-blue bg-unal-blue/10 px-2 py-0.5">
    <p class="text-[0.72rem] leading-snug text-unal-gray">
      <span class="font-bold uppercase tracking-wide text-unal-blue">Diferencia más marcada:</span> <span class="font-semibold">YOLOv9m</span> confunde la aguja de inyección con huso meiótico (538 detecc., ~FP masivos) y detecta zp solo en 17 fotogramas. <span class="font-semibold text-unal-blue">YOLOv9m-CBAM</span> detecta zp y citolimit en toda la secuencia, incluidos los tramos de inyección y deformación, con solo 7 FP de spindle.
    </p>
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img
    src="../images/logos/gpima_logo.png"
    alt="GPIMA"
    class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6"
  />
  <img
    src="../images/logos/unal_logo_lateral.png"
    alt="Universidad Nacional de Colombia"
    class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14"
  />
</div>


---
transition: slide-left
deckSection: resultados
---

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Secuencia 3: <span class="font-mono text-unal-blue">OptimFert</span> — <span class="font-mono text-unal-blue">Prague IVF</span></h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-2">
  <div class="grid grid-cols-2 gap-4">
    <figure class="m-0 min-w-0">
      <div class="aspect-video w-full min-w-0 overflow-hidden rounded-lg bg-black/5 shadow-md ring-1 ring-gray-900/10">
        <iframe
          class="h-full w-full border-0"
          width="560" height="315"
          src="https://www.youtube.com/embed/f007H86yr2A?autoplay=1&mute=1&playsinline=1&loop=1&playlist=f007H86yr2A"
          title="YOLOv9m — Secuencia 3 OptimFert Prague IVF"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
      <figcaption lang="es" class="plm-figcaption">
        <span class="font-semibold text-unal-gray">Video 5.</span>
        YOLOv9m — detección en secuencia 3 (<span class="font-mono">OptimFert</span>, <span class="font-mono">Prague IVF</span>).
      </figcaption>
    </figure>
    <figure class="m-0 min-w-0">
      <div class="aspect-video w-full min-w-0 overflow-hidden rounded-lg bg-black/5 shadow-md ring-1 ring-gray-900/10">
        <iframe
          class="h-full w-full border-0"
          width="560" height="315"
          src="https://www.youtube.com/embed/HsXPM1nb5y4?autoplay=1&mute=1&playsinline=1&loop=1&playlist=HsXPM1nb5y4"
          title="YOLOv9m-CBAM — Secuencia 3 OptimFert Prague IVF"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
      <figcaption lang="es" class="plm-figcaption">
        <span class="font-semibold text-unal-gray">Video 6.</span>
        YOLOv9m-CBAM — detección en secuencia 3 (<span class="font-mono">OptimFert</span>, <span class="font-mono">Prague IVF</span>).
      </figcaption>
    </figure>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full border-collapse text-[0.65rem] leading-snug text-unal-gray sm:text-[0.68rem]">
      <thead>
        <tr class="border-b-2 border-unal-gray">
          <th class="py-1 pr-3 text-left font-semibold">Clase</th>
          <th class="px-2 py-1 text-center font-semibold" colspan="3">YOLOv9m (660 fotogr.)</th>
          <th class="px-2 py-1 text-center font-semibold" colspan="3">YOLOv9m-CBAM (660 fotogr.)</th>
        </tr>
        <tr class="border-b border-gray-300 text-[0.62rem] text-gray-500">
          <th class="py-0.5 pr-3 text-left font-normal"></th>
          <th class="px-2 py-0.5 text-center font-medium">Detecc.</th>
          <th class="px-2 py-0.5 text-center font-medium">Fotogr.</th>
          <th class="px-2 py-0.5 text-center font-medium">Confianza</th>
          <th class="px-2 py-0.5 text-center font-medium">Detecc.</th>
          <th class="px-2 py-0.5 text-center font-medium">Fotogr.</th>
          <th class="px-2 py-0.5 text-center font-medium">Confianza</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-gray-200">
          <td class="py-0.5 pr-3 font-medium">Zona pelúcida (zp)</td>
          <td class="px-2 py-0.5 text-center">660</td>
          <td class="px-2 py-0.5 text-center">660</td>
          <td class="px-2 py-0.5 text-center">[0,48; 0,95]</td>
          <td class="px-2 py-0.5 text-center font-semibold text-unal-blue">660</td>
          <td class="px-2 py-0.5 text-center font-semibold text-unal-blue">660</td>
          <td class="px-2 py-0.5 text-center font-semibold text-unal-blue">[0,95; 0,97]</td>
        </tr>
        <tr class="border-b border-gray-200 bg-unal-blue/5">
          <td class="py-0.5 pr-3 font-semibold text-unal-blue">Límite citopl. (citolimit)</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">0</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">0</td>
          <td class="px-2 py-0.5 text-center text-gray-400">—</td>
          <td class="px-2 py-0.5 text-center font-semibold text-unal-blue">660</td>
          <td class="px-2 py-0.5 text-center font-semibold text-unal-blue">660</td>
          <td class="px-2 py-0.5 text-center font-semibold text-unal-blue">[0,94; 0,96]</td>
        </tr>
        <tr class="border-b border-gray-200">
          <td class="py-0.5 pr-3 font-medium">Huso meiótico (spindle)</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">1710*</td>
          <td class="px-2 py-0.5 text-center">660</td>
          <td class="px-2 py-0.5 text-center">[0,40; 0,95]</td>
          <td class="px-2 py-0.5 text-center">570</td>
          <td class="px-2 py-0.5 text-center">570</td>
          <td class="px-2 py-0.5 text-center">[0,50; 0,90]</td>
        </tr>
        <tr>
          <td class="py-0.5 pr-3 font-medium">Cuerpo polar (pb)</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">238*</td>
          <td class="px-2 py-0.5 text-center text-red-500">208</td>
          <td class="px-2 py-0.5 text-center">[0,40; 0,65]</td>
          <td class="px-2 py-0.5 text-center font-semibold text-unal-blue">510</td>
          <td class="px-2 py-0.5 text-center font-semibold text-unal-blue">510</td>
          <td class="px-2 py-0.5 text-center font-semibold text-unal-blue">[0,61; 0,82]</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="7" class="pt-1 text-[0.6rem] text-gray-500 leading-snug">* YOLOv9m: numerosos falsos positivos (logotipo superpuesto y herramienta de micromanipulación).</td>
        </tr>
      </tfoot>
    </table>
  </div>
  <div class="rounded-md border-l-4 border-unal-blue bg-unal-blue/10 px-2 py-0.5">
    <p class="text-[0.72rem] leading-snug text-unal-gray">
      <span class="font-bold uppercase tracking-wide text-unal-blue">Diferencia más marcada:</span> <span class="font-semibold">YOLOv9m</span> nunca detecta citolimit, genera 1710 detecc. de spindle (FP masivos por logotipo y herramienta) y pierde el huso real desde el fotograma 300. <span class="font-semibold text-unal-blue">YOLOv9m-CBAM</span> detecta las cuatro clases en toda la secuencia con confianzas altas y estables.
    </p>
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img
    src="../images/logos/gpima_logo.png"
    alt="GPIMA"
    class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6"
  />
  <img
    src="../images/logos/unal_logo_lateral.png"
    alt="Universidad Nacional de Colombia"
    class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14"
  />
</div>


