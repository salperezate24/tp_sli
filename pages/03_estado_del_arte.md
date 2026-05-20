---
transition: slide-up
deckSection: estado
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Evaluación de madurez ovocitaria mediante PLM</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="grid min-h-0 flex-1 grid-cols-2 gap-5">
  <!-- Columna izquierda: PLM detecta el huso -->
  <div class="flex flex-col gap-2 min-w-0">
    <ul class="list-none space-y-1.5 text-[0.82rem] leading-snug text-unal-gray">
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold text-unal-blue">Huso meiótico</span> — indicador óptimo de madurez MII, <span class="font-semibold">invisible en campo claro</span> <span class="ml-0.5 font-semibold text-unal-blue">(Holubcová et al., 2019; Fjeldstad et al., 2024)</span></span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold">PLM / PolScope</span> — visualización no invasiva del huso; retardo óptico cuantitativo por píxel <span class="ml-0.5 font-semibold text-unal-blue">(Shribak &amp; Oldenbourg, 2003)</span></span>
      </li>
    </ul>
    <figure class="m-0 min-w-0">
      <img
        src="../images/60058fig3large.jpg"
        alt="Huso meiótico invisible en campo claro, visible con fluorescencia y con PLM — Holubcová et al."
        class="h-auto max-h-[min(40vh,250px)] w-full object-contain object-top"
      />
      <figcaption lang="es" class="plm-figcaption">
        Huso meiótico: invisible en campo claro, visible con fluorescencia y con <span class="font-semibold">PLM</span>. Holubcová et al. (2019)
      </figcaption>
    </figure>
  </div>
  <!-- Columna derecha: sistemas existentes sin PLM ni huso -->
  <div class="flex flex-col gap-2 min-w-0">
    <ul class="list-none space-y-1.5 text-[0.82rem] leading-snug text-unal-gray">
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold">MOMA</span> <span class="ml-0.5 font-semibold text-unal-blue">(Fjeldstad et al., 2024)</span>, <span class="font-semibold">OoCount</span> <span class="ml-0.5 font-semibold text-unal-blue">(Folts et al., 2024)</span>, Chaput et al. <span class="ml-0.5 font-semibold text-unal-blue">(2025)</span> — campo claro: <span class="font-semibold italic">sin PLM · sin detección del huso</span></span>
      </li>
    </ul>
    <figure class="m-0 min-w-0">
      <img
        src="../images/segmentation_ooplasm.png"
        alt="MOMA: segmentación de ZP y ooplasma en campo claro — sin PLM ni huso meiótico"
        class="h-auto max-h-[min(40vh,250px)] w-full object-contain object-top"
      />
      <figcaption lang="es" class="plm-figcaption">
        MOMA (Fjeldstad et al., 2024): segmentación de ZP y ooplasma en <span class="font-semibold">campo claro</span> — sin PLM, sin huso meiótico.
      </figcaption>
    </figure>
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
Con este marco teórico claro pasamos a revisar el estado del arte, empezando por los métodos de evaluación de madurez de ovocitos.

Está claro que la detección del huso meiótico es un indicador clave de madurez MII y aptitud para ICSI. También, explicamos que se sigue realizando una evaluación manual de la madurez del ovocito, pero esta es subjetiva y depende de la experiencia del observador. Estudios indican que incluso hay variabilidad interobservador, por lo que se requiere un método más objetivo.

Recientemente se ha popularizado el uso de la microscopía polarizada para visualizar los ovocitos. Esta técnica permite visualizar la birrefringencia de la muestra y se ha descubierto que el huso meiótico tiene birrefringencia precisamente en el punto en que es apto para fecundación. La imagen de la izquierda —de Holubcová et al.— ilustra esto: en la fila superior vemos el ovocito en campo claro, donde el huso es completamente invisible y se observa el cuerpo polar; con fluorescencia se hace visible el huso pero requiere marcadores que comprometen la viabilidad de la célula; en la fila inferior, la PLM lo revela sin ninguna intervención química.

Se han desarrollado sistemas de automatización que realizan segmentación celular o conteos, pero ninguno aprovecha las ventajas que ofrece la PLM para detectar estos marcadores de madurez en la célula. La imagen de la derecha —MOMA, de Fjeldstad— es un ejemplo representativo: segmenta la zona pelúcida y el ooplasma en campo claro, sin detectar el huso meiótico ni usar PLM.
-->

