---
transition: slide-up
deckSection: resultados
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Resultados: base de datos sintética</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-6">
  <div class="flex flex-col justify-center gap-3">
    <figure class="m-0 min-w-0">
      <img
        src="../images/figures/oocyte_synth.png"
        alt="Imagen sintética PLM de ovocito"
        class="h-auto max-h-[min(38vh,240px)] w-full object-contain"
      />
      <figcaption lang="es" class="plm-figcaption text-center">
        <span class="font-semibold text-unal-gray">Sintético</span> — imagen generada en MATLAB
      </figcaption>
    </figure>
    <figure class="m-0 min-w-0">
      <img
        src="../images/figures/diagrams/oocyte_plm.png"
        alt="Imagen PLM real de ovocito"
        class="h-auto max-h-[min(18vh,110px)] w-full object-contain"
      />
      <figcaption lang="es" class="plm-figcaption text-center">
        <span class="font-semibold text-unal-gray">Real</span> — imagen PLM de literatura
      </figcaption>
    </figure>
  </div>
  <div class="flex flex-col justify-center gap-2.5">
    <ul class="list-none space-y-2 text-sm leading-snug text-unal-gray sm:text-sm">
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold text-unal-blue">526 392 imágenes</span> generadas · subconjunto de <span class="font-semibold">21 600</span> usado para entrenamiento (15 120 / 3 240 / 3 240)</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span>4 clases modeladas: huso meiótico, ZP, límite citoplasmático, cuerpo polar · etiquetado 100% automático</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span>Las imágenes sintéticas reproducen las características morfológicas y de contraste observadas en PLM real, validando la consistencia física del modelo</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold">OocytePaperImages:</span> 200 imágenes PLM reales recopiladas de publicaciones científicas, curadas y anotadas manualmente para transferencia de aprendizaje</span>
      </li>
    </ul>
    <div class="rounded-md border-l-4 border-unal-green bg-unal-green/10 px-2.5 py-1.5">
      <p class="text-[0.72rem] leading-snug text-unal-gray">
        <span class="font-bold text-[#3a6a18]">Aporte:</span> primera base de datos de imágenes PLM de ovocitos con anotación multi-clase — no existe ninguna pública equivalente
      </p>
    </div>
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>

<!--
Con eso claro, pasemos a los resultados. El primer resultado es la base de datos sintética en sí misma, porque sin datos no hay modelo.

Generamos 526,392 imágenes en MATLAB usando el modelo físico de retardo óptico — y de esas seleccionamos 21,600 para entrenamiento. La ventaja fundamental: el etiquetado es 100% automático por definición paramétrica. No hubo ninguna intervención manual. Como vemos en la figura de la izquierda, las imágenes sintéticas reproducen visualmente las características que veríamos en PLM real: la zona pelúcida como un anillo birrefringente, el huso como una elipse de bajo contraste, el cuerpo polar y el límite citoplasmático.

El complemento real es OocytePaperImages: 200 imágenes PLM recopiladas de publicaciones científicas, curadas y anotadas manualmente, que actúan como el puente hacia el dominio real. Esta combinación — 21,600 sintéticas para escala, 200 reales para dominio — es lo que hace viable el enfoque con datos tan limitados.
-->

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
    <p class="text-[0.68rem] font-bold uppercase tracking-wide text-unal-blue">Etapa 1 — Preentrenamiento sintético</p>
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
    <p class="text-[0.68rem] font-bold uppercase tracking-wide text-unal-gray">Experimento control — Sin transferencia de aprendizaje</p>
    <ul class="list-none space-y-1.5 text-[0.8rem] leading-snug text-unal-gray">
      <li class="flex gap-2">
        <span class="shrink-0 text-red-400">▸</span>
        <span>mAP50 sobre imágenes reales: <span class="font-semibold text-red-500">0,241 – 0,698</span></span>
      </li>
      <li class="flex gap-2">
        <span class="shrink-0 text-red-400">▸</span>
        <span>mAP50-95: 0,036 – 0,340 — caída severa respecto al dominio sintético</span>
      </li>
      <li class="flex gap-2">
        <span class="shrink-0 text-unal-green">▸</span>
        <span>Mejor control: <span class="font-semibold">YOLOv9m-Triple Attention</span> (mAP50 = 0,499 vs 0,328 baseline) — los modelos con atención transfieren mejor</span>
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

