---
transition: slide-up
deckSection: metodologia
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Diseño experimental: tres fases</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col justify-center">
  <div class="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-2">
    <!-- Fase 1 -->
    <div class="flex flex-col gap-2.5 rounded-xl border-2 border-unal-blue/30 bg-unal-blue/5 px-4 py-3">
      <div class="flex flex-col gap-0.5">
        <span class="text-[0.58rem] font-bold uppercase tracking-widest text-unal-blue/60">Fase 1</span>
        <span class="text-[0.9rem] font-bold leading-tight text-unal-blue">Bases de datos</span>
      </div>
      <ul class="list-none space-y-1.5 text-[0.82rem] leading-snug text-unal-gray">
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span>Síntesis de imágenes PLM</span></li>
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span>Búsqueda y curaduría de datos reales</span></li>
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span>Caracterización de los conjuntos</span></li>
      </ul>
    </div>
    <!-- Arrow 1 -->
    <div class="flex items-center justify-center px-1">
      <span class="text-2xl font-bold text-unal-blue/40">→</span>
    </div>
    <!-- Fase 2 -->
    <div class="flex flex-col gap-2.5 rounded-xl border-2 border-unal-blue/50 bg-unal-blue/10 px-4 py-3">
      <div class="flex flex-col gap-0.5">
        <span class="text-[0.58rem] font-bold uppercase tracking-widest text-unal-blue/60">Fase 2</span>
        <span class="text-[0.9rem] font-bold leading-tight text-unal-blue">Evaluación comparativa de redes estándar</span>
      </div>
      <ul class="list-none space-y-1.5 text-[0.82rem] leading-snug text-unal-gray">
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span>Selección de arquitecturas</span></li>
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span>Protocolos: control y transferencia de aprendizaje</span></li>
      </ul>
    </div>
    <!-- Arrow 2 -->
    <div class="flex items-center justify-center px-1">
      <span class="text-2xl font-bold text-unal-green/60">→</span>
    </div>
    <!-- Fase 3 — APORTE -->
    <div class="flex flex-col gap-2.5 rounded-xl border-2 border-unal-green/50 bg-unal-green/10 px-4 py-3">
      <div class="flex flex-col gap-0.5">
        <div class="flex items-center gap-2">
          <span class="text-[0.58rem] font-bold uppercase tracking-widest text-[#3a6a18]/60">Fase 3</span>
          <span class="rounded-md bg-unal-green/25 px-1.5 py-0.5 text-[0.55rem] font-bold text-[#3a6a18] ring-1 ring-unal-green/50">★ Aporte</span>
        </div>
        <span class="text-[0.9rem] font-bold leading-tight text-[#3a6a18]">Redes desarrolladas</span>
      </div>
      <ul class="list-none space-y-1.5 text-[0.82rem] leading-snug text-unal-gray">
        <li class="flex gap-1.5"><span class="shrink-0 text-[#3a6a18]">▸</span><span>Módulos de atención (CBAM / Transformer)</span></li>
        <li class="flex gap-1.5"><span class="shrink-0 text-[#3a6a18]">▸</span><span>Protocolo comparativo</span></li>
        <li class="flex gap-1.5"><span class="shrink-0 text-[#3a6a18]">▸</span><span>Evaluación en video</span></li>
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
Con los objetivos planteados, la metodología se organiza en tres fases. La primera construye las bases de datos: generamos imágenes PLM sintéticas a partir del modelo físico, recopilamos datos reales de publicaciones científicas y video, y caracterizamos los conjuntos resultantes.

La segunda es la evaluación comparativa de redes estándar: seleccionamos las arquitecturas más prometedoras usando un dominio análogo, y evaluamos dos protocolos — un experimento de control sin transferencia de aprendizaje, y el flujo completo de dos etapas con adaptación al dominio real.

La tercera — y el aporte central del trabajo — es el desarrollo de redes personalizadas: modificamos las arquitecturas seleccionadas con módulos de atención, repetimos el mismo protocolo comparativo y evaluamos en video. Este orden define también la estructura de la sección de resultados.
-->

---
transition: slide-up
deckSection: metodologia
---

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray">Generación de la base de datos sintética</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col justify-center">
  <div class="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-2">
    <div class="flex flex-col gap-2 rounded-xl border-2 border-unal-blue/30 bg-unal-blue/5 px-3 py-2.5">
      <div class="flex flex-col gap-0.5">
        <span class="text-[0.58rem] font-bold uppercase tracking-widest text-unal-blue/60">Paso 1</span>
        <span class="text-[0.86rem] font-bold leading-tight text-unal-blue">Modelación Física</span>
      </div>
      <ul class="list-none space-y-1 text-[0.76rem] leading-snug text-unal-gray">
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span><b>Huso meiótico:</b> Gaussiana anisotrópica 2D (Retardo ~5,6 nm) <span class="text-[0.64rem] text-unal-gray/50">(Kelleher et al., 2024)</span></span></li>
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span><b>Zona Pelúcida:</b> Banda elíptica + Filtro Gaussiano (Retardo 0–2 nm) <span class="text-[0.64rem] text-unal-gray/50">(Rienzi et al., 2011)</span></span></li>
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span><b>Estructuras base:</b> Cuerpo polar y límite citoplasmático</span></li>
      </ul>
    </div>
    <div class="flex items-center justify-center px-1">
      <span class="text-2xl font-bold text-unal-blue/40">→</span>
    </div>
    <div class="flex flex-col gap-2 rounded-xl border-2 border-unal-blue/50 bg-unal-blue/10 px-3 py-2.5">
      <div class="flex flex-col gap-0.5">
        <span class="text-[0.58rem] font-bold uppercase tracking-widest text-unal-blue/60">Paso 2</span>
        <span class="text-[0.86rem] font-bold leading-tight text-unal-blue">Síntesis Combinatoria</span>
      </div>
      <ul class="list-none space-y-1 text-[0.76rem] leading-snug text-unal-gray">
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span><b>Calibración espacial:</b> 1 px = 0,129 µm (Ovocito de 120 µm) <span class="text-[0.64rem] text-unal-gray/50">(Kelleher et al., 2024; Rienzi et al., 2012)</span></span></li>
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span><b>Normalización:</b> 0 nm (fondo) → 5,6 nm (máx.) → imagen 8-bit [0, 255]</span></li>
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span>Iteración de posiciones (18 husos, 12 ZP) + Ruido de fondo</span></li>
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span><b>Volumen generado:</b> 526 392 imágenes sintéticas</span></li>
      </ul>
    </div>
    <div class="flex items-center justify-center px-1">
      <span class="text-2xl font-bold text-unal-green/60">→</span>
    </div>
    <div class="flex flex-col gap-2 rounded-xl border-2 border-unal-green/50 bg-unal-green/10 px-3 py-2.5">
      <div class="flex flex-col gap-0.5">
        <div class="flex items-center gap-2">
          <span class="text-[0.58rem] font-bold uppercase tracking-widest text-[#3a6a18]/60">Paso 3</span>
          <span class="rounded-md bg-unal-green/25 px-1.5 py-0.5 text-[0.55rem] font-bold text-[#3a6a18] ring-1 ring-unal-green/50">★ Dataset Final</span>
        </div>
        <span class="text-[0.86rem] font-bold leading-tight text-[#3a6a18]">Etiquetado y Organización</span>
      </div>
      <ul class="list-none space-y-1 text-[0.76rem] leading-snug text-unal-gray">
        <li class="flex gap-1.5"><span class="shrink-0 text-[#3a6a18]">▸</span><span><b>Selección curada:</b> Subconjunto de 21 600 imágenes</span></li>
        <li class="flex gap-1.5"><span class="shrink-0 text-[#3a6a18]">▸</span><span><b>Etiquetado 100% automático</b> por definición paramétrica</span></li>
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
Para entrenar los modelos nos enfrentamos a una barrera crítica: los datos clínicos de imágenes PLM de ovocitos son privados, costosos y sujetos a restricciones éticas. Al no existir bases de datos públicas, la solución fue generar los datos sintéticamente.

