---
transition: slide-up
deckSection: metodologia
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Pipeline metodológico</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col justify-center gap-4">
  <div class="grid grid-cols-4 gap-3">
    <div class="flex flex-col gap-1.5 rounded-lg border-l-4 border-unal-blue bg-unal-blue/5 px-3 py-2.5">
      <p class="text-[0.65rem] font-bold uppercase tracking-wide text-unal-blue">1 · Cap. 4</p>
      <p class="text-[0.82rem] font-semibold leading-snug text-unal-gray">Síntesis de imágenes PLM</p>
      <ul class="mt-0.5 list-none space-y-0.5 text-[0.7rem] leading-snug text-unal-gray">
        <li>Modelado físico de 4 estructuras</li>
        <li>526 392 imágenes generadas</li>
        <li>Etiquetado automático</li>
      </ul>
    </div>
    <div class="flex flex-col gap-1.5 rounded-lg border-l-4 border-unal-blue bg-unal-blue/5 px-3 py-2.5">
      <p class="text-[0.65rem] font-bold uppercase tracking-wide text-unal-blue">2 · Cap. 4</p>
      <p class="text-[0.82rem] font-semibold leading-snug text-unal-gray">Conjuntos de datos</p>
      <ul class="mt-0.5 list-none space-y-0.5 text-[0.7rem] leading-snug text-unal-gray">
        <li>Sintético (21 600 imágenes)</li>
        <li>Real PLM (200 imágenes)</li>
        <li>Video — 5 secuencias</li>
      </ul>
    </div>
    <div class="flex flex-col gap-1.5 rounded-lg border-l-4 border-unal-green bg-unal-green/5 px-3 py-2.5">
      <p class="text-[0.65rem] font-bold uppercase tracking-wide text-[#5a7a2a]">3 · Cap. 5</p>
      <p class="text-[0.82rem] font-semibold leading-snug text-unal-gray">Selección y entrenamiento</p>
      <ul class="mt-0.5 list-none space-y-0.5 text-[0.7rem] leading-snug text-unal-gray">
        <li>13 configuraciones YOLO / RT-DETR</li>
        <li>Preentrenamiento sintético</li>
        <li>Experimento control</li>
      </ul>
    </div>
    <div class="flex flex-col gap-1.5 rounded-lg border-l-4 border-unal-green bg-unal-green/5 px-3 py-2.5">
      <p class="text-[0.65rem] font-bold uppercase tracking-wide text-[#5a7a2a]">4 · Cap. 5</p>
      <p class="text-[0.82rem] font-semibold leading-snug text-unal-gray">Transfer learning</p>
      <ul class="mt-0.5 list-none space-y-0.5 text-[0.7rem] leading-snug text-unal-gray">
        <li>Adaptación sintético → real</li>
        <li>Evaluación comparativa</li>
        <li>mAP50, mAP50-95, tiempo</li>
      </ul>
    </div>
  </div>
  <div class="flex items-center justify-center gap-2">
    <div class="h-0.5 flex-1 rounded-full bg-unal-blue/20" />
    <span class="text-[0.68rem] font-semibold text-unal-blue">Pesos COCO → Sintético → Real PLM → Evaluación en video</span>
    <div class="h-0.5 flex-1 rounded-full bg-unal-blue/20" />
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>

