---
transition: slide-left
deckSection: trabajo_futuro
hide: true
---

<!-- SLIDE OCULTO (hide: true) — versión original con 5 ítems sin referencias al jurado.
     Conservada como referencia histórica. Reemplazada por el slide integrado al final
     de este archivo, que fusiona estos ítems con las observaciones del jurado (Obs. 3, 5, 6, 7). -->

<div class="slide-deck-shell">
  <div class="mx-auto flex min-h-0 flex-1 flex-col w-full max-w-6xl text-left">
    <header class="mb-2 sm:mb-3">
      <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Trabajos futuros</h1>
      <div class="mt-1 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
    </header>
    <div class="flex min-h-0 flex-1 gap-6">
      <div class="flex w-1/2 flex-col gap-3">
        <div class="flex gap-3">
          <span class="mt-0.5 shrink-0 text-xl font-black leading-none text-unal-blue sm:text-2xl" style="opacity:0.25">01</span>
          <div>
            <p class="my-0 mb-0.5 text-[0.82rem] font-bold leading-snug text-unal-blue sm:text-[0.90rem]">Base de datos real PLM</p>
            <p class="my-0 text-[0.72rem] leading-snug text-unal-gray sm:text-[0.80rem]">Conjunto anotado por expertos que refleje variabilidad biológica real y reduzca la dependencia del esquema sintético→real.</p>
          </div>
        </div>
        <div class="flex gap-3">
          <span class="mt-0.5 shrink-0 text-xl font-black leading-none text-unal-blue sm:text-2xl" style="opacity:0.25">02</span>
          <div>
            <p class="my-0 mb-0.5 text-[0.82rem] font-bold leading-snug text-unal-blue sm:text-[0.90rem]">Efecto del zoom óptico</p>
            <p class="my-0 text-[0.72rem] leading-snug text-unal-gray sm:text-[0.80rem]">Evaluar con otras magnificaciones (micra–píxel) y reescalar secuencias Zenodo para contrastar la hipótesis de escala.</p>
          </div>
        </div>
        <div class="flex gap-3">
          <span class="mt-0.5 shrink-0 text-xl font-black leading-none text-unal-blue sm:text-2xl" style="opacity:0.25">03</span>
          <div>
            <p class="my-0 mb-0.5 text-[0.82rem] font-bold leading-snug text-unal-blue sm:text-[0.90rem]">Evaluación cuantitativa en video</p>
            <p class="my-0 text-[0.72rem] leading-snug text-unal-gray sm:text-[0.80rem]">Anotar secuencias para reportar métricas por fotograma y comparar modelos en escenarios dinámicos.</p>
          </div>
        </div>
      </div>
      <div class="flex w-1/2 flex-col gap-3">
        <div class="flex gap-3">
          <span class="mt-0.5 shrink-0 text-xl font-black leading-none text-unal-blue sm:text-2xl" style="opacity:0.25">04</span>
          <div>
            <p class="my-0 mb-0.5 text-[0.82rem] font-bold leading-snug text-unal-blue sm:text-[0.90rem]">Modelación del cuerpo polar</p>
            <p class="my-0 text-[0.72rem] leading-snug text-unal-gray sm:text-[0.80rem]">Ampliar variabilidad sintética (forma, tamaño, posición) e incorporar distintas relaciones micra–píxel para mayor robustez.</p>
          </div>
        </div>
        <div class="flex gap-3">
          <span class="mt-0.5 shrink-0 text-xl font-black leading-none text-unal-blue sm:text-2xl" style="opacity:0.25">05</span>
          <div>
            <p class="my-0 mb-0.5 text-[0.82rem] font-bold leading-snug text-unal-blue sm:text-[0.90rem]">Integración clínica</p>
            <p class="my-0 text-[0.72rem] leading-snug text-unal-gray sm:text-[0.80rem]">Estudiar inferencia en tiempo real, usabilidad en laboratorio e impacto en las decisiones del embriólogo.</p>
          </div>
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
El trabajo futuro tiene dos grupos.