Paso 1: Modelamos cuatro estructuras. El huso meiótico es una Gaussiana anisotrópica 2D con un retardo máximo. La zona pelúcida es una banda elíptica con filtro Gaussiano. Y también incluimos el límite citoplasmático y el cuerpo polar.

Paso 2: Calibramos el sistema a 1 píxel igual a 0,129 micrómetros — correspondiente a un zoom 400× con un ovocito de 120 µm. 
Iteramos las 18 configuraciones de huso y las 12 zonas pelúcidas en múltiples posiciones, sumando ruido de fondo como el reportado en la literatura para simular la realidad clínica, el pipeline generó más de 526 mil imágenes.
Convertimos cada una de estas imagenes de 8 bits y normalizamos entre 0 y 255. 

Antes de continuar: el retardo óptico varía entre 0 nanómetros en el fondo y 5,6 nanómetros en el máximo modelado para el huso meiótico. Esa señal en nanómetros se escala linealmente a una imagen de 8 bits entre 0 y 255, lo que la hace compatible con los modelos pre-entrenados en COCO. 

Paso 3: Extrajimos un subconjunto curado de 21 600 imágenes y se etiqueta. La ventaja metodológica clave: el etiquetado es 100% automático por definición paramétrica.
-->

---
transition: slide-up
deckSection: metodologia
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Datos reales: imágenes y video PLM</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="grid min-h-0 flex-1 grid-cols-2 gap-5">
  <!-- Imágenes PLM -->
  <div class="flex flex-col gap-2.5">
    <p class="text-[0.72rem] !font-bold uppercase tracking-wide text-unal-blue"><carbon-camera class="mr-1 inline text-[1rem] text-unal-blue" />Imágenes PLM — <span class="!font-semibold normal-case text-unal-gray">OocytePaperImages</span></p>
    <ul class="list-none space-y-2 text-[0.80rem] leading-snug text-unal-gray">
      <li class="flex gap-2">
        <carbon-book class="mt-0.5 shrink-0 text-[0.95rem] text-unal-blue" />
        <span><span class="font-semibold">Fuente:</span> publicaciones científicas y libros de texto sobre ovocitos, microscopía polarizada e ICSI</span>
      </li>
      <li class="flex gap-2">
        <carbon-filter class="mt-0.5 shrink-0 text-[0.95rem] text-unal-blue" />
        <span><span class="font-semibold">Criterio de inclusión:</span> imágenes PLM de ovocito MII con al menos una de las cuatro estructuras objetivo visibles</span>
      </li>
      <li class="flex gap-2">
        <carbon-cut-out class="mt-0.5 shrink-0 text-[0.95rem] text-unal-blue" />
        <span><span class="font-semibold">Curaduría:</span> eliminación de texto, barras de escala y gráficos superpuestos</span>
      </li>
      <li class="flex gap-2">
        <carbon-label class="mt-0.5 shrink-0 text-[0.95rem] text-unal-blue" />
        <span><span class="font-semibold">Etiquetado:</span> manual con cajas delimitadoras — mismo esquema de clases que el conjunto sintético</span>
      </li>
    </ul>
  </div>
  <!-- Videos PLM -->
  <div class="flex flex-col gap-2.5">
    <p class="text-[0.72rem] !font-bold uppercase tracking-wide text-[#3a6a18]"><carbon-video class="mr-1 inline text-[1rem] text-[#3a6a18]" />Secuencias de video — <span class="!font-semibold normal-case text-unal-gray">5 secuencias PLM</span></p>
    <ul class="list-none space-y-1.5 text-[0.80rem] leading-snug text-unal-gray">
      <li class="flex gap-2">
        <carbon-play-filled class="mt-0.5 shrink-0 text-[0.95rem] text-unal-green" />
        <span><span class="font-semibold">Sec. 1:</span> time-lapse meiosis I (109 fotogramas) — galería pública OpenPolScope <span class="text-[0.68rem] text-unal-gray/50">(OpenPolScope, 2024)</span></span>
      </li>
      <li class="flex gap-2">
        <carbon-play-filled class="mt-0.5 shrink-0 text-[0.95rem] text-unal-green" />
        <span><span class="font-semibold">Sec. 2:</span> ICSI con sistema OOSIGHT-Spindle View (deformación del ovocito por aguja) <span class="text-[0.68rem] text-unal-gray/50">(Hamilton Thorne, 2024)</span></span>
      </li>
      <li class="flex gap-2">
        <carbon-play-filled class="mt-0.5 shrink-0 text-[0.95rem] text-unal-green" />
        <span><span class="font-semibold">Sec. 3:</span> extrusión del primer cuerpo polar — Prague IVF OptimFert <span class="text-[0.68rem] text-unal-gray/50">(Prague Fertility Centre, 2024)</span></span>
      </li>
      <li class="flex gap-2">
        <carbon-play-filled class="mt-0.5 shrink-0 text-[0.95rem] text-unal-green" />
        <span><span class="font-semibold">Sec. 4–5:</span> imágenes TIF de retardo (Zenodo) → convertidas a video PNG a 5 FPS <span class="text-[0.68rem] text-unal-gray/50">(Zenodo, 2024)</span></span>
      </li>
    </ul>
    <div class="mt-1 rounded-md bg-gray-50 px-2.5 py-1.5 text-[0.67rem] leading-snug text-unal-gray/80 ring-1 ring-gray-200">
      Sin anotaciones por fotograma — uso exclusivo para evaluación cualitativa práctica
    </div>
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>

<!--
También se buscaron imagenes en literatura y bases de datos.

