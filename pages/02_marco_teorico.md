---
transition: slide-up
deckSection: marco
---

<div class="slide-deck-shell pb-10">
<header class="mb-1.5 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Ovocito: marcadores de madurez nuclear</h1>
  <div class="mt-1 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<p class="mb-2 max-w-4xl hyphens-auto text-justify text-sm font-normal leading-snug text-unal-gray">
  Tres estructuras permiten evaluar la madurez del ovocito <span class="font-semibold text-unal-blue">MII</span> de forma directa:
</p>
<ul class="mt-1 list-none space-y-2 text-sm leading-snug text-unal-gray">
<li class="flex gap-1.5">
  <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
  <span><span class="font-semibold text-unal-blue">Huso meiótico:</span> segrega cromosomas en MII; su presencia confirma la madurez nuclear del ovocito. <span class="font-semibold text-unal-blue">Valor clínico dual:</span> evaluación de madurez + orientación de la aguja ICSI al punto opuesto — evita daño cromosómico.</span>
</li>
<li class="flex gap-1.5">
  <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
  <span><span class="font-semibold text-unal-blue">Zona pelúcida:</span> capa glicoproteica externa; su integridad es indicador de calidad ovocitaria.</span>
</li>
<li class="flex gap-1.5">
  <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
  <span><span class="font-semibold text-unal-blue">Cuerpo polar:</span> indicador clínico habitual; aparece <span class="font-semibold">antes</span> de que el huso esté completamente ensamblado — PLM permite verificar directamente si el huso ya está formado.</span>
</li>
</ul>
<div class="mt-4 grid w-full grid-cols-2 gap-4 lg:gap-5">
<figure class="m-0 flex min-w-0 flex-col">
<img src="../images/figures/diagrams/oocyte_plm.png" alt="Ovocito bajo PLM" class="mx-auto h-auto max-h-[10.5rem] w-full object-contain" />
<figcaption lang="es" class="plm-figcaption">
  <span class="font-semibold text-unal-gray">Fig. 2.</span>
  Ovocito bajo PLM: huso meiótico (s), zona pelúcida (zp), citoplasma (c) y cuerpo polar (pb). Rienzi et al.
  <span class="ml-0.5 font-semibold text-unal-blue">[3]</span>.
</figcaption>
</figure>
<figure class="m-0 flex min-w-0 flex-col">
<img src="../images/figures/oocytes/oocyte_diagram_002.png" alt="Esquema del proceso de maduración de un ovocito" class="h-auto max-h-60 w-full object-contain" />
<figcaption lang="es" class="plm-figcaption">
  <span class="font-semibold text-unal-gray">Fig. 3.</span>
  Esquema del proceso de maduración. Elaboración propia.
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

<!--
Solo el 5–10 % de los ovocitos recuperados poseen potencial de desarrollo completo — se trabaja con márgenes muy estrechos. Tres estructuras permiten evaluar esa madurez de forma directa: el huso meiótico, la zona pelúcida y el cuerpo polar, todas visibles en la figura de la izquierda.

El huso meiótico es la estructura central de este trabajo: segrega cromosomas en metafase II y su presencia confirma la madurez nuclear del ovocito. Hay un hecho clínico crítico: el cuerpo polar —el indicador más usado en clínica— aparece antes de que el huso esté completamente ensamblado. La microscopía polarizada permite verificar directamente si el huso ya está formado, ofreciendo una evaluación más precisa del momento óptimo para ICSI.
-->

---
transition: slide-up
deckSection: marco
---

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Recuperación cuantitativa del retardo óptico</h1>
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
    <p class="plm-section-label-center text-left text-[0.72rem] sm:text-[0.8rem]">Imagen de intensidad (I₀–I₄)</p>
    <figure class="m-0 flex w-full min-w-0 flex-col items-stretch">
      <img
        src="../images/intensitites.png"
        alt="Cinco imágenes de intensidad del astero con distintos ajustes de polarización"
        class="h-auto w-full max-h-[min(42vh,280px)] object-contain"
      />
      <figcaption lang="es" class="plm-figcaption">
        <span class="font-semibold text-unal-gray">Fig. 4.</span>
        Cinco imágenes de intensidad del astero con ajustes de polarización 0–4. Shribak &amp; Oldenbourg (2003) <span class="font-semibold text-unal-blue">[4]</span>
      </figcaption>
    </figure>
  </div>

  <!-- Columna derecha: mapa de retardo óptico -->
  <div class="relative z-0 min-w-0 flex flex-col items-center justify-start self-start px-0.5">
    <p class="plm-section-label-center text-left text-[0.72rem] sm:text-[0.8rem]">Retardo óptico (Δ)</p>
    <figure class="m-0 flex w-full min-w-0 flex-col items-stretch">
      <img
        src="../images/figures/diagrams/Diagramas_Tesis-Pagina-2.png"
        alt="Ejemplo de imagen de retardo óptico"
        class="plm-retardo-img"
      />
      <figcaption lang="es" class="plm-figcaption">
        <span class="font-semibold text-unal-gray">Fig. 5.</span>
        Mapa de magnitud de retardo de un astero de microtúbulos reconstituido desde centrosoma. Blanco ≈ 1,2&nbsp;nm; negro, birrefringencia nula. Shribak &amp; Oldenbourg (2003) <span class="font-semibold text-unal-blue">[4]</span>
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

