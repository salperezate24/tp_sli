---
transition: slide-up
deckSection: marco
---

<div class="slide-deck-shell pb-10">
<header class="mb-1.5 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">El ovocito y sus marcadores de madurez</h1>
  <div class="mt-1 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<p class="mb-2 max-w-4xl hyphens-auto text-justify text-sm font-normal leading-snug text-unal-gray">
  Tres estructuras permiten evaluar la madurez del ovocito <span class="font-semibold text-unal-blue">MII</span> de forma directa:
</p>
<ul class="mt-1 list-none space-y-2 text-sm leading-snug text-unal-gray">
<li class="flex gap-1.5">
  <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
  <span><span class="font-semibold text-unal-blue">Huso meiótico:</span> segrega cromosomas en MII; su presencia confirma la madurez nuclear del ovocito.</span>
</li>
<li class="flex gap-1.5">
  <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
  <span><span class="font-semibold text-unal-blue">Cuerpo polar:</span> indicador clínico habitual; aparece <span class="font-semibold">antes</span> de que el huso esté completamente ensamblado — PLM permite verificar directamente si el huso ya está formado.</span>
</li>
</ul>
<div class="mt-4 grid w-full grid-cols-2 gap-4 lg:gap-5">
<figure class="m-0 flex min-w-0 flex-col">
<img src="../images/figures/diagrams/oocyte_plm.png" alt="Ovocito bajo PLM" class="mx-auto h-auto max-h-52 w-full object-contain" />
<figcaption lang="es" class="mt-1 max-w-full text-left text-[11px] leading-snug text-gray-600">
  <span class="font-semibold text-unal-gray">Fig. 2.</span>
  Ovocito bajo PLM: huso meiótico (s), ZP (zp), citoplasma (c) y cuerpo polar (pb). Rienzi et al.
  <span class="ml-0.5 font-semibold text-unal-blue">[3]</span>.
</figcaption>
</figure>
<figure class="m-0 flex min-w-0 flex-col">
<img src="../images/figures/oocytes/oocyte_diagram_002.png" alt="Esquema del proceso de maduración de un ovocito" class="h-auto max-h-60 w-full object-contain" />
<figcaption lang="es" class="mt-1 max-w-full text-left text-[11px] leading-snug text-gray-600">
  <span class="font-semibold text-unal-gray">Fig. 3.</span>
  Esquema ilustrativo del proceso de maduración de un ovocito. Elaboración propia.
</figcaption>
</figure>
</div>
</div>

<!-- Logos abajo a la derecha -->
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
deckSection: marco
---

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Recuperación cuantitativa del retardo</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>

<p class="mb-2 max-w-5xl hyphens-auto text-justify text-xs leading-snug text-unal-gray sm:text-sm sm:leading-snug">
  La PLM cuantitativa captura <span class="font-semibold">cinco imágenes</span> con distintos estados de polarización
  (I₀&nbsp;–&nbsp;I₄). De ellas se construyen los términos auxiliares <span class="font-medium italic">A</span> y <span class="font-medium italic">B</span>,
  que permiten estimar para cada píxel el <span class="font-semibold">retardo óptico Δ</span> —que cuantifica la birrefringencia—
  y el <span class="font-semibold">azimut φ</span>, que indica la orientación molecular.
</p>

<div class="grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-6">

  <!-- Columna izquierda: imagen de intensidad PLM -->
  <div class="flex flex-col gap-2">
    <p class="plm-section-label-center text-left font-semibold text-unal-blue text-[0.72rem] sm:text-[0.76rem]">Imagen de intensidad (I₀–I₄)</p>
    <figure class="m-0 flex w-full min-w-0 flex-col items-stretch">
      <img
        src="../images/intensitites.png"
        alt="Cinco imágenes de intensidad del astero con distintos ajustes de polarización"
        class="h-auto w-full max-h-[min(42vh,280px)] object-contain"
      />
      <figcaption lang="es" class="plm-figcaption">
        <span class="font-semibold">Fig. 4.</span>
        Cinco imágenes de intensidad del astero con ajustes de polarización 0, 1, 2, 3 y 4 del compensador universal. Las imágenes fueron mejoradas en contraste para mayor visibilidad.
        <span class="mt-1 block font-medium opacity-100">Fuente: Shribak &amp; Oldenbourg (2003) <span class="font-semibold text-unal-blue">[4]</span>.</span>
      </figcaption>
    </figure>
  </div>

  <!-- Columna derecha: mapa de retardo óptico -->
  <div class="relative z-0 min-w-0 flex flex-col items-center justify-start self-start px-0.5">
    <p class="plm-section-label-center text-left font-semibold text-unal-blue text-[0.72rem] sm:text-[0.76rem]">Retardo óptico (Δ)</p>
    <figure class="m-0 flex w-full min-w-0 flex-col items-stretch">
      <img
        src="../images/figures/diagrams/Diagramas_Tesis-Pagina-2.png"
        alt="Ejemplo de imagen de retardo óptico"
        class="plm-retardo-img"
      />
      <figcaption lang="es" class="plm-figcaption">
        <span class="font-semibold">Fig. 5.</span>
        Mapa de magnitud de retardo (algoritmo de cinco cuadros, corrección de fondo) de un astero de microtúbulos reconstituido desde centrosoma. Blanco ≈ 1,2&nbsp;nm; negro, birrefringencia nula.
        <span class="mt-1 block font-medium opacity-100">Fuente: Shribak &amp; Oldenbourg (2003) <span class="font-semibold text-unal-blue">[4]</span>.</span>
      </figcaption>
    </figure>
  </div>