Se construyó un conjunto de datos de imagenes de papers donde recopilamos 200 imágenes de publicaciones científicas y libros de texto sobre ovocitos, microscopía polarizada e ICSI. El criterio de inclusión fue que cada imagen contuviera al menos una de las cuatro estructuras objetivo visibles. Las imágenes de publicaciones llegaban con texto, barras de escala y gráficos superpuestos — cada una requirió curaduría manual para limpiarla. Luego se anotaron manualmente con cajas delimitadoras, usando el mismo esquema de clases del conjunto sintético.

Y se usan cinco secuencias de videos para evaluar cualitativamente escenarios distintos, algunos donde el huso es bastante dificil de ver, morfologia variable y se encontro un dataset de imagenes que se combinaron para formar un video.
-->

---
transition: slide-up
deckSection: metodologia
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Caracterización de los conjuntos de datos</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="grid min-h-0 flex-1 grid-cols-3 gap-3">
    <!-- Conjunto 1: Sintético -->
    <div class="flex flex-col gap-2 rounded-lg border border-unal-blue/30 bg-unal-blue/5 px-3.5 py-3">
      <div class="flex items-center gap-2">
        <span class="rounded-full bg-unal-blue px-2 py-0.5 text-[0.62rem] font-bold uppercase text-white">Preentrenamiento</span>
      </div>
      <p class="flex items-center gap-1.5 text-[0.82rem] font-bold leading-tight text-unal-blue"><carbon-data-base class="shrink-0 text-[1rem]" />Oocyte_synthetic_2025b</p>
      <ul class="list-none space-y-1 text-[0.82rem] leading-snug text-unal-gray">
        <li><span class="font-semibold">Tipo:</span> Sintético</li>
        <li><span class="font-semibold">Usadas:</span> <span class="font-semibold text-unal-blue">21 600</span> de 526 392</li>
        <li><span class="font-semibold">Partición:</span> 15 120 / 3 240 / 3 240</li>
        <li><span class="font-semibold">Etiquetado:</span> automático-paramétrico</li>
        <li><span class="font-semibold">Clases:</span> huso, ZP, citoplasma, CP</li>
      </ul>
      <div class="mt-auto rounded-md border border-unal-blue/20 bg-unal-blue/5 px-2.5 py-1.5 text-[0.67rem] leading-snug text-unal-gray">
        <span class="font-semibold text-unal-blue">¿Por qué 21 600?</span> Cómputo: algunos entrenamientos superaron las <span class="font-semibold">22 h</span> en GPU L4; y para evitar sobreajuste al dominio sintético antes de la transferencia.
      </div>
    </div>
    <!-- Conjunto 2: Real PLM -->
    <div class="flex flex-col gap-2 rounded-lg border border-unal-green/40 bg-unal-green/5 px-3.5 py-3">
      <div class="flex items-center gap-2">
        <span class="rounded-full bg-unal-green px-2 py-0.5 text-[0.62rem] font-bold uppercase text-white">Transf. de aprendizaje</span>
      </div>
      <p class="flex items-center gap-1.5 text-[0.82rem] font-bold leading-tight text-[#3a6a18]"><carbon-camera class="shrink-0 text-[1rem]" />OocytePaperImages</p>
      <ul class="list-none space-y-1 text-[0.82rem] leading-snug text-unal-gray">
        <li><span class="font-semibold">Tipo:</span> Real PLM — publicaciones científicas</li>
        <li><span class="font-semibold">Total:</span> <span class="font-semibold text-[#3a6a18]">200 imágenes</span></li>
        <li><span class="font-semibold">Partición:</span> 160 entrenamiento / 40 prueba</li>
        <li><span class="font-semibold">Instancias prueba:</span> 146 anotadas</li>
        <li><span class="font-semibold">Etiquetado:</span> manual (curaduría)</li>
        <li><span class="font-semibold">Preprocesado:</span> eliminación de texto y barras de escala</li>
      </ul>
    </div>
    <!-- Conjunto 3: Video -->
    <div class="flex flex-col gap-2 rounded-lg border border-gray-300 bg-gray-50 px-3.5 py-3">
      <div class="flex items-center gap-2">
        <span class="rounded-full bg-unal-gray px-2 py-0.5 text-[0.62rem] font-bold uppercase text-white">Evaluación</span>
      </div>
      <p class="flex items-center gap-1.5 text-[0.82rem] font-bold leading-tight text-unal-gray"><carbon-video class="shrink-0 text-[1rem]" />5 secuencias de video</p>
      <ul class="list-none space-y-1 text-[0.82rem] leading-snug text-unal-gray">
        <li><span class="font-semibold">Tipo:</span> Real PLM — video</li>
        <li><span class="font-semibold">Seq. 1:</span> 109 fotogramas · time-lapse meiosis I (OpenPolScope)</li>
        <li><span class="font-semibold">Seq. 2–3:</span> videos PLM publicados (ICSI, extrusión CP)</li>
        <li><span class="font-semibold">Sec. 4–5:</span> conjunto Zenodo (imágenes TIF → video)</li>
        <li><span class="font-semibold">Uso:</span> evaluación cualitativa práctica</li>
      </ul>
    </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>

<!--
El resultado entonces son tres conjuntos de datos con roles completamente distintos.

Oocyte_synthetic_2025b tiene 21 600 imágenes de las 526 mil generadas. Se tomó ese subconjunto por dos razones: límites de cómputo — tiempo de entrenamiento, GPU y almacenamiento — y para evitar sobreajustar el modelo al dominio sintético antes de la transferencia de aprendizaje. Las 21 600 se dividen en 15 120 de entrenamiento, 3 240 de validación y 3 240 de prueba. Etiquetado 100% automático.

OocytePaperImages tiene 200 imágenes PLM reales: 160 para entrenamiento y 40 para prueba. Esas 40 imágenes de prueba contienen 146 instancias anotadas — ese es el conjunto sobre el que se calculan todas las métricas cuantitativas.

Las cinco secuencias de video no tienen anotaciones por fotograma y se usan solo para evaluación cualitativa práctica. Estos tres conjuntos suman datos a tres escalas diferentes: síntesis para escala, literatura para dominio real, video para validación en condiciones dinámicas.
-->

