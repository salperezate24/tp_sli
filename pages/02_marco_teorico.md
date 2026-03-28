---
transition: slide-up
deckSection: marco
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">El ovocito y el huso meiótico</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<p class="mb-1.5 max-w-3xl hyphens-auto text-justify text-sm font-normal leading-snug text-unal-gray sm:mb-2 sm:max-w-4xl sm:text-base sm:leading-snug">
  El ovocito es la célula femenina más grande y se caracteriza por su gran tamaño y su contenido citoplasmático. El huso meiótico es una estructura celular que se forma en la meiosis y que ayuda a separar los cromosomas homólogos.
</p>
<div class="grid min-h-0 min-w-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,0.78fr)] lg:gap-5">
  <figure class="m-0 min-w-0 flex flex-col">
    <img
      src="../images/figures/oocytes/oocyte_diagram_002.png"
      alt="Esquema del proceso de maduración de un ovocito"
      class="h-auto max-h-[min(70vh,500px)] w-full object-contain"
    />
    <figcaption lang="es" class="mt-2 max-w-full text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
      <span class="font-semibold text-[#262626]">Fig. 2.</span>
      Esquema ilustrativo del proceso de maduración de un ovocito. Elaboración propia.
    </figcaption>
  </figure>
  <figure class="m-0 min-w-0 flex flex-col">
    <img
      src="../images/figures/diagrams/oocyte_plm.png"
      alt="Diagrama esquemático de microscopía de luz polarizada aplicada al ovocito"
      class="mx-auto h-auto max-h-[min(19vh,210px)] w-full max-w-[90%] object-contain"
    />
    <figcaption lang="es" class="mt-2 max-w-full text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
      <span class="font-semibold text-[#262626]">Fig. 3.</span>
      Ovocito visualizado con microscopía de luz polarizada. Huso meiótico (s), zona pelúcida (zp), límite del citoplasma (c) y cuerpo polar (pb). Tomado de Rienzi et al.
      <span class="ml-0.5 font-semibold text-[#3981BF]">[8]</span>.
    </figcaption>
  </figure>
</div>
</div>

<!-- Logos abajo a la derecha (misma distribución que Agenda y resto del deck) -->
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
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Recuperación cuantitativa del retardo</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>

<p class="mb-0 max-w-5xl hyphens-auto text-justify text-xs leading-snug text-unal-gray sm:text-sm sm:leading-snug">
  <span class="font-semibold">Retardo óptico en PLM cuantitativa:</span> a partir de las intensidades
  las cinco intensidades <span class="font-medium">I₀, I₁, I₂, I₃, I₄</span> se construyen los términos <span class="font-medium italic">A</span> y <span class="font-medium italic">B</span>,
  que permiten estimar el <span class="font-medium">retardo Δ</span> y el azimut <span class="font-medium">φ</span>
  para describir la birrefringencia de la muestra; en este ejemplo, un astero de microtúbulos reconstituido desde el centrosoma.
</p>
<div class="plm-three-col-grid !mt-0">
  <div class="relative z-0 min-w-0 flex flex-col items-center justify-start self-start px-0.5">
  <p class="plm-section-label-center">Retardo óptico</p>
  <figure class="m-0 flex w-full min-w-0 flex-col items-stretch">
  <img
    src="../images/figures/diagrams/Diagramas_Tesis-Pagina-2.png"
    alt="Ejemplo de imagen de retardo óptico"
    class="plm-retardo-img"
  />
  <figcaption lang="es" class="plm-figcaption">
  <span class="font-semibold">Fig. 4.</span>
  Mapa de magnitud de retardo (algoritmo de cinco cuadros, corrección de fondo) de un astero de microtúbulos reconstituido desde centrosoma; haces brillantes sobre centrosoma oscuro. Blanco ≈ 1,2&nbsp;nm de retardo de birrefringencia; negro, birrefringencia nula.
  <span class="mt-1 block font-medium opacity-100">Fuente: Shribak &amp; Oldenbourg (2003) <span class="font-semibold text-unal-blue">[13]</span>. En la tesis aparece como Fig.&nbsp;2-4 (cap.&nbsp;2).</span>
  </figcaption>
  </figure>
  </div>

  <div class="relative z-10 min-w-0 space-y-3 text-left plm-katex-col-left text-unal-gray">
  <p class="plm-section-label">Retardo y azimut</p>