</div>

</div>

<!-- Logos abajo a la derecha -->
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
deckSection: marco
---

<div class="slide-deck-shell">
<header class="mb-1 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">PLM cuantitativa: modelo matemático</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>

<div class="mt-2 grid w-full grid-cols-1 gap-2 [&_.katex-display]:my-1.5 [&_.katex-display]:text-[0.78rem] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-6">
<div class="min-w-0 text-left text-unal-gray">
<p class="plm-section-label mb-2">Ecuaciones de intensidad</p>

$$I_0(x, y) = \tfrac{1}{2}\,\tau\,I_{\max}\bigl[1 - \cos \Delta\bigr] + I_{\min}$$

$$I_1(x, y) = \tfrac{1}{2}\,\tau\,I_{\max}\bigl[1 - \cos\chi\cos\Delta + \sin\chi\sin 2\phi\sin\Delta\bigr] + I_{\min}$$

$$I_2(x, y) = \tfrac{1}{2}\,\tau\,I_{\max}\bigl[1 - \cos\chi\cos\Delta - \sin\chi\sin 2\phi\sin\Delta\bigr] + I_{\min}$$

$$I_3(x, y) = \tfrac{1}{2}\,\tau\,I_{\max}\bigl[1 - \cos\chi\cos\Delta - \sin\chi\cos 2\phi\sin\Delta\bigr] + I_{\min}$$

$$I_4(x, y) = \tfrac{1}{2}\,\tau\,I_{\max}\bigl[1 - \cos\chi\cos\Delta + \sin\chi\cos 2\phi\sin\Delta\bigr] + I_{\min}$$
</div>
<div class="min-w-0 text-left text-unal-gray">
<p class="plm-section-label mb-2">Términos auxiliares</p>

$$A \equiv \frac{I_1 - I_2}{I_1 + I_2 - 2I_0}\,\tan\frac{\chi}{2} = \sin 2\phi\,\tan \Delta$$

$$B \equiv \frac{I_4 - I_3}{I_4 + I_3 - 2I_0}\,\tan\frac{\chi}{2} = \cos 2\phi\,\tan \Delta$$

<p class="plm-section-label mb-2 mt-3">Retardo y azimut</p>

$$\Delta = \begin{cases} \arctan\!\sqrt{A^2+B^2} & I_1+I_2-2I_0 \ge 0 \\ 180^\circ - \arctan\!\sqrt{A^2+B^2} & I_1+I_2-2I_0 < 0 \end{cases}$$

$$\phi = \tfrac{1}{2}\arctan\!\left(\tfrac{A}{B}\right)$$
</div>
</div>

</div>

<!-- Logos abajo a la derecha -->
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
deckSection: marco
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Redes Neuronales para Detección de Objetos</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>

