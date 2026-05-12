# Plan de Acción para la Defensa — Versión Definitiva

**Cruce:** Respuestas Finales al Jurado (LaTeX) × Guion Oral × Slides Slidev  
**Autor:** Salomón Pérez Atencia  
**Fecha:** 2026-05-10  
**Basado en:** `respuestas_jurado/main.tex` · `PLAN_MEJORA_DEFENSA.md` · `pages/06–08` · `archive/script_20260420.txt`

---

## 1. Resumen de Ajustes Críticos

Qué cambió entre el plan de mejora inicial y las respuestas definitivas al jurado.

| Obs. | Plan inicial (`PLAN_MEJORA_DEFENSA.md`) | Respuesta definitiva (LaTeX) | Impacto en defensa |
|------|----------------------------------------|------------------------------|-------------------|
| **8** | YOLOv9m como modelo de referencia (por mAP50 global) | **YOLOv9m-CBAM es el modelo de referencia clínico** — evidencia multidimensional: generalización sin TL (+14,2 pp mAP50), comportamiento en video (sin falsos positivos), estabilidad de confianza | **CORRECCIÓN MAYOR:** Slide 33, 44 y guion deben corregir el modelo seleccionado |
| **2** | "Detección → inferencia de maduración" | **La detección del huso meiótico EN PLM ES la determinación del estado de maduración** (huso presente = MII = maduro; huso ausente = GV/MI = no maduro). No hay capa de inferencia adicional | Slide 18 y guion deben aclarar esto explícitamente |
| **3** | "Video en vivo" sin mayor explicación | Se precisa: latencia inferencia (7,4 ms) < período trama cámara PLM. Integración hardware directa = trabajo futuro de ingeniería. Ventana clínica crítica dura ~2 h → latencias de segundos son aceptables | Añadir aclaración oral en slide 18 |
| **4** | Detección como "prerrequisito" clínico | Detección del huso **es equivalencia directa** con decisión de madurez en clínica ICSI. Localización del huso (orientar aguja) tiene valor clínico independiente | Slide 44 debe cerrar el círculo clínico explícitamente |
| **1** | No desarrollado en plan inicial | ZP delimita externamente; huso/citoplasma delimitan internamente. Co-detección de ambos = identificador funcional del ovocito en contexto experimental | Añadir en slide 5 o 44 |
| **5** | Ablación COCO→real vs COCO→sintético→real = trabajo futuro | Reconocida como **limitación legítima** de diseño. El preentrenamiento sintético aporta: (a) habilitación de detección funcional desde cero; (b) calentamiento de dominio que facilita convergencia | Añadir en slide 32 (brecha), mencionar en 45 |
| **6** | Semilla fija = reproducibilidad | Reconocido: diferencias < 1 punto porcentual son **indicativas, no definitivas**. La selección de YOLOv9m-CBAM descansa en 3 criterios multidimensionales, no solo mAP puntual | Añadir calificadores estadísticos en slide 44 |
| **7** | Único anotador, sin segundo observador | Reconocido como limitación. Las publicaciones usadas como fuente de imágenes reales actuaron como validación experta implícita (flechas, etiquetas en artículos) | Añadir en slide 24 (curaduría) o 44 |

### La Corrección Fundamental

> El plan inicial identifica a **YOLOv9m** como modelo de referencia basándose en métricas de imágenes estáticas. Las respuestas definitivas al jurado establecen que **YOLOv9m-CBAM es el modelo de referencia para el escenario de aplicación clínica real**, con tres pilares de evidencia que las métricas estáticas no capturan:
>
> 1. **Generalización sin transferencia:** CBAM mAP50 = 0,470 vs. YOLOv9m 0,328 (+14,2 pp); recall global CBAM 0,488 vs. 0,265 (+22,3 pp)
> 2. **Comportamiento en video (Seq. 3, 660 fotogramas):** YOLOv9m genera 1.710 detecciones de huso (2,6/fotograma; falsos positivos confirmados en logotipo y herramienta de microinyección); CBAM genera exactamente 570 (1/fotograma, sin falsos positivos)
> 3. **Confianza estable:** Zona pelúcida en video — YOLOv9m 0,48–0,95 (inestable); CBAM 0,95–0,97 (estable)
>
> **Acción requerida:** El guion y los slides 33, 35 y 44 deben reflejar esta corrección.

---

## 2. Matriz de Modificación por Diapositiva

---

### Slide 5 — El ovocito y sus marcadores de madurez

**Sección:** Marco Teórico

#### Propuesta de Cambio Visual (Slidev)

- Añadir un callout box (estilo `.co.bl`) debajo de los 3 marcadores de madurez con el texto: **"Valor dual del huso meiótico en ICSI: evaluación de madurez + orientación de aguja"**
- Añadir una pequeña figura esquemática (o línea de texto) mostrando "6 en punto" vs. posición del huso: puede ser un símbolo de reloj con etiqueta o simplemente texto con `→`
- Layout recomendado: mantener el grid actual de 3 marcadores, añadir bloque de énfasis debajo con `border-unal-blue/60`

```md
<!-- Nuevo callout al final del slide, antes del cierre -->
<div class="rounded-lg border-l-4 border-unal-blue/60 bg-unal-blue/[0.07] px-3 py-1.5 text-[0.72rem] leading-[1.45] text-unal-gray mt-2">
  <strong>Valor clínico dual del huso meiótico:</strong> (1) confirma madurez nuclear (MII); (2) su localización orienta la aguja de inyección para evitar daño cromosómico durante ICSI.
</div>
```

#### Cambio en el Guion

**Texto anterior (aprox.):**
> "La PLM permite verificar directamente si el huso ya está formado, ofreciendo una evaluación más precisa del momento óptimo para ICSI."