---
transition: slide-up
deckSection: metodologia
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Selección de arquitecturas base</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="grid min-h-0 flex-1 grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-5">
  <div class="flex flex-col gap-2.5">
    <div class="rounded-md border-l-4 border-unal-blue bg-unal-blue/5 px-2.5 py-1.5 text-[0.87rem] leading-snug text-unal-gray">
      <span class="font-semibold text-unal-blue">Prueba en dominio análogo:</span> GDXray+ (Mery, U. Católica de Chile) — <span class="font-semibold">imágenes de rayos X de fundición metálica</span> con defectos elipsoidales de bajo contraste. Mismo patrón visual que el huso meiótico en PLM.
    </div>
    <figure class="m-0 min-w-0">
      <img
        src="../images/figures/simulation.png"
        alt="GDXray+: simulación de defectos análogos a PLM"
        class="h-auto max-h-[min(26vh,170px)] w-full object-contain"
      />
      <figcaption lang="es" class="plm-figcaption">
         GDXray+: rayos X industriales de fundición metálica — defectos elípticos simulados (b), superposición de bajo contraste (c) y detecciones del modelo (d). Mery (2021)
      </figcaption>
    </figure>
    <p class="text-[0.87rem] leading-snug text-unal-gray">
      Todas las configuraciones superaron <span class="font-semibold text-unal-blue">mAP50 ≥ 0,989</span> en GDXray+ → cualquier arquitectura es técnicamente viable → selección por balance rendimiento-eficiencia.
    </p>
  </div>
  <div class="flex flex-col gap-2.5">
    <p class="text-[0.80rem] font-semibold text-unal-gray"><span class="text-unal-blue">13 configuraciones</span> para el protocolo PLM:</p>
    <div class="flex flex-wrap gap-1.5">
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.77rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv8s</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.77rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv8m</span>
      <span class="rounded-full bg-unal-blue/10 px-2.5 py-0.5 text-[0.77rem] font-semibold text-unal-blue ring-1 ring-unal-blue/40">YOLOv9s</span>
      <span class="rounded-full bg-unal-blue/10 px-2.5 py-0.5 text-[0.77rem] font-semibold text-unal-blue ring-1 ring-unal-blue/40">YOLOv9m</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.77rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv10s</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.77rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv10m</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.77rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv11s</span>
      <span class="rounded-full bg-unal-blue/10 px-2.5 py-0.5 text-[0.77rem] font-semibold text-unal-blue ring-1 ring-unal-blue/40">YOLOv11m</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.77rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv11l</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.77rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv12s</span>
      <span class="rounded-full bg-unal-green/15 px-2.5 py-0.5 text-[0.77rem] font-semibold text-[#5a7a2a] ring-1 ring-unal-green/50">RT-DETR-R50</span>
      <span class="rounded-full bg-unal-green/15 px-2.5 py-0.5 text-[0.77rem] font-semibold text-[#5a7a2a] ring-1 ring-unal-green/50">RT-DETR-L</span>
      <span class="rounded-full bg-unal-green/15 px-2.5 py-0.5 text-[0.77rem] font-semibold text-[#5a7a2a] ring-1 ring-unal-green/50">RT-DETR-R101</span>
    </div>
    <div class="mt-1 rounded-md border-l-4 border-unal-blue/60 bg-unal-blue/5 px-2.5 py-1.5 text-[0.75rem] leading-snug text-unal-gray">
      <span class="font-semibold text-unal-blue">→ Las de mayor rendimiento en Fase 2</span> serán candidatas para recibir módulos de atención en Fase 3
    </div>
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>

<!--
Antes de comprometer semanas de cómputo sobre datos PLM, y a la vez que modelabamos el dataset sintetico, necesitábamos una forma de comparar arquitecturas rápidamente. Para eso usamos el conjunto GDXray+ del profesor Mery, de la Universidad Católica de Chile: imágenes de rayos X de piezas fundidas con defectos elipsoidales superpuestos de bajo contraste. Como vemos en la figura, el problema es análogo al nuestro — elipses poco visibles sobre fondo uniforme en escala de grises. Una prueba en seco antes del dominio PLM.

Evaluamos versiones de YOLOv8 hasta v12 en variantes pequeña y mediana, más tres configuraciones de RT-DETR. Todos superaron mAP50 de 0,989 en GDXray+, lo que confirmó que cualquiera era técnicamente viable. A partir de ahí seleccionamos las versiones más recientes a partir de la 8— YOLOv5 y v6 quedaron fuera porque las versiones nuevas las igualan o superan con mejor soporte — totalizando 13 configuraciones para el protocolo completo sobre datos PLM. Las de mayor rendimiento en Fase 2 serán las candidatas a recibir módulos de atención en Fase 3.
-->

---
transition: slide-up
deckSection: metodologia
---