<!--
El primer experimento fue preentrenar todos los modelos en la base sintética. El resultado fue excelente: todos los modelos YOLO alcanzaron mAP50 de 0,995 con precisión y recall de 1,0. RT-DETR llegó a 0,986–0,992. El flujo de síntesis produce datos de entrenamiento de altísima calidad.

Pero ahí viene el problema que justifica todo lo demás. Cuando tomamos esos modelos — perfectos en datos sintéticos — y los evaluamos directamente sobre las 40 imágenes reales sin ningún ajuste adicional, el mAP50 colapsa a un rango de 0,241 a 0,698. Eso es la brecha sintético-real.

Este resultado es esperado y es una confirmación positiva: el conjunto sintético funciona para aprender morfología, pero el dominio visual difiere suficientemente del real como para requerir una segunda etapa de ajuste. Hay un hallazgo adicional aquí: los modelos con módulos de atención transfieren mejor, en particular YOLOv9m-Triple Attention alcanzó 0,499 sin ningún dato real de ajuste — más del doble que el modelo estándar en el mismo escenario.
-->

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
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">La brecha sintético-real y el valor de la transferencia de aprendizaje</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-2">
  <DumbbellPlot
    :rows="dumbbell1Rows"
    leftLabel="Control (sin TL)"
    rightLabel="Con transferencia de aprendizaje"
    :compact="true"
  />
  <div class="grid grid-cols-3 gap-2">
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
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>

<!--
Con la transferencia de aprendizaje, el rendimiento cambia completamente. Este gráfico muestra los 13 modelos evaluados. El punto gris es el mAP50 en el experimento de control — solo con preentrenamiento sintético, sin datos reales. El punto azul es el mAP50 después de la transferencia de aprendizaje. La línea que los conecta es la mancuerna: su longitud muestra el salto.

El patrón es consistente en los 13 modelos: todos mejoran. El rango de control va de 0,195 a 0,521. Después de la transferencia, el rango sube a 0,833–0,902. Los dos mejores — YOLOv9m y RT-DETR-R101 — empatan en mAP50 de 0,902. La diferencia está en mAP50-95 y velocidad: YOLOv9m obtiene 0,627 en mAP50-95 en 7,4 milisegundos, frente a 0,612 y 14,8 milisegundos de RT-DETR. YOLOv12s tiene el salto más grande — Δ+0,660 — porque partía del control más bajo.

YOLOv9m queda como el modelo de referencia para el análisis que sigue.
-->

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
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Rendimiento por clase — lo que las métricas globales ocultan</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-3">
  <p class="text-[0.7rem] text-unal-gray/70 -mt-1">YOLOv9m — mAP50 por clase: experimento control vs. transferencia de aprendizaje</p>
  <DumbbellPlot
    :rows="dumbbell2Rows"
    leftLabel="Control (sin TL)"
    rightLabel="Con transferencia de aprendizaje"
    :compact="false"
    leftColor="#9ca3af"
  />
  <div class="grid grid-cols-2 gap-3 mt-1">
    <div class="rounded-md border-l-4 border-unal-green bg-unal-green/10 px-2.5 py-2">
      <p class="text-[0.69rem] leading-snug text-unal-gray">
        <span class="font-bold text-[#3a6a18]">Clínicamente relevante:</span> ZP (0,995) y huso meiótico (0,993) — los marcadores de madurez nuclear — alcanzan detección casi perfecta. La evaluación de madurez en tiempo real es viable.
      </p>
    </div>
    <div class="rounded-lg border border-red-200 bg-red-50 px-2.5 py-2">
      <p class="text-[0.63rem] font-bold uppercase tracking-wide text-red-600 mb-1">Cuerpo polar — el salto más dramático</p>
      <div class="flex items-center gap-3 px-1">
        <div class="text-center shrink-0">
          <p class="text-[1.4rem] font-extrabold leading-none text-red-300">0,007</p>
          <p class="mt-0.5 text-[0.56rem] text-gray-400">YOLOv9m control</p>
        </div>
        <div class="text-base font-bold text-unal-gray">→</div>
        <div class="text-center shrink-0">
          <p class="text-[1.4rem] font-extrabold leading-none text-unal-blue">0,642</p>
          <p class="mt-0.5 text-[0.56rem] text-gray-500">YOLOv9m con TL</p>
        </div>
        <p class="text-[0.62rem] leading-snug text-unal-gray">Morfología variable impide sintetizarlo — el TL en datos reales es indispensable.</p>
      </div>
    </div>
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>