<!--
Esta diapositiva muestra cómo la PLM cuantitativa recupera información de cada píxel de la imagen. La idea central es la siguiente: en lugar de una sola imagen, el sistema captura cinco imágenes con distintos estados de polarización — I₀ hasta I₄. La imagen de la izquierda es un ejemplo de una de esas capturas de intensidad.

Con esas cinco intensidades se construyen dos términos auxiliares, A y B, que permiten estimar para cada píxel el retardo óptico Δ — que cuantifica la birrefringencia de la estructura — y el azimut φ, que indica la orientación molecular.

A la derecha vemos el resultado práctico: un mapa de retardo de un áster de microtúbulos, donde los puntos brillantes corresponden a zonas de alta birrefringencia. Este mismo proceso es el que permite medir cuantitativamente el huso meiótico del ovocito, estructura por estructura, píxel a píxel.
-->

---
transition: slide-up
deckSection: marco
---

<div class="slide-deck-shell pb-16">
<header class="mb-1 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Modelo matemático de PLM cuantitativa</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>

<div class="mt-2 grid w-full grid-cols-1 gap-2 [&_.katex-display]:my-1.5 [&_.katex-display]:text-[0.82rem] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-6">
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

<p class="mt-1.5 pr-56 text-[0.62rem] leading-snug text-unal-gray/60">
  <span class="font-semibold">χ ≈ 10°</span> — ángulo de swing del retardador del PolScope (constante del sistema, no varía por muestra). En este trabajo la síntesis construye el mapa Δ directamente a partir de las propiedades morfológicas de cada estructura, sin reproducir la cadena completa I₀–I₄.
</p>

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

<!--
Veamos ahora el modelo matemático que hace posible esa medición. Las cinco ecuaciones de intensidad, que aparecen a la izquierda, describen físicamente cómo cada píxel de la imagen reacciona en función del retardo óptico Δ y el azimut φ de la estructura birrefringente que contiene.

Para simplificar el cálculo se definen dos términos auxiliares, A y B, que separan algebraicamente la información de orientación y de amplitud de la birrefringencia. Con A y B en mano, las ecuaciones de retardo y azimut que aparecen a la derecha permiten estimar Δ y φ para cada píxel de forma directa.

Este modelo matemático es el sustento de la síntesis realista: conociendo las propiedades físicas del huso meiótico — su forma, su retardo óptico, su orientación — podemos simular con precisión las cinco imágenes de intensidad que produciría el PolScope para un ovocito dado. Eso es lo que hace posible la base de datos sintética.
-->

---
transition: slide-up
deckSection: marco
---

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Redes neuronales para detección de objetos</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>

<div class="grid min-h-0 min-w-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-4">
  <div class="min-w-0 text-left">
    <p class="mb-1.5 max-w-3xl hyphens-auto text-justify text-xs leading-snug text-unal-gray">
      La detección de objetos integra <span class="font-semibold text-unal-blue">localización</span>,
      <span class="font-semibold text-unal-blue">clasificación</span> y
      <span class="font-semibold text-unal-blue">confianza</span> en una misma predicción.
    </p>
    <ul class="mb-1.5 list-disc space-y-1 pl-4 text-xs leading-snug text-unal-gray marker:text-unal-blue">
      <li><span class="font-semibold">Paso 1 - Extracción de características:</span> la red obtiene descriptores de la imagen.</li>
      <li><span class="font-semibold">Paso 2 - Predicción de cajas:</span> localiza cada objeto candidato.</li>
      <li><span class="font-semibold">Paso 3 - Clase y confianza:</span> asigna etiqueta y puntaje por detección.</li>
    </ul>
    <p class="mb-1 text-[11px] font-semibold uppercase tracking-wide text-unal-blue">Dos etapas vs una etapa</p>
    <ul class="list-disc space-y-1 pl-4 text-xs leading-snug text-unal-gray marker:text-unal-blue">
      <li><span class="font-semibold text-unal-blue">Dos etapas (multi-pass):</span> primero generan propuestas de región y luego clasifican/refinan cada caja.</li>
      <li><span class="font-semibold text-unal-blue">Una etapa (YOLO):</span> localiza y clasifica en una sola pasada sobre la imagen completa — inferencia en <span class="font-semibold">tiempo real</span> (&lt;&thinsp;10&thinsp;ms/img), viable para integración directa en el microscopio.</li>
    </ul>
  </div>

  <figure class="m-0 min-w-0 flex flex-col">
    <img
      src="../images/figures/diagrams/ann_diagram.png"
      alt="Arquitectura general de los modelos YOLO"
      class="mx-auto h-auto max-h-[min(44vh,340px)] w-full max-w-[96%] object-contain"
    />
    <figcaption lang="es" class="plm-figcaption">
      <span class="font-semibold text-unal-gray">Fig. 6.</span>
      Arquitectura general de los modelos YOLO.
      Elaboración propia.
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

