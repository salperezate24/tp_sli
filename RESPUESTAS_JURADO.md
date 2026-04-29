# Respuestas a observaciones del jurado — Germán Sánchez (26-02-2026)

> **Estrategia general:** Los resultados son sólidos y el jurado lo reconoce. No se reescribe la
> historia — se enmarca correctamente el alcance. La mayoría de las correcciones son de **guion**;
> solo algunas requieren tocar las diapositivas.

---

## Observaciones de fondo

### Obs. 1 — No existe clase "ovocito"; las clases son estructuras periféricas/internas

**Pregunta del jurado:** ¿Qué criterios permiten usar la detección de estructuras como
identificación automática del ovocito completo?

**Respuesta a construir:**
La zona pelúcida (ZP) delimita el ovocito externamente; el límite del citoplasma lo delimita
internamente. Detectar ambas estructuras equivale funcionalmente a localizar el ovocito. En videos
con múltiples células o artefactos, la co-detección de ZP + límite del citoplasma actúa como
criterio de identidad celular.

**Acciones:**

- [ ] **Guion — SLIDE Pregunta/Hipótesis:** Agregar línea: *"aunque no existe una clase 'ovocito',
  la zona pelúcida delimita externamente la célula y el límite del citoplasma su interior — su
  co-detección funciona como identificador del ovocito completo."*
- [ ] **Guion — SLIDE Objetivos:** Cerrar la lectura del objetivo general con: *"identificar el
  ovocito a través de sus estructuras, no como clase abstracta".*
- [ ] **Guion — SLIDE Marco Teórico I:** Vincular ZP + citoplasma como par = proxy del ovocito.
  Actualmente se habla de las estructuras individualmente; falta el vínculo con la identidad
  del ovocito completo.
- [ ] **Slide Conclusiones (`pages/08_conclusiones.md`):** Considerar agregar en el bloque
  "Resultado principal": *"co-detección de ZP + límite del citoplasma actúa como identificador
  funcional del ovocito".*

---

### Obs. 2 — La brecha entre detección de estructuras y estados de maduración no está articulada

**Pregunta del jurado:** ¿Qué sería necesario para pasar de detección de estructuras morfológicas
hacia estados de maduración?

**Respuesta a construir:**
- Huso meiótico presente → confirma madurez nuclear (MII).
- ZP con retardo óptico 2–3 nm y alta birrefringencia → zona pelúcida de calidad.
- Cuerpo polar visible → la meiosis ya ocurrió.
- La *inferencia del estado* a partir de las detecciones requeriría un segundo módulo de
  clasificación (reglas biológicas o clasificador entrenado sobre las bounding boxes). Ese paso
  no se abordó en la tesis y queda como trabajo futuro.

**Acciones:**

- [ ] **Guion — SLIDE Marco Teórico I:** Cerrar el circuito: "huso meiótico presente → ovocito
  en MII → maduro nuclearmente". El guion actual menciona las estructuras pero no convierte la
  detección en una inferencia de estado.
- [ ] **Guion — SLIDE Pregunta/Hipótesis:** Al leer la pregunta, aclarar: *"la detección de
  estructuras es el paso previo necesario — la inferencia del estado de maduración requeriría un
  módulo adicional de clasificación sobre esas detecciones; ese es el trabajo futuro inmediato."*
- [ ] **Guion — SLIDE Conclusiones:** Agregar: *"estas cuatro estructuras son los marcadores
  biológicos del estado de maduración — la tesis demuestra que pueden detectarse automáticamente;
  la conversión a una clasificación formal de madurez es el siguiente eslabón clínico."*
- [ ] **Slide Trabajo futuro (`pages/09_trabajo_futuro.md`):** Agregar ítem: "módulo de
  clasificación de estados de maduración sobre las detecciones del modelo (huso presente →
  MII, retardo ZP, CP visible)."

---

### Obs. 3 — "Video en vivo" en la pregunta vs. evaluación sobre secuencias offline

**Pregunta del jurado:** ¿Qué elementos adicionales harían falta para pasar de videos offline a
funcionamiento en tiempo real?