---
transition: slide-up
deckSection: estado
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Estructuras birrefringentes del ovocito</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-6">
  <ul class="list-none flex flex-col justify-center space-y-3 text-[0.82rem] leading-snug text-unal-gray sm:text-[0.86rem]">
    <li class="flex gap-2">
      <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
      <span><span class="font-semibold text-unal-blue">Huso meiótico</span> — birrefringente <span class="font-semibold">solo en MII</span>, <span class="font-semibold">invisible en campo claro</span> <span class="ml-0.5 font-semibold text-unal-blue">(Holubcová et al., 2019; Kelleher &amp; Needleman, 2022)</span></span>
    </li>
    <li class="flex gap-2">
      <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
      <span><span class="font-semibold">Zona pelúcida (ZP)</span> → birrefringencia moderada por su organización glicoproteica; indicador de integridad estructural del ovocito <span class="ml-0.5 font-semibold text-unal-blue">(Rienzi et al., 2011)</span></span>
    </li>
    <li class="flex gap-2">
      <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
      <span><span class="font-semibold">Cuerpo polar (CP)</span> — confirma 1.ª división meiótica; <span class="font-semibold">visible en campo claro</span> · <span class="italic text-gray-500">en PLM: borde negro (baja birrefringencia)</span> <span class="ml-0.5 font-semibold text-unal-blue">(Tepla et al., 2021; Rienzi et al., 2011)</span></span>
    </li>
  </ul>
  <figure class="m-0 min-w-0 flex flex-col justify-center">
    <img
      src="../images/figures/diagrams/oocyte_plm.png"
      alt="Huso meiótico, zona pelúcida, cuerpo polar y citoplasma bajo PLM"
      class="h-auto max-h-[min(46vh,300px)] w-full object-contain"
    />
    <figcaption lang="es" class="plm-figcaption">
      Huso meiótico (s), zona pelúcida (zp), citoplasma (c) y cuerpo polar (pb). Rienzi et al. (2011)
    </figcaption>
  </figure>
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
En la diapositiva anterior vimos que la PLM se popularizó para visualizar ovocitos. Detengámonos ahora en cómo se visualizan algunas estructuras en PLM.

En esta imagen de Rienzi et al. vemos el ovocito maduro bajo microscopía polarizada. Dos estructuras principales presentan birrefringencia: el huso meiótico, como una estructura elipsoidal — su birrefringencia solo aparece en estadio MII, lo que lo convierte en el indicador directo de madurez. La zona pelúcida, con birrefringencia moderada producto de su organización glicoproteica. Y dos estructuras más difíciles de ver en PLM pero igualmente importantes en la evaluación de maduración: el cuerpo polar, que confirma que la primera división meiótica se completó — su posición relativa al huso predice el éxito en ICSI. Aunque es visible en campo claro, en PLM pierde contraste: su baja birrefringencia hace que su borde aparezca negro, prácticamente indistinguible del fondo, y se observa también el limite del citoplasma.

Lo que hace especialmente relevante a la PLM es que el huso meiótico es completamente invisible en campo claro: esta es la única técnica no invasiva que lo revela. Y la visualización del huso, no solo es marca de madurez sino de calidad. Un ovocito puede tener cuerpo polar pero nunca generar el huso.
-->

---
transition: slide-up
deckSection: estado
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Retardo óptico de estructuras birrefringentes</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="grid min-h-0 flex-1 grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-5">
  <div class="flex flex-col justify-center gap-3">
    <ul class="list-none space-y-2.5 text-[0.80rem] leading-snug text-unal-gray sm:text-sm">
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold text-unal-blue">Huso meiótico:</span> retardo <span class="font-semibold">1–5.6&nbsp;nm</span> — bajo contraste, difícil de detectar automáticamente <span class="ml-0.5 font-semibold text-unal-blue">(Kelleher &amp; Needleman, 2022; Bruguès &amp; Needleman, 2014)</span></span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold">Zona pelúcida:</span> retardo <span class="font-semibold">0–2&nbsp;nm</span> (~36% del máximo del huso) <span class="ml-0.5 font-semibold text-unal-blue">(Rienzi et al., 2011)</span></span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold">Fondo:</span> retardo <span class="font-semibold">0–1&nbsp;nm</span> — referencia de calibración del sistema <span class="ml-0.5 font-semibold text-unal-blue">(Bruguès &amp; Needleman, 2014)</span></span>
      </li>
    </ul>
    <div class="rounded-md border-l-4 border-unal-green bg-unal-green/10 px-2.5 py-1.5">
      <p class="mb-0 text-[0.75rem] font-semibold leading-snug text-unal-gray">
        Esta diferencia cuantitativa es la base física que hace posible la <span class="text-unal-blue">síntesis realista de imágenes PLM</span>
      </p>
    </div>
  </div>
  <figure class="m-0 min-w-0 flex flex-col justify-center">
    <img
      src="../images/spindle_retardance.png"
      alt="Medición de retardo óptico del huso meiótico en ovocitos de ratón a distintos objetivos"
      class="h-auto max-h-[min(42vh,270px)] w-full object-contain"
    />
    <figcaption lang="es" class="plm-figcaption">
      Huso bajo PLM (4×, 10×, 100×); perfiles de retardo en MI y MII. Kelleher &amp; Needleman (2022)
    </figcaption>
  </figure>
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
Se ha cuantificado la birrefringencia del huso, el fondo y de la zona pelúcida.

