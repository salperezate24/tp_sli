---
transition: slide-up
deckSection: conclusiones
title: Conclusiones
---

<div class="slide-deck-shell">
  <div class="mx-auto w-full max-w-6xl text-left">
    <header class="mb-1.5 sm:mb-2">
      <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Conclusiones</h1>
      <div class="mt-1 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
    </header>
    <div class="flex w-full flex-col gap-2 pt-1 text-left">
    <div class="rounded-xl border border-gray-300/60 border-l-4 border-l-unal-blue bg-white/95 px-4 pb-2 pt-1 shadow-md ring-1 ring-gray-900/5 backdrop-blur-sm sm:px-5">
      <p class="my-0 mb-1.5 border-b border-gray-200/90 pb-1 text-[11px] font-bold uppercase tracking-wider text-unal-blue sm:text-xs">
        Cumplimiento de objetivos
      </p>
      <ul class="list-disc space-y-1.5 pl-4.5 text-[0.74rem] leading-[1.38] text-unal-gray marker:font-semibold marker:text-unal-blue sm:text-sm">
        <li><span class="font-semibold text-unal-blue">OE 1:</span> generación de <code class="rounded bg-gray-100/90 px-1 py-0.5 font-mono text-[0.65rem] text-unal-gray">oocyte_synthetic_2025b</code> desde cero — 526.392 imágenes sintéticas con etiquetado automático de cuatro estructuras estructurales.</li>
        <li><span class="font-semibold text-unal-blue">OE 2:</span> preentrenamiento con base sintética y transferencia a imágenes PLM reales — método sistemático de evaluación de arquitecturas estándar y con <span class="font-semibold">módulos de atención</span>.</li>
        <li><span class="font-semibold text-unal-blue">OE 3:</span> evaluación exhaustiva del esquema <span class="font-semibold">sintético → real</span> con análisis comparativo de 13 configuraciones YOLO (v8–v12) y RT-DETR.</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-300/60 border-l-4 border-l-unal-green bg-white/95 px-4 pb-2 pt-1 shadow-md ring-1 ring-gray-900/5 backdrop-blur-sm sm:px-5">
      <p class="my-0 text-[0.74rem] leading-[1.38] text-unal-gray sm:text-sm">
        <span class="font-semibold text-unal-blue">Resultado principal:</span> <span class="font-semibold text-unal-blue">YOLOv9m-CBAM</span> es el modelo de referencia para aplicación clínica — mAP50 = <span class="font-semibold text-unal-blue">0,902</span>, generaliza sin transferencia de aprendizaje (+14,2 pp), produce menos falsos positivos en video y mantiene confianza estable (0,95–0,97).
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
El objetivo general del trabajo se cumplió en tres etapas secuenciales: primero generamos la base de datos sintética, luego aplicamos preentrenamiento y transferencia sobre imágenes PLM reales, y finalmente desarrollamos y evaluamos modelos con módulos de atención.

Los tres objetivos específicos también se alcanzaron. El primero produjo oocyte_synthetic_2025b: más de 526.000 imágenes con etiquetado automático de cuatro estructuras. El segundo estableció un método sistemático de evaluación de arquitecturas, tanto estándar como con atención. El tercero completó una comparación exhaustiva de 13 configuraciones bajo el esquema sintético→real.

En métricas estáticas, YOLOv9m lidera con mAP50 de 0,902 y mAP50-95 de 0,627, con detección robusta del huso meiótico, la zona pelúcida, el límite del citoplasma y el cuerpo polar — las cuatro estructuras clave para evaluar la madurez del ovocito. YOLOv9m-CBAM es el modelo de referencia para aplicación clínica, por su generalización superior y comportamiento estable en video.
-->

---
transition: slide-left
deckSection: conclusiones
title: Contribuciones
---

