---
transition: slide-up
deckSection: estado
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Métodos de evaluación de madurez de ovocitos</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="mb-2 grid grid-cols-2 gap-x-6 gap-y-1.5 text-left">
  <div class="flex gap-2 text-[0.78rem] leading-snug text-unal-gray sm:text-[0.82rem]">
    <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
    <span>Holubcová et al.<span class="ml-0.5 font-semibold text-unal-blue">[14]</span>: detección del <span class="font-semibold text-unal-blue">huso meiótico</span> = indicador clave de madurez MII y aptitud para ICSI</span>
  </div>
  <div class="flex gap-2 text-[0.78rem] leading-snug text-unal-gray sm:text-[0.82rem]">
    <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
    <span>Evaluación manual: <span class="font-semibold">subjetiva</span>, alta variabilidad interobservador<span class="ml-0.5 font-semibold text-unal-blue">[15]</span></span>
  </div>
  <div class="flex gap-2 text-[0.78rem] leading-snug text-unal-gray sm:text-[0.82rem]">
    <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
    <span>PLM = técnica <span class="font-semibold">no invasiva</span>; visualiza <span class="font-semibold text-unal-blue">huso meiótico</span>, ZP, CP y citoplasma mediante <span class="font-semibold">birrefringencia</span></span>
  </div>
  <div class="flex gap-2 text-[0.78rem] leading-snug text-unal-gray sm:text-[0.82rem]">
    <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
    <span>PolScope: retardo óptico cuantitativo por píxel<span class="ml-0.5 font-semibold text-unal-blue">[13]</span></span>
  </div>
  <div class="col-span-2 flex gap-2 text-[0.78rem] leading-snug text-unal-gray sm:text-[0.82rem]">
    <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
    <span>Sistemas AI existentes: <span class="font-semibold">MOMA</span> (Fjeldstad<span class="ml-0.5 font-semibold text-unal-blue">[15]</span>) — segmenta ZP y ooplasma · <span class="font-semibold">OoCount</span> (Folts<span class="ml-0.5 font-semibold text-unal-blue">[26]</span>) — conteo por estadio · Chaput et al.<span class="ml-0.5 font-semibold text-unal-blue">[27]</span> — visualización para rescate IVM · <span class="italic">ninguno entrena un detector multi-clase en PLM</span></span>
  </div>
</div>
<figure class="m-0 mb-2 min-w-0">
  <img
    src="../images/figures/oocytes/oocyte_diagram_002.png"
    alt="Esquema ilustrativo del proceso de maduración de un ovocito"
    class="h-auto max-h-[min(23vh,148px)] w-full object-contain"
  />
  <figcaption lang="es" class="mt-1 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
    <span class="font-semibold text-unal-gray">Fig. 2.</span>
    Esquema ilustrativo del proceso de maduración de un ovocito. Elaboración propia.
  </figcaption>
</figure>
<div class="rounded-md border-l-4 border-unal-blue bg-unal-blue/10 px-2 py-0.5">
  <p class="mb-0 text-[0.65rem] font-bold uppercase tracking-wide text-unal-blue">Brecha</p>
  <p class="text-[0.78rem] font-semibold leading-snug text-unal-gray">
    Ningún sistema <span class="text-unal-blue">detecta y localiza simultáneamente</span> estructuras birrefringentes en PLM — MOMA<span class="ml-0.5 font-bold text-unal-blue">[15]</span>, OoCount<span class="ml-0.5 font-bold text-unal-blue">[26]</span>: segmentación/conteo, no detección de objetos multi-clase<span class="ml-0.5 font-bold text-unal-blue">[8][14]</span>
  </p>
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
deckSection: estado
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Estructuras Birrefringentes y PLM en embriología</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="grid min-h-0 flex-1 grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-6">
  <figure class="m-0 min-w-0 flex flex-col justify-center">
    <img
      src="../images/figures/diagrams/oocyte_plm.png"
      alt="Huso meiótico, zona pelúcida, cuerpo polar y citoplasma bajo PLM"
      class="h-auto max-h-[min(40vh,260px)] w-full object-contain"
    />
    <figcaption lang="es" class="mt-1.5 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
      <span class="font-semibold text-unal-gray">Fig. 5.</span>
      Huso meiótico (s), ZP (zp), citoplasma (c) y cuerpo polar (pb) bajo PLM. Rienzi et al.<span class="ml-0.5 font-semibold text-unal-blue">[8]</span>.
    </figcaption>
  </figure>
  <ul class="list-none flex flex-col justify-center space-y-3 text-[0.82rem] leading-snug text-unal-gray sm:text-[0.86rem]">
    <li class="flex gap-2">
      <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
      <span><span class="font-semibold text-unal-blue">Huso meiótico</span> → segrega cromosomas → presencia indica MII; su morfología y posición predicen éxito de ICSI<span class="ml-0.5 font-semibold text-unal-blue">[14]</span></span>
    </li>
    <li class="flex gap-2">
      <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
      <span><span class="font-semibold">ZP</span> → unión espermática y protección del embrión; <span class="font-semibold">CP</span> → confirma fin de la 1.ª división meiótica<span class="ml-0.5 font-semibold text-unal-blue">[6][8]</span></span>
    </li>
    <li class="flex gap-2">
      <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
      <span>Tepla et al. 2021<span class="ml-0.5 font-semibold text-unal-blue">[6]</span>: posición relativa huso–CP se asocia a mayores tasas de embarazo tras ICSI</span>
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