Bruguès y Needleman midieron el retardo óptico del huso meiótico en ovocitos de ratón a distintos objetivos. Los perfiles de la parte b de la imagen confirman que en estadio MII el huso es consistentemente detectable. Los valores de la parte b lo cuantifican: retardo entre 1 y 5.6 nanómetros. Para referencia, la zona pelúcida presenta entre 0 y 2 nanómetros, y el fondo entre 0 y 1 nanómetro.

Valores tan pequeños y tan próximos entre sí son exactamente el reto del problema: el huso no destaca visualmente con facilidad. Pero al mismo tiempo son valores físicamente bien definidos y cuantificables, lo que hace posible plantear la pregunta de la detección o la modelación de forma sintética.
-->

---
transition: slide-up
deckSection: estado
---

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray">Proyecto marco — Sistema PLM propuesto (GPIMA)</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
  <div class="mt-1 text-[0.65rem] italic leading-snug text-gray-400">Desarrollo de un método para la detección automática del huso meiótico para establecer la relación con la maduración y la fertilización in vitro en ovocitos porcinos, basado en el vector de Stokes y estrategias de visión artificial</div>
</header>
<div class="grid min-h-0 flex-1 grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-3">
  <figure class="m-0 flex flex-col items-center justify-center gap-1">
    <img
      src="../images/figures/gpima_montaje_optico.png"
      alt="Configuración del microscopio polarizado propuesto — montaje óptico GPIMA"
      class="h-auto max-h-[min(46vh,290px)] w-full object-contain"
    />
    <figcaption lang="es" class="plm-figcaption text-center">
      Configuración del microscopio polarizado propuesto. LS-LED · P1 · LC · DC-PS · CÁMARA · OBJETIVO 20×. Los ángulos (α, φ) corresponden a la rotación física de cada elemento.
    </figcaption>
  </figure>
  <div class="flex flex-col gap-2">
    <figure class="m-0 flex flex-col items-center justify-center gap-1">
      <img
        src="../images/figures/gpima_retardo_ovocito.png"
        alt="Imágenes de retardo y ángulo de ovocito porcino — método de cambio de fase"
        class="h-auto max-h-[min(24vh,150px)] w-full object-contain"
      />
      <figcaption lang="es" class="plm-figcaption text-center">
        Retardo y ángulo de ovocito porcino (grado 1, 24 h). Col. izq.: cambio de fase 6 pasos; col. central: 4 pasos. Fila sup.: ángulo; fila inf.: retardo.
      </figcaption>
    </figure>
    <div class="rounded-md border-l-4 border-unal-blue/60 bg-unal-blue/[0.07] px-2.5 py-1.5 text-[0.72rem] leading-[1.45] text-unal-gray">
      <div class="mb-0.5 font-semibold text-unal-blue">Limitaciones experimentales del proyecto marco:</div>
      <ol class="list-decimal pl-4 space-y-0">
        <li>Horas exactas de maduración de los ovocitos desconocidas</li>
        <li>Sin micromanipulador robótico para rotar el óvulo al ángulo de medición</li>
        <li>Sin cámara conectada a la incubadora — extraer el óvulo para observarlo lo daña</li>
      </ol>
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

<!--
Este es el sistema que el grupo GPIMA construyó y en el que se enmarca esta tesis. El montaje usa una fuente LED, un polarizador lineal, cristales líquidos como retardadores variables y una cámara polarizada — todo controlado para adquirir imágenes de retardo óptico a diferentes ángulos de fase, como se ve en la figura 7-13: esa cuadrícula de cuatro imágenes muestra el retardo y el ángulo extraídos de un ovocito porcino usando los métodos de cambio de fase de seis y cuatro pasos.

Sin embargo, en vista de las dificultades experimentales del proyecto marco, no fue posible construir una base de datos real de ovocitos humanos: no se conocían las horas exactas de maduración, no se contaba con micromanipulador robótico para posicionar el óvulo, extraer el ovocito de la incubadora para fotografiarlo lo daña, y los procedimientos de polarización requerían una mejora de contraste que aún no estaba disponible.

En vista de estas dificultades, desarrollamos la siguiente estrategia para generar los datos de entrenamiento.
-->