<div class="slide-deck-shell">
<header class="mb-1 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Transferencia de aprendizaje sintético-a-real</h1>
  <div class="mt-1 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-3">
  <!-- Diagrama TL -->
  <div class="rounded-lg border border-unal-blue/25 bg-unal-blue/[0.03] px-3 py-2.5">
    <div class="mb-2 text-[0.58rem] font-bold uppercase tracking-widest text-unal-blue/70">Protocolo con transferencia de aprendizaje</div>
    <div class="flex items-center">
      <div class="flex w-[14%] shrink-0 flex-col items-center justify-center gap-1 rounded-md border border-gray-300 bg-white px-2 py-2 text-center leading-none">
        <span class="text-[0.58rem] font-bold uppercase tracking-wide text-unal-gray/60">Inicio</span>
        <span class="text-[0.70rem] font-semibold text-unal-gray">Pesos COCO</span>
      </div>
      <div class="flex w-[5%] shrink-0 items-center justify-center text-sm font-bold text-unal-blue/50">→</div>
      <div class="flex w-[24%] shrink-0 flex-col items-center justify-center gap-1 rounded-md border border-unal-blue/40 bg-unal-blue/10 px-2 py-2 text-center leading-none">
        <span class="text-[0.58rem] font-bold uppercase tracking-wide text-unal-blue">Etapa 1</span>
        <span class="text-[0.76rem] font-semibold leading-tight text-unal-gray">Preentrenamiento sintético</span>
        <span class="text-[0.60rem] text-unal-gray/70">SGD · 21 600 imgs</span>
      </div>
      <div class="flex w-[5%] shrink-0 items-center justify-center text-sm font-bold text-unal-blue/50">→</div>
      <div class="flex w-[35%] shrink-0 flex-col items-center justify-center gap-1 rounded-md border border-unal-green/50 bg-unal-green/10 px-2 py-2 text-center leading-none">
        <span class="text-[0.58rem] font-bold uppercase text-[#3a6a18]">Etapa 2</span>
        <span class="text-[0.76rem] font-semibold leading-tight text-unal-gray">Transferencia de aprendizaje</span>
        <span class="text-[0.60rem] text-unal-gray/70">AdamW · 200 imgs reales · OocytePaperImages</span>
      </div>
      <div class="flex w-[5%] shrink-0 items-center justify-center text-sm font-bold text-unal-green/50">→</div>
      <div class="flex w-[12%] shrink-0 flex-col items-center justify-center gap-1 rounded-md border border-gray-300 bg-white px-2 py-2 text-center leading-none">
        <span class="text-[0.58rem] font-bold uppercase tracking-wide text-unal-gray/60">Evaluación</span>
        <span class="text-[0.66rem] font-semibold text-unal-gray">40 imgs · 146 inst.</span>
      </div>
    </div>
  </div>
  <!-- Diagrama Control -->
  <div class="rounded-lg border border-dashed border-gray-300 bg-gray-50/60 px-3 py-2.5">
    <div class="mb-2 text-[0.58rem] font-bold uppercase tracking-widest text-unal-gray/50">Experimento de control — sin transferencia de aprendizaje</div>
    <div class="flex items-center">
      <div class="flex w-[14%] shrink-0 flex-col items-center justify-center gap-1 rounded-md border border-gray-300 bg-white px-2 py-2 text-center leading-none">
        <span class="text-[0.58rem] font-bold uppercase tracking-wide text-unal-gray/60">Inicio</span>
        <span class="text-[0.70rem] font-semibold text-unal-gray">Pesos COCO</span>
      </div>
      <div class="flex w-[5%] shrink-0 items-center justify-center text-sm font-bold text-unal-gray/30">→</div>
      <div class="flex w-[24%] shrink-0 flex-col items-center justify-center gap-1 rounded-md border border-unal-blue/40 bg-unal-blue/10 px-2 py-2 text-center leading-none">
        <span class="text-[0.58rem] font-bold uppercase tracking-wide text-unal-blue">Etapa 1</span>
        <span class="text-[0.76rem] font-semibold leading-tight text-unal-gray">Preentrenamiento sintético</span>
        <span class="text-[0.60rem] text-unal-gray/70">SGD · 21 600 imgs</span>
      </div>
      <div class="flex w-[5%] shrink-0 items-center justify-center text-sm font-bold text-unal-gray/30">→</div>
      <div class="flex w-[35%] shrink-0 flex-col items-center justify-center gap-1 rounded-md border border-dashed border-gray-300 bg-gray-100 px-2 py-2 text-center leading-none opacity-40">
        <span class="text-[0.58rem] font-bold uppercase text-gray-500">Etapa 2</span>
        <span class="text-[0.76rem] font-semibold leading-tight text-gray-400 line-through">Transferencia de aprendizaje</span>
        <span class="text-[0.60rem] text-gray-400">omitida</span>
      </div>
      <div class="flex w-[5%] shrink-0 items-center justify-center text-sm font-bold text-unal-gray/30">→</div>
      <div class="flex w-[12%] shrink-0 flex-col items-center justify-center gap-1 rounded-md border border-gray-300 bg-white px-2 py-2 text-center leading-none">
        <span class="text-[0.58rem] font-bold uppercase tracking-wide text-unal-gray/60">Evaluación</span>
        <span class="text-[0.66rem] font-semibold text-unal-gray">40 imgs · 146 inst.</span>
      </div>
    </div>
  </div>
  <!-- Franja protocolo -->
  <div class="flex shrink-0 items-center gap-2">
    <div class="h-px flex-1 rounded-full bg-unal-blue/20" />
    <span class="text-[0.58rem] font-semibold text-unal-gray/60">Mismo protocolo: 13 configuraciones estándar y 4 redes desarrolladas</span>
    <div class="h-px flex-1 rounded-full bg-unal-green/20" />
  </div>
  <!-- Hiperparámetros y métricas -->
  <div class="flex gap-2">
    <div class="flex min-h-0 flex-1 self-start flex-col gap-1.5 overflow-hidden rounded-lg border border-gray-200 border-l-4 border-l-unal-blue/50 bg-white px-4 pt-3 pb-2">
      <span class="text-[0.62rem] font-bold uppercase tracking-wide text-unal-blue"><carbon-settings class="mr-1 inline text-[0.85rem]" />Hiperparámetros clave</span>
      <ul class="list-none space-y-0.5 text-[0.68rem] leading-tight text-unal-gray">
        <li><span class="font-semibold">Etapa 1:</span> SGD · 100 épocas YOLO / 150 RT-DETR · early stopping</li>
        <li><span class="font-semibold">Etapa 2:</span> AdamW · 200 épocas YOLO / 300 RT-DETR · early stopping</li>
        <li><span class="font-semibold">Aumentación:</span> HSV · traslación · escalado · flip-H · mosaico + Albumentations (Blur, CLAHE, ToGray…) — sin rotación ni flip-V</li>
      </ul>
    </div>
    <div class="flex min-h-0 flex-1 self-start flex-col gap-1.5 overflow-hidden rounded-lg border border-gray-200 border-l-4 border-l-unal-green/60 bg-white px-4 pt-3 pb-2">
      <span class="text-[0.62rem] font-bold uppercase tracking-wide text-[#3a6a18]"><carbon-chart-line class="mr-1 inline text-[0.85rem]" />Métricas de evaluación</span>
      <ul class="list-none space-y-0.5 text-[0.68rem] leading-tight text-unal-gray">
        <li><span class="font-semibold">mAP50</span> — umbral estándar (IoU = 0,5)</li>
        <li><span class="font-semibold">mAP50-95</span> — promedio sobre 10 umbrales, más exigente</li>
        <li>Precisión · Recall · Tiempo de inferencia (ms/img)</li>
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
El protocolo tiene dos caminos que se comparan entre sí. En el camino principal partimos de pesos COCO, preentrenamos en datos sintéticos con SGD — 100 épocas para YOLO y 150 para RT-DETR — y aplicamos transferencia de aprendizaje sobre las 200 imágenes reales con AdamW, cuyas tasas de aprendizaje adaptativas son más eficientes para el salto de dominio sintético a real — 200 épocas para YOLO y 300 para RT-DETR.

El camino paralelo es el experimento de control: tomamos los pesos del preentrenamiento sintético y los evaluamos directamente sobre el conjunto real, sin pasar por la segunda etapa. Esa comparación nos permite cuantificar exactamente cuánto aporta la transferencia de aprendizaje y medir la brecha entre dominios.

La evaluación cuantitativa usa el conjunto de prueba — 40 imágenes con 146 instancias anotadas — midiendo mAP50, mAP50-95, precisión, recall y tiempo de inferencia. El mismo protocolo se aplica a todas las 13 configuraciones estándar y, en Fase 3, a las 4 redes personalizadas.
-->