**Texto propuesto:**
> "La PLM aporta algo que ningún otro marcador da: la localización precisa del huso meiótico. Eso tiene un valor clínico doble. Primero, confirma que el ovocito está en metafase II y listo para ser fecundado. Segundo, y esto es crítico en ICSI, la aguja de inyección debe entrar por el punto diametralmente opuesto al huso — convencionalmente, las seis en punto cuando el cuerpo polar queda arriba. Si la aguja lo perfora, provoca segregación cromosómica aberrante, y el embrión resultante es aneuploide y no viable. Detectar el huso no es solo evaluar madurez: es proteger la integridad genética del embrión desde el primer segundo."

**Duración estimada:** ~45–50 segundos

#### Justificación

Responde directamente a **Obs. 4** (brecha detección→solución clínica) y **Obs. 1** (identificación del ovocito). Establece el valor clínico del trabajo desde el Marco Teórico, antes de que el jurado lo pregunte en conclusiones.

---

### Slide 7 — PLM cuantitativa: modelo matemático

**Sección:** Marco Teórico

#### Propuesta de Cambio Visual (Slidev)

- Añadir una nota aclaratoria en la parte inferior del slide — puede ser un `<span class="text-[0.65rem] text-unal-gray/70">` — que diga: *"En este trabajo, la síntesis genera directamente el mapa de retardo Δ (no la cadena completa I₀–I₄)."*
- Si hay espacio, añadir inline después de la primera aparición de χ: `χ ≈ 10° (ángulo de swing del retardador del PolScope)`
- Layout: no cambiar estructura, solo añadir texto aclaratorio pequeño

#### Cambio en el Guion

**Texto anterior (aprox.):**
> "Las cinco ecuaciones describen cómo cada píxel reacciona en función del retardo óptico Δ y el azimut φ. Con ellas, el PolScope construye los mapas que usamos como entrada a los modelos."

**Texto propuesto:**
> "El parámetro χ que aparece en todas las ecuaciones es el ángulo de swing del retardador del PolScope — del orden de diez grados — y es una constante del sistema óptico, no algo que se ajuste por muestra. Quiero hacer una aclaración sobre el diseño de este trabajo: la síntesis no reproduce físicamente la cadena completa de intensidades I cero a I cuatro. Lo que construimos directamente es el mapa de retardo óptico Δ a partir de las propiedades morfológicas conocidas de cada estructura. Esto es computacionalmente más eficiente y suficiente para entrenar los modelos, porque lo que entra a la red neuronal es el mapa de retardo final, no las imágenes de intensidad intermedias."

**Duración estimada:** ~40–45 segundos

#### Justificación

Responde proactivamente a posibles preguntas técnicas sobre la implementación real de la síntesis. Las respuestas al jurado (aclaraciones de Obs. 5 sobre el flujo COCO→sintético→real) revelan que el jurado presta atención a los detalles de implementación.

---

### Slide 18 — Pregunta de investigación e hipótesis

**Sección:** Pregunta e Hipótesis

#### Propuesta de Cambio Visual (Slidev)

- El slide puede mantenerse visualmente igual (la pregunta y la hipótesis son correctas)
- Opción: añadir dos notas al pie pequeñas (texto 0.6rem, color gray/60) que aclaren los dos términos clave:
  - `*¹ En PLM, la detección del huso meiótico constituye directamente la evaluación del estado de maduración nuclear`
  - `*² "Video en vivo": latencia de inferencia (7,4 ms) compatible con frecuencia de adquisición del PolScope`
- Marcar `*¹` en "identificar distintos estados de maduración" y `*² ` en "video en vivo" con superíndices pequeños

#### Cambio en el Guion

**Texto anterior (aprox.):**
> "La pregunta de investigación es directa: ¿Cuál de las arquitecturas logra identificar distintos estados de maduración de ovocitos partiendo de imágenes de PLM en video en vivo?"

**Texto propuesto:**
> "La pregunta tiene dos términos que quiero precisar antes de continuar. Primero: 'identificar distintos estados de maduración'. En microscopía PLM, la detección del huso meiótico no es un prerrequisito para determinar el estado de madurez — es la determinación del estado de madurez. Huso presente en la imagen equivale a MII, maduro, apto para ICSI. Huso ausente equivale a GV o MI, no maduro. No hay una capa de inferencia adicional entre detección y diagnóstico. Segundo: 'video en vivo'. Esto no significa integración directa con el controlador del microscopio en tiempo real — eso es ingeniería de sistema y queda como trabajo futuro. Significa que el tiempo de inferencia de los modelos, siete punto cuatro milisegundos por imagen en YOLOv9m, es sustancialmente inferior al período de trama de la cámara PLM. La arquitectura es compatible con ese escenario desde el punto de vista computacional."

**Duración estimada:** ~55–60 segundos

#### Justificación

Responde directamente a **Obs. 2** (nexo detección-maduración) y **Obs. 3** (video en vivo vs. integración hardware). Son las dos preguntas más probables del jurado sobre el alcance y las limitaciones del trabajo.

---

### Slide 23 — Síntesis de imágenes PLM

**Sección:** Metodología — Fase 1

#### Propuesta de Cambio Visual (Slidev)

- Añadir un bullet point al paso 2 (Síntesis combinatoria) con la normalización:
  ```
  • Normalización: 0 nm (fondo) → 5,6 nm (máximo) escalado a imagen 8-bit [0, 255]
  ```
- Añadir bullet point al paso 3 (Aumentación) o crearlo si no existe:
  ```
  • Aumentación: rotación (0°–360°), flip h/v, corrimiento geométrico, variación brillo/contraste, ruido gaussiano
  ```

#### Cambio en el Guion

**Texto anterior (aprox.):**
> "El etiquetado es 100% automático por definición paramétrica. No hubo ninguna intervención manual."