**Respuesta a construir:**
"Video en vivo" refiere a la capacidad del modelo de procesar la señal PLM fotograma a fotograma
a velocidades viables (< 10 ms/imagen ≥ 100 fps). Los videos usados en la evaluación son
grabaciones reales del microscopio PLM, no simulaciones sintéticas. Lo que falta para operación
*integrada* en vivo: (1) interfaz con el controlador del microscopio, (2) pipeline de captura +
preprocesamiento en tiempo real, (3) visualización en bucle. Eso es ingeniería de sistema, no de
modelo.

**Acciones:**

- [ ] **Guion — SLIDE Pregunta/Hipótesis:** Aclarar el sentido de "video en vivo": *"'video en
  vivo' refiere a la capacidad del modelo de procesar secuencias PLM fotograma a fotograma — como
  prueba de concepto se evaluó sobre grabaciones reales del microscopio; la integración hardware
  con el equipo de adquisición queda como trabajo de ingeniería de sistema."*
- [ ] **Guion — SLIDES de video (slides de secuencias YOLOv9m vs. CBAM):** Antes de mostrar los
  videos, aclarar: *"estos son videos reales grabados del microscopio PLM. La inferencia ocurre
  fotograma a fotograma; lo que este prototipo no incluye es la integración directa con el
  controlador del microscopio."*
- [ ] **Slide Trabajo futuro:** Agregar ítem: "integración del modelo con el sistema de
  adquisición PLM para operación en tiempo real integrado (hardware + software)."

---

### Obs. 4 — La motivación habla de selección clínica; los resultados son de detección de estructuras

**Pregunta del jurado:** ¿Cómo se pasa de las detecciones reportadas a una solución del problema
planteado en la motivación?

**Respuesta a construir:**
La justificación establece el *por qué importa* el problema clínico. La tesis aporta la *capa de
percepción* — el detector de estructuras — que es el prerrequisito técnico para cualquier
herramienta clínica de apoyo. El salto a selección clínica requiere: validación prospectiva con
embriólogos, integración en flujo de trabajo IVF, y el módulo de clasificación de madurez (Obs. 2).
La tesis no promete esos pasos; establece el primer eslabón técnico.

**Acciones:**

- [ ] **Guion — SLIDE Justificación (slides 3–4):** Cerrar con enmarque explícito: *"este trabajo
  no resuelve el problema clínico completo — lo aborda desde su base técnica: sin detección
  automática y confiable de estructuras, ningún sistema de apoyo a la selección puede construirse."*
- [ ] **Guion — SLIDE Conclusiones / Hallazgos:** Nombrar la cadena completa (detección →
  clasificación de madurez → apoyo a selección embrionaria) y señalar cuál eslabón se demostró
  y cuáles quedan pendientes.
- [ ] **Slide Trabajo futuro:** Asegurarse de tener ítem de "validación clínica prospectiva con
  embriólogos" que cierre el hilo abierto en la justificación.

---

### Obs. 5 — No hay ablation COCO→real como control; el aporte neto del preentrenamiento sintético no está cuantificado

**Pregunta del jurado:** ¿Cuál es el aporte real del preentrenamiento sintético vs. transferencia
directa COCO→real?

**Respuesta a construir:**
Limitación legítima. El diseño no incluyó el brazo COCO→real directo, por lo que no es posible
aislar la contribución neta del paso sintético. Lo que sí se puede afirmar: con solo datos sintéticos
los modelos son casi no funcionales (cuerpo polar mAP50 = 0.012); con transferencia a real mejoran
dramáticamente. Eso muestra que el dominio real es imprescindible, pero no desacopla el rol del
sintético del rol de los pesos COCO.

**Acciones:**

- [ ] **Guion — SLIDE Metodología (flujo sintético→real):** Reconocer abiertamente: *"una
  limitación de diseño experimental es que no se ejecutó el brazo COCO→real como control; eso
  habría permitido aislar la contribución del preentrenamiento sintético. Es un experimento
  pendiente para trabajo futuro."*