---
transition: slide-up
deckSection: estado
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Bases de datos sintéticas para aprendizaje profundo</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-2 text-left">
  <ul class="list-none space-y-2 text-[0.82rem] leading-snug text-unal-gray">
    <li class="flex gap-2">
      <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
      <span><span class="font-semibold">Escasez de datos:</span> no existe base PLM de ovocitos anotada y pública — barreras éticas, de privacidad y costo de adquisición <span class="ml-0.5 font-semibold text-unal-blue">(Beduschi, 2024)</span></span>
    </li>
    <li class="flex gap-2">
      <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
      <span><span class="font-semibold">Síntesis validada en otros dominios:</span> Mery <span class="ml-0.5 font-semibold text-unal-blue">(2021, 2022)</span> (rayos X industriales), Eversberg &amp; Lambrecht <span class="ml-0.5 font-semibold text-unal-blue">(2024)</span> (industria), Frid-Adar et al. <span class="ml-0.5 font-semibold text-unal-blue">(2018)</span> (imágenes médicas) — datos sintéticos permiten entrenar detectores que <span class="font-semibold">generalizan a imágenes reales</span></span>
    </li>
  </ul>
  <figure class="m-0 min-w-0">
    <img
      src="../images/figures/simulation.png"
      alt="GDXray+ Mery: fundición X-ray, elipses simuladas, superposición y detecciones"
      class="h-auto max-h-[min(38vh,235px)] w-full object-contain"
    />
    <figcaption lang="es" class="plm-figcaption text-center">
      GDXray+ (Mery, 2021): (a) fundición X-ray, (b) defectos simulados, (c) superposición, (d) detecciones.
    </figcaption>
  </figure>
  <ul class="list-none text-[0.82rem] leading-snug text-unal-gray">
    <li class="flex gap-2">
      <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
      <span><span class="font-semibold">Base física:</span> huso — elipsoidal, retardo cuantificable → síntesis realista <span class="ml-0.5 font-semibold text-unal-blue">(Kelleher &amp; Needleman, 2022; Bruguès &amp; Needleman, 2014)</span></span>
    </li>
  </ul>
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
Para entrenar un detector de objetos se necesitan imágenes anotadas. Aquí encontramos la primera barrera práctica: no existe ninguna base pública de imágenes PLM de ovocitos.

En el marco del proyecto:
Desarrollo de un método para la detección automática del huso meiótico para establecer la relación con la maduración y la fertilización in vitro en ovocitos porcinos, basado en el vector de stokes y estrategias de visión artificial

Se intentó construir una pero debido a limitaciones de observación, material celular e infraestructura no se logró.

Además, este tipo de datos clínicos son privados, costosos y sujetos a restricciones éticas.

Así que la solución, respaldada por la literatura, es la generación de datos sintéticos. Como vemos en la figura, Mery y otros demostraron que simular defectos elipsoidales sobre imágenes de rayos X permitía entrenar un detector que transfería correctamente a imágenes reales. Eversberg y Lambrecht, y Frid-Adar et al. validan esta estrategia en industria detectando defectos en aluminio y en imágenes médicas respectivamente.

Así, con lo visto anteriormente se tiene el fundamento físico para generar nuestra base de datos sintetica: el huso meiótico tiene morfología elipsoidal y retardo óptico cuantificable, lo que habilita un modelado sintético realista. El principal reto será pasar del dominio sintético al real.
-->