<div class="grid min-h-0 min-w-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-6">
  <div class="min-w-0 text-left">
    <p class="mb-3 max-w-3xl hyphens-auto text-justify text-sm leading-snug text-unal-gray sm:text-base">
      La detección de objetos integra <span class="font-semibold text-unal-blue">localización</span>,
      <span class="font-semibold text-unal-blue">clasificación</span> y
      <span class="font-semibold text-unal-blue">confianza</span> en una misma predicción.
    </p>
    <ul class="mb-3 list-disc space-y-1.5 pl-4 text-xs leading-snug text-unal-gray marker:text-unal-blue sm:text-sm">
      <li><span class="font-semibold">Paso 1 - Extracción de características:</span> la red obtiene descriptores de la imagen.</li>
      <li><span class="font-semibold">Paso 2 - Predicción de cajas:</span> localiza cada objeto candidato.</li>
      <li><span class="font-semibold">Paso 3 - Clase y confianza:</span> asigna etiqueta y puntaje por detección.</li>
    </ul>
    <p class="mb-1 text-[11px] font-semibold uppercase tracking-wide text-unal-blue sm:text-xs">Dos etapas vs una etapa</p>
    <ul class="list-disc space-y-1.5 pl-4 text-xs leading-snug text-unal-gray marker:text-unal-blue sm:text-sm">
      <li><span class="font-semibold text-unal-blue">Dos etapas (multi-pass):</span> primero generan propuestas de región y luego clasifican/refinan cada caja.</li>
      <li><span class="font-semibold text-unal-blue">Una etapa (YOLO):</span> localiza y clasifica en una sola pasada sobre la imagen completa.</li>
    </ul>
  </div>

  <figure class="m-0 min-w-0 flex flex-col">
    <img
      src="../images/figures/diagrams/ann_diagram.png"
      alt="Arquitectura general de los modelos YOLO"
      class="mx-auto h-auto max-h-[min(52vh,410px)] w-full max-w-[96%] object-contain"
    />
    <figcaption lang="es" class="mt-2 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
      <span class="font-semibold text-unal-gray">Fig. 6.</span>
      Arquitectura general de los modelos YOLO.
      <span class="ml-0.5 font-semibold text-unal-blue">Elaboración propia.</span>
    </figcaption>
  </figure>
</div>

</div>

<!-- Logos abajo a la derecha -->
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
deckSection: marco
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Métricas de evaluación de la detección de objetos</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>

<div class="grid min-h-0 min-w-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)] lg:gap-5">
<div class="min-w-0 text-left">
<p class="mb-0.5 text-xs leading-snug text-unal-gray sm:text-sm"><span class="font-semibold text-unal-blue">IoU:</span> solapamiento entre caja predicha y caja de referencia.</p>
<div class="mb-0.5 text-[78%] leading-none">
$$
IoU=\frac{\operatorname{Area}(B_{pred}\cap B_{gt})}{\operatorname{Area}(B_{pred}\cup B_{gt})}
$$
</div>
<p class="mb-0.5 text-xs leading-snug text-unal-gray sm:text-sm"><span class="font-semibold text-unal-blue">mAP:</span> promedio de AP en todas las clases.</p>
<div class="mb-0.5 text-[78%] leading-none">
$$
mAP=\frac{1}{N}\sum_{i=1}^{N}AP_i
$$
</div>
<p class="mb-0.5 text-xs leading-snug text-unal-gray sm:text-sm"><span class="font-semibold text-unal-blue">mAP&#64;50:</span> AP promedio con criterio de acierto si IoU &ge; 0.5.</p>
<div class="mb-0.5 text-[78%] leading-none">
$$
\mathrm{mAP}_{50}=\frac{1}{N}\sum_{i=1}^{N}AP_i(IoU\geq0.5)
$$
</div>
<p class="mb-0.5 text-xs leading-snug text-unal-gray sm:text-sm"><span class="font-semibold text-unal-blue">mAP&#64;50-95:</span> promedio en umbrales de IoU entre 0.50 y 0.95.</p>
<div class="mb-0.5 text-[74%] leading-none">
$$
\mathrm{mAP}_{50:95}=\frac{1}{10}\sum_{t\in\{0.50,\ldots,0.95\}}\mathrm{mAP}_t
$$
</div>
</div>

<div class="min-w-0 text-left">
<p class="mb-0.5 text-xs leading-snug text-unal-gray sm:text-sm"><span class="font-semibold text-unal-blue">Precisión (P):</span> proporción de detecciones positivas que son correctas.</p>
<div class="mb-0.5 text-[78%] leading-none">
$$
P=\frac{TP}{TP+FP}
$$
</div>
<p class="mb-0.5 text-xs leading-snug text-unal-gray sm:text-sm"><span class="font-semibold text-unal-blue">Sensibilidad (R):</span> proporción de positivos reales detectados.</p>
<div class="mb-0.5 text-[78%] leading-none">
$$
R=\frac{TP}{TP+FN}
$$
</div>
<p class="mb-0.5 text-xs leading-snug text-unal-gray sm:text-sm"><span class="font-semibold text-unal-blue">Tasa de falsos positivos (FPR):</span> proporción de negativos clasificados como positivos.</p>
<div class="mb-0.5 text-[78%] leading-none">
$$
FPR=\frac{FP}{FP+TN}
$$
</div>
</div>
</div>

</div>

<!-- Logos abajo a la derecha -->
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