**Texto propuesto — añadir antes de ese párrafo:**
> "Antes de pasar la imagen a la red, hay un paso de normalización que es importante entender: el retardo óptico varía entre cero nanómetros en el fondo y cinco punto seis nanómetros en el máximo modelado para el huso meiótico. Esa señal en nanómetros se escala linealmente a una imagen de ocho bits entre cero y doscientos cincuenta y cinco, compatible con los modelos estándar. Adicionalmente, durante el entrenamiento se aplica aumentación de datos: rotación de cero a trescientos sesenta grados, flip horizontal y vertical, corrimiento geométrico, variación de brillo y contraste, y ruido gaussiano. Esto es especialmente importante porque el huso puede aparecer en cualquier orientación en la imagen real."

**Duración estimada:** ~35–40 segundos adicionales

#### Justificación

Responde a una posible pregunta sobre compatibilidad del dominio sintético→redes pre-entrenadas en RGB. Sin este detalle, no queda claro cómo una imagen en nanómetros entra a un modelo ImageNet/COCO.

---

### Slide 26 — Selección de arquitecturas (GDXray+)

**Sección:** Metodología — Fase 2

#### Propuesta de Cambio Visual (Slidev)

- Si hay imagen del dataset GDXray+, añadir caption aclaratorio: *"GDXray+: rayos X industriales de fundiciones (defectos elipsoidales bajo contraste) — dominio análogo a estructuras PLM"*
- Considerar un layout de dos columnas pequeñas: izquierda = imagen GDXray (pieza fundición + defecto), derecha = imagen PLM (huso elipsoidal); conectadas con una flecha y la etiqueta "Analogía estructural"

#### Cambio en el Guion

**Texto anterior (aprox.):**
> "El dominio GDXray+ presenta defectos con morfología similar a la del huso meiótico bajo PLM."

**Texto propuesto:**
> "Para seleccionar cuáles de los trece modelos candidatos llevar hasta el entrenamiento completo en PLM, usamos GDXray+, un dataset público de rayos X industriales de piezas de fundición. Los defectos que aparecen en esas imágenes — helicoides y poros elipsoidales bajo contraste en fondos de gris uniforme — son morfológicamente análogos al huso meiótico en PLM: elipsoides de baja señal, poco destacados sobre el fondo. La prueba en seco fue simple: cualquier configuración que no alcanzara mAP50 mayor o igual a 0,989 en GDXray+ se descartaba. Las trece que superaron ese umbral son las que presentamos en resultados."

**Duración estimada:** ~35 segundos

#### Justificación

Sin esta aclaración, alguien puede interpretar que GDXray+ es un dataset biomédico o que la analogía es superficial. La explicación del criterio de umbral (≥ 0,989) también justifica el proceso de selección de arquitecturas frente a **Obs. 8**.

---

### Slide 27 — Protocolo de entrenamiento y evaluación

**Sección:** Metodología — Protocolo

#### Propuesta de Cambio Visual (Slidev)

Sin cambio mayor de layout. Añadir una línea en la tabla de hiperparámetros:

| Etapa | Aumentación |
|-------|-------------|
| Etapa 1 | Rot., flip h/v, corrimiento, brillo/contraste, ruido |
| Etapa 2 | Mismas transformaciones + mosaic |

*(si la tabla no existe, añadir un bullet point al diagrama de flujo)*

#### Cambio en el Guion

Si el guion ya menciona los hiperparámetros, añadir:

**Texto propuesto (insertar en bloque de hiperparámetros):**
> "El mismo protocolo de aumentación de datos se mantiene en ambas etapas: rotación, flip horizontal y vertical, corrimiento geométrico, variación de brillo y contraste, y ruido gaussiano. En la etapa de transferencia se añade mosaic augmentation, que combina cuatro imágenes en una sola muestra de entrenamiento y mejora la robustez ante variaciones de escala."

**Duración estimada:** ~20 segundos adicionales

#### Justificación

Completa el protocolo metodológico. Si el jurado pregunta sobre la generalización del modelo a nuevas imágenes reales, la respuesta pasa por la aumentación.

---

### Slide 31 — Resultados: base de datos sintética

**Sección:** Resultados — Fase 1

#### Propuesta de Cambio Visual (Slidev)

- **Reemplazar la imagen sintética mostrada** por una generada con retardo 2–3 nm para el huso meiótico (no el máximo de 5,6 nm). El máximo fue el valor modelado de Bruguès & Needleman; el rango realista de imágenes porcinas es 2–3 nm.
- Si se mantiene la imagen actual, añadir caption: *"Imagen de entrenamiento (retardo normalizado entre 0 y 5,6 nm; en imágenes reales el huso presenta ~2–3 nm)"*
- Alternativa: mostrar dos imágenes pequeñas: izquierda = sintética (alto contraste, 5,6 nm), derecha = real (bajo contraste, 2–3 nm), con flechas señalando el huso en cada una

#### Cambio en el Guion

**Texto propuesto — añadir al bloque de síntesis:**
> "Una aclaración sobre el contraste visual de las imágenes sintéticas: el valor máximo modelado para el huso es de cinco punto seis nanómetros, que corresponde al límite superior reportado en la literatura para espermátidas. En ovocitos reales, el retardo del huso meiótico tipicamente cae entre dos y tres nanómetros. Las imágenes sintéticas son visualmente más contrastadas que las reales — eso es parte del reto del cambio de dominio que veremos en resultados."

**Duración estimada:** ~25 segundos

#### Justificación

Evita que el jurado piense que el modelo fue entrenado con imágenes "fáciles" de alto contraste y luego evaluado en imágenes difíciles sin que eso esté reconocido. La transparencia sobre la diferencia de dominio refuerza la credibilidad del trabajo.

---

### Slide 33 — Impacto de la transferencia de aprendizaje (mancuerna global)

**Sección:** Resultados — Fase 2