---
transition: slide-up
deckSection: metodologia
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Generación de la base de datos sintética</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="grid min-h-0 flex-1 grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-6">
  <div class="flex flex-col justify-center gap-2.5">
    <ul class="list-none space-y-2 text-[0.8rem] leading-snug text-unal-gray sm:text-[0.84rem]">
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold text-unal-blue">4 clases modeladas</span>: huso meiótico (Gaussiana anisotrópica 2D, retardo ~5.6&nbsp;nm · 18 configuraciones), ZP (banda elíptica + filtro Gaussiano · 12 configuraciones), límite citoplasmático, cuerpo polar</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span>Calibración: <span class="font-semibold">1&nbsp;px = 0.129&nbsp;μm</span> (referencia: 930&nbsp;px = 120&nbsp;μm de diámetro de ovocito MII)</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span>12&nbsp;ZP × 18&nbsp;husos × posiciones → <span class="font-semibold">526&nbsp;392 imágenes generadas</span> · subconjunto aleatorio: <span class="font-semibold text-unal-blue">21&nbsp;600 usadas</span> (15&nbsp;120 / 3&nbsp;240 / 3&nbsp;240)</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span>Etiquetado <span class="font-semibold">100% automático</span> por definición paramétrica — sin anotación manual · implementación en MATLAB</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span>Ruido de fondo aleatorio (π/380) para simular variaciones de adquisición PLM real</span>
      </li>
    </ul>
  </div>
  <div class="flex flex-col justify-center gap-3">
    <figure class="m-0 min-w-0">
      <img
        src="../images/figures/oocyte_synth.png"
        alt="Imagen sintética generada de ovocito PLM"
        class="h-auto max-h-[min(44vh,280px)] w-full object-contain"
      />
      <figcaption lang="es" class="mt-1.5 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
        <span class="font-semibold text-unal-gray">Fig. 8.</span>
        Imagen sintética de ovocito PLM: huso (s), cuerpo polar (pb), zona pelúcida (zp), citoplasma (c).
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
deckSection: metodologia
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Conjuntos de datos</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col justify-center gap-3">
  <div class="grid grid-cols-3 gap-4">
    <!-- Dataset 1: Sintético -->
    <div class="flex flex-col gap-2 rounded-lg border border-unal-blue/30 bg-unal-blue/5 px-3.5 py-3">
      <div class="flex items-center gap-2">
        <span class="rounded-full bg-unal-blue px-2 py-0.5 text-[0.62rem] font-bold uppercase text-white">Preentrenamiento</span>
      </div>
      <p class="text-[0.82rem] font-bold leading-tight text-unal-blue">Oocyte_synthetic_2025b</p>
      <ul class="list-none space-y-1 text-[0.72rem] leading-snug text-unal-gray">
        <li><span class="font-semibold">Tipo:</span> Sintético (MATLAB)</li>
        <li><span class="font-semibold">Imágenes:</span> 21 600 (de 526 392 generadas)</li>
        <li><span class="font-semibold">Partición:</span> 15 120 / 3 240 / 3 240</li>
        <li><span class="font-semibold">Etiquetado:</span> automático-paramétrico</li>
        <li><span class="font-semibold">Clases:</span> huso, ZP, citoplasma, CP</li>
      </ul>
    </div>
    <!-- Dataset 2: Real PLM -->
    <div class="flex flex-col gap-2 rounded-lg border border-unal-green/40 bg-unal-green/5 px-3.5 py-3">
      <div class="flex items-center gap-2">
        <span class="rounded-full bg-unal-green px-2 py-0.5 text-[0.62rem] font-bold uppercase text-white">Transfer learning</span>
      </div>
      <p class="text-[0.82rem] font-bold leading-tight text-[#3a6a18]">OocytePaperImages</p>
      <ul class="list-none space-y-1 text-[0.72rem] leading-snug text-unal-gray">
        <li><span class="font-semibold">Tipo:</span> Real PLM — publicaciones científicas</li>
        <li><span class="font-semibold">Imágenes:</span> 200</li>
        <li><span class="font-semibold">Partición:</span> train / val</li>
        <li><span class="font-semibold">Etiquetado:</span> manual (curación)</li>
        <li><span class="font-semibold">Preprocesado:</span> eliminación de texto y barras de escala</li>
      </ul>
    </div>
    <!-- Dataset 3: Video -->
    <div class="flex flex-col gap-2 rounded-lg border border-gray-300 bg-gray-50 px-3.5 py-3">
      <div class="flex items-center gap-2">
        <span class="rounded-full bg-unal-gray px-2 py-0.5 text-[0.62rem] font-bold uppercase text-white">Evaluación</span>
      </div>
      <p class="text-[0.82rem] font-bold leading-tight text-unal-gray">5 secuencias de video</p>
      <ul class="list-none space-y-1 text-[0.72rem] leading-snug text-unal-gray">
        <li><span class="font-semibold">Tipo:</span> Real PLM — video</li>
        <li><span class="font-semibold">Seq. 1:</span> 109 fotogramas · time-lapse meiosis I (OpenPolScope)</li>
        <li><span class="font-semibold">Seq. 2–3:</span> videos PLM publicados</li>
        <li><span class="font-semibold">Seq. 4–5:</span> dataset Zenodo (imágenes TIF → video)</li>
        <li><span class="font-semibold">Uso:</span> evaluación cualitativa práctica</li>
      </ul>
    </div>
  </div>
  <p class="text-center text-[0.72rem] italic text-unal-gray">Tres fuentes con roles distintos: síntesis para escala · literatura para dominio real · video para validación práctica</p>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>

---
transition: slide-up
deckSection: metodologia
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Arquitecturas y protocolo de entrenamiento</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<p class="mb-3 text-[0.8rem] leading-snug text-unal-gray sm:text-[0.84rem]">
  Experimento preliminar en GDXray+ (Mery) → selección de candidatos. <span class="font-semibold text-unal-blue">13 configuraciones</span> evaluadas sobre el mismo protocolo:
</p>
<div class="grid min-h-0 flex-1 grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-5">
  <div class="flex flex-col gap-3">
    <div class="flex flex-wrap gap-1.5">
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv8s</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv8m</span>
      <span class="rounded-full bg-unal-blue/10 px-2.5 py-0.5 text-[0.72rem] font-semibold text-unal-blue ring-1 ring-unal-blue/40">YOLOv9s</span>
      <span class="rounded-full bg-unal-blue/10 px-2.5 py-0.5 text-[0.72rem] font-semibold text-unal-blue ring-1 ring-unal-blue/40">YOLOv9m</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv10s</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv10m</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv11s</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv11m</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv11l</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv12s</span>
      <span class="rounded-full bg-unal-green/15 px-2.5 py-0.5 text-[0.72rem] font-semibold text-[#5a7a2a] ring-1 ring-unal-green/50">RT-DETR-R50</span>
      <span class="rounded-full bg-unal-green/15 px-2.5 py-0.5 text-[0.72rem] font-semibold text-[#5a7a2a] ring-1 ring-unal-green/50">RT-DETR-L</span>
      <span class="rounded-full bg-unal-green/15 px-2.5 py-0.5 text-[0.72rem] font-semibold text-[#5a7a2a] ring-1 ring-unal-green/50">RT-DETR-R101</span>
    </div>
    <div class="rounded-md border-l-4 border-unal-blue bg-unal-blue/5 px-2.5 py-1.5 text-[0.72rem] leading-snug text-unal-gray">
      <span class="font-semibold text-unal-blue">Experimento control:</span> preentrenamiento sintético sin transfer learning → línea base para cuantificar el gap sintético-real
    </div>
  </div>
  <div class="grid grid-cols-1 gap-2.5">
    <div class="rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm">
      <p class="mb-1 text-[0.65rem] font-bold uppercase tracking-wide text-unal-blue">Entorno</p>
      <p class="text-[0.7rem] leading-snug text-unal-gray">Google Colab · NVIDIA L4 (22.5 GB VRAM) · PyTorch + Ultralytics</p>
    </div>
    <div class="rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm">
      <p class="mb-1 text-[0.65rem] font-bold uppercase tracking-wide text-unal-blue">Etapa 1 — Sintético</p>
      <p class="text-[0.7rem] leading-snug text-unal-gray">SGD · lr = 0.01 · batch = 16 · img 640 · 100 épocas (YOLO) / 200 (RT-DETR) · early stopping</p>
    </div>
    <div class="rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm">
      <p class="mb-1 text-[0.65rem] font-bold uppercase tracking-wide text-unal-blue">Métricas</p>
      <p class="text-[0.7rem] leading-snug text-unal-gray">mAP50 · mAP50-95 · Precisión · Recall · Tiempo de inferencia (ms/img)</p>
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
deckSection: metodologia
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Diseño e integración de módulos de atención</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-3">
  <div class="flex gap-2 text-[0.78rem] leading-snug text-unal-gray sm:text-[0.82rem]">
    <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
    <span><span class="font-semibold">Motivación:</span> los modelos base presentan baja sensibilidad al <span class="font-semibold text-unal-blue">límite citoplasmático</span> y al <span class="font-semibold text-unal-blue">huso meiótico</span> — estructuras de bajo contraste sin precedente en bases de datos públicas → integración de atención para recalibrar respuesta espacial y de canal</span>
  </div>
  <div class="grid grid-cols-2 gap-3">
    <div class="flex flex-col gap-1.5 rounded-lg border border-unal-blue/30 bg-unal-blue/5 px-3 py-2.5">
      <p class="text-[0.65rem] font-bold uppercase tracking-wide text-unal-blue">YOLOv9m-CBAM</p>
      <p class="text-[0.72rem] leading-snug text-unal-gray">CBAM en backbone · bloque P2/4 (128 ch) · después del primer RepNCSPELAN4 · atención canal + espacial secuencial</p>
      <p class="text-[0.67rem] text-unal-gray">+0.01M params · +0.1 GFLOPs</p>
    </div>
    <div class="flex flex-col gap-1.5 rounded-lg border border-unal-blue/30 bg-unal-blue/5 px-3 py-2.5">
      <p class="text-[0.65rem] font-bold uppercase tracking-wide text-unal-blue">YOLOv9m-Triple Attention</p>
      <p class="text-[0.72rem] leading-snug text-unal-gray">Atención progresiva en 3 niveles: Channel Att. (P2/4) · Spatial Att. (P3/8) · CBAM (P4/16) — recalibración multi-escala</p>
      <p class="text-[0.67rem] text-unal-gray">+0.14M params · +0.2 GFLOPs</p>
    </div>
    <div class="flex flex-col gap-1.5 rounded-lg border border-unal-green/30 bg-unal-green/5 px-3 py-2.5">
      <p class="text-[0.65rem] font-bold uppercase tracking-wide text-[#3a6a18]">YOLO11m-Conservative Attention</p>
      <p class="text-[0.72rem] leading-snug text-unal-gray">Channel Att. después del 1.er C3k2 (P2/4, 256 ch) · CBAM después del 2.° C3k2 (P3/8, 512 ch) — enfoque conservador</p>
      <p class="text-[0.67rem] text-unal-gray">+0.33M params · +0.2 GFLOPs</p>
    </div>
    <div class="flex flex-col gap-1.5 rounded-lg border border-unal-green/30 bg-unal-green/5 px-3 py-2.5">
      <p class="text-[0.65rem] font-bold uppercase tracking-wide text-[#3a6a18]">YOLO11m-Transformer Enhanced</p>
      <p class="text-[0.72rem] leading-snug text-unal-gray">Módulos C3TR + Attention en backbone — captura de relaciones globales en la imagen para complementar la convolución local</p>
      <p class="text-[0.67rem] text-unal-gray">+0.40M params · +0.4 GFLOPs inferior</p>
    </div>
  </div>
  <div class="rounded-md border-l-4 border-unal-blue bg-unal-blue/10 px-2.5 py-1.5 text-[0.72rem] leading-snug text-unal-gray">
    <span class="font-bold text-unal-blue">Criterio de diseño:</span> todos los modelos conservan la arquitectura base intacta y solo añaden atención en puntos estratégicos — overhead computacional mínimo, inferencia comparable al baseline
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>