---
transition: slide-up
deckSection: estado
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Arquitecturas para detección de objetos</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-3">
  <div class="flex flex-col gap-1.5">
    <!-- Fila 1: Clásicos -->
    <div class="flex items-center gap-2">
      <span class="w-24 shrink-0 text-right text-[0.68rem] font-semibold uppercase tracking-wide text-gray-400">Clásicos</span>
      <div class="flex flex-wrap gap-1.5">
        <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.78rem] font-medium text-unal-gray ring-1 ring-gray-300">Faster R-CNN</span>
        <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.78rem] font-medium text-unal-gray ring-1 ring-gray-300">SSD</span>
        <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.78rem] font-medium text-unal-gray ring-1 ring-gray-300">RetinaNet</span>
      </div>
    </div>
    <!-- Fila 2: YOLO 2018–23 -->
    <div class="flex items-center gap-2">
      <span class="w-24 shrink-0 text-right text-[0.68rem] font-semibold uppercase tracking-wide text-gray-400">YOLO 2018–23</span>
      <div class="flex flex-wrap gap-1.5">
        <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.78rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv3</span>
        <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.78rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv4</span>
        <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.78rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv5</span>
        <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.78rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv7</span>
        <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.78rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv8</span>
      </div>
    </div>
    <!-- Fila 3: YOLO reciente + RT-DETR -->
    <div class="flex items-center gap-2">
      <span class="w-24 shrink-0 text-right text-[0.68rem] font-semibold uppercase tracking-wide text-gray-400">YOLO reciente</span>
      <div class="flex flex-wrap gap-1.5">
        <span class="rounded-full bg-unal-blue/10 px-2.5 py-0.5 text-[0.78rem] font-semibold text-unal-blue ring-1 ring-unal-blue/40">★ YOLOv9</span>
        <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.78rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv10</span>
        <span class="rounded-full bg-unal-blue/10 px-2.5 py-0.5 text-[0.78rem] font-semibold text-unal-blue ring-1 ring-unal-blue/40">★ YOLOv11</span>
        <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.78rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv12</span>
        <span class="rounded-full bg-unal-green/15 px-2.5 py-0.5 text-[0.78rem] font-semibold text-[#5a7a2a] ring-1 ring-unal-green/50">● RT-DETR</span>
      </div>
    </div>
  </div>
  <div class="flex min-h-0 flex-1 gap-2">
    <!-- Estructura de la red: Columna vertebral + Cuello + Cabeza -->
    <div class="flex flex-1 gap-2 rounded-xl border border-unal-blue/25 bg-unal-blue/5 p-1.5">
      <div class="flex flex-1 flex-col rounded-lg border border-gray-200 bg-white px-2.5 py-2 shadow-sm">
        <p class="mb-0 text-[0.80rem] !font-bold uppercase tracking-wide text-unal-blue">Columna vertebral</p>
        <p class="text-[0.80rem] leading-snug text-unal-gray !mt-0">Bloques eficientes: CSP, C3, C2f — extracción de características multi-escala.</p>
      </div>
      <div class="flex flex-1 flex-col rounded-lg border border-gray-200 bg-white px-2.5 py-2 shadow-sm">
        <p class="mb-0 text-[0.80rem] !font-bold uppercase tracking-wide text-unal-blue">Cuello (Neck)</p>
        <p class="text-[0.80rem] leading-snug text-unal-gray !mt-0">FPN / PANet — fusión multi-escala — detección de objetos de distintos tamaños.</p>
      </div>
      <div class="flex flex-1 flex-col rounded-lg border border-gray-200 bg-white px-2.5 py-2 shadow-sm">
        <p class="mb-0 text-[0.80rem] !font-bold uppercase tracking-wide text-unal-blue">Cabeza (Head)</p>
        <p class="text-[0.80rem] leading-snug text-unal-gray !mt-0">Anchor-free → predicciones con pérdidas basadas en IoU.</p>
      </div>
    </div>
  </div>
  <div class="mt-0.5 shrink-0 rounded border border-gray-200 bg-gray-50/80 px-3 py-1 text-[0.88rem] leading-snug text-gray-400 italic">
    Variantes de YOLO han incorporado módulos de atención para adaptar la red a dominios específicos — YOLO-SCL <span class="not-italic ml-0.5 font-semibold text-unal-blue">(Lyu et al., 2023)</span>, MA-YOLO <span class="not-italic ml-0.5 font-semibold text-unal-blue">(Jiang et al., 2023)</span>.
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
Ahora, sobre las redes neuronales para detección de objetos, se han mantenido evolucionado desde arquitecturas de dos etapas — Faster R-CNN, RetinaNet — hacia detectores de una sola etapa que resuelven localización y clasificación simultáneamente. En la diapositiva vemos el panorama de arquitecturas revisadas; en azul, YOLOv9 y YOLOv11, los dos modelos centrales de este trabajo, y en verde RT-DETR como alternativa Transformer.

Esta evolución trajo mejoras sistemáticas en tres componentes, que vemos en la parte inferior: la columna vertebral extrae características multi-escala con bloques progresivamente más eficientes; el cuello integra esas características mediante Red Piramidal de Características FPN y Red de Agregación de Rutas PANet para detectar objetos de distintos tamaños; la cabeza produce predicciones con esquemas anchor-free y pérdidas basadas en IoU; 

-- esto no
y se han desarrollado modulos de atención como — SE (Atención de Compresión y Excitación), CBAM (El modulo bloque de atencion), ECA (Atencion eficiente de canal) — recalibran la respuesta de la red para adaptarla a dominios específicos como las imágenes PLM.
-->