#### Propuesta de Cambio Visual (Slidev)

- **CAMBIO MAYOR:** El slide actual presenta YOLOv9m como arquitectura de referencia. Debe actualizarse para presentar **YOLOv9m-CBAM como el modelo de referencia clínico**.
- Opción A (mínima): Añadir un callout box debajo de la mancuerna con el texto: *"Selección de arquitectura de referencia para aplicación clínica: ver análisis multidimensional en slides de atención y video"*
- Opción B (preferida): Añadir una columna adicional a la tabla de modelos seleccionados mostrando los criterios de selección:

| Criterio | YOLOv9m | RT-DETR-R101 | YOLOv9m-CBAM |
|----------|---------|--------------|--------------|
| mAP50 (TL) | 0,902 | 0,902 | 0,868 |
| mAP50-95 (TL) | **0,627** | 0,612 | — |
| Latencia (ms) | **7,4** | 14,8 | **7,4** |
| Generalización sin TL | 0,328 | — | **0,470** |
| Estabilidad en video | Inestable FP | — | **Sin FP** |
| **Selección clínica** | Métricas estáticas | ✗ Inviable | **✓ Aplicación real** |

- Si el layout no permite tabla, al menos añadir un párrafo de texto en callout:
  ```md
  <div class="rounded-lg border-l-4 border-unal-green/60 bg-unal-green/[0.08] px-3 py-1.5 text-[0.68rem] leading-[1.45] text-unal-gray mt-2">
    Para selección de modelo de referencia clínico se aplica criterio multidimensional: mAP50, latencia, generalización sin ajuste fino y comportamiento en video — no solo métrica estática global.
  </div>
  ```

#### Cambio en el Guion

**Texto anterior (aprox.):**
> "El rango de control va de 0,195 a 0,521. Después de la transferencia, el rango sube a 0,833–0,902. YOLOv9m es el modelo que mejor combina precisión y eficiencia computacional."

**Texto propuesto:**
> "El patrón es consistente en los trece modelos: todos mejoran. El rango de control va de 0,195 a 0,521. Después de la transferencia, el rango sube a 0,833 a 0,902. Quiero detenerme en la selección del modelo de referencia, porque merece un análisis cuidadoso. En métricas de imagen estática, YOLOv9m y RT-DETR-ResNet101 empatan en mAP50 con 0,902. Pero RT-DETR requiere 60,9 millones de parámetros frente a 20 de YOLOv9m, y una latencia de 14,8 milisegundos frente a 7,4 — el doble. Para integración con cámara PLM en entorno clínico con recursos computacionales limitados, RT-DETR es inviable. Ahora bien: la evaluación integral que presentaré en los próximos slides — generalización sin transferencia y comportamiento en video — establece que YOLOv9m-CBAM es el modelo de referencia para el escenario de aplicación clínica real. No YOLOv9m. Vamos a ver por qué."

**Duración estimada:** ~55 segundos

#### Justificación

Responde directamente a **Obs. 8** (la observación más importante del jurado). Presenta la corrección de modelo de referencia de forma activa, no como una limitación sino como una conclusión derivada de evidencia más completa. La transición "vamos a ver por qué" encadena hacia los slides 35 y 36.

---

### Slide 35 — Módulos de atención: ventaja en control, convergencia con TL

**Sección:** Resultados — Fase 3

#### Propuesta de Cambio Visual (Slidev)

- Añadir un callout de énfasis (borde verde) con el resultado de video más impactante: *"En video (Seq. 3, 660 fotogramas): YOLOv9m detecta cuerpo polar en 0/660 fotogramas — CBAM en 660/660 con confianza 0,94–0,96"*
- Si el gráfico de mancuerna de 6 configuraciones ya existe, añadir una segunda fila de etiquetas en los puntos de control mostrando el dato de video para CBAM vs. baseline
- Considerar dividir el slide en dos: 35a (mancuerna mAP50) + 35b (tabla de comportamiento en video resumen) — esto anticipa las preguntas más difíciles del jurado

#### Cambio en el Guion

**Texto anterior (aprox.):**
> "El hallazgo más claro emerge en el escenario de control: YOLOv9m-CBAM sube a 0,470 y YOLOv9m-Triple Attention a 0,499, frente al 0,328 del baseline estándar."

**Texto propuesto:**
> "El hallazgo más claro emerge en el escenario de control, donde los modelos son evaluados en imágenes reales sin haber visto ninguna imagen real durante el entrenamiento. Aquí los módulos de atención marcan una diferencia sustancial: YOLOv9m-CBAM sube a 0,470 frente al 0,328 del baseline — catorce punto dos puntos porcentuales. YOLOv9m-Triple Attention llega a 0,499. ¿Por qué? Los módulos de atención enseñan a la red dónde mirar — específicamente, en las regiones de bajo contraste y pequeño tamaño que caracterizan las imágenes PLM. La atención de canal suprime los canales con poca información; la atención espacial de CBAM refuerza las regiones espacialmente relevantes. Eso significa que cuando el modelo ve su primera imagen real, ya tiene un mecanismo para focalizarse en las estructuras correctas, aunque nunca las haya visto. Con transferencia de aprendizaje, esa ventaja se reduce — todos convergen entre 0,84 y 0,90 — pero en video es donde CBAM demuestra que esa diferencia es real y no un artefacto de las métricas estáticas."

**Duración estimada:** ~60–65 segundos

#### Justificación

Responde a la pregunta del Prof. Restrepo sobre el mecanismo causal. El jurado quiere entender **por qué** CBAM funciona mejor, no solo que funciona. La transición final hacia el video encadena con slide 36 y la evaluación cualitativa.

---

### Slide 36 — Mapas de activación (Grad-CAM)

**Sección:** Resultados — Fase 3

#### Propuesta de Cambio Visual (Slidev)

