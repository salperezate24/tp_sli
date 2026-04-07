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
      <figcaption lang="es" class="mt-1 text-center text-[10px] leading-snug text-gray-600 sm:text-[11px]">
        <span class="font-semibold text-unal-gray">Sintético</span> — imagen generada en MATLAB
      </figcaption>
    </figure>
    <figure class="m-0 min-w-0">
      <img
        src="../images/figures/diagrams/oocyte_plm.png"
        alt="Imagen PLM real de ovocito"
        class="h-auto max-h-[min(18vh,110px)] w-full object-contain"
      />
      <figcaption lang="es" class="mt-1 text-center text-[10px] leading-snug text-gray-600 sm:text-[11px]">
        <span class="font-semibold text-unal-gray">Real</span> — imagen PLM de literatura
      </figcaption>
    </figure>
  </div>
  <div class="flex flex-col justify-center gap-2.5">
    <ul class="list-none space-y-2 text-[0.8rem] leading-snug text-unal-gray sm:text-[0.84rem]">
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
        <span><span class="font-semibold">OocytePaperImages:</span> 200 imágenes PLM reales recopiladas de publicaciones científicas, curadas y anotadas manualmente para transfer learning</span>
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
    <ul class="list-none space-y-1.5 text-[0.76rem] leading-snug text-unal-gray">
      <li class="flex gap-2">
        <span class="shrink-0 text-unal-green">▸</span>
        <span>Todos los modelos YOLO: <span class="font-semibold text-unal-blue">mAP50 ≈ 0.995</span> · mAP50-95 ≈ 0.995</span>
      </li>
      <li class="flex gap-2">
        <span class="shrink-0 text-unal-green">▸</span>
        <span>RT-DETR: mAP50 = 0.986–0.992</span>
      </li>
      <li class="flex gap-2">
        <span class="shrink-0 text-unal-green">▸</span>
        <span>Convergencia: 61–80 épocas (YOLO) · 86–136 (RT-DETR)</span>
      </li>
      <li class="flex gap-2">
        <span class="shrink-0 text-unal-green">▸</span>
        <span>Precisión y recall ≈ 1.0 en todos los modelos sobre datos sintéticos</span>
      </li>
    </ul>
    <div class="mt-auto rounded bg-unal-blue/10 px-2 py-1 text-[0.7rem] font-semibold text-unal-blue">
      ✓ El pipeline de síntesis produce datos de entrenamiento de alta calidad
    </div>
  </div>
  <!-- Panel derecho: experimento control -->
  <div class="flex flex-col gap-2 rounded-lg border border-gray-300 bg-gray-50 px-3.5 py-3">
    <p class="text-[0.68rem] font-bold uppercase tracking-wide text-unal-gray">Experimento control — Sin transfer learning</p>
    <ul class="list-none space-y-1.5 text-[0.76rem] leading-snug text-unal-gray">
      <li class="flex gap-2">
        <span class="shrink-0 text-red-400">▸</span>
        <span>mAP50 sobre imágenes reales: <span class="font-semibold text-red-500">0.241 – 0.698</span></span>
      </li>
      <li class="flex gap-2">
        <span class="shrink-0 text-red-400">▸</span>
        <span>mAP50-95: 0.036 – 0.340 — caída severa respecto al dominio sintético</span>
      </li>
      <li class="flex gap-2">
        <span class="shrink-0 text-unal-green">▸</span>
        <span>Mejor control: <span class="font-semibold">YOLOv9m-Triple Attention</span> (mAP50 = 0.499 vs 0.328 baseline) — los modelos con atención transfieren mejor</span>
      </li>
    </ul>
    <div class="mt-auto rounded bg-red-50 px-2 py-1 text-[0.7rem] font-semibold text-red-600 border border-red-200">
      ✗ El gap sintético–real es significativo → el transfer learning es indispensable
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
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Comparativa cuantitativa — Transfer learning</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-3">
  <div class="overflow-x-auto">
    <table class="w-full border-collapse text-[0.7rem] leading-snug text-unal-gray sm:text-[0.73rem]">
      <thead>
        <tr class="border-b-2 border-unal-gray">
          <th class="py-1 pr-3 text-left font-semibold">Modelo</th>
          <th class="px-2 py-1 text-center font-semibold">P</th>
          <th class="px-2 py-1 text-center font-semibold">R</th>
          <th class="px-2 py-1 text-center font-semibold">mAP50</th>
          <th class="px-2 py-1 text-center font-semibold">mAP50-95</th>
          <th class="px-2 py-1 text-center font-semibold text-gray-500">Control mAP50</th>
          <th class="px-2 py-1 text-center font-semibold">Inferencia</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-unal-blue/30 bg-unal-blue/5 font-semibold">
          <td class="py-1 pr-3 text-unal-blue">YOLOv9m</td>
          <td class="px-2 py-1 text-center">0.957</td>
          <td class="px-2 py-1 text-center">0.857</td>
          <td class="px-2 py-1 text-center font-bold text-unal-blue">0.902</td>
          <td class="px-2 py-1 text-center font-bold text-unal-blue">0.627</td>
          <td class="px-2 py-1 text-center text-gray-500">0.328</td>
          <td class="px-2 py-1 text-center">7.4 ms</td>
        </tr>
        <tr class="border-b border-unal-green/30 bg-unal-green/5 font-semibold">
          <td class="py-1 pr-3 text-[#3a6a18]">RT-DETR-R101</td>
          <td class="px-2 py-1 text-center">0.922</td>
          <td class="px-2 py-1 text-center">0.868</td>
          <td class="px-2 py-1 text-center font-bold text-[#3a6a18]">0.902</td>
          <td class="px-2 py-1 text-center">0.612</td>
          <td class="px-2 py-1 text-center text-gray-500">0.448</td>
          <td class="px-2 py-1 text-center">14.8 ms</td>
        </tr>
        <tr class="border-b border-gray-200">
          <td class="py-1 pr-3">YOLOv12s</td>
          <td class="px-2 py-1 text-center">0.906</td>
          <td class="px-2 py-1 text-center">0.844</td>
          <td class="px-2 py-1 text-center">0.855</td>
          <td class="px-2 py-1 text-center">0.622</td>
          <td class="px-2 py-1 text-center text-gray-500">0.195</td>
          <td class="px-2 py-1 text-center">4.0 ms</td>
        </tr>
        <tr class="border-b border-gray-200">
          <td class="py-1 pr-3">YOLOv11m</td>
          <td class="px-2 py-1 text-center">0.925</td>
          <td class="px-2 py-1 text-center">0.813</td>
          <td class="px-2 py-1 text-center">0.849</td>
          <td class="px-2 py-1 text-center">0.624</td>
          <td class="px-2 py-1 text-center text-gray-500">0.501</td>
          <td class="px-2 py-1 text-center">5.9 ms</td>
        </tr>
        <tr class="border-b border-gray-200">
          <td class="py-1 pr-3">RT-DETR-L</td>
          <td class="px-2 py-1 text-center">0.878</td>
          <td class="px-2 py-1 text-center">0.862</td>
          <td class="px-2 py-1 text-center">0.857</td>
          <td class="px-2 py-1 text-center">0.615</td>
          <td class="px-2 py-1 text-center text-gray-500">0.503</td>
          <td class="px-2 py-1 text-center">9.1 ms</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="grid grid-cols-2 gap-3">
    <div class="rounded-md border-l-4 border-unal-blue bg-unal-blue/10 px-2.5 py-1.5">
      <p class="text-[0.72rem] leading-snug text-unal-gray">
        <span class="font-bold text-unal-blue">YOLOv9m</span>: mayor mAP50-95 (0.627) · mejor balance precisión-velocidad (7.4 ms) · mayor mejora mAP50-95 tras TL (+0.444)
      </p>
    </div>
    <div class="rounded-md border-l-4 border-unal-green bg-unal-green/10 px-2.5 py-1.5">
      <p class="text-[0.72rem] leading-snug text-unal-gray">
        <span class="font-bold text-[#3a6a18]">YOLOv12s</span>: mayor salto absoluto por transfer learning <span class="font-semibold">+0.660 mAP50</span> — el que más se beneficia de la estrategia
      </p>
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
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Integración CBAM en YOLOv9m</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="grid min-h-0 flex-1 grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-5">
  <div class="flex flex-col gap-3">
    <div class="overflow-x-auto">
      <table class="w-full border-collapse text-[0.7rem] leading-snug text-unal-gray sm:text-[0.73rem]">
        <thead>
          <tr class="border-b-2 border-unal-gray">
            <th class="py-1 pr-3 text-left font-semibold">Modelo</th>
            <th class="px-2 py-1 text-center font-semibold">mAP50</th>
            <th class="px-2 py-1 text-center font-semibold">mAP50-95</th>
            <th class="px-2 py-1 text-center font-semibold">Citolimit</th>
            <th class="px-2 py-1 text-center font-semibold">Inf. (ms)</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-200">
            <td class="py-1 pr-3 font-medium">YOLOv9m</td>
            <td class="px-2 py-1 text-center font-semibold text-unal-blue">0.902</td>
            <td class="px-2 py-1 text-center font-semibold text-unal-blue">0.627</td>
            <td class="px-2 py-1 text-center">0.979</td>
            <td class="px-2 py-1 text-center">7.4</td>
          </tr>
          <tr class="border-b border-unal-blue/20 bg-unal-blue/5">
            <td class="py-1 pr-3 font-semibold text-unal-blue">YOLOv9m-CBAM</td>
            <td class="px-2 py-1 text-center">0.868</td>
            <td class="px-2 py-1 text-center">0.623</td>
            <td class="px-2 py-1 text-center font-bold text-unal-blue">0.986</td>
            <td class="px-2 py-1 text-center">7.0</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="py-1 pr-3 font-medium">YOLOv9m-Triple Att.</td>
            <td class="px-2 py-1 text-center">0.878</td>
            <td class="px-2 py-1 text-center">0.618</td>
            <td class="px-2 py-1 text-center">0.980</td>
            <td class="px-2 py-1 text-center">7.5</td>
          </tr>
        </tbody>
      </table>
    </div>
    <ul class="list-none space-y-1.5 text-[0.76rem] leading-snug text-unal-gray">
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span>CBAM insertado en backbone de YOLOv9m (P2/4, 128 canales) · overhead mínimo: +0.1 GFLOPs</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold">Mejora citolimit</span>: 0.979 → <span class="font-semibold text-unal-blue">0.986</span> — estructura de bajo contraste, la más difícil de detectar</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span>Ventaja cualitativa en video: CBAM elimina falsos positivos sobre aguja de inyección y detecta citolimit en secuencias donde YOLOv9m falla completamente (→ ver videos)</span>
      </li>
    </ul>
  </div>
  <div class="flex flex-col justify-center gap-2">
    <figure class="m-0 min-w-0">
      <img
        src="../images/figures/results/stage18_features.png"
        alt="Mapas de características YOLOv9m-CBAM — stage 18"
        class="h-auto max-h-[min(50vh,320px)] w-full object-contain"
      />
      <figcaption lang="es" class="mt-1.5 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
        <span class="font-semibold text-unal-gray">Fig. 10.</span>
        Mapas de características (stage 18) — YOLOv9m-CBAM muestra activaciones más localizadas en ZP y límite citoplasmático.
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
          src="https://www.youtube.com/embed/lKPqXQZH1k0?si=8EwhGaEoiE1JphMS&autoplay=1&mute=1&playsinline=1&loop=1&playlist=lKPqXQZH1k0"
          title="YOLOv9m-CBAM — Secuencia 1 OpenPolScope meiosis I"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
      <figcaption lang="es" class="mt-1 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
        <span class="font-semibold text-unal-gray">Video 1.</span>
        YOLOv9m-CBAM — detección en secuencia 1 (<span class="font-mono">OpenPolScope</span>, meiosis I).
      </figcaption>
    </figure>
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
      <figcaption lang="es" class="mt-1 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
        <span class="font-semibold text-unal-gray">Video 2.</span>
        YOLOv9m — detección en secuencia 1 (<span class="font-mono">OpenPolScope</span>, meiosis I).
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
          src="https://www.youtube.com/embed/mO-GYGNMnw8?autoplay=1&mute=1&playsinline=1&loop=1&playlist=mO-GYGNMnw8"
          title="YOLOv9m-CBAM — Secuencia 2 OOSIGHT-Spindle View ICSI"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
      <figcaption lang="es" class="mt-1 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
        <span class="font-semibold text-unal-gray">Video 3.</span>
        YOLOv9m-CBAM — detección en secuencia 2 (<span class="font-mono">OOSIGHT-Spindle View</span>, ICSI).
      </figcaption>
    </figure>
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
      <figcaption lang="es" class="mt-1 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
        <span class="font-semibold text-unal-gray">Video 4.</span>
        YOLOv9m — detección en secuencia 2 (<span class="font-mono">OOSIGHT-Spindle View</span>, ICSI).
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
          src="https://www.youtube.com/embed/HsXPM1nb5y4?autoplay=1&mute=1&playsinline=1&loop=1&playlist=HsXPM1nb5y4"
          title="YOLOv9m-CBAM — Secuencia 3 OptimFert Prague IVF"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
      <figcaption lang="es" class="mt-1 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
        <span class="font-semibold text-unal-gray">Video 5.</span>
        YOLOv9m-CBAM — detección en secuencia 3 (<span class="font-mono">OptimFert</span>, <span class="font-mono">Prague IVF</span>).
      </figcaption>
    </figure>
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
      <figcaption lang="es" class="mt-1 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
        <span class="font-semibold text-unal-gray">Video 6.</span>
        YOLOv9m — detección en secuencia 3 (<span class="font-mono">OptimFert</span>, <span class="font-mono">Prague IVF</span>).
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