<!--
Hasta ahora hemos visto métricas globales. Ahora veamos qué ocurre estructura por estructura, porque eso es lo que tiene significado clínico.

Los puntos rojos muestran el rendimiento en control — solo preentrenamiento sintético. Los azules, tras la transferencia de aprendizaje. Zona pelúcida, huso meiótico y límite citoplasmático ya tienen un punto de control relativamente alto porque el modelo sintético los captura bien. La transferencia los lleva a 0,979–0,995.

El cuerpo polar es diferente. Su punto rojo está prácticamente en cero — 0,007 — porque su morfología variable no se puede capturar sintéticamente. La mancuerna más larga de este gráfico es también la más importante: de 0,007 a 0,642. Ese Δ+0,635 confirma algo crucial: el cuerpo polar requiere datos reales. Sin la segunda etapa de transferencia, esta estructura sería indetectable.

Clínicamente, lo que importa es el huso meiótico a 0,993 — el marcador de madurez nuclear — y la zona pelúcida a 0,995. Con esos dos valores, la evaluación de madurez en tiempo real es viable.
-->

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
<div class="grid min-h-0 flex-1 grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-4">
  <div class="flex flex-col gap-2">
    <p class="text-[0.68rem] text-unal-gray/70">Control (sin TL) → Con transferencia de aprendizaje — mAP50 global</p>
    <DumbbellPlot
      :rows="dumbbell3Rows"
      leftLabel="Control"
      rightLabel="Con TL (azul = estándar · verde = atención)"
      :compact="false"
    />
    <div class="grid grid-cols-2 gap-2 mt-1">
      <div class="rounded-md border-l-4 border-unal-green bg-unal-green/10 px-2 py-1.5">
        <p class="text-[0.67rem] leading-snug text-unal-gray">
          <span class="font-bold text-[#3a6a18]">Control:</span> CBAM (+0,142) y Triple Att. (+0,171) superan al baseline YOLOv9m — la atención mejora la transferencia de dominio
        </p>
      </div>
      <div class="rounded-md border-l-4 border-unal-blue bg-unal-blue/10 px-2 py-1.5">
        <p class="text-[0.67rem] leading-snug text-unal-gray">
          <span class="font-bold text-unal-blue">Con TL:</span> brecha &lt;3 puntos — todos convergen · CBAM mantiene ventaja específica en citolimit (0,986 vs 0,979)
        </p>
      </div>
    </div>
  </div>
  <div class="flex flex-col justify-center gap-2.5">
    <figure class="m-0 min-w-0">
      <img
        src="../images/figures/results/stage18_features.png"
        alt="Mapas de características YOLOv9m vs YOLOv9m-CBAM — stage 18"
        class="h-auto max-h-[min(42vh,260px)] w-full object-contain"
      />
      <figcaption lang="es" class="plm-figcaption">
        <span class="font-semibold text-unal-gray">Fig. 14.</span>
        Mapas de activación (P4) — CBAM produce activaciones más localizadas en ZP y citolimit.
      </figcaption>
    </figure>
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>

<!--
Desarrollamos cuatro variantes con módulos de atención: CBAM y Triple Attention sobre YOLOv9m, y Conservative Attention y Transformer Enhanced sobre YOLO11m.

El gráfico muestra los seis modelos — dos baselines y cuatro personalizados. El punto gris es el control, el azul es con transferencia de aprendizaje.

El hallazgo más claro está en el escenario de control. YOLOv9m-Triple Attention alcanza 0,499 y CBAM 0,470, frente al 0,328 del baseline. Los módulos de atención mejoran significativamente la transferencia de dominio sintético-a-real — cuando los datos reales son escasos, la atención ayuda.