- Layout actual (comparación visual YOLOv9m vs. CBAM): mantener
- Añadir anotaciones en las imágenes señalando las regiones de activación con flechas y etiquetas: "Activación difusa" (YOLOv9m) vs. "Activación localizada en ZP y citolimit" (CBAM)
- Añadir un pie de figura que diga: *"Nivel P4 del backbone (stride 16) — los mapas de mayor nivel semántico muestran la diferencia más marcada entre modelos"*

#### Cambio en el Guion

**Texto anterior (aprox.):**
> "En YOLOv9m, la respuesta es difusa. En YOLOv9m-CBAM, las activaciones son notablemente más compactas y localizadas."

**Texto propuesto:**
> "Estos son mapas de activación Grad-CAM en el nivel P4 del backbone, donde las características tienen mayor contenido semántico. En YOLOv9m, observen que la activación está distribuida de forma difusa por toda la imagen — el modelo está activando regiones que no corresponden a ninguna estructura relevante. En YOLOv9m-CBAM, las activaciones están concentradas sobre la zona pelúcida y el límite citoplasmático. Eso no es casualidad: CBAM opera en dos pasos. Primero aplica atención de canal, que calcula la importancia global de cada mapa de características y suprime los canales de bajo valor informativo. Luego aplica atención espacial, que genera un mapa de relevancia posición a posición y enfatiza las regiones estructuralmente significativas. El resultado visible es que el modelo sabe dónde buscar antes de hacer la predicción final. Y eso es lo que se traduce, en video, en detección estable de estructuras difíciles como el cuerpo polar y el límite citoplasmático."

**Duración estimada:** ~55 segundos

#### Justificación

Cierra el argumento mecánico iniciado en slide 35. La conexión explícita entre mapas de activación y comportamiento en video es la respuesta más fuerte frente a **Obs. 8**.

---

### Slides 37–40 — Evaluación en video (Secuencias 1–3)

**Sección:** Resultados — Evaluación cualitativa

#### Propuesta de Cambio Visual (Slidev)

- Añadir tabla de métricas resumida para cada secuencia antes del video embebido. Formato sugerido:

**Slide 38 (Seq. 1 — OpenPolScope):**

| Estructura | YOLOv9m | YOLOv9m-CBAM |
|-----------|---------|--------------|
| Zona pelúcida | 100/100 frames | 100/100 frames |
| Citolimit | **4/100** | **100/100** |
| Huso meiótico | 74/100 | 74/100 |
| Cuerpo polar | ~5/100 | ~6/100 |

**Slide 39–40 (Seq. 3 — OptimFert):**

| Estructura | YOLOv9m | YOLOv9m-CBAM |
|-----------|---------|--------------|
| Citolimit | **0/660** | **660/660** (confianza 0,94–0,96) |
| ZP | 660/660 (inestable 0,48–0,95) | 660/660 (estable 0,95–0,97) |
| Huso | **1.710 en 660 frames (FP)** | **570 en 570 frames (sin FP)** |
| CP | 208/660 (con FP) | 510/660 (confianza 0,61–0,82) |

- Añadir nota al pie en Seq. 2: *"Seq. 2 (OOSIGHT): YOLOv9m genera 538 falsos positivos de huso (logotipo + aguja); CBAM genera 7"*

#### Cambio en el Guion (síntesis para slides de video)

**Texto propuesto para introducción a secuencias:**
> "Ahora vamos a ver tres secuencias de microscopía PLM real. Esta es la evaluación más honesta del sistema: no hay métricas estáticas, no hay conjuntos de prueba curados. Son videos grabados por otros grupos de investigación, con variabilidad real de posición, iluminación, artefactos y herramientas de laboratorio. Los videos requieren conexión a internet."

**Texto propuesto después de Seq. 3 (cierre de video):**
> "El dato más elocuente de la Secuencia 3 es el del huso meiótico. YOLOv9m genera 1.710 detecciones en 660 fotogramas — dos punto seis detecciones por fotograma — con falsos positivos confirmados sobre el logotipo del software y la herramienta de microinyección. YOLOv9m-CBAM genera exactamente una detección por fotograma en los 570 fotogramas donde el huso es visible, y ningún falso positivo. Para un sistema de asistencia clínica, un falso positivo de huso es tan peligroso como no detectarlo: ambos conducen a decisiones incorrectas sobre el estado de maduración del ovocito. Esta es la evidencia que consolida a YOLOv9m-CBAM como la arquitectura de referencia para aplicación clínica."

**Duración estimada:** ~60 segundos (cierre video)

#### Justificación

La Seq. 3 es la evidencia más poderosa de la **Obs. 8**. El guion debe nombrar explícitamente los falsos positivos y su implicación clínica para anticipar preguntas del jurado sobre la selección del modelo de referencia.

---

### Slide 44 — Hallazgos y aportes (Conclusiones)

**Sección:** Conclusiones

#### Propuesta de Cambio Visual (Slidev)

- **CAMBIO MAYOR:** Actualizar el hallazgo principal de "YOLOv9m optimal" a "YOLOv9m-CBAM como referencia clínica"
- Añadir sub-bullet a hallazgo de módulos de atención: *"YOLOv9m-CBAM: referencia para aplicación clínica (generalización +14 pp, cero FP en video vs. 1.710 FP de YOLOv9m)"*
- Añadir un callout de limitaciones reconocidas (borde amarillo/naranja suave, tamaño pequeño):
  ```md
  <div class="rounded-lg border-l-4 border-yellow-400/60 bg-yellow-400/[0.06] px-3 py-1.5 text-[0.65rem] leading-[1.45] text-unal-gray mt-2">
    Limitaciones reconocidas: (1) semilla única — diferencias &lt;1 pp son indicativas, no definitivas; (2) único anotador — validación interobservador pendiente; (3) sin brazo de control COCO→real para aislar aporte neto del preentrenamiento sintético.
  </div>
  ```