---
transition: slide-up
deckSection: estado
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">El uso de bases de datos sintéticas</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-6">
  <div class="flex flex-col justify-start gap-3 text-left">
    <ul class="list-none space-y-2 text-[0.78rem] leading-snug text-unal-gray sm:text-[0.82rem]">
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span>Escasez de datos PLM anotados: privacidad, costo y tiempo<span class="ml-0.5 font-semibold text-unal-blue">[19]</span> → no existe ninguna base pública · Beduschi<span class="ml-0.5 font-semibold text-unal-blue">[19]</span>: datos sintéticos <span class="font-semibold">evitan barreras éticas y legales</span> de los datos clínicos</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold text-unal-blue">Mery 2021–22</span><span class="ml-0.5 font-semibold text-unal-blue">[16][17]</span>: defectos elipsoidales simulados → detector transfiere a rayos X reales · <span class="font-semibold">Eversberg &amp; Lambrecht</span><span class="ml-0.5 font-semibold text-unal-blue">[28]</span>: 5&nbsp;000 imágenes sintéticas para detector industrial — mismo principio</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold">Frid-Adar et al.</span><span class="ml-0.5 font-semibold text-unal-blue">[29]</span>: síntesis de datos médicos como estrategia válida en dominios clínicos</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span>Analogía: huso meiótico = elipsoide de <span class="font-semibold">bajo contraste</span> · física del huso (retardo ~4–6&nbsp;nm) permite <span class="font-semibold">síntesis realista</span> basada en modelos físicos<span class="ml-0.5 font-semibold text-unal-blue">[21]</span></span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span>Reto: <span class="font-semibold">domain shift</span> sintético→real; estrategias de transfer learning son esenciales<span class="ml-0.5 font-semibold text-unal-blue">[20]</span></span>
      </li>
    </ul>
  </div>
  <div class="flex flex-col gap-3 min-w-0">
    <figure class="m-0 min-w-0">
      <img
        src="../images/figures/simulation.png"
        alt="GDXray+ Mery: fundición X-ray, elipses simuladas, superposición y detecciones"
        class="h-auto max-h-[min(28vh,180px)] w-full object-contain"
      />
      <figcaption lang="es" class="mt-1 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
        <span class="font-semibold text-unal-gray">Fig. 7.</span>
        GDXray+ (Mery<span class="ml-0.5 font-semibold text-unal-blue">[16]</span>): (a) fundición X-ray, (b) defectos simulados, (c) superposición, (d) detecciones.
      </figcaption>
    </figure>
    <figure class="m-0 min-w-0">
      <img
        src="../images/figures/oocyte_synth.png"
        alt="Imagen sintética generada de ovocito PLM"
        class="h-auto max-h-[min(28vh,180px)] w-full object-contain"
      />
      <figcaption lang="es" class="mt-1 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
        <span class="font-semibold text-unal-gray">Fig. 8.</span>
        Imagen sintética generada de ovocito PLM (s = huso, pb = cuerpo polar, zp = zona pelúcida, c = citoplasma).
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

---
transition: slide-up
deckSection: estado
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Avances en redes Neuronales para detección de objetos</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<p class="mb-3 max-w-4xl text-[0.8rem] leading-snug text-unal-gray sm:text-[0.84rem]">
  Tras revisar más de 30 artículos, la familia <span class="font-semibold text-unal-blue">YOLO</span> se consolida como la plataforma más adoptada en detección en tiempo real<span class="ml-0.5 font-semibold text-unal-blue">[22]</span>, con aplicaciones en medicina, industria y objetos de bajo contraste. Arquitecturas revisadas:
</p>
<div class="grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-6">
  <div class="flex flex-col gap-3">
    <div class="flex flex-wrap gap-1.5">
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">Faster R-CNN</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">SSD</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">RetinaNet</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv3</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv4</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv5</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv7</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv8</span>
      <span class="rounded-full bg-unal-blue/10 px-2.5 py-0.5 text-[0.72rem] font-semibold text-unal-blue ring-1 ring-unal-blue/40">YOLOv9</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv10</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv11</span>
      <span class="rounded-full bg-unal-blue/10 px-2.5 py-0.5 text-[0.72rem] font-semibold text-unal-blue ring-1 ring-unal-blue/40">YOLOv12</span>
      <span class="rounded-full bg-unal-green/15 px-2.5 py-0.5 text-[0.72rem] font-semibold text-[#5a7a2a] ring-1 ring-unal-green/50">RT-DETR</span>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-3">
    <div class="rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm">
      <p class="mb-1 text-[0.68rem] font-bold uppercase tracking-wide text-unal-blue">Backbone</p>
      <p class="text-[0.72rem] leading-snug text-unal-gray">Bloques eficientes: CSP, C3, C2f — extracción de características multi-escala</p>
    </div>
    <div class="rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm">
      <p class="mb-1 text-[0.68rem] font-bold uppercase tracking-wide text-unal-blue">Cuello (Neck)</p>
      <p class="text-[0.72rem] leading-snug text-unal-gray">FPN / PANet — fusión multi-escala; mejora detección de objetos pequeños</p>
    </div>
    <div class="rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm">
      <p class="mb-1 text-[0.68rem] font-bold uppercase tracking-wide text-unal-blue">Cabeza (Head)</p>
      <p class="text-[0.72rem] leading-snug text-unal-gray">Anchor-free → IoU-based losses — mejor localización espacial</p>
    </div>
    <div class="rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm">
      <p class="mb-1 text-[0.68rem] font-bold uppercase tracking-wide text-unal-green">Atención</p>
      <p class="text-[0.72rem] leading-snug text-unal-gray">SE, CBAM, ECA — recalibración espacial y de canal · YOLO-SCL<span class="ml-0.5 font-semibold text-unal-blue">[32]</span>, MA-YOLO<span class="ml-0.5 font-semibold text-unal-blue">[31]</span>: validados en dominios de bajo contraste</p>
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
transition: slide-up
deckSection: estado
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">YOLO &amp; RT-DETR</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-3">
  <figure class="m-0 min-w-0 flex-1">
    <img
      src="../images/figures/Slide9.png"
      alt="Línea del tiempo OD, maduración de ovocitos y bases de datos sintéticas 2017-2025"
      class="h-auto max-h-[min(52vh,360px)] w-full object-contain"
    />
    <figcaption lang="es" class="mt-1.5 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
      <span class="font-semibold text-unal-gray">Fig. 9.</span>
      Línea del tiempo de desarrollos relevantes en detección de objetos (OD), maduración de ovocitos (E) y bases de datos sintéticas (SD), 2017–2025.
    </figcaption>
  </figure>
  <ul class="list-none space-y-1.5 text-[0.78rem] leading-snug text-unal-gray sm:text-[0.82rem]">
    <li class="flex gap-2">
      <span class="mt-0.5 shrink-0 text-unal-blue">▸</span>
      <span><span class="font-semibold">YOLOv9</span><span class="ml-0.5 font-semibold text-unal-blue">[23]</span>: PGI — gradiente programable → mayor precisión incluso en configuraciones ligeras entrenadas desde cero</span>
    </li>
    <li class="flex gap-2">
      <span class="mt-0.5 shrink-0 text-unal-blue">▸</span>
      <span><span class="font-semibold">YOLOv12</span><span class="ml-0.5 font-semibold text-unal-blue">[25]</span>: primer YOLO centrado en mecanismos de <span class="font-semibold">atención</span> — ruptura con el paradigma puramente convolucional</span>
    </li>
    <li class="flex gap-2">
      <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
      <span><span class="font-semibold">RT-DETR</span><span class="ml-0.5 font-semibold text-unal-blue">[18]</span>: Transformer end-to-end — elimina NMS; precisión competitiva con YOLO en tiempo real</span>
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

---
transition: slide-left
deckSection: estado
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Atención &amp; Transformers</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-5">
  <figure class="m-0 min-w-0 flex flex-col">
    <img
      src="../images/figures/results/stage18_features.png"
      alt="Mapas de características YOLOv9m - stage 18 RepNCSPELAN4"
      class="h-auto max-h-[min(58vh,400px)] w-full object-contain"
    />
    <figcaption lang="es" class="mt-2 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
      <span class="font-semibold text-unal-gray">Fig. 10.</span>
      Mapas de características del módulo RepNCSPELAN4 (stage 18) en YOLOv9m, mostrando la activación diferenciada de regiones de interés.
    </figcaption>
  </figure>
  <div class="flex flex-col justify-start gap-3 text-left">
    <ul class="list-none space-y-2.5 text-[0.8rem] leading-snug text-unal-gray sm:text-[0.84rem]">
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold">CBAM, SE, ECA</span>: recalibran respuesta espacial y de canal — adaptan el detector a dominios específicos sin rediseño completo</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span>En este trabajo: <span class="font-semibold text-unal-blue">CBAM integrado en YOLOv9m</span> → mejora detección de estructuras pequeñas (huso meiótico, cuerpo polar)</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold">RT-DETR</span><span class="ml-0.5 font-semibold text-unal-blue">[18]</span>: atención cross-escala global elimina NMS y reduce dependencia de heurísticas de post-procesamiento</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span>Imágenes PLM: la codificación de entrada (p.&nbsp;ej. vector de Stokes) afecta la capacidad discriminativa del detector<span class="ml-0.5 font-semibold text-unal-blue">[30]</span></span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-blue">▸</span>
        <span class="font-semibold text-unal-blue">Confluencia: brecha PLM + datos sintéticos + detector con atención → base de la estrategia propuesta en este trabajo</span>
      </li>
    </ul>
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