$$
\begin{aligned}
\Delta &= \arctan\!\left(\sqrt{A^2 + B^2}\right) && \text{si } I_1 + I_2 - 2I_0 \geq 0, \\[0.3em]
\Delta &= 180^\circ - \arctan\!\left(\sqrt{A^2 + B^2}\right) && \text{si } I_1 + I_2 - 2I_0 \lt 0, \\[0.3em]
\phi &= \tfrac{1}{2}\arctan\!\left(\frac{A}{B}\right). &&
\end{aligned}
$$

  <p class="plm-section-label mt-3">Términos auxiliares</p>

$$
\begin{gathered}
A \equiv \frac{I_1 - I_2}{I_1 + I_2 - 2I_0}\,\tan\frac{\chi}{2} = \sin 2\phi\,\tan \Delta \\[0.35em]
B \equiv \frac{I_4 - I_3}{I_4 + I_3 - 2I_0}\,\tan\frac{\chi}{2} = \cos 2\phi\,\tan \Delta
\end{gathered}
$$
  </div>

  <div class="relative z-10 min-w-0 text-left plm-katex-col-right text-unal-gray">
  <p class="plm-section-label">Ecuaciones de intensidad</p>

$$
\begin{split}
I_0(x, y) = \tfrac{1}{2}\,\tau(x,y)\,I_{\text{max}}\bigl[1 - \cos \Delta(x,y)\bigr] + I_{\text{min}}(x,y)
\end{split}
$$

$$
\begin{split}
I_1(x, y) = \tfrac{1}{2}\,\tau(x,y)\,I_{\text{max}}\bigl[1 - \cos\chi\cos\Delta(x,y) + \sin\chi\sin 2\phi(x,y)\sin\Delta(x,y)\bigr] \\+ I_{\text{min}}(x,y)
\end{split}
$$

$$
\begin{split}
I_2(x, y) = \tfrac{1}{2}\,\tau(x,y)\,I_{\text{max}}\bigl[1 - \cos\chi\cos\Delta(x,y) - \sin\chi\sin 2\phi(x,y)\sin\Delta(x,y)\bigr] \\+ I_{\text{min}}(x,y)
\end{split}
$$

$$
\begin{split}
I_3(x, y) = \tfrac{1}{2}\,\tau(x,y)\,I_{\text{max}}\bigl[1 - \cos\chi\cos\Delta(x,y) - \sin\chi\cos 2\phi(x,y)\sin\Delta(x,y)\bigr] \\+ I_{\text{min}}(x,y)
\end{split}
$$

$$
\begin{split}
I_4(x, y) = \tfrac{1}{2}\,\tau(x,y)\,I_{\text{max}}\bigl[1 - \cos\chi\cos\Delta(x,y) + \sin\chi\cos 2\phi(x,y)\sin\Delta(x,y)\bigr] \\+ I_{\text{min}}(x,y)
\end{split}
$$
  </div>

</div>

</div>

<!-- Logos abajo a la derecha (misma distribución que Agenda y resto del deck) -->
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
      <span class="font-semibold text-[#262626]">Fig. 5.</span>
      Arquitectura general de los modelos YOLO.
      <span class="ml-0.5 font-semibold text-unal-blue">Elaboración propia.</span>
    </figcaption>
  </figure>
</div>

</div>

<!-- Logos abajo a la derecha (misma distribución que Agenda y resto del deck) -->
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

<!-- Logos abajo a la derecha (misma distribución que Agenda y resto del deck) -->
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