Con transferencia de aprendizaje, la ventaja en mAP50 global se reduce a menos de 3 puntos. Todos convergen en el rango 0,84–0,90. Pero CBAM muestra una ventaja específica que persiste: citolimit de 0,986 frente a 0,979 del baseline. Los mapas de activación de la derecha explican por qué — CBAM produce activaciones más localizadas y compactas para el límite citoplasmático. Esa diferencia de 0,7 puntos en imagen estática se amplifica en video.
-->

---
transition: slide-up
deckSection: resultados
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Evaluación en video — tres escenarios de dificultad creciente</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-3">
  <p class="text-[0.72rem] leading-snug text-unal-gray/70">Las métricas sobre imágenes estáticas no capturan el comportamiento temporal. Evaluamos YOLOv9m vs. YOLOv9m-CBAM en 3 secuencias PLM reales — <span class="font-semibold text-unal-gray">requiere conexión a internet.</span></p>
  <div class="grid flex-1 grid-cols-3 gap-3">
    <!-- Secuencia 1 -->
    <div class="flex flex-col gap-2 rounded-xl border-2 border-unal-blue/30 bg-unal-blue/5 px-3.5 py-3">
      <div class="flex items-center gap-2">
        <span class="rounded-full bg-unal-blue px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-white">Sec. 1</span>
        <span class="text-[0.72rem] font-bold text-unal-blue font-mono">OpenPolScope</span>
      </div>
      <p class="text-[0.68rem] text-unal-gray/60 -mt-1">Meiosis I · 100 fotogramas</p>
      <div class="rounded-md bg-amber-50 border border-amber-200 px-2 py-1.5">
        <p class="text-[0.64rem] font-semibold text-amber-700 mb-0.5">Reto</p>
        <p class="text-[0.64rem] leading-snug text-unal-gray">El huso cambia de posición durante la meiosis — visibilidad variable entre fotogramas</p>
      </div>
      <div class="rounded-md bg-unal-blue/10 px-2 py-1.5 mt-auto">
        <p class="text-[0.64rem] font-semibold text-unal-blue mb-0.5">Hallazgo clave</p>
        <p class="text-[0.64rem] leading-snug text-unal-gray">Citolimit: YOLOv9m 4/100 fotogramas → CBAM <span class="font-bold text-unal-blue">100/100</span></p>
      </div>
    </div>
    <!-- Secuencia 2 -->
    <div class="flex flex-col gap-2 rounded-xl border-2 border-unal-blue/50 bg-unal-blue/10 px-3.5 py-3">
      <div class="flex items-center gap-2">
        <span class="rounded-full bg-unal-blue px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-white">Sec. 2</span>
        <span class="text-[0.72rem] font-bold text-unal-blue font-mono">OOSIGHT</span>
      </div>
      <p class="text-[0.68rem] text-unal-gray/60 -mt-1">ICSI · 150 fotogramas</p>
      <div class="rounded-md bg-amber-50 border border-amber-200 px-2 py-1.5">
        <p class="text-[0.64rem] font-semibold text-amber-700 mb-0.5">Reto</p>
        <p class="text-[0.64rem] leading-snug text-unal-gray">Aguja de inyección en campo visual — artefacto de alto contraste que confunde al modelo</p>
      </div>
      <div class="rounded-md bg-unal-blue/10 px-2 py-1.5 mt-auto">
        <p class="text-[0.64rem] font-semibold text-unal-blue mb-0.5">Hallazgo clave</p>
        <p class="text-[0.64rem] leading-snug text-unal-gray">YOLOv9m: <span class="font-bold text-red-500">538 FP</span> de huso · CBAM: solo <span class="font-bold text-unal-blue">7 FP</span></p>
      </div>
    </div>
    <!-- Secuencia 3 -->
    <div class="flex flex-col gap-2 rounded-xl border-2 border-unal-green/50 bg-unal-green/10 px-3.5 py-3">
      <div class="flex items-center gap-2">
        <span class="rounded-full bg-unal-green px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-white">Sec. 3</span>
        <span class="text-[0.72rem] font-bold text-[#3a6a18] font-mono">OptimFert</span>
      </div>
      <p class="text-[0.68rem] text-unal-gray/60 -mt-1">Prague IVF · 660 fotogramas</p>
      <div class="rounded-md bg-amber-50 border border-amber-200 px-2 py-1.5">
        <p class="text-[0.64rem] font-semibold text-amber-700 mb-0.5">Reto</p>
        <p class="text-[0.64rem] leading-snug text-unal-gray">Logotipo superpuesto + herramienta de micromanipulación — múltiples fuentes de falsos positivos</p>
      </div>
      <div class="rounded-md bg-unal-green/20 px-2 py-1.5 mt-auto">
        <p class="text-[0.64rem] font-semibold text-[#3a6a18] mb-0.5">Hallazgo clave</p>
        <p class="text-[0.64rem] leading-snug text-unal-gray">YOLOv9m: <span class="font-bold text-red-500">1.710 FP</span> de huso · CBAM: 4 clases detectadas en <span class="font-bold text-[#3a6a18]">todos los 660 fotogramas</span></p>
      </div>
    </div>
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>