<!--
Las redes neuronales para detección de objetos resuelven tres tareas simultáneamente: extraen características de la imagen, predicen la ubicación de cada objeto mediante una caja delimitadora, y asignan a cada caja una clase y un puntaje de confianza.

Históricamente esto se hacía en dos etapas: primero generar candidatos de región y luego clasificarlos y refinarlos. Las arquitecturas de una sola etapa, como la familia YOLO — que es la que usamos en este trabajo —, hacen todo en una sola pasada sobre la imagen, lo que las hace más eficientes sin sacrificar precisión. En la figura de la derecha vemos su arquitectura general: columna vertebral para extracción de características, cuello para integración multiescala, y cabeza para las predicciones finales.
-->

---
transition: slide-left
deckSection: marco
---

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Métricas de evaluación de la detección</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>

<div class="grid min-h-0 min-w-0 flex-1 grid-cols-1 gap-2 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)] lg:gap-4 [&_.katex-display]:!my-0 [&_.katex-display]:!py-1 [&_.katex-display]:!px-3 [&_.katex-display]:text-[0.62rem]">
<div class="min-w-0 text-left">
<p class="mb-px text-xs leading-snug text-unal-gray"><span class="font-semibold text-unal-blue">IoU:</span> solapamiento entre caja predicha y caja de referencia.</p>

$$IoU=\frac{\operatorname{Area}(B_{pred}\cap B_{gt})}{\operatorname{Area}(B_{pred}\cup B_{gt})}$$

<p class="mb-px text-xs leading-snug text-unal-gray"><span class="font-semibold text-unal-blue">mAP:</span> promedio de AP en todas las clases.</p>

$$mAP=\frac{1}{N}\sum_{i=1}^{N}AP_i$$

<p class="mb-px text-xs leading-snug text-unal-gray"><span class="font-semibold text-unal-blue">mAP&#64;50:</span> AP promedio con criterio de acierto si IoU &ge; 0.5.</p>

$$\mathrm{mAP}_{50}=\frac{1}{N}\sum_{i=1}^{N}AP_i(IoU\geq0.5)$$

<p class="mb-px text-xs leading-snug text-unal-gray"><span class="font-semibold text-unal-blue">mAP&#64;50-95:</span> promedio en umbrales de IoU entre 0.50 y 0.95.</p>

$$\mathrm{mAP}_{50:95}=\frac{1}{10}\sum_{t\in\{0.50,\ldots,0.95\}}\mathrm{mAP}_t$$

</div>

<div class="min-w-0 text-left">
<p class="mb-px text-xs leading-snug text-unal-gray"><span class="font-semibold text-unal-blue">Precisión (P):</span> proporción de detecciones positivas que son correctas.</p>

$$P=\frac{TP}{TP+FP}$$

<p class="mb-px text-xs leading-snug text-unal-gray"><span class="font-semibold text-unal-blue">Sensibilidad (R):</span> proporción de positivos reales detectados.</p>

$$R=\frac{TP}{TP+FN}$$

<p class="mb-px text-xs leading-snug text-unal-gray"><span class="font-semibold text-unal-blue">Tasa de falsos positivos (FPR):</span> proporción de negativos clasificados como positivos.</p>

$$FPR=\frac{FP}{FP+TN}$$

<div class="mt-2 rounded-[10px] border-l-4 border-unal-blue bg-unal-blue/10 px-4 py-3 text-xs leading-snug text-unal-gray">
  En diagnóstico preferimos <span class="font-semibold">alta sensibilidad</span> — es preferible una falsa alarma que no detectar un huso real.
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

<!--
Para evaluar un detector usamos métricas espaciales y de clasificación. En cuanto a métricas espaciales: el IoU mide el solapamiento entre la caja predicha y la de referencia — es el criterio base para decidir si una detección fue correcta. El mAP es el promedio de las precisiones promedio sobre todas las clases; lo reportamos en dos versiones: mAP@50, con umbral de IoU de 0.5, y mAP@50-95, que promedia sobre diez umbrales y es considerablemente más exigente.

En cuanto a métricas de clasificación: la Precisión mide qué proporción de las detecciones positivas son realmente correctas; la Sensibilidad, cuántos objetos reales fueron detectados; y la Tasa de Falsos Positivos, cuántos negativos fueron clasificados erróneamente como positivos. Con estas seis métricas tenemos una evaluación completa del modelo.

En diagnóstico clínico preferimos alta sensibilidad sobre baja tasa de falsos positivos — es preferible decirle a alguien que podría tener cáncer y no tenerlo, que no detectarle uno que sí tiene. Ese principio aplica directamente aquí: preferimos no perder un huso meiótico real aunque eso implique alguna falsa alarma ocasional.
-->