- Si hay espacio, añadir bullet de cierre clínico antes del callout de limitaciones

#### Cambio en el Guion

**Texto anterior (aprox.):**
> "YOLOv9m alcanza mAP50 0,902 con detección robusta del huso a 0,993 y la zona pelúcida a 0,995."

**Texto propuesto:**
> "El hallazgo de modelo de referencia para aplicación clínica es YOLOv9m-CBAM. No YOLOv9m. La evaluación multidimensional — que incluye generalización sin transferencia, estabilidad en video y análisis por clase — establece esa diferencia con claridad. Huso meiótico a 0,993 y zona pelúcida a 0,995 no son solo números en una tabla. Significan que un sistema basado en esta arquitectura podría, en tiempo real, confirmar si un ovocito está en metafase II y localizar el huso para orientar la aguja de inyección. Esa decisión hoy depende de un embriólogo entrenado con acceso al PolScope, observando manualmente, en una ventana temporal de apenas dos horas. Este trabajo demuestra que el componente de percepción de esa decisión puede automatizarse. Quiero ser transparente sobre las limitaciones: los experimentos se realizaron con una semilla fija, por lo que diferencias menores a un punto porcentual entre modelos son indicativas, no definitivas. El proceso de anotación fue realizado por un único investigador siguiendo protocolo clínico PLM, sin validación interobservador formal. Ambas son limitaciones metodológicas reales, identificadas como trabajo futuro prioritario."

**Duración estimada:** ~70–75 segundos

#### Justificación

Integra **Obs. 1, 4, 6, 7 y 8** en un solo bloque. El reconocimiento activo de las limitaciones — antes de que el jurado las señale — demuestra madurez científica y control total del trabajo. La conexión con el problema clínico cierra el argumento del valor del trabajo.

---

### Slide 45 — Trabajo futuro

**Sección:** Trabajo Futuro

#### Propuesta de Cambio Visual (Slidev)

- Reorganizar las 5 líneas futuras para que aparezcan en 2 grupos explícitos:
  - **Grupo A: Limitaciones metodológicas identificadas por el jurado** (3 items)
  - **Grupo B: Extensiones del sistema** (2 items)

```md
<!-- Propuesta de layout -->
<div class="grid grid-cols-2 gap-3">
  <div>
    <p class="text-unal-blue font-semibold text-sm mb-1">Limitaciones a resolver</p>
    <!-- items 1, 2, 3 -->
  </div>
  <div>
    <p class="text-unal-blue font-semibold text-sm mb-1">Extensiones del sistema</p>
    <!-- items 4, 5 -->
  </div>
</div>
```

- Los 5 items reorganizados:
  1. (Obs. 7) Validación interobservador — segundo anotador con protocolo formal de desacuerdo
  2. (Obs. 5) Experimento de ablación COCO→real vs. COCO→sintético→real para aislar aporte neto de la síntesis
  3. (Obs. 6) Múltiples semillas y corridas para validación estadística de diferencias entre modelos
  4. Integración clínica en flujo ICSI real (semi-automático → tiempo real con embriólogo)
  5. Base de datos real anotada con expertos (tamaño suficiente para entrenamiento puro)

#### Cambio en el Guion

**Texto anterior (aprox.):**
> "Hay cinco líneas de trabajo futuro identificadas..."

**Texto propuesto:**
> "El trabajo futuro tiene dos grupos. El primero resuelve limitaciones metodológicas directas de este trabajo. Quiero conectar tres de ellas con observaciones que surgirán en esta defensa. Primero: validación interobservador — necesitamos un segundo anotador, idealmente un embriólogo con experiencia en PLM, con un protocolo formal de resolución de desacuerdos, para cuantificar la variabilidad de anotación y separar la incertidumbre del modelo de la incertidumbre del conjunto de referencia. Segundo: experimento de ablación del preentrenamiento sintético — contrastar los flujos COCO→real directo versus COCO→sintético→real bajo condiciones comparables, para aislar cuánto aporta efectivamente el paso sintético más allá de la inicialización COCO. Tercero: múltiples corridas con semillas distintas para validar estadísticamente las diferencias entre modelos, especialmente las menores a un punto porcentual. El segundo grupo son extensiones del sistema: integración en flujo clínico real con embriólogos, y construcción de una base de datos real PLM anotada de tamaño suficiente para entrenamiento directo. Ese cierre es el objetivo de largo plazo de este trabajo."

**Duración estimada:** ~70 segundos

#### Justificación

Responde proactivamente a **Obs. 5, 6 y 7**. El jurado ha señalado estas limitaciones en sus observaciones escritas — reconocerlas como trabajo futuro concreto, no como debilidades, demuestra comprensión profunda y pensamiento crítico sobre el propio trabajo.

---

## 3. Slides Críticas Frente al Jurado

Las cuatro diapositivas más sensibles ante las preguntas del Dr. Germán Sánchez y sus observaciones escritas.

---

### Slide 33 — Impacto de la transferencia (mancuerna global)

**Sensibilidad:** ALTA — Obs. 8 (la más importante)

**Riesgo:** El jurado puede señalar que las métricas estáticas no justifican la selección de YOLOv9m sobre YOLOv9m-CBAM para aplicación clínica.

**Refuerzo visual recomendado:**
- Tabla de criterios multidimensionales (ver Sección 2, Slide 33)
- Flecha o anotación que señale explícitamente "→ análisis completo en slides de atención y video"

**Frase clave para el guion:**
> "La selección de YOLOv9m-CBAM como arquitectura de referencia no descansa en mAP50 global — descansa en tres criterios: generalización sin transferencia, latencia compatible con flujo clínico, y comportamiento en video sin falsos positivos."

---

### Slide 18 — Pregunta de investigación e hipótesis