- [ ] **Guion — SLIDE Resultados (hallazgos de transferencia):** Reformular con precisión: *"lo
  que sí podemos afirmar es que el preentrenamiento solo en sintético es insuficiente — la
  transferencia al dominio real es esencial. Cuánto exactamente aporta el sintético vs. partir
  directamente de COCO es una pregunta abierta que requiere el ablation pendiente."*
- [ ] **Slide Trabajo futuro:** Agregar ítem: "ablation COCO→real vs. COCO→sintético→real para
  cuantificar la contribución del preentrenamiento sintético."

---

### Obs. 6 — Semilla fija: las diferencias pequeñas entre modelos pueden no ser estadísticamente significativas

**Pregunta del jurado:** ¿Se puede garantizar el ranking entre modelos bajo otras semillas o
particiones?

**Respuesta a construir:**
No se puede garantizar para diferencias pequeñas (< 1 punto de mAP). El experimento fue
determinístico por reproducibilidad, no por validación estadística. YOLOv9m se elige como
óptimo por su margen en mAP50 global *y* su consistencia en video — no solo por fracciones de
punto en tablas. Para diferencias < 0.01 mAP, la variabilidad de entrenamiento hace el ranking
incierto.

**Acciones:**

- [ ] **Guion — SLIDE Resultados (comparativa de modelos):** Agregar caveat: *"donde las
  diferencias de mAP son pequeñas — menos de un punto — el ranking debe tomarse como indicativo,
  no definitivo, dado que se usó una única semilla de entrenamiento. Para diferencias mayores, la
  conclusión es robusta."*
- [ ] **Guion — SLIDE Conclusiones:** Reforzar que la selección de YOLOv9m se basa en el conjunto
  de criterios (mAP50 global + latencia + comportamiento en video), no solo en la tabla.

---

### Obs. 7 — Anotaciones sin reporte de variabilidad interobservador

**Pregunta del jurado:** ¿Las diferencias de desempeño se atribuyen al modelo o a la variabilidad
de las anotaciones de referencia?

**Respuesta a construir:**
Las imágenes reales fueron anotadas por un único anotador (el autor) con referencia al protocolo
clínico PLM. La ausencia de un segundo anotador es una limitación reconocida. Para diferencias
grandes entre modelos el efecto de la variabilidad del ground truth es secundario; para diferencias
pequeñas podría ser comparable. Esto refuerza la interpretación cautelosa del ranking (Obs. 6).

**Acciones:**

- [ ] **Guion — SLIDE Metodología (conjunto de datos real):** Mencionar: *"las anotaciones fueron
  realizadas por el autor siguiendo el protocolo PLM — una limitación reconocida es la ausencia de
  validación interobservador formal con un segundo embriólogo."*
- [ ] **Guion — SLIDE Resultados:** Vincular Obs. 6 y Obs. 7 como limitaciones conjuntas: semilla
  fija + anotador único → rankings entre modelos cercanos son orientativos.

---

### Obs. 8 — Justificación de YOLOv9m como óptimo frente a RT-DETR (mAP50 igual) y YOLOv11s (mAP50-95 mayor)

**Pregunta del jurado:** ¿Por qué YOLOv9m si RT-DETR empata en mAP50 y YOLOv11s supera en mAP50-95?

**Respuesta a construir:**
- **RT-DETR-ResNet101** empata en mAP50 pero tiene mayor latencia (arquitectura transformer) →
  menos apto para tiempo real clínico. YOLOv9m < 10 ms/imagen.
- **YOLOv11s** supera en mAP50-95 pero es un modelo *más pequeño* con menor capacidad en escenas
  complejas; en los videos su estabilidad de detección fue inferior.
- El criterio de selección es multidimensional: mAP50 global + latencia + estabilidad en video.
  YOLOv9m gana en el balance de los tres.

**Acciones:**