El primero resuelve limitaciones metodológicas directas de este trabajo. Quiero conectar tres de ellas con observaciones del jurado. Primero: validación interobservador — necesitamos un segundo anotador, idealmente un embriólogo con experiencia en PLM, con un protocolo formal de resolución de desacuerdos, para cuantificar la variabilidad de anotación y separar la incertidumbre del modelo de la incertidumbre del conjunto de referencia. Segundo: experimento de ablación del preentrenamiento sintético — contrastar los flujos COCO→real directo versus COCO→sintético→real bajo condiciones comparables, para aislar cuánto aporta efectivamente el paso sintético más allá de la inicialización COCO. Tercero: múltiples corridas con semillas distintas para validar estadísticamente las diferencias entre modelos, especialmente las menores a un punto porcentual.

El segundo grupo son extensiones del sistema: estudiar el efecto del zoom óptico, ampliar la modelación sintética del cuerpo polar, e integrar el modelo en flujo clínico real con embriólogos — con métricas cuantitativas en video y evaluación de impacto en la toma de decisiones. Ese cierre es el objetivo de largo plazo de este trabajo.
-->

---
transition: slide-left
deckSection: trabajo_futuro
hide: true
---

<!-- SLIDE OCULTO (hide: true) — versión revisada con categorías "Limitaciones a resolver" /
     "Extensiones del sistema" y referencias a Obs. 5, 6, 7. Conservada como referencia histórica.
     Reemplazada por el slide integrado al final de este archivo. -->

<div class="slide-deck-shell">
  <div class="mx-auto flex min-h-0 flex-1 flex-col w-full max-w-6xl text-left">
    <header class="mb-2 sm:mb-3">
      <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Trabajos futuros</h1>
      <div class="mt-1 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
    </header>
    <div class="flex min-h-0 flex-1 gap-6">
      <div class="flex w-1/2 flex-col gap-3">
        <p class="my-0 text-[0.7rem] font-bold uppercase tracking-wide text-unal-green">Limitaciones a resolver</p>
        <div class="flex gap-3">
          <span class="mt-0.5 shrink-0 text-xl font-black leading-none text-unal-green sm:text-2xl" style="opacity:0.35">01</span>
          <div>
            <p class="my-0 mb-0.5 text-[0.82rem] font-bold leading-snug text-unal-gray sm:text-[0.90rem]">Validación interobservador <span class="ml-1 text-[0.62rem] font-normal text-unal-gray/50">Obs. 7</span></p>
            <p class="my-0 text-[0.72rem] leading-snug text-unal-gray sm:text-[0.80rem]">Segundo anotador con experiencia en PLM y protocolo formal de resolución de desacuerdos — para cuantificar la variabilidad de anotación independiente del modelo.</p>
          </div>
        </div>
        <div class="flex gap-3">
          <span class="mt-0.5 shrink-0 text-xl font-black leading-none text-unal-green sm:text-2xl" style="opacity:0.35">02</span>
          <div>
            <p class="my-0 mb-0.5 text-[0.82rem] font-bold leading-snug text-unal-gray sm:text-[0.90rem]">Ablación del preentrenamiento sintético <span class="ml-1 text-[0.62rem] font-normal text-unal-gray/50">Obs. 5</span></p>
            <p class="my-0 text-[0.72rem] leading-snug text-unal-gray sm:text-[0.80rem]">Contrastar COCO→real directo vs. COCO→sintético→real bajo condiciones comparables, para aislar el aporte neto del paso sintético.</p>
          </div>
        </div>
        <div class="flex gap-3">
          <span class="mt-0.5 shrink-0 text-xl font-black leading-none text-unal-green sm:text-2xl" style="opacity:0.35">03</span>
          <div>
            <p class="my-0 mb-0.5 text-[0.82rem] font-bold leading-snug text-unal-gray sm:text-[0.90rem]">Múltiples semillas <span class="ml-1 text-[0.62rem] font-normal text-unal-gray/50">Obs. 6</span></p>
            <p class="my-0 text-[0.72rem] leading-snug text-unal-gray sm:text-[0.80rem]">Múltiples corridas con semillas distintas para validar estadísticamente las diferencias entre modelos, especialmente las menores a un punto porcentual.</p>
          </div>
        </div>
      </div>
      <div class="flex w-1/2 flex-col gap-3">
        <p class="my-0 text-[0.7rem] font-bold uppercase tracking-wide text-unal-blue">Extensiones del sistema</p>
        <div class="flex gap-3">
          <span class="mt-0.5 shrink-0 text-xl font-black leading-none text-unal-blue sm:text-2xl" style="opacity:0.25">04</span>
          <div>
            <p class="my-0 mb-0.5 text-[0.82rem] font-bold leading-snug text-unal-blue sm:text-[0.90rem]">Integración clínica</p>
            <p class="my-0 text-[0.72rem] leading-snug text-unal-gray sm:text-[0.80rem]">Inferencia en flujo ICSI real con embriólogos — usabilidad en laboratorio e impacto en la toma de decisiones de selección ovocitaria.</p>
          </div>
        </div>
        <div class="flex gap-3">
          <span class="mt-0.5 shrink-0 text-xl font-black leading-none text-unal-blue sm:text-2xl" style="opacity:0.25">05</span>
          <div>
            <p class="my-0 mb-0.5 text-[0.82rem] font-bold leading-snug text-unal-blue sm:text-[0.90rem]">Base de datos real PLM</p>
            <p class="my-0 text-[0.72rem] leading-snug text-unal-gray sm:text-[0.80rem]">Conjunto anotado por expertos de tamaño suficiente para entrenamiento directo, que reduzca la dependencia del esquema sintético→real.</p>
          </div>
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
El trabajo futuro tiene dos grupos.

