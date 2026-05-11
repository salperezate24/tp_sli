---
transition: slide-up
deckSection: metodologia
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Flujo metodológico</h1>
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
      <ul class="list-none space-y-1.5 text-[0.72rem] leading-snug text-unal-gray">
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
      <ul class="list-none space-y-1.5 text-[0.72rem] leading-snug text-unal-gray">
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span>Selección de arquitecturas</span></li>
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span>Protocolo control + transferencia de aprendizaje</span></li>
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
        <span class="text-[0.9rem] font-bold leading-tight text-[#3a6a18]">Redes personalizadas</span>
      </div>
      <ul class="list-none space-y-1.5 text-[0.72rem] leading-snug text-unal-gray">
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
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Síntesis de imágenes PLM</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<p class="mb-3 text-[0.78rem] leading-snug text-unal-gray">Ante la <span class="font-semibold text-unal-blue">ausencia de bases de datos públicas</span> de imágenes PLM de ovocitos, este trabajo propone generar los datos de entrenamiento <span class="font-semibold text-unal-blue">sintéticamente</span> a partir de un modelo físico fundamentado en la birrefringencia óptica.</p>
<div class="flex min-h-0 flex-1 flex-col justify-center">
  <div class="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-2">
    <div class="flex flex-col gap-2.5 rounded-xl border-2 border-unal-blue/30 bg-unal-blue/5 px-4 py-3">
      <div class="flex flex-col gap-0.5">
        <span class="text-[0.58rem] font-bold uppercase tracking-widest text-unal-blue/60">Paso 1</span>
        <span class="text-[0.9rem] font-bold leading-tight text-unal-blue">Modelación Física</span>
      </div>
      <ul class="list-none space-y-1.5 text-[0.72rem] leading-snug text-unal-gray">
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span><b>Huso meiótico:</b> Gaussiana anisotrópica 2D (Retardo ~5,6 nm)</span></li>
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span><b>Zona Pelúcida:</b> Banda elíptica + Filtro Gaussiano</span></li>
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span><b>Estructuras base:</b> Cuerpo polar y límite citoplasmático</span></li>
      </ul>
    </div>
    <div class="flex items-center justify-center px-1">
      <span class="text-2xl font-bold text-unal-blue/40">→</span>
    </div>
    <div class="flex flex-col gap-2.5 rounded-xl border-2 border-unal-blue/50 bg-unal-blue/10 px-4 py-3">
      <div class="flex flex-col gap-0.5">
        <span class="text-[0.58rem] font-bold uppercase tracking-widest text-unal-blue/60">Paso 2</span>
        <span class="text-[0.9rem] font-bold leading-tight text-unal-blue">Síntesis Combinatoria</span>
      </div>
      <ul class="list-none space-y-1.5 text-[0.72rem] leading-snug text-unal-gray">
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span><b>Calibración espacial:</b> 1 px = 0,129 µm (Ovocito de 120 µm)</span></li>
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span><b>Normalización:</b> 0 nm (fondo) → 5,6 nm (máx.) → imagen 8-bit [0, 255]</span></li>
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span>Iteración de posiciones (18 husos, 12 ZP) + Ruido de fondo</span></li>
        <li class="flex gap-1.5"><span class="shrink-0 text-unal-blue">▸</span><span><b>Volumen generado:</b> 526 392 imágenes sintéticas</span></li>
      </ul>
    </div>
    <div class="flex items-center justify-center px-1">
      <span class="text-2xl font-bold text-unal-green/60">→</span>
    </div>
    <div class="flex flex-col gap-2.5 rounded-xl border-2 border-unal-green/50 bg-unal-green/10 px-4 py-3">
      <div class="flex flex-col gap-0.5">
        <div class="flex items-center gap-2">
          <span class="text-[0.58rem] font-bold uppercase tracking-widest text-[#3a6a18]/60">Paso 3</span>
          <span class="rounded-md bg-unal-green/25 px-1.5 py-0.5 text-[0.55rem] font-bold text-[#3a6a18] ring-1 ring-unal-green/50">★ Dataset Final</span>
        </div>
        <span class="text-[0.9rem] font-bold leading-tight text-[#3a6a18]">Etiquetado y Organización</span>
      </div>
      <ul class="list-none space-y-1.5 text-[0.72rem] leading-snug text-unal-gray">
        <li class="flex gap-1.5"><span class="shrink-0 text-[#3a6a18]">▸</span><span><b>Selección curada:</b> Subconjunto de 21 600 imágenes</span></li>
        <li class="flex gap-1.5"><span class="shrink-0 text-[#3a6a18]">▸</span><span><b>Etiquetado 100% automático</b> por definición paramétrica</span></li>
        <li class="flex gap-1.5"><span class="shrink-0 text-[#3a6a18]">▸</span><span>Cero intervención manual: eliminación del sesgo humano</span></li>
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
Para entrenar los modelos nos enfrentamos a una barrera crítica: los datos clínicos de imágenes PLM de ovocitos son privados, costosos y sujetos a restricciones éticas. Al no existir bases de datos públicas, la solución fue generar los datos sintéticamente a partir del modelo físico en MATLAB — conectando directamente el marco teórico con la programación.

