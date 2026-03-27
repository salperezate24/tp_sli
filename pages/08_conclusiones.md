---
transition: slide-up
deckSection: conclusiones
title: Conclusiones
---

<div class="flex h-full min-h-0 flex-col pb-[8.5rem] pr-2 sm:pb-[9rem]">
  <div class="mx-auto w-full max-w-6xl text-left">
    <header class="mb-2 sm:mb-3">
      <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-[#262626] sm:text-2xl">Conclusiones</h1>
      <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-[#A0BF5E]" />
    </header>
    <div class="flex w-full max-w-5xl flex-col gap-3 pt-2 text-left sm:gap-4 sm:pt-3">
    <div class="rounded-xl border border-gray-300/60 border-l-4 border-l-[#3981BF] bg-white/95 px-4 pb-3 pt-1 shadow-md ring-1 ring-gray-900/5 backdrop-blur-sm sm:px-5 sm:pb-4 sm:pt-1.5">
      <p class="mb-2 border-b border-gray-200/90 pb-1.5 text-[11px] font-bold uppercase tracking-wider text-[#3981BF] sm:text-xs">
        Cumplimiento de objetivos
      </p>
      <p class="mb-2.5 text-[0.78rem] leading-[1.42] text-[#262626] sm:text-[0.84rem]">
        El <span class="font-semibold text-[#3981BF]">objetivo general</span> se cumplió: modelo de <span class="font-semibold text-[#3981BF]">red neuronal profunda</span> para identificar ovocitos y <span class="font-semibold text-[#3981BF]">características morfológicas</span> en imágenes <span class="font-semibold text-[#3981BF]">PLM</span>.
      </p>
      <ul class="list-disc space-y-1.5 pl-4.5 text-[0.78rem] leading-[1.38] text-[#262626] marker:font-semibold marker:text-[#3981BF] sm:text-[0.84rem]">
        <li><span class="font-semibold text-[#3981BF]">Específico 1:</span> base sintética <code class="rounded bg-gray-100/90 px-1 py-0.5 font-mono text-[0.68rem] text-[#262626]">oocyte_synthetic_2025b</code> (&gt;526 mil imágenes, cuatro estructuras, etiquetado automático).</li>
        <li><span class="font-semibold text-[#3981BF]">Específico 2:</span> método sistemático para <span class="font-semibold text-[#3981BF]">estructura, arquitectura y parámetros</span>, con modelos estándar y con <span class="font-semibold text-[#3981BF]">módulos de atención</span>.</li>
        <li><span class="font-semibold text-[#3981BF]">Específico 3:</span> <span class="font-semibold text-[#3981BF]">evaluación exhaustiva</span> con transferencia <span class="font-semibold text-[#3981BF]">sintético → real</span> y análisis comparativo.</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-300/60 border-l-4 border-l-[#A0BF5E] bg-white/95 px-4 pb-3 pt-1 shadow-md ring-1 ring-gray-900/5 backdrop-blur-sm sm:px-5 sm:pb-4 sm:pt-1.5">
      <p class="mb-2 border-b border-gray-200/90 pb-1.5 text-[11px] font-bold uppercase tracking-wider text-[#3981BF] sm:text-xs">
        Resultado principal
      </p>
      <p class="text-[0.78rem] leading-[1.42] text-[#262626] sm:text-[0.84rem]">
        Entre <span class="font-semibold text-[#3981BF]">13 configuraciones</span> YOLO (v8–v12) y RT-DETR, <span class="font-semibold text-[#3981BF]">YOLOv9m</span> resultó el modelo óptimo: <span class="font-semibold text-[#3981BF]">mAP50 = 0,902</span>, <span class="font-semibold text-[#3981BF]">mAP50-95 = 0,627</span>. Detección robusta de <span class="font-semibold text-[#3981BF]">huso meiótico</span>, <span class="font-semibold text-[#3981BF]">zona pelúcida</span>, <span class="font-semibold text-[#3981BF]">límite del citoplasma</span> y <span class="font-semibold text-[#3981BF]">cuerpo polar</span>.
      </p>
    </div>
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
deckSection: conclusiones
title: Hallazgos y aportes
---

<div class="flex h-full min-h-0 flex-col pb-[8.5rem] pr-2 sm:pb-[9rem]">
  <div class="mx-auto w-full max-w-6xl text-left">
    <header class="mb-2 sm:mb-3">
      <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-[#262626] sm:text-2xl">Hallazgos y aportes</h1>
      <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-[#A0BF5E]" />
    </header>
    <div class="flex w-full max-w-5xl flex-col gap-3 pt-2 text-left sm:gap-4 sm:pt-3">
    <div class="rounded-xl border border-gray-300/60 border-l-4 border-l-[#3981BF] bg-white/95 px-4 pb-3 pt-1 shadow-md ring-1 ring-gray-900/5 backdrop-blur-sm sm:px-5 sm:pb-4 sm:pt-1.5">
      <p class="mb-2 border-b border-gray-200/90 pb-1.5 text-[11px] font-bold uppercase tracking-wider text-[#3981BF] sm:text-xs">
        Hallazgos
      </p>
      <ul class="list-disc space-y-1.5 pl-4.5 text-[0.78rem] leading-[1.38] text-[#262626] marker:font-semibold marker:text-[#3981BF] sm:text-[0.84rem]">
        <li>La <span class="font-semibold text-[#3981BF]">transferencia de aprendizaje</span> sintético → real es <span class="font-semibold text-[#3981BF]">esencial</span>; el preentrenamiento solo en sintético no alcanza para el dominio real.</li>
        <li>Mejoras marcadas por estructura: el <span class="font-semibold text-[#3981BF]">cuerpo polar</span> fue el más desafiante; otras alcanzaron mAP50 muy altos (≥ 0,975) tras transferencia.</li>
        <li><span class="font-semibold text-[#3981BF]">RT-DETR</span> competitivo en precisión; <span class="font-semibold text-[#3981BF]">YOLOv9m</span> ofrece mejor equilibrio precisión–velocidad para escenarios cercanos al tiempo real.</li>
        <li><span class="font-semibold text-[#3981BF]">Atención:</span> ventajas en dominio sintético→real y señales cualitativas favorables en video; rendimiento global competitivo con transferencia.</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-300/60 border-l-4 border-l-[#A0BF5E] bg-white/95 px-4 pb-3 pt-1 shadow-md ring-1 ring-gray-900/5 backdrop-blur-sm sm:px-5 sm:pb-4 sm:pt-1.5">
      <p class="mb-2 border-b border-gray-200/90 pb-1.5 text-[11px] font-bold uppercase tracking-wider text-[#3981BF] sm:text-xs">
        Aportes
      </p>
      <ul class="list-disc space-y-1.5 pl-4.5 text-[0.78rem] leading-[1.38] text-[#262626] marker:font-semibold marker:text-[#3981BF] sm:text-[0.84rem]">
        <li>Metodología de imágenes sintéticas de retardo óptico y base <code class="rounded bg-gray-100/90 px-1 py-0.5 font-mono text-[0.68rem] text-[#262626]">oocyte_synthetic_2025b</code> (más de 500.000 imágenes, etiquetado automático), recurso para la comunidad.</li>
        <li>Demostración del marco <span class="font-semibold text-[#3981BF]">sintético → real</span> y referencia comparativa de arquitecturas (13 configuraciones), con <span class="font-semibold text-[#3981BF]">YOLOv9m</span> como punto de partida sólido para este problema.</li>
      </ul>
      <p class="mt-2.5 border-t border-gray-200/80 pt-2 text-[0.72rem] italic leading-snug text-[#262626]/85 sm:text-[0.76rem]">
        Retos abiertos y siguientes pasos: ver diapositiva de trabajo futuro.
      </p>
    </div>
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