**Sensibilidad:** ALTA — Obs. 2 y Obs. 3

**Riesgo:** El jurado puede presionar sobre el significado de "identificar estados de maduración" (¿hay una capa de inferencia?) y sobre "video en vivo" (¿se probó con cámara en tiempo real?).

**Refuerzo visual recomendado:**
- Superíndices con notas aclaratorias (ver Sección 2, Slide 18)
- Fondo diferenciado para los dos términos clave

**Frases clave para el guion:**
> "Huso presente = MII = maduro. No hay inferencia adicional."
> "7,4 ms de latencia < período de trama del PolScope. La integración hardware es trabajo futuro de ingeniería."

---

### Slide 44 — Hallazgos y aportes

**Sensibilidad:** ALTA — Obs. 1, 4, 6, 7, 8 convergiendo

**Riesgo:** Preguntas simultáneas sobre impacto clínico, robustez estadística, sesgos de anotación y selección del modelo de referencia.

**Refuerzo visual recomendado:**
- Callout de limitaciones reconocidas (borde amarillo suave)
- Bullet explícito de YOLOv9m-CBAM como modelo de referencia clínico
- Cierre explícito del valor clínico (confirmación MII + orientación aguja ICSI)

**Frase clave para el guion:**
> "Huso a 0,993 y ZP a 0,995 significan que el componente de percepción de la decisión de maduración puede automatizarse. Las limitaciones estadísticas son reales y están identificadas como trabajo futuro prioritario."

---

### Slide 35 — Módulos de atención: control vs. TL

**Sensibilidad:** MEDIA-ALTA — Obs. 8 (mecanismo causal)

**Riesgo:** El jurado puede preguntar por qué CBAM supera a YOLOv9m-Triple Attention en video si Triple Attention tiene mayor mAP en control.

**Refuerzo visual recomendado:**
- Callout con dato de video más impactante: "CBAM: 660/660 fotogramas en citolimit — YOLOv9m: 0/660"
- Mapa de activación lado a lado si cabe en layout

**Frase clave para el guion:**
> "CBAM opera secuencialmente — atención de canal, luego espacial. Esa secuencialidad produce activaciones más localizadas y estables en video que la arquitectura más compleja de Triple Attention, que distribuye la atención en múltiples escalas sin la señal de foco espacial concentrado."

---

## 4. Balance de Tiempo

| Sección | Slides | Tiempo estimado actual | Tiempo estimado con cambios |
|---------|--------|------------------------|------------------------------|
| Portada + Agenda | 2 | ~2 min | ~2 min |
| Justificación | 2 | ~3 min | ~3 min |
| Marco Teórico | 5 | ~7 min | ~8,5 min (+1,5 por A2+A3 en S7) |
| Estado del Arte | 7 | ~8 min | ~8,5 min (+0,5 por A6 en S26) |
| Pregunta + Hipótesis | 2 | ~2 min | ~3 min (+1 por aclaraciones S18) |
| Objetivos | 2 | ~2 min | ~2 min |
| Metodología | ~12 | ~10 min | ~11 min (+A4+A5 en S23+S27) |
| Resultados | ~9 | ~9 min | ~10 min (+corrección S33, mecanismo S35) |
| Conclusiones | 3 | ~3 min | ~4 min (+cierre clínico + limitaciones) |
| Trabajo futuro | 1 | ~1,5 min | ~2,5 min (+3 items de obs. jurado) |
| **Total** | **~45** | **~47,5 min** | **~54,5 min** |

> **Advertencia:** Los cambios propuestos añaden ~7 minutos al tiempo total. Para mantener la presentación en 45 minutos, se recomienda:
> - Reducir el guion de Estado del Arte (secciones I–VII) en ~2 minutos — son las menos sensibles ante el jurado
> - Reducir Metodología — Síntesis (S23) a solo el punto de normalización sin expandir la aumentación en detalle
> - Los slides de video (S38–40) pueden reducirse si el video mismo ocupa el tiempo de narración

---

## 5. Checklist de Implementación

### Crítico — antes de la defensa

- [x] **S5:** Extender bullet de huso meiótico con "Valor clínico dual:" en negrita azul (madurez + orientación aguja ICSI) ✓
- [x] **S7:** Añadir aclaración síntesis directa de Δ + definición de χ ≈ 10° ✓
- [ ] **S18:** Añadir superíndices aclaratorios sobre "estados de maduración" y "video en vivo"
- [x] **S23:** Añadir bullet de normalización 0–5,6 nm → 8-bit ✓ (también añadido al guion)
- [x] **S26:** Añadir caption/aclaración sobre dominio industrial de GDXray+ ✓
- [x] **S27:** Añadir descripción de aumentación de datos ✓ (datos exactos de tesis cap. 5; verificar overflow visual)
- [ ] **S31:** Reemplazar/anotar imagen sintética con retardo 2–3 nm
- [ ] **S33:** Actualizar criterios de selección → YOLOv9m-CBAM como referencia clínica
- [ ] **S44:** Actualizar hallazgo principal + callout de limitaciones + cierre clínico

### Importante — refuerza la defensa

- [x] **S35:** Añadir callout verde col-span-2 con dato de video: CBAM 660/660 citolimit vs. YOLOv9m 0/660 ✓
- [ ] **S36:** Añadir anotaciones en mapas de activación señalando regiones difusas vs. localizadas
- [ ] **S45:** Reorganizar trabajo futuro en dos grupos (limitaciones metodológicas + extensiones)
- [x] **Guion S18:** Añadir aclaraciones sobre "estados de maduración" y "video en vivo" ✓
- [x] **Guion S33:** Reescribir bloque de selección de modelo de referencia → CBAM como referencia clínica ✓
- [x] **Guion S35:** Añadir mecanismo causal CBAM (canal → espacial → video) ✓
- [x] **Guion S36:** Ampliar conexión entre mapas de activación y comportamiento en video ✓
- [x] **Guion S44:** Añadir párrafo de cierre clínico y calificadores estadísticos ✓
- [x] **Guion S45:** Reescribir con dos grupos; conectar con Obs. 5, 6 y 7 ✓