---
transition: slide-up
deckSection: estado
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Familia YOLO: arquitecturas evaluadas</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-3">
  <!-- Timeline block -->
  <div class="rounded-lg border border-gray-100 bg-gray-50/60 px-4 py-3">
    <!-- YOLO timeline row -->
    <div class="relative">
      <!-- Connecting line at dot center: 20px (year label h-5) + 5px (half of h-2.5 dot) = 25px -->
      <div class="absolute inset-x-0 top-[25px] h-px bg-gray-200 z-0"></div>
      <div class="grid grid-cols-12">
        <!-- v1 -->
        <div class="flex flex-col items-center z-10">
          <span class="text-[11px] text-gray-400 h-5 leading-5 flex items-end justify-center">2016</span>
          <div class="w-2.5 h-2.5 rounded-full bg-gray-300 ring-1 ring-white"></div>
          <span class="text-[12px] text-gray-500 mt-0.5">v1</span>
        </div>
        <!-- v2 -->
        <div class="flex flex-col items-center z-10">
          <span class="text-[11px] text-gray-400 h-5 leading-5 flex items-end justify-center">2017</span>
          <div class="w-2.5 h-2.5 rounded-full bg-gray-300 ring-1 ring-white"></div>
          <span class="text-[12px] text-gray-500 mt-0.5">v2</span>
        </div>
        <!-- v3 -->
        <div class="flex flex-col items-center z-10">
          <span class="text-[11px] text-gray-400 h-5 leading-5 flex items-end justify-center">2018</span>
          <div class="w-2.5 h-2.5 rounded-full bg-gray-300 ring-1 ring-white"></div>
          <span class="text-[12px] text-gray-500 mt-0.5">v3</span>
        </div>
        <!-- v4 (2020) -->
        <div class="flex flex-col items-center z-10">
          <span class="text-[11px] text-gray-400 h-5 leading-5 flex items-end justify-center">2020</span>
          <div class="w-2.5 h-2.5 rounded-full bg-gray-300 ring-1 ring-white"></div>
          <span class="text-[12px] text-gray-500 mt-0.5">v4</span>
        </div>
        <!-- v5 (2020, skip year label) -->
        <div class="flex flex-col items-center z-10">
          <span class="text-[11px] h-5 invisible">2020</span>
          <div class="w-2.5 h-2.5 rounded-full bg-gray-300 ring-1 ring-white"></div>
          <span class="text-[12px] text-gray-500 mt-0.5">v5</span>
        </div>
        <!-- v6 (2022) -->
        <div class="flex flex-col items-center z-10">
          <span class="text-[11px] text-gray-400 h-5 leading-5 flex items-end justify-center">2022</span>
          <div class="w-2.5 h-2.5 rounded-full bg-gray-300 ring-1 ring-white"></div>
          <span class="text-[12px] text-gray-500 mt-0.5">v6</span>
        </div>
        <!-- v7 (2022, skip year label) -->
        <div class="flex flex-col items-center z-10">
          <span class="text-[11px] h-5 invisible">2022</span>
          <div class="w-2.5 h-2.5 rounded-full bg-gray-300 ring-1 ring-white"></div>
          <span class="text-[12px] text-gray-500 mt-0.5">v7</span>
        </div>
        <!-- v8 (2023) -->
        <div class="flex flex-col items-center z-10">
          <span class="text-[11px] text-gray-400 h-5 leading-5 flex items-end justify-center">2023</span>
          <div class="w-2.5 h-2.5 rounded-full bg-gray-300 ring-1 ring-white"></div>
          <span class="text-[12px] text-gray-500 mt-0.5">v8</span>
        </div>
        <!-- v9 (2024) HIGHLIGHTED -->
        <div class="flex flex-col items-center z-10">
          <span class="text-[11px] font-semibold text-unal-blue h-5 leading-5 flex items-end justify-center">2024</span>
          <div class="w-3.5 h-3.5 rounded-full bg-unal-blue ring-2 ring-unal-blue/30 -mt-0.5"></div>
          <span class="text-[12px] font-bold text-unal-blue mt-0.5">v9★</span>
        </div>
        <!-- v10 (2024, skip year label) -->
        <div class="flex flex-col items-center z-10">
          <span class="text-[11px] h-5 invisible">2024</span>
          <div class="w-2.5 h-2.5 rounded-full bg-gray-300 ring-1 ring-white"></div>
          <span class="text-[12px] text-gray-500 mt-0.5">v10</span>
        </div>
        <!-- v11 (2024) HIGHLIGHTED -->
        <div class="flex flex-col items-center z-10">
          <span class="text-[11px] h-5 invisible">2024</span>
          <div class="w-3.5 h-3.5 rounded-full bg-unal-blue ring-2 ring-unal-blue/30 -mt-0.5"></div>
          <span class="text-[12px] font-bold text-unal-blue mt-0.5">v11★</span>
        </div>
        <!-- v12 (2025) -->
        <div class="flex flex-col items-center z-10">
          <span class="text-[11px] text-gray-400 h-5 leading-5 flex items-end justify-center">2025</span>
          <div class="w-2.5 h-2.5 rounded-full bg-gray-300 ring-1 ring-white"></div>
          <span class="text-[12px] text-gray-500 mt-0.5">v12</span>
        </div>
      </div>
    </div>
    <!-- RT-DETR row (same grid-cols-12, aligned with v8 column = col 8, index 7) -->
    <div class="grid grid-cols-12 mt-1">
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      <!-- Column 8: RT-DETR (aligned with v8, 2023) -->
      <div class="flex flex-col items-center">
        <div class="h-2 w-px bg-unal-green/60"></div>
        <div class="w-3 h-3 rounded bg-unal-green/15 ring-1 ring-unal-green/70"></div>
        <span class="text-[11px] font-semibold text-[#5a7a2a] whitespace-nowrap mt-0.5">RT-DETR</span>
      </div>
      <div></div><div></div><div></div><div></div>
    </div>
    <!-- Legend -->
    <div class="mt-2 flex items-center gap-5">
      <div class="flex items-center gap-1.5">
        <div class="w-3 h-3 rounded-full bg-unal-blue"></div>
        <span class="text-[11px] text-unal-gray">★ Evaluado en este trabajo</span>
      </div>
      <div class="flex items-center gap-1.5">
        <div class="w-3 h-3 rounded bg-unal-green/15 ring-1 ring-unal-green/70"></div>
        <span class="text-[11px] text-unal-gray">Transformer (Baidu, 2023)</span>
      </div>
    </div>
  </div>
  <!-- Bullets -->
  <ul class="list-none space-y-1.5 text-[0.88rem] leading-snug text-unal-gray sm:text-[0.88rem]">
    <li class="flex gap-2">
      <span class="mt-0.5 shrink-0 text-unal-blue">▸</span>
      <span><span class="font-semibold">YOLOv9</span> <span class="ml-0.5 font-semibold text-unal-blue">(Wang et al., 2024)</span>: PGI — preserva información de gradiente → mayor precisión en modelos ligeros.</span>
    </li>
    <li class="flex gap-2">
      <span class="mt-0.5 shrink-0 text-unal-blue">▸</span>
      <span><span class="font-semibold">YOLOv11</span> <span class="ml-0.5 font-semibold text-unal-blue">(Khanam &amp; Hussain, 2024)</span>: bloques C3k2 — arquitectura base para integrar módulos de atención.</span>
    </li>
    <li class="flex gap-2">
      <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
      <span><span class="font-semibold text-unal-green">RT-DETR</span> <span class="ml-0.5 font-semibold text-unal-blue">(Zhao et al., 2024)</span>: Transformer end-to-end — elimina NMS — alternativa estructural a YOLO.</span>
    </li>
  </ul>
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
Esta línea del tiempo muestra la evolución de YOLO desde la versión 1 en 2016 hasta la versión 12 en 2025 — nueve años de desarrollo continuo. Tres modelos son centrales en este trabajo, marcados en azul y verde.