Paso 1: Modelamos cuatro estructuras. El huso meiótico es una Gaussiana anisotrópica 2D con retardo de 5,6 nanómetros — exactamente el valor reportado por la literatura para ovocitos humanos. La zona pelúcida es una banda elíptica con filtro Gaussiano. También incluimos el límite citoplasmático y el cuerpo polar.

Paso 2: Calibramos el sistema a 1 píxel igual a 0,129 micrómetros — correspondiente a 400× con un ovocito de 120 µm. Antes de continuar: el retardo óptico varía entre 0 nanómetros en el fondo y 5,6 nanómetros en el máximo modelado para el huso meiótico. Esa señal en nanómetros se escala linealmente a una imagen de 8 bits entre 0 y 255, lo que la hace compatible con los modelos pre-entrenados en COCO. Al iterar las 18 configuraciones de huso y las 12 zonas pelúcidas en múltiples posiciones, sumando ruido de fondo para simular la realidad clínica, el pipeline generó más de 526 mil imágenes.

Paso 3: Extrajimos un subconjunto curado de 21 600 imágenes. La ventaja metodológica clave: el etiquetado es 100% automático por definición paramétrica — cero intervención manual, lo que elimina por completo el sesgo humano en las anotaciones. El impacto visual de este modelo es lo que evaluaremos en la sección de resultados.
-->

---
transition: slide-up
deckSection: metodologia
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Búsqueda y curaduría de datos reales</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="grid min-h-0 flex-1 grid-cols-2 gap-5">
  <!-- Imágenes PLM -->
  <div class="flex flex-col gap-2.5">
    <p class="text-[0.72rem] !font-bold uppercase tracking-wide text-unal-blue">Imágenes PLM — <span class="!font-semibold normal-case text-unal-gray">OocytePaperImages</span></p>
    <ul class="list-none space-y-2 text-[0.75rem] leading-snug text-unal-gray">
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-blue">▸</span>
        <span><span class="font-semibold">Fuente:</span> publicaciones científicas y libros de texto sobre ovocitos, microscopía polarizada e ICSI</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-blue">▸</span>
        <span><span class="font-semibold">Criterio de inclusión:</span> imágenes PLM de ovocito MII con al menos una de las cuatro estructuras objetivo visibles</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-blue">▸</span>
        <span><span class="font-semibold">Curaduría:</span> eliminación de texto, barras de escala y gráficos superpuestos · estandarización a 640 × 640 px</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-blue">▸</span>
        <span><span class="font-semibold">Etiquetado:</span> manual con cajas delimitadoras — mismo esquema de clases que el conjunto sintético</span>
      </li>
    </ul>
  </div>
  <!-- Videos PLM -->
  <div class="flex flex-col gap-2.5">
    <p class="text-[0.72rem] !font-bold uppercase tracking-wide text-[#3a6a18]">Secuencias de video — <span class="!font-semibold normal-case text-unal-gray">5 secuencias PLM</span></p>
    <ul class="list-none space-y-1.5 text-[0.75rem] leading-snug text-unal-gray">
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold">Sec. 1:</span> time-lapse meiosis I (109 fotogramas) — galería pública OpenPolScope</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold">Sec. 2:</span> ICSI con sistema OOSIGHT-Spindle View (deformación del ovocito por aguja)</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold">Sec. 3:</span> extrusión del primer cuerpo polar — Prague IVF OptimFert</span>
      </li>
      <li class="flex gap-2">
        <span class="mt-0.5 shrink-0 text-unal-green">▸</span>
        <span><span class="font-semibold">Sec. 4–5:</span> imágenes TIF de retardo (Zenodo) → convertidas a video PNG a 5 FPS</span>
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
Los datos reales provienen de dos fuentes con metodologías distintas.

