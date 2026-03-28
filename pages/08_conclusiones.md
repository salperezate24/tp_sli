---
transition: slide-up
deckSection: conclusiones
title: Conclusiones
---

<div class="flex h-full min-h-0 flex-col pb-[8rem] pr-2 sm:pb-[8.5rem]">
  <div class="mx-auto w-full max-w-6xl text-left">
    <header class="mb-1.5 sm:mb-2">
      <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-[#262626] sm:text-2xl">Conclusiones</h1>
      <div class="mt-1 h-0.5 w-20 max-w-full rounded-full bg-[#A0BF5E]" />
    </header>
    <div class="flex w-full max-w-5xl flex-col gap-2 pt-1 text-left">
    <div class="rounded-xl border border-gray-300/60 border-l-4 border-l-[#3981BF] bg-white/95 px-4 pb-2 pt-1 shadow-md ring-1 ring-gray-900/5 backdrop-blur-sm sm:px-5">
      <p class="mb-1.5 border-b border-gray-200/90 pb-1 text-[11px] font-bold uppercase tracking-wider text-[#3981BF] sm:text-xs">
        Cumplimiento de objetivos
      </p>
      <p class="mb-2 text-[0.74rem] leading-[1.38] text-[#262626] sm:text-[0.8rem]">
        El <span class="font-semibold text-[#3981BF]">objetivo general</span> se cumplió en tres etapas: <span class="font-semibold">(1)</span> generación de la base sintética, <span class="font-semibold">(2)</span> preentrenamiento y transferencia en imágenes PLM reales, y <span class="font-semibold">(3)</span> desarrollo y evaluación de modelos con módulos de atención.
      </p>
      <ul class="list-disc space-y-1 pl-4.5 text-[0.74rem] leading-[1.35] text-[#262626] marker:font-semibold marker:text-[#3981BF] sm:text-[0.8rem]">
        <li><span class="font-semibold text-[#3981BF]">OE 1:</span> base sintética <code class="rounded bg-gray-100/90 px-1 py-0.5 font-mono text-[0.65rem] text-[#262626]">oocyte_synthetic_2025b</code> — 526.392 imágenes, cuatro estructuras, etiquetado automático.</li>
        <li><span class="font-semibold text-[#3981BF]">OE 2:</span> método sistemático de evaluación de arquitecturas — modelos estándar y con <span class="font-semibold">módulos de atención</span>.</li>
        <li><span class="font-semibold text-[#3981BF]">OE 3:</span> evaluación exhaustiva con transferencia <span class="font-semibold">sintético → real</span> y análisis comparativo de 13 configuraciones.</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-300/60 border-l-4 border-l-[#A0BF5E] bg-white/95 px-4 pb-2 pt-1 shadow-md ring-1 ring-gray-900/5 backdrop-blur-sm sm:px-5">
      <p class="text-[0.74rem] leading-[1.38] text-[#262626] sm:text-[0.8rem]">
        <span class="font-semibold text-[#3981BF]">Resultado principal:</span> entre 13 configuraciones YOLO (v8–v12) y RT-DETR, <span class="font-semibold text-[#3981BF]">YOLOv9m</span> resultó el modelo óptimo:
        <span class="font-semibold text-[#3981BF]">mAP50 = 0,902</span>, <span class="font-semibold text-[#3981BF]">mAP50-95 = 0,627</span>.
        Detección robusta de <span class="font-semibold">huso meiótico</span>, <span class="font-semibold">zona pelúcida</span>, <span class="font-semibold">límite del citoplasma</span> y <span class="font-semibold">cuerpo polar</span> — cuatro estructuras clave para evaluar la madurez del ovocito.
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
transition: slide-left
deckSection: conclusiones
title: Hallazgos y aportes
---

<div class="flex h-full min-h-0 flex-col pb-[8rem] pr-2 sm:pb-[10.5rem]">
  <div class="mx-auto w-full max-w-6xl text-left">
    <header class="mb-1.5 sm:mb-2">
      <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-[#262626] sm:text-2xl">Hallazgos y aportes</h1>
      <div class="mt-1 h-0.5 w-20 max-w-full rounded-full bg-[#A0BF5E]" />
    </header>
    <div class="flex w-full max-w-5xl flex-col gap-2 pt-1 text-left">
    <div class="rounded-xl border border-gray-300/60 border-l-4 border-l-[#3981BF] bg-white/95 px-4 pb-2 pt-1 shadow-md ring-1 ring-gray-900/5 backdrop-blur-sm sm:px-5">
      <p class="mb-1.5 border-b border-gray-200/90 pb-1 text-[11px] font-bold uppercase tracking-wider text-[#3981BF] sm:text-xs">
        Hallazgos
      </p>
      <ul class="list-disc space-y-1 pl-4.5 text-[0.74rem] leading-[1.35] text-[#262626] marker:font-semibold marker:text-[#3981BF] sm:text-[0.8rem]">
        <li><span class="font-semibold text-[#3981BF]">Transferencia esencial:</span> el preentrenamiento sintético solo no alcanza — la transferencia produjo mejoras dramáticas por estructura: cuerpo polar 0,012 → 0,516 <span class="font-semibold">(+0,504)</span>; huso meiótico +0,579; zona pelúcida y citoplasma alcanzaron mAP50 ≥ 0,975.</li>
        <li><span class="font-semibold text-[#3981BF]">Módulos de atención:</span> ventaja en transferencia de dominio sin fine-tuning (YOLOv9m-triple-attention: 0,499 vs 0,328 del estándar). Con transferencia, diferencia de solo −2,7 %. En video, YOLOv9m-CBAM detectó el citoplasma establemente donde YOLOv9m falló.</li>
        <li><span class="font-semibold text-[#3981BF]">RT-DETR</span> competitivo en precisión; <span class="font-semibold">YOLOv9m</span> ofrece mejor equilibrio precisión–velocidad para uso clínico cercano al tiempo real.</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-300/60 border-l-4 border-l-[#A0BF5E] bg-white/95 px-4 pb-2 pt-1 shadow-md ring-1 ring-gray-900/5 backdrop-blur-sm sm:px-5">
      <p class="mb-1.5 border-b border-gray-200/90 pb-1 text-[11px] font-bold uppercase tracking-wider text-[#3981BF] sm:text-xs">
        Aportes
      </p>
      <ul class="list-disc space-y-1 pl-4.5 text-[0.74rem] leading-[1.35] text-[#262626] marker:font-semibold marker:text-[#3981BF] sm:text-[0.8rem]">
        <li>Base sintética <code class="rounded bg-gray-100/90 px-1 py-0.5 font-mono text-[0.65rem] text-[#262626]">oocyte_synthetic_2025b</code>: +526.000 imágenes con etiquetado automático — recurso público inexistente hasta la fecha.</li>
        <li>Marco <span class="font-semibold text-[#3981BF]">sintético → real</span> demostrado efectivo para imágenes PLM biomédicas con datos reales escasos.</li>
        <li>Referencia comparativa de <span class="font-semibold">13 configuraciones</span> YOLO/RT-DETR; <span class="font-semibold">YOLOv9m</span> como punto de partida sólido para este problema.</li>
      </ul>
    </div>
    </div>
  </div>
</div>

<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>