---
transition: slide-up
deckSection: metodologia
---

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <div class="flex items-center gap-3">
    <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Desarrollo de redes con atención</h1>
    <span class="shrink-0 rounded-md bg-unal-green/25 px-2.5 py-0.5 text-[0.65rem] font-bold text-[#3a6a18] ring-1 ring-unal-green/50">★ Aporte</span>
  </div>
  <div class="mt-1 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-2">
  <!-- Motivación como caja .co.bl -->
  <div class="rounded-lg border-l-4 border-unal-blue/60 bg-unal-blue/[0.07] px-3 py-2 text-[0.80rem] leading-[1.45] text-unal-gray">
    <span class="font-semibold text-unal-blue">Arquitecturas base:</span> YOLOv9m y YOLO11m fueron seleccionadas en Fase 2 como las de mayor rendimiento → se desarrollaron <span class="font-semibold text-unal-blue">4 variantes con módulos de atención</span> para mejorar la sensibilidad al <span class="font-semibold text-unal-blue">huso meiótico</span> y al <span class="font-semibold text-unal-blue">límite citoplasmático</span> sin rediseñar la arquitectura completa
  </div>
  <div class="grid min-h-0 flex-1 grid-cols-2 gap-3">
    <div class="flex flex-col gap-2.5 rounded-lg border border-unal-blue/30 bg-unal-blue/[0.07] px-4 py-3">
      <span class="text-[0.72rem] font-bold uppercase tracking-wide text-unal-blue"><carbon-layers class="mr-1 inline text-[0.95rem]" />YOLOv9m-CBAM</span>
      <span class="text-[0.80rem] leading-[1.45] text-unal-gray">CBAM en columna vertebral · bloque P2/4 (128 ch) · después del primer RepNCSPELAN4 · atención canal + espacial secuencial</span>
      <span class="text-[0.60rem] text-unal-gray/50">Woo et al., 2018 [43]; Hu et al., 2018 [44]</span>
    </div>
    <div class="flex flex-col gap-2.5 rounded-lg border border-unal-blue/30 bg-unal-blue/[0.07] px-4 py-3">
      <span class="text-[0.72rem] font-bold uppercase tracking-wide text-unal-blue"><carbon-chart-multitype class="mr-1 inline text-[0.95rem]" />YOLOv9m-Triple Attention</span>
      <span class="text-[0.80rem] leading-[1.45] text-unal-gray">Atención progresiva en 3 niveles: Channel Att. (P2/4) · Spatial Att. (P3/8) · CBAM (P4/16) — recalibración multi-escala</span>
      <span class="text-[0.60rem] text-unal-gray/50">Woo et al., 2018 [43]; Hu et al., 2018 [44]</span>
    </div>
    <div class="flex flex-col gap-2.5 rounded-lg border border-unal-green/40 bg-unal-green/[0.08] px-4 py-3">
      <span class="text-[0.72rem] font-bold uppercase tracking-wide text-[#3a6a18]"><carbon-settings-adjust class="mr-1 inline text-[0.95rem]" />YOLO11m-Conservative Attention</span>
      <span class="text-[0.80rem] leading-[1.45] text-unal-gray">Channel Att. después del 1.er C3k2 (P2/4, 256 ch) · CBAM después del 2.° C3k2 (P3/8, 512 ch) — enfoque conservador</span>
      <span class="text-[0.60rem] text-unal-gray/50">Woo et al., 2018 [43]; Hu et al., 2018 [44]</span>
    </div>
    <div class="flex flex-col gap-2.5 rounded-lg border border-unal-green/40 bg-unal-green/[0.08] px-4 py-3">
      <span class="text-[0.72rem] font-bold uppercase tracking-wide text-[#3a6a18]"><carbon-machine-learning class="mr-1 inline text-[0.95rem]" />YOLO11m-Transformer Enhanced</span>
      <span class="text-[0.80rem] leading-[1.45] text-unal-gray">Módulos C3TR + Atención en columna vertebral — captura de relaciones globales en la imagen para complementar la convolución local</span>
      <span class="text-[0.60rem] text-unal-gray/50">Vaswani et al., 2017 [45]</span>
    </div>
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>

<!--
Con la evaluación comparativa de redes estándar establecida, pasamos al aporte central del trabajo: modificar las arquitecturas seleccionadas para mejorar la sensibilidad a estructuras de bajo contraste — el huso meiótico y el límite citoplasmático — sin rediseñar la red completa. La estrategia fue añadir módulos de atención en posiciones estratégicas de la columna vertebral, recalibrando la respuesta donde el modelo base falla.

Desarrollamos cuatro variantes. Dos sobre YOLOv9m: CBAM insertado en la columna vertebral en el nivel P2, que aplica atención de canal y espacial en secuencia; y Triple Attention, que aplica los tres mecanismos de forma progresiva en P2, P3 y P4. Dos sobre YOLO11m: Conservative Attention, con módulos en puntos estratégicos; y Transformer Enhanced, que incorpora bloques C3TR para capturar relaciones globales en la imagen.

El criterio fue consistente: no rediseñar sino añadir atención selectiva. La sobrecarga computacional es menor al 0,5% en todos los casos.
-->

---
transition: slide-up
deckSection: metodologia
---

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <div class="flex items-center gap-3">
    <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Arquitectura YOLOv9m-Triple Attention</h1>
    <span class="shrink-0 rounded-md bg-unal-green/25 px-2.5 py-0.5 text-[0.65rem] font-bold text-[#3a6a18] ring-1 ring-unal-green/50">★ Aporte</span>
  </div>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-1.5">
  <figure class="m-0 min-h-0 flex-1 flex flex-col items-center justify-center pt-16">
    <img
      src="../images/figures/Slide17.png"
      alt="Arquitectura YOLOv9m-Triple Attention — tres módulos de atención en backbone P2/4, P3/8 y P4/16"
      class="w-full max-w-[68%] h-auto object-contain"
    />
    <figcaption lang="es" class="plm-figcaption mt-1 text-center">
      Arquitectura YOLOv9m-Triple Attention: ChannelAttention en P2/4 (128 ch), SpatialAttention en P3/8 (240 ch) y CBAM en P4/16 (360 ch).
    </figcaption>
  </figure>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>

<!--
Este diagrama muestra exactamente dónde interviene CBAM en YOLOv9m. En la columna vertebral, después del primer bloque RepNCSPELAN4 — en el nivel P2, que procesa características a un cuarto de la resolución de entrada con 128 canales — se inserta el módulo completo de atención.

Esa posición es deliberada por dos razones. Primera, en P2 la resolución espacial es suficiente para discriminar el huso meiótico, cuyo diámetro proyectado oscila entre 10 y 20 píxeles; en P3 ya sería demasiado pequeño para ser recalibrado con precisión. Segunda, es el nivel donde la información de bajo contraste — el retardo de 2 a 5 nanómetros del huso y el límite citoplasmático — todavía no ha sido suprimida por los bloques de reducción de P3 y P4.

CBAM actúa aquí como un filtro en dos pasos: recalibra canales y luego concentra la respuesta espacial. Después de ese módulo, la información fluye normalmente hacia el cuello y la cabeza de detección.
-->