- [ ] **Guion — SLIDE Conclusiones (resultado principal):** Hacer explícita la justificación:
  *"YOLOv9m se elige por balance en tres criterios: mAP50 global empatado o superior, latencia
  < 10 ms viable para tiempo real, y mayor estabilidad en video. RT-DETR empata en mAP50 pero su
  arquitectura transformer implica mayor latencia. YOLOv11s lidera en mAP50-95 pero su menor
  capacidad se refleja en menor estabilidad en secuencias de video."*
- [ ] **Slide Resultados — gráfico comparativo (`pages/07_resultados.md`):** Evaluar si se puede
  agregar latencia de inferencia como dato visible en el gráfico o en una nota, para que el jurado
  vea el tradeoff visualmente. (Opcional según espacio.)

---

## Observaciones de forma — correcciones al documento LaTeX

> Archivo fuente: `/Users/salperezate/Documents/GitHub/thesis/`
> Estas son correcciones al **documento**, no a las diapositivas.
> Las obs. **3** y **4** son las más visibles en la defensa oral; priorizar.

| # | Corrección | Ubicación |
|---|---|---|
| 1 | "Convolucionales" → "convolucionales" | pp. 2 |
| 2 | Unificar estilo de títulos en secciones 2.3, 2.4, 2.5 y 4.2 | caps. 2 y 4 |
| **3** | Eliminar "ovocitos" duplicado en objetivo general | pp. 26 y 142 |
| **4** | Cambiar "MLP" por "PLM" donde refiere a microscopía | pp. 9, 17, 30 |
| 5 | Elegir `mAP50` / `mAP50-95` y mantener en todo el documento | caps. 5–6 |
| 6 | "mAP@50 se refiere que…" → "mAP@50 indica que…" | pp. 41 |
| 7 | "la base sobre el cual" → "la base sobre la cual" | pp. 35 |
| 8 | "útil para evaluar escoger" → "útil para escoger" | pp. 39 |
| 9 | Normalizar guiones: "v8--v12" → "v8-v12", "sintético--real" → "sintético-real" | pp. 13, 52, 54, 134, 146 |
| 10 | Unificar nombre del dataset: elegir `oocyte_synthetic_2025b` | pp. 51, 70, 159 |
| 11 | Definir forma canónica de cada modelo y mantenerla (YOLOv9m-CBAM, YOLOv11m…) | pp. 115–166 |
| 12 | Traducir términos en inglés dentro de narración española; solo dejar etiquetas técnicas | pp. 74, 95, 130–134 |
| 13 | Agregar espacio: "Figura 5-10:Detección" → "Figura 5-10: Detección" | pp. 111 |
| 14 | "se podría entrenar modelos" → "se podrían entrenar modelos" | pp. 146 |
| 15 | "mean Average Precision" → "mean average precision" | pp. 7 |

---

## Resumen de ítems nuevos para el BACKLOG de diapositivas

- [ ] **Slide Trabajo futuro:** módulo de clasificación de estados de maduración sobre detecciones.
- [ ] **Slide Trabajo futuro:** integración del modelo con sistema de adquisición PLM (hardware).
- [ ] **Slide Trabajo futuro:** ablation COCO→real como experimento de control pendiente.
- [ ] **Slide Trabajo futuro:** validación clínica prospectiva con embriólogos.
- [ ] **Slide Conclusiones:** co-detección ZP + citoplasma como identificador funcional del ovocito.
- [ ] **Slide Resultados:** añadir latencia de inferencia en comparativa visual (si hay espacio).

## Orden de ataque sugerido (por impacto en la defensa)

1. Guion slides **Pregunta/Hipótesis** y **Conclusiones** — cubren Obs. 1, 2, 3, 4, 8.
2. Guion slides **Justificación** — cierra Obs. 4.
3. Guion slides **Metodología** y **Resultados** — cubre Obs. 5, 6, 7.
4. **Slide Trabajo futuro** — agregar los 4 ítems nuevos.
5. **Slide Conclusiones** (visual, opcional) — co-detección como proxy del ovocito.
6. **Documento LaTeX** — correcciones de forma, especialmente obs. 3 y 4.