Para las imágenes PLM, recopilamos 200 imágenes de publicaciones científicas y libros de texto sobre ovocitos, microscopía polarizada e ICSI. El criterio de inclusión fue que cada imagen contuviera al menos una de las cuatro estructuras objetivo visibles. Las imágenes de publicaciones llegaban con texto, barras de escala y gráficos superpuestos — cada una requirió curaduría manual para limpiarla. Luego se anotaron manualmente con cajas delimitadoras, usando el mismo esquema de clases del conjunto sintético.

Para los videos, usamos cinco secuencias de escenarios distintos: la primera es un time-lapse de meiosis I del sistema OpenPolScope, con 109 fotogramas que incluyen un tramo donde el huso es casi invisible — ideal para probar robustez. Las secuencias dos y tres son videos publicados de procedimientos ICSI y de extrusión del primer cuerpo polar. Las secuencias cuatro y cinco son imágenes TIF del repositorio público Zenodo, convertidas a video. Ninguna de las cinco secuencias tiene anotaciones por fotograma — se usan exclusivamente para evaluación cualitativa.
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
      <p class="text-[0.82rem] font-bold leading-tight text-unal-blue">Oocyte_synthetic_2025b</p>
      <ul class="list-none space-y-1 text-[0.72rem] leading-snug text-unal-gray">
        <li><span class="font-semibold">Tipo:</span> Sintético (MATLAB)</li>
        <li><span class="font-semibold">Usadas:</span> <span class="font-semibold text-unal-blue">21 600</span> de 526 392</li>
        <li><span class="font-semibold">Partición:</span> 15 120 / 3 240 / 3 240</li>
        <li><span class="font-semibold">Etiquetado:</span> automático-paramétrico</li>
        <li><span class="font-semibold">Clases:</span> huso, ZP, citoplasma, CP</li>
      </ul>
      <div class="mt-auto rounded-md border border-unal-blue/20 bg-unal-blue/5 px-2.5 py-1.5 text-[0.67rem] leading-snug text-unal-gray">
        <span class="font-semibold text-unal-blue">¿Por qué 21 600?</span> Límites de cómputo y para evitar sobreajuste al dominio sintético antes de la transferencia.
      </div>
    </div>
    <!-- Conjunto 2: Real PLM -->
    <div class="flex flex-col gap-2 rounded-lg border border-unal-green/40 bg-unal-green/5 px-3.5 py-3">
      <div class="flex items-center gap-2">
        <span class="rounded-full bg-unal-green px-2 py-0.5 text-[0.62rem] font-bold uppercase text-white">Transf. de aprendizaje</span>
      </div>
      <p class="text-[0.82rem] font-bold leading-tight text-[#3a6a18]">OocytePaperImages</p>
      <ul class="list-none space-y-1 text-[0.72rem] leading-snug text-unal-gray">
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
      <p class="text-[0.82rem] font-bold leading-tight text-unal-gray">5 secuencias de video</p>
      <ul class="list-none space-y-1 text-[0.72rem] leading-snug text-unal-gray">
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
El resultado de la Fase 1 son tres conjuntos con roles completamente distintos.

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
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Selección de arquitecturas — de GDXray a PLM</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="grid min-h-0 flex-1 grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-5">
  <div class="flex flex-col gap-2.5">
    <div class="rounded-md border-l-4 border-unal-blue bg-unal-blue/5 px-2.5 py-1.5 text-[0.72rem] leading-snug text-unal-gray">
      <span class="font-semibold text-unal-blue">Prueba en dominio análogo:</span> GDXray+ (Mery, U. Católica de Chile) — defectos elipsoidales de bajo contraste sobre fondo uniforme en escala de grises. Mismo patrón que el huso meiótico en PLM.
    </div>
    <figure class="m-0 min-w-0">
      <img
        src="../images/figures/simulation.png"
        alt="GDXray+: simulación de defectos análogos a PLM"
        class="h-auto max-h-[min(26vh,170px)] w-full object-contain"
      />
      <figcaption lang="es" class="plm-figcaption">
        <span class="font-semibold text-unal-gray">Fig. 11.</span> GDXray+: rayos X industriales de fundición metálica — defectos elípticos simulados (b), superposición de bajo contraste (c) y detecciones del modelo (d). Mery <span class="font-semibold text-unal-blue">[13]</span>
      </figcaption>
    </figure>
    <p class="text-[0.72rem] leading-snug text-unal-gray">
      Todas las configuraciones superaron <span class="font-semibold text-unal-blue">mAP50 ≥ 0,989</span> en GDXray+ → cualquier arquitectura es técnicamente viable → selección por balance rendimiento-eficiencia.
    </p>
  </div>
  <div class="flex flex-col gap-2.5">
    <p class="text-[0.75rem] font-semibold text-unal-gray"><span class="text-unal-blue">13 configuraciones</span> para el protocolo PLM:</p>
    <div class="flex flex-wrap gap-1.5">
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv8s</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv8m</span>
      <span class="rounded-full bg-unal-blue/10 px-2.5 py-0.5 text-[0.72rem] font-semibold text-unal-blue ring-1 ring-unal-blue/40">YOLOv9s</span>
      <span class="rounded-full bg-unal-blue/10 px-2.5 py-0.5 text-[0.72rem] font-semibold text-unal-blue ring-1 ring-unal-blue/40">YOLOv9m</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv10s</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv10m</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv11s</span>
      <span class="rounded-full bg-unal-blue/10 px-2.5 py-0.5 text-[0.72rem] font-semibold text-unal-blue ring-1 ring-unal-blue/40">YOLOv11m</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv11l</span>
      <span class="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.72rem] font-medium text-unal-gray ring-1 ring-gray-300">YOLOv12s</span>
      <span class="rounded-full bg-unal-green/15 px-2.5 py-0.5 text-[0.72rem] font-semibold text-[#5a7a2a] ring-1 ring-unal-green/50">RT-DETR-R50</span>
      <span class="rounded-full bg-unal-green/15 px-2.5 py-0.5 text-[0.72rem] font-semibold text-[#5a7a2a] ring-1 ring-unal-green/50">RT-DETR-L</span>
      <span class="rounded-full bg-unal-green/15 px-2.5 py-0.5 text-[0.72rem] font-semibold text-[#5a7a2a] ring-1 ring-unal-green/50">RT-DETR-R101</span>
    </div>
    <div class="mt-1 rounded-md border-l-4 border-unal-blue/60 bg-unal-blue/5 px-2.5 py-1.5 text-[0.7rem] leading-snug text-unal-gray">
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
Antes de comprometer semanas de cómputo sobre datos PLM, necesitábamos una forma de comparar arquitecturas rápidamente. Para eso usamos el conjunto GDXray+ del profesor Mery, de la Universidad Católica de Chile: imágenes de rayos X de piezas fundidas con defectos elipsoidales superpuestos de bajo contraste. Como vemos en la figura, el problema es análogo al nuestro — elipses poco visibles sobre fondo uniforme en escala de grises. Una prueba en seco antes del dominio PLM.