---
transition: slide-left
deckSection: metodologia
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Estrategia de transfer learning</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col justify-center gap-4">
  <!-- Diagrama de flujo -->
  <div class="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
    <div class="rounded-lg border border-unal-blue/40 bg-unal-blue/5 px-3 py-2.5 text-center">
      <p class="text-[0.65rem] font-bold uppercase tracking-wide text-unal-blue">Inicio</p>
      <p class="mt-0.5 text-[0.78rem] font-semibold text-unal-gray">Pesos COCO</p>
      <p class="text-[0.67rem] text-unal-gray">preentrenamiento general</p>
    </div>
    <span class="text-lg font-bold text-unal-blue">→</span>
    <div class="rounded-lg border border-unal-blue/40 bg-unal-blue/10 px-3 py-2.5 text-center">
      <p class="text-[0.65rem] font-bold uppercase tracking-wide text-unal-blue">Etapa 1</p>
      <p class="mt-0.5 text-[0.78rem] font-semibold text-unal-gray">Preentrenamiento sintético</p>
      <p class="text-[0.67rem] text-unal-gray">Oocyte_synthetic_2025b · SGD · 21 600 imgs</p>
    </div>
    <span class="text-lg font-bold text-unal-blue">→</span>
    <div class="rounded-lg border border-unal-green/50 bg-unal-green/10 px-3 py-2.5 text-center">
      <p class="text-[0.65rem] font-bold uppercase tracking-wide text-[#3a6a18]">Etapa 2</p>
      <p class="mt-0.5 text-[0.78rem] font-semibold text-unal-gray">Transfer learning real</p>
      <p class="text-[0.67rem] text-unal-gray">OocytePaperImages · AdamW · 200 imágenes</p>
    </div>
  </div>
  <!-- Bullets de justificación -->
  <div class="grid grid-cols-2 gap-4">
    <ul class="list-none space-y-2 text-[0.78rem] leading-snug text-unal-gray sm:text-[0.82rem]">
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold">Justificación:</span> ausencia de base pública PLM → datos sintéticos como puente hacia el dominio real</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold">AdamW en Etapa 2:</span> tasas de aprendizaje adaptativas → adaptación al domain shift más eficiente que SGD</span>
      </li>
    </ul>
    <ul class="list-none space-y-2 text-[0.78rem] leading-snug text-unal-gray sm:text-[0.82rem]">
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold">Etapa 2:</span> 200 épocas (YOLO) / 300 (RT-DETR) · early stopping patience 50/60</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold">Experimento control</span> (sin Etapa 2) → cuantifica el gap sintético-real y valida la necesidad del TL</span>
      </li>
    </ul>
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>