YOLOv9, de 2024, introdujo la planificación de rutas de gradiente — un mecanismo que preserva la información a lo largo de la red y mejora la precisión incluso en configuraciones ligeras entrenadas desde cero. YOLOv11, también de 2024 y desarrollado por Ultralytics, introduce bloques de convolucion llamados C3k2 de mayor eficiencia y fue la arquitectura base sobre la cual integramos módulos de atención en este trabajo. Y RT-DETR, de Baidu en 2023, propone detección Transformer end-to-end: elimina el post-procesamiento de supresión de no-máximos y ofrece una alternativa estructuralmente distinta a la familia YOLO.
-->

---
transition: slide-left
deckSection: estado
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Mecanismos de atención y arquitecturas Transformer</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-2 [&_.katex-display]:my-1 [&_.katex-display]:text-[0.68rem]">

<!-- Bullets -->
<ul class="list-none space-y-1.5 text-[0.88rem] leading-snug text-unal-gray">
<li class="flex gap-2">
<span class="mt-0.5 shrink-0 text-unal-green">▸</span>
<span><span class="font-semibold">SE, ECA</span> — recalibran canales; <span class="font-semibold">CBAM</span> añade atención espacial — sin rediseñar el detector.</span>
</li>
<li class="flex gap-2">
<span class="mt-0.5 shrink-0 text-unal-green">▸</span>
<span>En este trabajo: <span class="font-semibold text-unal-blue">CBAM integrado en YOLOv9m</span> → mejora detección de estructuras pequeñas (huso meiótico, cuerpo polar).</span>
</li>
<li class="flex gap-2">
<span class="mt-0.5 shrink-0 text-unal-green">▸</span>
<span><span class="font-semibold text-unal-green">RT-DETR</span> <span class="ml-0.5 font-semibold text-unal-blue">(Zhao et al., 2024)</span>: atención global entre posiciones — decodificador Transformer elimina NMS.</span>
</li>
</ul>