Evaluamos versiones de YOLOv8 hasta v12 en variantes pequeña y mediana, más tres configuraciones de RT-DETR. Todos superaron mAP50 de 0,989 en GDXray+, lo que confirmó que cualquiera era técnicamente viable. A partir de ahí seleccionamos las versiones más recientes — YOLOv5 y v6 quedaron fuera porque las versiones nuevas las igualan o superan con mejor soporte — totalizando 13 configuraciones para el protocolo completo sobre datos PLM. Las de mayor rendimiento en Fase 2 serán las candidatas a recibir módulos de atención en Fase 3.
-->

---
transition: slide-up
deckSection: metodologia
---

<div class="slide-deck-shell">
<header class="mb-1.5 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Protocolo de entrenamiento y evaluación</h1>
  <div class="mt-0 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-1.5" style="flex: 0 1 auto; max-height: 100%;">
  <!-- Diagrama de flujo -->
  <div class="shrink-0 rounded-lg border border-gray-200 bg-gray-50 px-2 py-1">
    <div class="flex items-center gap-0">
      <!-- Inicio -->
      <div class="flex w-[16%] shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-center leading-none">
        <span class="text-[0.52rem] font-bold uppercase tracking-wide text-unal-gray/60">Inicio</span>
        <span class="text-[0.62rem] font-semibold text-unal-gray">Pesos COCO</span>
      </div>
      <!-- Flecha 1 -->
      <div class="flex w-[5%] shrink-0 items-center justify-center text-sm font-bold text-unal-blue/50">→</div>
      <!-- Etapa 1 -->
      <div class="flex w-[22%] shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border border-unal-blue/40 bg-unal-blue/10 px-2 py-1.5 text-center leading-none">
        <span class="text-[0.52rem] font-bold uppercase tracking-wide text-unal-blue">Etapa 1</span>
        <span class="text-[0.62rem] font-semibold text-unal-gray">Preentrenamiento sintético</span>
        <span class="text-[0.5rem] text-unal-gray/70">SGD · 21 600 imgs</span>
      </div>
      <!-- Flecha 2 con TL/ctrl -->
      <div class="flex w-[7%] shrink-0 flex-col items-center justify-center leading-none">
        <span class="text-sm font-bold text-unal-blue/50">→</span>
        <span class="text-[0.48rem] font-semibold text-unal-blue">TL</span>
        <span class="text-[0.48rem] text-unal-gray/50">↓ ctrl</span>
      </div>
      <!-- Bifurcación: Etapa 2 + Control -->
      <div class="flex w-[28%] shrink-0 flex-col gap-0.5">
        <div class="flex flex-col items-center gap-0.5 rounded-md border border-unal-green/50 bg-unal-green/10 px-2 py-1 text-center leading-none">
          <span class="text-[0.52rem] font-bold uppercase text-[#3a6a18]">Etapa 2</span>
          <span class="text-[0.6rem] font-semibold text-unal-gray">Transferencia de aprendizaje</span>
          <span class="text-[0.5rem] text-unal-gray/70">AdamW · 200 imgs</span>
        </div>
        <div class="flex flex-col items-center gap-0.5 rounded-md border border-dashed border-gray-400 bg-white px-2 py-1 text-center leading-none">
          <span class="text-[0.52rem] font-bold uppercase text-unal-gray/60">Control</span>
          <span class="text-[0.56rem] text-unal-gray/70">Sin Etapa 2</span>
        </div>
      </div>
      <!-- Flecha 3 -->
      <div class="flex w-[5%] shrink-0 items-center justify-center text-sm font-bold text-unal-green/50">→</div>
      <!-- Evaluación -->
      <div class="flex w-[17%] shrink-0 flex-col items-center justify-center gap-0.5 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-center leading-none">
        <span class="text-[0.52rem] font-bold uppercase tracking-wide text-unal-gray/60">Evaluación</span>
        <span class="text-[0.62rem] font-semibold text-unal-gray">40 imgs · 146 instancias</span>
      </div>
    </div>
  </div>
  <!-- Franja protocolo — mejora 3 -->
  <div class="flex shrink-0 items-center gap-2">
    <div class="h-px flex-1 rounded-full bg-unal-blue/20" />
    <span class="text-[0.55rem] font-semibold text-unal-gray/60">Mismo protocolo: 13 config. estándar y 4 personalizadas</span>
    <div class="h-px flex-1 rounded-full bg-unal-green/20" />
  </div>
  <!-- Hiperparámetros y métricas -->
  <div class="flex min-h-0 flex-1 gap-2">
    <div class="flex min-h-0 flex-1 flex-col gap-1.5 rounded-lg border border-gray-200 border-l-4 border-l-unal-blue/50 bg-white px-3 py-2">
      <span class="text-[0.6rem] font-bold uppercase tracking-wide text-unal-blue">Hiperparámetros clave</span>
      <ul class="list-none space-y-1 text-[0.65rem] leading-tight text-unal-gray">
        <li><span class="font-semibold">Etapa 1:</span> SGD · 100 épocas YOLO / 150 RT-DETR · early stopping</li>
        <li><span class="font-semibold">Etapa 2:</span> AdamW · 200 épocas YOLO / 300 RT-DETR · early stopping</li>
        <li><span class="font-semibold">Control:</span> mide el gap sintético-real y valida la necesidad del TL</li>
        <li><span class="font-semibold">Aumentación en línea:</span> HSV · traslación · escalado · flip-H (p=0,5) · mosaico (p=1,0) + Albumentations: Blur, MedianBlur, ToGray, CLAHE (p=0,01 c/u) — sin rotación ni flip-V para preservar plausibilidad biológica</li>
      </ul>
    </div>
    <div class="flex min-h-0 flex-1 flex-col gap-1.5 rounded-lg border border-gray-200 border-l-4 border-l-unal-green/60 bg-white px-3 py-2">
      <span class="text-[0.6rem] font-bold uppercase tracking-wide text-[#3a6a18]">Métricas de evaluación</span>
      <ul class="list-none space-y-1 text-[0.65rem] leading-tight text-unal-gray">
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
<header class="mb-1.5 text-left">
  <div class="flex items-center gap-3">
    <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Desarrollo de redes personalizadas</h1>
    <span class="shrink-0 rounded-md bg-unal-green/25 px-2.5 py-0.5 text-[0.65rem] font-bold text-[#3a6a18] ring-1 ring-unal-green/50">★ Aporte</span>
  </div>
  <span class="mt-0.5 block text-[0.68rem] text-unal-gray/70">Módulos de atención para estructuras de bajo contraste</span>
  <div class="mt-1 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-1.5">
  <!-- Motivación como caja .co.bl -->
  <div class="shrink-0 rounded-lg border-l-4 border-unal-blue/60 bg-unal-blue/[0.07] px-3 py-1.5 text-[0.72rem] leading-[1.45] text-unal-gray">
    <span class="font-semibold text-unal-blue">Motivación:</span> los modelos base presentan baja sensibilidad al <span class="font-semibold text-unal-blue">límite citoplasmático</span> y al <span class="font-semibold text-unal-blue">huso meiótico</span> — estructuras de bajo contraste sin precedente en bases de datos públicas → integración de atención para recalibrar respuesta espacial y de canal sin rediseñar la arquitectura completa
  </div>
  <div class="grid min-h-0 flex-1 grid-cols-2 gap-2">
    <div class="flex flex-col gap-2 rounded-lg border border-unal-blue/30 bg-unal-blue/[0.07] px-3 py-2">
      <span class="text-[0.65rem] font-bold uppercase tracking-wide text-unal-blue">YOLOv9m-CBAM</span>
      <span class="text-[0.68rem] leading-[1.45] text-unal-gray">CBAM en columna vertebral · bloque P2/4 (128 ch) · después del primer RepNCSPELAN4 · atención canal + espacial secuencial</span>
    </div>
    <div class="flex flex-col gap-2 rounded-lg border border-unal-blue/30 bg-unal-blue/[0.07] px-3 py-2">
      <span class="text-[0.65rem] font-bold uppercase tracking-wide text-unal-blue">YOLOv9m-Triple Attention</span>
      <span class="text-[0.68rem] leading-[1.45] text-unal-gray">Atención progresiva en 3 niveles: Channel Att. (P2/4) · Spatial Att. (P3/8) · CBAM (P4/16) — recalibración multi-escala</span>
    </div>
    <div class="flex flex-col gap-2 rounded-lg border border-unal-green/40 bg-unal-green/[0.08] px-3 py-2">
      <span class="text-[0.65rem] font-bold uppercase tracking-wide text-[#3a6a18]">YOLO11m-Conservative Attention</span>
      <span class="text-[0.68rem] leading-[1.45] text-unal-gray">Channel Att. después del 1.er C3k2 (P2/4, 256 ch) · CBAM después del 2.° C3k2 (P3/8, 512 ch) — enfoque conservador</span>
    </div>
    <div class="flex flex-col gap-2 rounded-lg border border-unal-green/40 bg-unal-green/[0.08] px-3 py-2">
      <span class="text-[0.65rem] font-bold uppercase tracking-wide text-[#3a6a18]">YOLO11m-Transformer Enhanced</span>
      <span class="text-[0.68rem] leading-[1.45] text-unal-gray">Módulos C3TR + Atención en columna vertebral — captura de relaciones globales en la imagen para complementar la convolución local</span>
    </div>
  </div>
  <span class="shrink-0 text-[0.62rem] italic text-unal-gray/60">Criterio consistente: añadir atención en posiciones estratégicas · overhead computacional &lt; 0,5% en todos los casos</span>
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
    <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Arquitectura YOLOv9m-CBAM</h1>
    <span class="shrink-0 rounded-md bg-unal-green/25 px-2.5 py-0.5 text-[0.65rem] font-bold text-[#3a6a18] ring-1 ring-unal-green/50">★ Aporte</span>
  </div>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-1.5">
  <figure class="m-0 min-h-0 flex-1 flex flex-col items-center justify-center pt-16">
    <img
      src="../images/figures/Slide16.png"
      alt="Arquitectura YOLOv9m-CBAM — módulo CBAM insertado en backbone P2/4"
      class="w-full max-w-[68%] h-auto object-contain"
    />
    <figcaption lang="es" class="plm-figcaption mt-1 text-center">
      <span class="font-semibold text-unal-gray">Fig. 13.</span>
      Arquitectura YOLOv9m-CBAM: módulo CBAM insertado en la columna vertebral
      después del primer bloque RepNCSPELAN4 (nivel P2/4, 128 canales).
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
transition: slide-left
deckSection: metodologia
---

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Protocolo comparativo — Fase 3</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>
<div class="flex min-h-0 flex-1 flex-col justify-center gap-2">
  <p class="text-[0.82rem] leading-snug text-unal-gray">Las redes personalizadas se evalúan con el <span class="font-semibold text-unal-blue">mismo protocolo de Fase 2</span> — cualquier diferencia en los resultados se debe exclusivamente a los módulos de atención.</p>
  <!-- Tabla comparativa -->
  <div class="rounded-xl border border-gray-200">
    <table class="w-full text-[0.72rem] leading-snug">
      <thead>
        <tr class="border-b-2 border-unal-gray/25">
          <th class="px-3 py-1.5 !text-center !font-bold text-unal-gray">Aspecto</th>
          <th class="px-3 py-1.5 !text-center !font-bold text-unal-blue">Fase 2 — Redes estándar</th>
          <th class="px-3 py-1.5 !text-center !font-bold text-[#3a6a18]">Fase 3 — Redes personalizadas</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        <tr class="bg-white">
          <td class="px-3 py-1 font-semibold text-unal-gray">Arquitecturas</td>
          <td class="px-3 py-1 text-center text-unal-gray">13 configuraciones YOLO / RT-DETR</td>
          <td class="px-3 py-1 text-center text-unal-gray">4 variantes con módulos de atención</td>
        </tr>
        <tr class="bg-gray-50/60">
          <td class="px-3 py-1 font-semibold text-unal-gray">Flujo de TL</td>
          <td class="px-3 py-1 text-center text-unal-gray">COCO → Sintético → Real</td>
          <td class="px-3 py-1 text-center text-unal-gray">COCO → Sintético → Real</td>
        </tr>
        <tr class="bg-white">
          <td class="px-3 py-1 font-semibold text-unal-gray">Exp. control</td>
          <td class="px-3 py-1 text-center text-unal-gray">✓ Sin transferencia de aprendizaje</td>
          <td class="px-3 py-1 text-center text-unal-gray">✓ Sin transferencia de aprendizaje</td>
        </tr>
        <tr class="bg-gray-50/60">
          <td class="px-3 py-1 font-semibold text-unal-gray">Métricas</td>
          <td class="px-3 py-1 text-center text-unal-gray">mAP50, mAP50-95, P, R, ms/img</td>
          <td class="px-3 py-1 text-center text-unal-gray">mAP50, mAP50-95, P, R, ms/img</td>
        </tr>
        <tr class="bg-white">
          <td class="px-3 py-1 font-semibold text-unal-gray">Conjunto de prueba</td>
          <td class="px-3 py-1 text-center text-unal-gray">40 imgs · 146 instancias (OocytePaperImages)</td>
          <td class="px-3 py-1 text-center text-unal-gray">40 imgs · 146 instancias (OocytePaperImages)</td>
        </tr>
        <tr class="bg-unal-green/[0.05]">
          <td class="px-3 py-1 font-semibold text-unal-gray">Eval. video</td>
          <td class="px-3 py-1 text-center text-unal-gray/35">—</td>
          <td class="px-3 py-1 text-center font-bold text-[#3a6a18]">✓ 5 secuencias PLM</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="flex items-center justify-center gap-2">
    <div class="h-0.5 flex-1 rounded-full bg-unal-green/20" />
    <span class="text-[0.68rem] font-semibold text-[#3a6a18]">Protocolo idéntico → comparación justa entre redes estándar y personalizadas</span>
    <div class="h-0.5 flex-1 rounded-full bg-unal-green/20" />
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