<!--
Hasta aquí hemos visto los resultados cuantitativos. Vamos ahora a la evaluación en video — que es, en última instancia, el escenario más cercano al uso clínico real.

Vamos a ver tres secuencias PLM reales. En cada una se comparan dos modelos en paralelo: YOLOv9m estándar a la izquierda y YOLOv9m-CBAM a la derecha. Los videos requieren conexión a internet.
-->

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

<!--
Pasemos a la primera secuencia. Estos dos videos muestran el mismo segmento — una grabación OpenPolScope del proceso de meiosis — procesado con YOLOv9m estándar a la izquierda y con YOLOv9m-CBAM a la derecha.

La diferencia más llamativa está en el límite citoplasmático, marcado en la tabla. YOLOv9m lo detecta en apenas 4 de los 100 fotogramas. YOLOv9m-CBAM lo detecta en todos los 100, con una confianza notable y estable entre 0,90 y 0,96. No es una diferencia marginal: es la diferencia entre detectar o no detectar esa estructura en prácticamente toda la secuencia.

En zona pelúcida, ambos modelos detectan en todos los fotogramas, pero la confianza de YOLOv9m varía entre 0,48 y 0,92 — inestable — mientras que CBAM mantiene entre 0,94 y 0,95 de forma consistente. Para el huso meiótico, ambos coinciden: lo pierden en el tramo de fotogramas 21 a 46, donde el huso cambia de posición durante la meiosis y su visibilidad disminuye incluso para el ojo experto.
-->

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

<!--
Esta secuencia muestra algo más exigente: un procedimiento de ICSI real, con aguja de inyección dentro del campo visual. La aguja introduce un artefacto de alto contraste que confunde al modelo.

YOLOv9m genera 538 detecciones de huso meiótico en 146 fotogramas — la mayoría son falsos positivos sobre la herramienta. La zona pelúcida solo la detecta en 17 fotogramas. El modelo estándar básicamente se pierde en presencia de la aguja.

YOLOv9m-CBAM detecta zona pelúcida en todos los 150 fotogramas con confianza entre 0,81 y 0,96. Detecta el límite citoplasmático en 148 de los 150. El huso meiótico presenta solo 7 falsos positivos en toda la secuencia — nada comparado con los 538 del baseline. Incluso durante los fotogramas de deformación — cuando la aguja está en contacto y el ovocito se deforma visiblemente — CBAM mantiene las detecciones correctas.
-->

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

<!--
La tercera secuencia es la más larga: 660 fotogramas de un proceso completo de fecundación in vitro, con cambios morfológicos significativos. Hay un logotipo superpuesto en la imagen, una herramienta de micromanipulación, y el huso cambia de forma cuando el cuerpo polar se separa.

YOLOv9m detecta zona pelúcida correctamente en toda la secuencia, pero confunde sistemáticamente el logotipo con huso meiótico, la herramienta con huso en múltiples tramos, y pierde el huso real a partir del fotograma 300. 1,710 detecciones de huso meiótico en 660 fotogramas — un número que por sí solo dice que algo va mal.

YOLOv9m-CBAM detecta zona pelúcida y límite citoplasmático en todos los 660 fotogramas, con confianza estable. El huso meiótico se pierde temporalmente hacia el fotograma 390 — que es exactamente cuando está cambiando de forma durante la división — y se recupera hacia el 479. El fotograma 374, que vemos en la tabla, es especialmente ilustrativo: YOLOv9m no detecta ni huso ni cuerpo polar; CBAM detecta las cuatro estructuras correctamente.
-->