<div class="slide-deck-shell">
  <div class="mx-auto w-full max-w-6xl text-left">
    <header class="mb-1.5 sm:mb-2">
      <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Contribuciones</h1>
      <div class="mt-1 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
    </header>
    <div class="flex w-full flex-col gap-1.5 pt-0.5 text-left">
    <div class="rounded-xl border border-gray-300/60 border-l-4 border-l-unal-blue bg-white/95 px-4 pb-1.5 pt-1 shadow-md ring-1 ring-gray-900/5 backdrop-blur-sm sm:px-5">
      <p class="my-0 mb-1 border-b border-gray-200/90 pb-0.5 text-[11px] uppercase tracking-wider text-unal-blue" style="font-weight:800">
        Hallazgos
      </p>
      <ul class="list-disc space-y-0.5 pl-4.5 text-[0.72rem] leading-[1.35] text-unal-gray marker:font-semibold marker:text-unal-blue">
        <li><span class="font-semibold text-unal-blue">Transferencia esencial:</span> cuerpo polar 0,012 → 0,516 <span class="font-semibold">(+0,504)</span>; huso meiótico +0,579; ZP y citoplasma ≥ 0,975.</li>
        <li><span class="font-semibold text-unal-blue">Módulos de atención:</span> ventaja clara en generalización sin TL — YOLOv9m-CBAM alcanzó mAP50 = 0,470 vs 0,328 del modelo base. Con TL, detectó citoplimit establemente en video donde YOLOv9m falló.</li>
        <li><span class="font-semibold text-unal-blue">RT-DETR</span> competitivo en métricas estáticas; su mayor latencia limita el uso en tiempo real frente a los modelos YOLO.</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-300/60 border-l-4 border-l-unal-green bg-white/95 px-4 pb-1.5 pt-1 shadow-md ring-1 ring-gray-900/5 backdrop-blur-sm sm:px-5">
      <p class="my-0 mb-1 border-b border-gray-200/90 pb-0.5 text-[11px] uppercase tracking-wider text-unal-blue" style="font-weight:800">
        Aportes
      </p>
      <ul class="list-disc space-y-0.5 pl-4.5 text-[0.72rem] leading-[1.35] text-unal-gray marker:font-semibold marker:text-unal-blue">
        <li>Tres bases de datos públicas: <code class="rounded bg-gray-100/90 px-1 py-0.5 font-mono text-[0.63rem] text-unal-gray">oocyte_synthetic_2025b</code> (+526.000 imágenes, etiquetado automático), <code class="rounded bg-gray-100/90 px-1 py-0.5 font-mono text-[0.63rem] text-unal-gray">OocytePaperImages</code> (200 imágenes PLM reales, curadas y anotadas manualmente) y conjunto Zenodo de imagen ampliada multi-ovocito — recursos inexistentes hasta la fecha.</li>
        <li>Marco <span class="font-semibold text-unal-blue">sintético → real</span> demostrado efectivo para imágenes PLM biomédicas con datos reales escasos.</li>
        <li>Benchmark comparativo de <span class="font-semibold">13 configuraciones</span> YOLO (v8–v12) y RT-DETR — <span class="font-semibold text-unal-blue">YOLOv9m-CBAM</span> modelo de referencia para aplicación clínica.</li>
        <li>Artículo en preparación sobre detección con módulos de atención en imágenes PLM de ovocitos.</li>
      </ul>
    </div>
    </div>
  </div>
</div>

<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>

<!--
Este slide sintetiza lo que aprendimos y lo que dejamos a la comunidad.

El hallazgo de modelo de referencia para aplicación clínica es YOLOv9m-CBAM. La evaluación multidimensional — que incluye generalización sin transferencia, estabilidad en video y análisis por clase — establece esa diferencia con claridad. Huso meiótico a 0,993 y zona pelúcida a 0,995 no son solo números en una tabla. Significan que un sistema basado en esta arquitectura podría, en tiempo real, confirmar si un ovocito está en metafase II y localizar el huso para orientar la aguja de inyección. Esa decisión hoy depende de un embriólogo entrenado con acceso al PolScope, observando manualmente, en una ventana temporal de apenas dos horas. Este trabajo demuestra que el componente de percepción de esa decisión puede automatizarse.

Quiero ser transparente sobre las limitaciones. Los experimentos se realizaron con una semilla fija, por lo que diferencias menores a un punto porcentual entre modelos son indicativas, no definitivas. El proceso de anotación fue realizado por un único investigador siguiendo protocolo clínico PLM, sin validación interobservador formal. Ambas son limitaciones metodológicas reales, identificadas como trabajo futuro prioritario.

Como aportes concretos dejamos cuatro cosas: la base sintética pública oocyte_synthetic_2025b, el marco metodológico sintético→real demostrado en imágenes PLM biomédicas, una referencia comparativa de 13 configuraciones con YOLOv9m-CBAM como punto de partida para aplicación clínica, y un artículo en preparación que documenta el método y los resultados con módulos de atención.
-->