---
transition: slide-up
deckSection: metodologia
---

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <div class="flex items-center gap-3">
    <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Arquitectura YOLOv9m-Triple Attention</h1>
    <span class="shrink-0 rounded-md bg-unal-green/25 px-2.5 py-0.5 text-[0.65rem] font-bold text-[#3a6a18] ring-1 ring-unal-green/50">★ Aporte</span>
  </div>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-3">
  <div class="flex shrink-0 items-stretch gap-0" style="height:5.5rem">
    <div class="flex w-[50%] flex-col items-center justify-center rounded-l-lg border-2 border-dashed border-unal-blue/50 bg-unal-blue/[0.04] px-4 py-2">
      <span class="text-[0.90rem] font-bold text-unal-blue">Columna vertebral</span>
      <span class="text-[0.70rem] text-unal-gray/60 mt-0.5">backbone · extracción de características multi-escala</span>
    </div>
    <div class="flex w-[4%] items-center justify-center text-lg text-unal-gray/40">→</div>
    <div class="flex w-[28%] flex-col items-center justify-center border-2 border-dashed border-amber-400/60 bg-amber-50/40 px-3 py-2">
      <span class="text-[0.90rem] font-bold text-amber-700">Cuello</span>
      <span class="text-[0.70rem] text-unal-gray/60 mt-0.5">neck · FPN + PAN</span>
    </div>
    <div class="flex w-[4%] items-center justify-center text-lg text-unal-gray/40">→</div>
    <div class="flex w-[14%] flex-col items-center justify-center rounded-r-lg border-2 border-dashed border-gray-400/50 bg-gray-50 px-3 py-2">
      <span class="text-[0.90rem] font-bold text-gray-600">Cabeza</span>
      <span class="text-[0.70rem] text-unal-gray/60 mt-0.5">3× Detect</span>
    </div>
  </div>
  <div class="flex shrink-0 items-center gap-2">
    <div class="h-px flex-1 border-t border-dashed border-unal-blue/30"></div>
    <span class="text-[0.68rem] font-semibold uppercase tracking-wide text-unal-blue/70">⌕ Zoom — Columna vertebral</span>
    <div class="h-px flex-1 border-t border-dashed border-unal-blue/30"></div>
  </div>
  <div class="flex min-h-0 flex-1 flex-col justify-between rounded-lg border border-dashed border-unal-blue/30 bg-unal-blue/[0.03] px-5 py-4">
    <div class="flex items-center gap-1.5">
      <span class="text-[0.65rem] font-bold text-gray-400">···</span>
      <span class="text-[0.68rem] text-gray-400">→</span>
      <div class="rounded border border-amber-300 bg-amber-50 px-2 py-1 text-[0.68rem] font-semibold text-amber-700">RepNCSP</div>
      <span class="text-[0.68rem] text-gray-400">→</span>
      <div class="flex flex-col items-center gap-0.5">
        <div class="rounded-md border-2 border-pink-400 bg-pink-100 px-3 py-1 text-[0.73rem] font-bold text-pink-700">ChannelAttention</div>
        <span class="text-[0.60rem] text-gray-400">P2/4 · 128 ch</span>
      </div>
      <span class="text-[0.68rem] text-gray-400">→</span>
      <div class="rounded border border-amber-300 bg-amber-50 px-2 py-1 text-[0.68rem] font-semibold text-amber-700">AConv</div>
      <span class="text-[0.68rem] text-gray-400">→</span>
      <div class="rounded border border-amber-300 bg-amber-50 px-2 py-1 text-[0.68rem] font-semibold text-amber-700">RepNCSP</div>
      <span class="text-[0.68rem] text-gray-400">→</span>
      <div class="flex flex-col items-center gap-0.5">
        <div class="rounded-md border-2 border-red-400 bg-red-100 px-3 py-1 text-[0.73rem] font-bold text-red-700">SpatialAttention</div>
        <span class="text-[0.60rem] text-gray-400">P3/8 · 240 ch</span>
      </div>
      <span class="text-[0.68rem] text-gray-400">→</span>
      <div class="rounded border border-amber-300 bg-amber-50 px-2 py-1 text-[0.68rem] font-semibold text-amber-700">AConv</div>
      <span class="text-[0.68rem] text-gray-400">→</span>
      <div class="rounded border border-amber-300 bg-amber-50 px-2 py-1 text-[0.68rem] font-semibold text-amber-700">RepNCSP</div>
      <span class="text-[0.68rem] text-gray-400">→</span>
      <div class="flex flex-col items-center gap-0.5">
        <div class="rounded-md border-2 border-sky-500 bg-sky-100 px-4 py-1 text-[0.73rem] font-bold text-sky-700">CBAM</div>
        <span class="text-[0.60rem] text-gray-400">P4/16 · 360 ch</span>
      </div>
      <span class="text-[0.68rem] text-gray-400">→</span>
      <span class="text-[0.65rem] font-bold text-gray-400">···</span>
    </div>
    <div class="flex items-center gap-5 border-t border-gray-200/60 pt-2">
      <div class="flex items-center gap-1.5">
        <div class="h-3 w-3 shrink-0 rounded border-2 border-pink-400 bg-pink-100"></div>
        <span class="text-[0.68rem] text-gray-600">Atención de canal</span>
      </div>
      <div class="flex items-center gap-1.5">
        <div class="h-3 w-3 shrink-0 rounded border-2 border-red-400 bg-red-100"></div>
        <span class="text-[0.68rem] text-gray-600">Atención espacial</span>
      </div>
      <div class="flex items-center gap-1.5">
        <div class="h-3 w-3 shrink-0 rounded border-2 border-sky-500 bg-sky-100"></div>
        <span class="text-[0.68rem] text-gray-600">CBAM (canal + espacial)</span>
      </div>
      <div class="flex items-center gap-1.5">
        <div class="h-3 w-3 shrink-0 rounded border border-amber-300 bg-amber-50"></div>
        <span class="text-[0.68rem] text-gray-600">Bloque estándar</span>
      </div>
    </div>
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>

<!--
Este diagrama simplificado muestra cómo se organiza YOLOv9m-Triple Attention. En la parte superior vemos las tres secciones de cualquier arquitectura YOLO: la columna vertebral extrae características a múltiples escalas, el cuello las fusiona con FPN y PAN, y la cabeza produce las detecciones finales en tres resoluciones.

El zoom a la columna vertebral revela la estrategia progresiva: en P2/4, con 128 canales y la resolución más alta, insertamos ChannelAttention para recalibrar qué canales son más relevantes — útil para detectar el huso meiótico de bajo contraste. En P3/8, con 240 canales, SpatialAttention refina la respuesta espacial. En P4/16, con 360 canales y mayor abstracción, CBAM combina ambos tipos de atención para las estructuras de mayor tamaño como la zona pelúcida.

Esta progresión garantiza que cada escala recibe el tipo de atención más adecuado para las estructuras que procesa.
-->

---
transition: slide-left
deckSection: metodologia
---

<div class="slide-deck-shell">
<header class="mb-1 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Protocolo comparativo — Fase 3</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
  <p class="mt-1.5 text-[0.82rem] leading-snug text-unal-gray">Mismo protocolo de Fase 2 — las diferencias en resultados se deben exclusivamente a los <span class="font-semibold text-unal-blue">módulos de atención</span>.</p>