El primero resuelve limitaciones metodológicas directas de este trabajo — conectadas con observaciones del jurado. Primero: validación interobservador — necesitamos un segundo anotador con experiencia en PLM y un protocolo formal de resolución de desacuerdos, para cuantificar la variabilidad de anotación y separar la incertidumbre del modelo de la del conjunto de referencia. Segundo: experimento de ablación del preentrenamiento sintético — contrastar los flujos COCO→real directo versus COCO→sintético→real bajo condiciones comparables, para aislar cuánto aporta efectivamente el paso sintético más allá de la inicialización COCO. Tercero: múltiples corridas con semillas distintas para validar estadísticamente las diferencias entre modelos, especialmente las menores a un punto porcentual.

El segundo grupo son extensiones del sistema: integración en flujo clínico real con embriólogos, y construcción de una base de datos real PLM anotada de tamaño suficiente para entrenamiento directo. Ese cierre es el objetivo de largo plazo de este trabajo.
-->

---
transition: slide-left
deckSection: trabajo_futuro
---

<div class="slide-deck-shell">
  <div class="mx-auto flex min-h-0 flex-1 flex-col w-full max-w-6xl text-left">
    <header class="mb-2 sm:mb-3">
      <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-unal-gray sm:text-2xl">Trabajos futuros</h1>
      <div class="mt-1 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
    </header>
    <div class="flex min-h-0 flex-1 gap-6">
      <div class="flex w-1/2 flex-col gap-3">
        <div class="flex gap-3">
          <span class="mt-0.5 shrink-0 text-xl font-black leading-none text-unal-blue sm:text-2xl" style="opacity:0.25">01</span>
          <div>
            <p class="my-0 mb-0.5 text-[0.82rem] font-bold leading-snug text-unal-blue sm:text-[0.90rem]">Base de datos real PLM <span class="ml-1 text-[0.62rem] font-normal text-unal-gray/50">Obs. 7</span></p>
            <p class="my-0 text-[0.72rem] leading-snug text-unal-gray sm:text-[0.80rem]">Conjunto anotado en colaboración con clínicas que incorpore un segundo anotador con experiencia PLM y protocolo formal de desacuerdos — para cuantificar variabilidad interobservador e independizar la incertidumbre del modelo de la del conjunto de referencia.</p>
          </div>
        </div>
        <div class="flex gap-3">
          <span class="mt-0.5 shrink-0 text-xl font-black leading-none text-unal-blue sm:text-2xl" style="opacity:0.25">02</span>
          <div>
            <p class="my-0 mb-0.5 text-[0.82rem] font-bold leading-snug text-unal-blue sm:text-[0.90rem]">Efecto del zoom óptico</p>
            <p class="my-0 text-[0.72rem] leading-snug text-unal-gray sm:text-[0.80rem]">Evaluar con otras magnificaciones (micra–píxel) y reescalar secuencias Zenodo para contrastar la hipótesis de escala que explica el bajo desempeño en esas secuencias.</p>
          </div>
        </div>
        <div class="flex gap-3">
          <span class="mt-0.5 shrink-0 text-xl font-black leading-none text-unal-blue sm:text-2xl" style="opacity:0.25">03</span>
          <div>
            <p class="my-0 mb-0.5 text-[0.82rem] font-bold leading-snug text-unal-blue sm:text-[0.90rem]">Evaluación cuantitativa en video</p>
            <p class="my-0 text-[0.72rem] leading-snug text-unal-gray sm:text-[0.80rem]">Anotar secuencias fotograma a fotograma para reportar métricas comparables a las de imágenes estáticas y comparar modelos en escenarios dinámicos.</p>
          </div>
        </div>
      </div>
      <div class="flex w-1/2 flex-col gap-3">
        <div class="flex gap-3">
          <span class="mt-0.5 shrink-0 text-xl font-black leading-none text-unal-blue sm:text-2xl" style="opacity:0.25">04</span>
          <div>
            <p class="my-0 mb-0.5 text-[0.82rem] font-bold leading-snug text-unal-blue sm:text-[0.90rem]">Nuevos experimentos <span class="ml-1 text-[0.62rem] font-normal text-unal-gray/50">Obs. 5 · Obs. 6</span></p>
            <p class="my-0 text-[0.72rem] leading-snug text-unal-gray sm:text-[0.80rem]">Contrastar COCO→real directo vs. COCO→sintético→real para aislar el aporte del paso sintético; y múltiples corridas con semillas distintas para validar estadísticamente diferencias menores a un punto porcentual.</p>
          </div>
        </div>
        <div class="flex gap-3">
          <span class="mt-0.5 shrink-0 text-xl font-black leading-none text-unal-blue sm:text-2xl" style="opacity:0.25">05</span>
          <div>
            <p class="my-0 mb-0.5 text-[0.82rem] font-bold leading-snug text-unal-blue sm:text-[0.90rem]">Integración clínica <span class="ml-1 text-[0.62rem] font-normal text-unal-gray/50">Obs. 3</span></p>
            <p class="my-0 text-[0.72rem] leading-snug text-unal-gray sm:text-[0.80rem]">Inferencia en flujo ICSI real con embriólogos — usabilidad en laboratorio e impacto en la toma de decisiones de selección ovocitaria.</p>
          </div>
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
Trabajos futuros en dos grupos: pendientes metodológicos vinculados a observaciones del jurado, y extensiones del sistema.