### Deseable — si el tiempo lo permite

- [ ] Agregar curvas P-R o de convergencia para YOLOv9m vs. CBAM (slide adicional o en S35)
- [ ] Tabla comparativa completa (ver S33) con todas las alternativas evaluadas
- [ ] Mencionar artículo en preparación en S44 o como cierre del bloque de aportes
- [ ] Moderar lenguaje superlativo en guion (usar "consistente" en lugar de "extraordinario")

---

## 6. Secuencia de Implementación (menor → mayor trabajo)

### Mapa de archivos afectados

| Slide(s) | Archivo Slidev |
|----------|---------------|
| 5, 7 | `pages/02_marco_teorico.md` |
| 18 | `pages/04_pregunta_hipotesis.md` |
| 23, 26, 27 | `pages/06_metodologia.md` |
| 31, 33, 35, 36, 37–40 | `pages/07_resultados.md` |
| 44 | `pages/08_conclusiones.md` |
| 45 | `pages/09_trabajo_futuro.md` |

### Nivel 1 — Solo guion ✓ COMPLETADO

Cambios en notas de orador (`<!-- -->`). Sin tocar HTML visual.

| Item | Slide | Archivo | Estado |
|------|-------|---------|--------|
| G1 | 18 | `04_pregunta_hipotesis.md` | ✓ Implementado |
| G2 | 33 | `07_resultados.md` | ✓ Implementado |
| G3 | 35 | `07_resultados.md` | ✓ Implementado |
| G4 | 36 | `07_resultados.md` | ✓ Implementado |
| G5 | 44 | `08_conclusiones.md` | ✓ Implementado |
| G6 | 45 | `09_trabajo_futuro.md` | ✓ Implementado |

### Nivel 2 — Texto inline pequeño (span / bullet / caption) ✓ COMPLETADO (T1–T4)

| Item | Slide | Archivo | Estado |
|------|-------|---------|--------|
| T1 | 7 | `02_marco_teorico.md` | ✓ Implementado — nota de pie con χ ≈ 10° y aclaración síntesis directa de Δ. ⚠ Nota pendiente: evaluar diagrama de polariscopio donde χ y τ encajen mejor en contexto óptico completo. |
| T2 | 23 | `06_metodologia.md` | ✓ Implementado — bullet de normalización 0 nm → 5,6 nm → 8-bit [0,255] añadido al visual y al guion (speaker notes). |
| T3 | 26 | `06_metodologia.md` | ✓ Implementado — figcaption actualizado a "rayos X industriales de fundición metálica" sin repetir el callout existente. |
| T4 | 27 | `06_metodologia.md` | ✓ Implementado — bullet de aumentación con los 9 tipos exactos de la tesis (5 YOLO + 4 Albumentations); rotación y flip-V explícitamente marcados como deshabilitados. ⚠ Verificar overflow con `npm run dev`. |
| T5 | 31 | `07_resultados.md` | ⏸ Postergado — el usuario prefiere no tocar este slide. Figcaption queda como "Sintético — generado en MATLAB". El punto sobre retardo real (2–3 nm vs. 5,6 nm) queda cubierto en el guion si hace falta. |

### Nivel 3 — Bloque callout HTML ✓ COMPLETADO (C1–C2)

| Item | Slide | Archivo | Estado |
|------|-------|---------|--------|
| C1 | 5 | `02_marco_teorico.md` | ✓ Implementado — bullet de huso meiótico extendido con "Valor clínico dual:" en `font-semibold text-unal-blue`. |
| C2 | 35 | `07_resultados.md` | ✓ Implementado — callout `col-span-2 border-unal-green` con dato CBAM 660/660 citolimit vs. YOLOv9m 0/660. |
| C3 | 44 | `08_conclusiones.md` | ⏸ Postergado — el usuario prefiere no mostrar limitaciones en pantalla. Quedan cubiertas en el guion (G5). |

### Nivel 4 — Cambio de layout / reorganización ✓ COMPLETADO (L1–L3)

| Item | Slide | Archivo | Estado |
|------|-------|---------|--------|
| L1 | 45 | `09_trabajo_futuro.md` | ✓ Implementado — slide nuevo añadido después del existente; dos columnas: "Limitaciones a resolver" (verde, Obs. 5/6/7) y "Extensiones del sistema" (azul). |
| L2 | 36–38 | `07_resultados.md` | ✓ Implementado — mini grid-tables en callout azul (3 cols: Clase / YOLOv9m / CBAM); tablas completas ocultas con `v-if="false"`; `pb-20` en slide-deck-shell para evitar overlap con logos. |
| L3 | 34 | `07_resultados.md` | ✓ Implementado — `v-click :at="1"` con bordes de color sobre figuras Grad-CAM; figcaptions movidos dentro de `<figure>`; coordenadas estimadas (top 24%, height 26%). |

### Nivel 5 — Cambio de narrativa central

| Item | Slide | Archivo | Estado |
|------|-------|---------|--------|
| N1 | 33 | `07_resultados.md` | ✓ Implementado — callout azul: "métricas estáticas"; callout verde: "Referencia clínica: YOLOv9m-CBAM" con criterio multidimensional |
| N2 | 44 | `08_conclusiones.md` | ✓ Implementado — slide Conclusiones y Hallazgos/Aportes actualizados: YOLOv9m-CBAM como referencia clínica |

### Nivel 6 — Asset externo (MATLAB)

| Item | Slide | Estado |
|------|-------|--------|
| A1 | 31 | Pendiente (requiere pipeline MATLAB) |