</header>
<div class="flex min-h-0 flex-1 flex-col gap-3">
  <!-- Diagrama TL -->
  <div class="rounded-lg border border-unal-blue/25 bg-unal-blue/[0.03] px-3 py-2.5">
    <div class="mb-2 text-[0.58rem] font-bold uppercase tracking-widest text-unal-blue/70">Protocolo con transferencia de aprendizaje</div>
    <div class="flex items-center">
      <div class="flex w-[14%] shrink-0 flex-col items-center justify-center gap-1 rounded-md border border-gray-300 bg-white px-2 py-2 text-center leading-none">
        <span class="text-[0.58rem] font-bold uppercase tracking-wide text-unal-gray/60">Inicio</span>
        <span class="text-[0.70rem] font-semibold text-unal-gray">Pesos COCO</span>
      </div>
      <div class="flex w-[5%] shrink-0 items-center justify-center text-sm font-bold text-unal-blue/50">→</div>
      <div class="flex w-[24%] shrink-0 flex-col items-center justify-center gap-1 rounded-md border border-unal-blue/40 bg-unal-blue/10 px-2 py-2 text-center leading-none">
        <span class="text-[0.58rem] font-bold uppercase tracking-wide text-unal-blue">Etapa 1</span>
        <span class="text-[0.76rem] font-semibold leading-tight text-unal-gray">Preentrenamiento sintético</span>
        <span class="text-[0.60rem] text-unal-gray/70">SGD · 21 600 imgs</span>
      </div>
      <div class="flex w-[5%] shrink-0 items-center justify-center text-sm font-bold text-unal-blue/50">→</div>
      <div class="flex w-[35%] shrink-0 flex-col items-center justify-center gap-1 rounded-md border border-unal-green/50 bg-unal-green/10 px-2 py-2 text-center leading-none">
        <span class="text-[0.58rem] font-bold uppercase text-[#3a6a18]">Etapa 2</span>
        <span class="text-[0.76rem] font-semibold leading-tight text-unal-gray">Transferencia de aprendizaje</span>
        <span class="text-[0.60rem] text-unal-gray/70">AdamW · 200 imgs reales · OocytePaperImages</span>
      </div>
      <div class="flex w-[5%] shrink-0 items-center justify-center text-sm font-bold text-unal-green/50">→</div>
      <div class="flex w-[12%] shrink-0 flex-col items-center justify-center gap-1 rounded-md border border-gray-300 bg-white px-2 py-2 text-center leading-none">
        <span class="text-[0.58rem] font-bold uppercase tracking-wide text-unal-gray/60">Evaluación</span>
        <span class="text-[0.66rem] font-semibold text-unal-gray">40 imgs · 146 inst.</span>
      </div>
    </div>
  </div>
  <!-- Diagrama Control -->
  <div class="rounded-lg border border-dashed border-gray-300 bg-gray-50/60 px-3 py-2.5">
    <div class="mb-2 text-[0.58rem] font-bold uppercase tracking-widest text-unal-gray/50">Experimento de control — sin transferencia de aprendizaje</div>
    <div class="flex items-center">
      <div class="flex w-[14%] shrink-0 flex-col items-center justify-center gap-1 rounded-md border border-gray-300 bg-white px-2 py-2 text-center leading-none">
        <span class="text-[0.58rem] font-bold uppercase tracking-wide text-unal-gray/60">Inicio</span>
        <span class="text-[0.70rem] font-semibold text-unal-gray">Pesos COCO</span>
      </div>
      <div class="flex w-[5%] shrink-0 items-center justify-center text-sm font-bold text-unal-gray/30">→</div>
      <div class="flex w-[24%] shrink-0 flex-col items-center justify-center gap-1 rounded-md border border-unal-blue/40 bg-unal-blue/10 px-2 py-2 text-center leading-none">
        <span class="text-[0.58rem] font-bold uppercase tracking-wide text-unal-blue">Etapa 1</span>
        <span class="text-[0.76rem] font-semibold leading-tight text-unal-gray">Preentrenamiento sintético</span>
        <span class="text-[0.60rem] text-unal-gray/70">SGD · 21 600 imgs</span>
      </div>
      <div class="flex w-[5%] shrink-0 items-center justify-center text-sm font-bold text-unal-gray/30">→</div>
      <div class="flex w-[35%] shrink-0 flex-col items-center justify-center gap-1 rounded-md border border-dashed border-gray-300 bg-gray-100 px-2 py-2 text-center leading-none opacity-40">
        <span class="text-[0.58rem] font-bold uppercase text-gray-500">Etapa 2</span>
        <span class="text-[0.76rem] font-semibold leading-tight text-gray-400 line-through">Transferencia de aprendizaje</span>
        <span class="text-[0.60rem] text-gray-400">omitida</span>
      </div>
      <div class="flex w-[5%] shrink-0 items-center justify-center text-sm font-bold text-unal-gray/30">→</div>
      <div class="flex w-[12%] shrink-0 flex-col items-center justify-center gap-1 rounded-md border border-gray-300 bg-white px-2 py-2 text-center leading-none">
        <span class="text-[0.58rem] font-bold uppercase tracking-wide text-unal-gray/60">Evaluación</span>
        <span class="text-[0.66rem] font-semibold text-unal-gray">40 imgs · 146 inst.</span>
      </div>
    </div>
  </div>
  <!-- Nota Fase 3 -->
  <div class="rounded-lg border-l-4 border-unal-green/60 bg-unal-green/[0.07] px-3 py-2 text-[0.78rem] leading-snug text-unal-gray">
    <span class="font-semibold text-[#3a6a18]">Fase 3 — único diferencial:</span> las 4 redes con módulos de atención siguen este mismo protocolo + <span class="font-semibold text-[#3a6a18]">evaluación en 5 secuencias PLM de video</span> — las diferencias en resultados se atribuyen exclusivamente a los módulos de atención.
  </div>
</div>
</div>
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img src="../images/logos/gpima_logo.png" alt="GPIMA" class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6" />
  <img src="../images/logos/unal_logo_lateral.png" alt="Universidad Nacional de Colombia" class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14" />
</div>

<!--
Las redes personalizadas se evalúan con exactamente el mismo protocolo de Fase 2: mismo flujo de entrenamiento de dos etapas, mismo experimento de control, mismo conjunto de prueba de 40 imágenes y las mismas métricas. Esa equivalencia es deliberada — garantiza que cualquier diferencia en los resultados se deba exclusivamente a los módulos de atención, y no a variaciones en el entrenamiento o la evaluación.

La diferencia de Fase 3 es la evaluación en video: las cinco secuencias PLM se aplican únicamente a las redes personalizadas y a sus equivalentes estándar, permitiendo una comparación directa en condiciones dinámicas reales. Con esto, pasemos a los resultados.
-->