Primer grupo. Base de datos real PLM [Obs. 7]: construir el conjunto real requiere colaboración con clínicas; ese proceso debe incorporar desde el inicio un segundo anotador con experiencia en PLM y un protocolo formal de resolución de desacuerdos, para cuantificar la variabilidad de anotación de forma independiente del error del modelo. Nuevos experimentos [Obs. 5 y Obs. 6]: dos pendientes metodológicos. Primero, el estudio de contraste entre los flujos COCO→real directo y COCO→sintético→real bajo condiciones comparables — el diseño no incluyó ese brazo de control, lo que impide aislar el aporte neto del paso sintético; tenemos evidencia de que actúa como calentamiento de dominio, pero el experimento de contraste es el pendiente natural con valor metodológico independiente. Segundo, múltiples corridas con semillas distintas sobre YOLOv9m-CBAM para validar estadísticamente diferencias menores a un punto porcentual, que hoy son indicativas.

Segundo grupo. Efecto del zoom óptico: en las secuencias Zenodo el desempeño fue notablemente menor; la hipótesis es una relación micra–píxel distinta a la de los datos de entrenamiento, y el experimento de contraste reescalando las secuencias está pendiente. Evaluación cuantitativa en video: tenemos cinco secuencias evaluadas cualitativamente; el siguiente paso es anotarlas fotograma a fotograma para reportar métricas comparables a las de imágenes estáticas. Integración clínica [Obs. 3]: el modelo corre a 7,4 ms por imagen, muy por debajo del período de trama; lo que falta es la integración hardware-software con el controlador del microscopio PLM. El paso de transición viable es un flujo semi-automático — el embriólogo captura la imagen compuesta con el software del microscopio y el sistema devuelve la detección superpuesta, sin integración directa con el controlador. Ese cierre es el objetivo de largo plazo de este trabajo.
-->