<!-- Ecuaciones -->
<div class="rounded-md bg-gray-50 px-3 py-0.5">

$$\text{Canal:}\quad M_c(\mathbf{F}) = \sigma\!\left(\mathrm{MLP}(\mathrm{AvgPool}(\mathbf{F})) + \mathrm{MLP}(\mathrm{MaxPool}(\mathbf{F}))\right)$$

$$\text{Espacial:}\quad M_s(\mathbf{F}) = \sigma\!\left(f^{7\times7}\!\left([\mathrm{AvgPool}(\mathbf{F});\,\mathrm{MaxPool}(\mathbf{F})]\right)\right)$$

</div>

<!-- Diagrama CBAM ancho completo -->
<div class="mt-1 flex items-center justify-center gap-2 text-[0.78rem]">
  <div class="flex flex-col items-center rounded-lg border border-unal-blue/40 bg-unal-blue/10 px-3 py-2 text-center text-unal-gray">
    <span class="font-semibold">x</span>
    <span class="text-[0.66rem] text-gray-500">(B, C, H, W)</span>
  </div>
  <div class="flex flex-col items-center gap-0">
    <span class="text-[0.60rem] leading-none text-gray-400">Rasgos</span>
    <span class="text-[0.60rem] leading-none text-gray-400">crudos</span>
    <span class="text-lg leading-none text-gray-400">→</span>
  </div>
  <div class="rounded-lg border border-dashed border-unal-gray/35 px-3 py-2">
    <div class="mb-1.5 text-center text-[0.58rem] font-bold uppercase tracking-widest text-unal-gray/40">Módulo CBAM</div>
    <div class="flex items-center gap-2">
      <div class="flex flex-col items-center rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-center text-unal-gray">
        <span class="font-semibold">Atención Canal</span>
        <span class="text-[0.66rem] italic text-gray-500">M<sub>c</sub>(F)</span>
      </div>
      <div class="flex flex-col items-center gap-0">
        <span class="text-[0.60rem] leading-none text-gray-400">Rasgos</span>
        <span class="text-[0.60rem] leading-none text-gray-400">por canal</span>
        <span class="text-lg leading-none text-gray-400">→</span>
      </div>
      <div class="flex flex-col items-center rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-center text-unal-gray">
        <span class="font-semibold">Atención Espacial</span>
        <span class="text-[0.66rem] italic text-gray-500">M<sub>s</sub>(F)</span>
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center gap-0">
    <span class="text-[0.60rem] leading-none text-gray-400">Rasgos</span>
    <span class="text-[0.60rem] leading-none text-gray-400">refinados</span>
    <span class="text-lg leading-none text-gray-400">→</span>
  </div>
  <div class="flex flex-col items-center rounded-lg border border-unal-blue/40 bg-unal-blue/10 px-3 py-2 text-center text-unal-gray">
    <span class="font-semibold">F'</span>
    <span class="text-[0.66rem] text-gray-500">(B, C, H, W)</span>
  </div>
</div>
<div class="mt-1 text-center text-[0.70rem] text-gray-500"> Módulo CBAM: refinamiento secuencial canal → espacio.</div>

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
En la diapositiva anterior vimos que RT-DETR y las variantes más recientes de YOLO incorporan mecanismos de atención. Vale la pena detenerse en qué significa eso.

Existen varios módulos de atención ligeros que se integran en detectores existentes sin rediseñarlos. SE — Squeeze-and-Excitation — fue el pionero: comprime cada canal a un escalar y aprende un peso por canal. ECA (Atencion eficiente de canal) lo hace de forma más eficiente con una convolución 1D. Ambos responden solo a la pregunta de qué canales activar.

CBAM (El modulo bloque de atencion) va un paso más allá. Como vemos en el diagrama y las dos ecuaciones, aplica primero atención de canal — M_c pondera cada canal combinando pooling promedio y máximo — y luego atención espacial — M_s hace lo mismo pero por posición en la imagen. Añade así la pregunta de dónde enfocar. Eso lo hace especialmente valioso en imágenes PLM, donde el huso meiótico y el cuerpo polar son estructuras pequeñas o de muy bajo contraste. En este trabajo integramos CBAM en YOLOv9m precisamente por eso.

RT-DETR lleva el principio más lejos. Un Transformer no recalibra canales ni posiciones locales — aplica atención entre todas las posiciones de la imagen simultáneamente: cada región puede "consultar" cualquier otra, sin importar la distancia. Esto captura relaciones globales que una convolución local nunca vería. En RT-DETR, un decodificador Transformer produce directamente las detecciones finales mediante consultas aprendidas, eliminando la necesidad del la supresion de no-maximos como paso de post-procesamiento.
-->
