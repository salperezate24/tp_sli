# Plan de Mejora para la Defensa de Tesis

**Documento generado:** 2026-05-04  
**Fuentes cruzadas:**
- `RESPUESTAS_JURADO_FINAL.md` — respuestas consolidadas al Dr. Germán Sánchez (26-02-2026)
- `ENSAYO-PRESENTACION+FEEDBACK.txt` — transcripción del ensayo con retroalimentación del Prof. Restrepo, Juan José y Laura
- Estado actual de la presentación en `pages/` y guion comentado en `<!-- -->`

---

## PARTE 1 — Plan de Mejora Visual y Estructural

Las siguientes acciones afectan la estructura o el contenido visual de las diapositivas. Se presentan en orden de prioridad.

---

### A. CRÍTICAS (deben resolverse antes de la defensa)

#### A1. Añadir la justificación clínica de localización del huso para ICSI
**Fuente:** Feedback Prof. Restrepo y Juan José (ensayo) + Obs. 1 y 4 del jurado  
**Slide afectado:** `01_justificacion.md` (diapositiva 3 o 4) o `02_marco_teorico.md` (marcadores de madurez)  
**Acción:** Incorporar visualmente (caja de texto tipo `.co.bl`) el doble valor clínico del huso meiótico:
1. Su presencia indica madurez MII (apto para ICSI).
2. Su localización espacial protege el huso al orientar la aguja de inyección — si la aguja perfora donde está el huso, produce segregación cromosómica aberrante y embriones aneuploides no viables.

> El Prof. dijo explícitamente: *"hay que decir que el embrión es el que define la ubicación de la madurez… cuando él inyecta, la aguja puede dañar el huso… La observación del huso no es solamente para decir la madurez, sino para perforar el óvulo por donde NO está el huso."*

#### A2. Aclarar que el trabajo parte de imágenes de retardo óptico, no de intensidades físicamente modeladas
**Fuente:** Prof. Restrepo y Juan José (ensayo) — confusión en la sección de modelo matemático PLM  
**Slide afectado:** `02_marco_teorico.md` — slide "PLM cuantitativa: modelo matemático"  
**Acción:** Añadir una nota explícita (caja verde o bullet) que diga: *"En este trabajo se utilizan directamente las imágenes de retardo óptico Δ — producto de la cadena I₀–I₄ → A,B → Δ. No se modela físicamente la cadena de intensidades."*  
**Por qué:** El Prof. identificó que el modelo sintético genera directamente mapas de retardo, no las cinco imágenes de intensidad. Esa diferencia no se declara en la presentación, generando confusión sobre qué se simula.

#### A3. Definir el parámetro χ (swing) en la diapositiva de ecuaciones PLM
**Fuente:** Juan José (ensayo) + Prof. Restrepo  
**Slide afectado:** `02_marco_teorico.md` — "PLM cuantitativa: modelo matemático"  
**Acción:** Añadir en el pie de las ecuaciones o en un callout:  
*"χ (swing): ángulo característico del retardador del PolScope, de orden ~10°. Garantiza la validez lineal de las ecuaciones."*  
Este parámetro aparece en todas las ecuaciones de intensidad y Juan José preguntó explícitamente por él.

#### A4. Añadir normalización de la señal de retardo en metodología
**Fuente:** Prof. Restrepo (ensayo)  
**Slide afectado:** `06_metodologia.md` — slide de generación de base de datos sintética  
**Acción:** Añadir un bullet que explique que las imágenes de retardo sintéticas iniciales son muy oscuras (valores absolutos en nm, fracciones pequeñas de la longitud de onda). Se normaliza entre el mínimo (0 nm, fondo) y el máximo (5.6 nm, pico del huso más ZP combinados) para producir una imagen 8-bit compatible con las entradas de los modelos.

#### A5. Añadir explicación de aumentación de datos
**Fuente:** Prof. Restrepo (ensayo): *"la aumentación de datos requiere corrimiento de geometría, rotación, cambio de contraste, ruido, inversión"*  
**Slide afectado:** `06_metodologia.md` — slide de protocolo de entrenamiento (diap. ~25)  
**Acción:** Añadir un bullet o caja que liste las transformaciones de aumentación aplicadas: rotación, flip horizontal/vertical, corrimiento geométrico, cambio de escala de brillo/contraste, adición de ruido. Esto es esperado por cualquier evaluador con perfil de ciencia de datos.

#### A6. Clarificar que el conjunto de Domingo Mery son imágenes de rayos X industriales de fundiciones
**Fuente:** Prof. Restrepo (ensayo): *"hay que decir que era de rayos X industriales, de defectos en piezas metálicas, para que no se confunda con algo biológico"*  
**Slide afectado:** `06_metodologia.md` — slide de evaluación comparativa de arquitecturas  
**Acción:** En el texto o pie de figura, añadir explícitamente: *"Dominio análogo: imágenes de rayos X de piezas fundidas (fundición en arena) con defectos helicoïdales superpuestos de bajo contraste — Mery et al. [X]"*

#### A7. Reemplazar imagen sintética del huso por una con retardo 2–3 nm (no 5.6 nm)
**Fuente:** Prof. Restrepo (ensayo): *"busque uno que sea más parecido en intensidad al real… coja uno de dos o de tres que da un gris más claro. Si pone el de máximo contraste van a decir: claro, cómo no va a aprender si le pone algo mucho más contrastado que lo real."*  
**Slide afectado:** `07_resultados.md` — "Resultados: base de datos sintética"  
**Acción:** Reemplazar la imagen sintética mostrada (`oocyte_synth.png`) por una donde el huso tenga retardo máximo de 2–3 nm (gris tenue), más parecida en intensidad a las imágenes PLM reales que aparecen al lado.

---

### B. IMPORTANTES (mejoran sustancialmente la presentación)

#### B1. Añadir curvas de precisión–recall y de convergencia del entrenamiento
**Fuente:** Prof. Restrepo (ensayo): *"nos van a pedir eso. Toca hacer un gráfico de precisión-recall y una curva de convergencia para la mejor red y la desarrollada."*  
**Slide afectado:** Añadir una diapositiva nueva en `07_resultados.md`, antes de los videos, con:
- Curva P-R por clase: YOLOv9m vs. YOLOv9m-CBAM (tras TL)
- Curva de convergencia (loss o mAP vs. época) para las mismas dos redes

**Nota:** Esto puede superar el límite de 40 slides. Considerar si se puede condensar con otro slide existente, o presentarlo como "respaldo disponible" ante pregunta del jurado.

#### B2. Aclarar el número Δ (delta) en los gráficos de mancuerna
**Fuente:** Prof. Restrepo (ensayo): *"en ningún lado uno se entiende que la diferencia no dice más. Yo colocaría más bien en vez de la diferencia, el valor obtenido para no tenerlo que leer en la tabla cualitativa."*  
**Slide afectado:** `07_resultados.md` — slides de mancuerna 1 y 2  
**Acción:** En el componente `DumbbellPlot`, mostrar el valor final (punto azul) como anotación directa, con la diferencia Δ en paréntesis o nota inferior. Alternativa: solo agregar en el guion una frase que explique explícitamente que el número azul es la diferencia, no el valor absoluto.

#### B3. Mencionar el artículo en borrador/construcción
**Fuente:** Prof. Restrepo y Laura (ensayo)  
**Slide afectado:** `09_trabajo_futuro.md` o `08_conclusiones.md`  
**Acción:** Añadir una mención breve — una caja o bullet — que diga: *"Artículo en preparación: extensión de los resultados de detección (incluye módulos de atención) para envío a congreso/revista"*. Esto responde a la pregunta del jurado sobre si hay publicaciones asociadas.

#### B4. Añadir al Trabajo Futuro los experimentos que responden las limitaciones del jurado
**Fuente:** Obs. 5, 6 y 7 del jurado  
**Slide afectado:** `09_trabajo_futuro.md`  
**Acción:** Añadir ítems 06 y 07 (o reemplazar el ítem 05 si no caben):
- **Ablación COCO→real:** comparación controlada de la ruta COCO→sintético→real vs. COCO→real directo para cuantificar el aporte neto del preentrenamiento sintético (Obs. 5)
- **Validación interobservador:** conjunto real anotado por ≥2 expertos con protocolo de desacuerdo formalizado (Obs. 7)
- *(el ítem de múltiples semillas puede integrarse en la descripción del estudio comparativo)*

---

### C. DESEABLES (si el tiempo lo permite)

#### C1. Añadir una nota sobre el proyecto marco de PLM en el laboratorio
**Fuente:** Prof. Restrepo (ensayo): *"este proyecto arrancó asociado a [un proyecto de construcción de la base de datos real]… hay que poner el contexto de que el grupo intentó construir el montaje experimental PLM y por qué no lo lograron."*  
**Slide afectado:** Estado del arte o metodología  
**Acción:** En el slide de estado del arte o en la slide de base de datos real, añadir una nota que contextualice que el grupo GPIMA intentó construir un montaje PLM propio y que las limitaciones de esa etapa (acceso a ovocitos, tiempo de cultivo, equipamiento) llevaron al enfoque sintético.

#### C2. Moderar el lenguaje superlativo en el guion
**Fuente:** Laura (ensayo): *"resultados extraordinarios/magníficos… no sé qué tan saludable sea para una maestría. Te pueden dar palo ahí."*  
**Acción:** Revisar el guion oral completo y eliminar adjetivos como "extraordinario", "magnífico", "impresionante", "espectacular". Sustituir por lenguaje técnico preciso: "consistente", "significativo", "robusto", "notable".

---

## PARTE 2 — Actualización del Guion

A continuación se presentan, slide por slide, los cambios propuestos al guion oral (texto entre `<!-- -->`). Se indica la fuente de cada cambio.

---

### Slide: "El ovocito y sus marcadores de madurez" (Marco Teórico — slide 5)

**Fuente:** Observaciones 1 y 4 del jurado + feedback Prof. Restrepo (ICSI needle-spindle) + Juan José (importancia para técnicas de mejora genética)

**Guion Actual:**
```
Solo el 5–10 % de los ovocitos recuperados poseen potencial de desarrollo completo — se trabaja con márgenes muy estrechos. Tres estructuras permiten evaluar esa madurez de forma directa: el huso meiótico, la zona pelúcida y el cuerpo polar, todas visibles en la figura de la izquierda.

El huso meiótico es la estructura central de este trabajo: segrega cromosomas en metafase II y su presencia confirma la madurez nuclear del ovocito. Hay un hecho clínico crítico: el cuerpo polar —el indicador más usado en clínica— aparece antes de que el huso esté completamente ensamblado. La microscopía polarizada permite verificar directamente si el huso ya está formado, ofreciendo una evaluación más precisa del momento óptimo para ICSI.
```

**Guion Propuesto:**
```
Solo el 5–10 % de los ovocitos recuperados poseen potencial de desarrollo completo — se trabaja con márgenes muy estrechos. Tres estructuras permiten evaluar esa madurez de forma directa: el huso meiótico, la zona pelúcida y el cuerpo polar, todas visibles en la figura de la izquierda.

El huso meiótico es la estructura central de este trabajo: segrega cromosomas en metafase II y su presencia confirma la madurez nuclear del ovocito. Hay un hecho clínico crítico: el cuerpo polar —el indicador más usado en clínica— aparece antes de que el huso esté completamente ensamblado. La PLM permite verificar directamente si el huso ya está formado.

Pero detectar el huso no solo indica madurez. Tiene un segundo valor clínico igualmente importante: localizar su posición espacial dentro del ovocito. En ICSI, la aguja de inyección debe entrar por el punto diametralmente opuesto al huso —convencionalmente las 6 en punto si el huso está en las 12—, porque si la aguja lo perfora, provoca segregación cromosómica aberrante y el embrión resultante es aneuploide y no viable. La detección automática del huso que este trabajo desarrolla habilita esa orientación de forma objetiva y consistente.
```

**Justificación del cambio:** El jurado preguntó (Obs. 1) cómo la detección de estructuras conecta con la identificación del ovocito. Parte de la respuesta —omitida en la presentación original— es que la localización del huso tiene valor clínico directo, no solo indicativo. El Prof. señaló explícitamente esta omisión durante el ensayo.

---

### Slide: "PLM cuantitativa: modelo matemático" (Marco Teórico — slide 7)

**Fuente:** Juan José y Prof. Restrepo (ensayo) — confusión sobre qué modela el sistema sintético y qué es el parámetro χ

**Guion Actual:**
```
Veamos ahora el modelo matemático que hace posible esa medición. Las cinco ecuaciones de intensidad, que aparecen a la izquierda, describen físicamente cómo cada píxel de la imagen reacciona en función del retardo óptico Δ y el azimut φ de la estructura birrefringente que contiene.

Para simplificar el cálculo se definen dos términos auxiliares, A y B, que separan algebraicamente la información de orientación y de amplitud de la birrefringencia. Con A y B en mano, las ecuaciones de retardo y azimut que aparecen a la derecha permiten estimar Δ y φ para cada píxel de forma directa.

Este modelo matemático es el sustento de la síntesis realista: conociendo las propiedades físicas del huso meiótico — su forma, su retardo óptico, su orientación — podemos simular con precisión las cinco imágenes de intensidad que produciría el PolScope para un ovocito dado. Eso es lo que hace posible la base de datos sintética.
```

**Guion Propuesto:**
```
Veamos el modelo matemático que hace posible esa medición. Las cinco ecuaciones de intensidad de la izquierda describen cómo cada píxel de la imagen reacciona en función del retardo óptico Δ — que cuantifica la birrefringencia — y el azimut φ, que indica la orientación molecular.

El parámetro χ que aparece en todas las ecuaciones es el ángulo de swing del retardador del PolScope — del orden de 10 grados — y es una constante del sistema que garantiza la linealidad de las aproximaciones matemáticas.

Con esas intensidades se construyen los términos A y B, que separan algebraicamente la amplitud y la orientación de la birrefringencia, y de ellos se recuperan Δ y φ por píxel.

Es importante aclarar un punto de diseño de este trabajo: la síntesis no reproduce físicamente la cadena completa de intensidades I₀ a I₄. Lo que hacemos es construir directamente el mapa de retardo óptico Δ a partir de las propiedades físicas de cada estructura — su forma, su retardo máximo, su orientación. Ese mapa de retardo es la imagen que entra a los modelos de detección. Al normalizar entre cero y el valor máximo, obtenemos una imagen de 8 bits visualmente coherente con las imágenes PLM reales que provienen de la cadena experimental completa.
```

**Justificación del cambio:** Juan José preguntó explícitamente qué es el swing (χ) y el Prof. identificó la ambigüedad central: la presentación dice "simular las cinco imágenes de intensidad" pero en realidad el modelo genera mapas de retardo directamente. Esta confusión puede ser preguntada por el jurado. Aclararlo en el guion evita la pregunta o permite responderla proactivamente.

---

### Slide: "Pregunta de investigación e hipótesis" (slide 15)

**Fuente:** Observaciones 2 y 3 del jurado (desconexión detección-maduración; "video en vivo" no demostrado)

**Guion Actual:**
```
Con este panorama claro llegamos a la pregunta central: dado que ningún sistema existente detecta y localiza simultáneamente estructuras birrefringentes en imágenes PLM de ovocitos, ¿cuál configuración de red neuronal — variando arquitectura, formato de entrada y mecanismos de atención — logra identificar esas estructuras en un video en vivo de microscopía polarizada?

La hipótesis propone que sí es posible. Al modificar parámetros clave de la red — el formato de imagen de entrada, la función de pérdida, las técnicas de predicción de cajas y los módulos de atención — puede desarrollarse un detector capaz de localizar y clasificar el ovocito, el huso meiótico y sus características birrefringentes, permitiendo caracterizar el estado de madurez sin manipular la muestra.
```

**Guion Propuesto:**
```
Con este panorama claro llegamos a la pregunta central: dado que ningún sistema existente detecta y localiza simultáneamente estructuras birrefringentes en imágenes PLM de ovocitos, ¿cuál configuración de red neuronal — variando arquitectura, formato de entrada y mecanismos de atención — logra identificar esas estructuras en un video en vivo de microscopía polarizada?

Quiero aclarar dos términos que aparecen en la pregunta. Primero: "identificar distintos estados de maduración". En PLM, detectar el huso meiótico no es un prerrequisito para inferir el estado de maduración — es directamente la evaluación de ese estado. Huso presente significa que el ovocito está en metafase II, maduro y apto para ICSI. Huso ausente significa que todavía está en GV o MI. No hay una capa adicional de inferencia: la detección y la determinación de madurez son la misma operación.

Segundo: "video en vivo". Esta expresión hace referencia a la capacidad de procesar la señal PLM fotograma a fotograma con una latencia compatible con la frecuencia de adquisición del microscopio. Los resultados demuestran que YOLOv9m hace inferencia en 7,4 milisegundos por imagen — muy por debajo del período de trama de la cámara PLM. Eso garantiza que la velocidad del modelo no es el factor limitante para operar en tiempo real. La integración hardware directa con el microscopio es el paso de ingeniería de sistema que queda identificado como trabajo futuro.

La hipótesis propone que sí es posible: modificando parámetros clave de la red, puede desarrollarse un detector capaz de localizar y clasificar el huso meiótico, la zona pelúcida y sus características birrefringentes, permitiendo caracterizar el estado de madurez sin manipular la muestra.
```

**Justificación del cambio:** Las observaciones 2 y 3 del jurado apuntan directamente a estos dos conceptos. El jurado puede repetir exactamente esas preguntas durante la ronda de preguntas. Anticiparlas en el guion — con un tono natural de "quiero aclarar" — transmite rigor sin sonar defensivo. El guion actual ignora completamente ambos puntos.

---

### Slide: "Impacto de la transferencia de aprendizaje" — mancuerna global (Resultados, slide ~28)

**Fuente:** Observación 8 del jurado (selección de YOLOv9m) + feedback Prof. Restrepo (P-R no mostrado, delta confuso)

**Guion Actual:**
```
Con la transferencia de aprendizaje, el rendimiento cambia completamente. Este gráfico muestra los 13 modelos evaluados. El punto gris es el mAP50 en el experimento de control — solo con preentrenamiento sintético, sin datos reales. El punto azul es el mAP50 después de la transferencia de aprendizaje. La línea que los conecta es la mancuerna: su longitud muestra el salto.

El patrón es consistente en los 13 modelos: todos mejoran. El rango de control va de 0,195 a 0,521. Después de la transferencia, el rango sube a 0,833–0,902. Los dos mejores — YOLOv9m y RT-DETR-R101 — empatan en mAP50 de 0,902. La diferencia está en mAP50-95 y velocidad: YOLOv9m obtiene 0,627 en mAP50-95 en 7,4 milisegundos, frente a 0,612 y 14,8 milisegundos de RT-DETR. YOLOv12s tiene el salto más grande — Δ+0,660 — porque partía del control más bajo.

YOLOv9m queda como el modelo de referencia para el análisis que sigue.
```

**Guion Propuesto:**
```
Con la transferencia de aprendizaje, el rendimiento cambia de forma consistente en los 13 modelos. En este gráfico, el punto gris es el mAP50 en el experimento de control —sin datos reales de ajuste— y el punto azul es el mAP50 después de la transferencia. La longitud de la línea es el salto: todos los modelos mejoran, sin excepción. El rango de control va de 0,195 a 0,521; después de la transferencia, el rango sube a 0,833–0,902.

Los dos mejores son YOLOv9m y RT-DETR-R101, ambos con mAP50 de 0,902. El empate en esta métrica hace necesario un criterio de desempate. La selección de YOLOv9m como modelo de referencia se basa en tres criterios simultáneos:

Primero, mAP50-95: YOLOv9m obtiene 0,627 frente a 0,612 de RT-DETR — ventaja modesta pero consistente.

Segundo, latencia: YOLOv9m hace inferencia en 7,4 milisegundos. RT-DETR necesita 14,8 milisegundos — exactamente el doble. Para una cámara PLM con frecuencia de adquisición de múltiples fotogramas por segundo, esa diferencia es relevante tanto operacionalmente como para eventual integración en hardware de laboratorio con recursos limitados.

Tercero, estabilidad en video: sobre secuencias temporales reales, YOLOv9m mostró mayor consistencia de detección fotograma a fotograma que YOLOv11s —que tiene un mAP50-95 ligeramente superior (0,642) pero es un modelo de menor capacidad diseñado para dispositivos compactos.

Ninguno de los otros modelos cumple los tres criterios a la vez. Por eso, y no solo por mAP50, YOLOv9m queda como el modelo de referencia para el análisis que sigue.
```

**Justificación del cambio:** La observación 8 del jurado pregunta exactamente esto: ¿por qué YOLOv9m si RT-DETR empata y YOLOv11s supera en mAP50-95? El guion actual menciona latencia y mAP50-95 pero en dos frases sin estructura argumentativa. El guion propuesto desglosa los tres criterios de forma secuencial y explícita, anticipando la pregunta del jurado.

---

### Slide: "Módulos de atención — ventaja en control, convergencia con TL" (Resultados — slide ~30)

**Fuente:** Prof. Restrepo (ensayo): *"creo que vas muy rápido… entre versiones dices sí hubo mejoras pero esas mejoras cómo impactan. Esto merece expandirse para evaluadores que no tengan conocimiento en esto."*

**Guion Actual:**
```
Con el modelo base establecido, evaluamos si los módulos de atención podían mejorar el rendimiento. Desarrollamos cuatro variantes: CBAM y Triple Attention sobre YOLOv9m, y Conservative Attention y Transformer Enhanced sobre YOLO11m.

El hallazgo más claro emerge en el escenario de control — sin datos reales de ajuste. YOLOv9m-Triple Attention alcanza mAP50 de 0,499 y YOLOv9m-CBAM de 0,470, frente al 0,328 del baseline estándar. Los módulos de atención mejoran significativamente la capacidad de transferir desde el dominio sintético al real.

Con la transferencia de aprendizaje la ventaja se reduce. Triple Attention es el mejor modelo desarrollado con 0,878 — solo 2,7 puntos por debajo del baseline. Pero CBAM muestra una ventaja específica que persiste: citolimit de 0,986 frente a 0,979 del baseline. ¿Qué explica esa diferencia? Los mapas de activación de la siguiente diapositiva lo muestran directamente.
```

**Guion Propuesto:**
```
Con el modelo base establecido, la pregunta es: ¿pueden los módulos de atención mejorar la detección de estructuras de bajo contraste? Desarrollamos cuatro variantes: CBAM y Triple Attention sobre YOLOv9m, y Conservative Attention y Transformer Enhanced sobre YOLO11m.

El hallazgo más claro aparece en el escenario de control — es decir, sin ningún dato real de ajuste fino, evaluando directamente los modelos entrenados solo en el dominio sintético sobre imágenes PLM reales. En ese escenario, YOLOv9m estándar alcanza mAP50 de 0,328. YOLOv9m-CBAM sube a 0,470 y YOLOv9m-Triple Attention a 0,499. Eso es un salto de 14 y 17 puntos porcentuales, respectivamente, sin necesitar ningún dato real adicional.

¿Por qué ocurre esto? Porque los módulos de atención enseñan a la red a mirar las regiones correctas de la imagen — específicamente, las estructuras de bajo contraste y pequeño tamaño que son características de PLM. Cuando el dominio sintético ya captura bien la morfología básica, la atención canal-espacial permite transferir ese conocimiento al dominio real de forma más robusta.

Con la transferencia de aprendizaje, la ventaja se reduce: todos los modelos convergen en un rango de 0,84–0,90. Pero CBAM mantiene una diferencia específica que importa clínicamente: detecta el límite citoplasmático con 0,986 frente a 0,979 del baseline. Pequeña en mAP, pero decisiva en video — como vemos en la siguiente diapositiva.
```

**Justificación del cambio:** El Prof. identificó que la sección de módulos de atención es el núcleo del aporte de la maestría y se expone demasiado rápido. El guion propuesto explica el mecanismo causal del hallazgo (no solo el número), lo que hace el resultado comprensible para evaluadores sin experiencia en redes de atención.

---

### Slide: "Conclusiones" (slide ~36)

**Fuente:** Observaciones 6 y 7 del jurado (significancia estadística, anotador único) + feedback Laura (lenguaje superlativo)

**Guion Actual:**
```
El objetivo general del trabajo se cumplió en tres etapas secuenciales: primero generamos la base de datos sintética, luego aplicamos preentrenamiento y transferencia sobre imágenes PLM reales, y finalmente desarrollamos y evaluamos modelos con módulos de atención.

Los tres objetivos específicos también se alcanzaron. El primero produjo oocyte_synthetic_2025b: más de 526.000 imágenes con etiquetado automático de cuatro estructuras. El segundo estableció un método sistemático de evaluación de arquitecturas, tanto estándar como con atención. El tercero completó una comparación exhaustiva de 13 configuraciones bajo el esquema sintético→real.

El resultado principal de ese proceso fue YOLOv9m como modelo óptimo: mAP50 de 0,902 y mAP50-95 de 0,627, con detección robusta del huso meiótico, la zona pelúcida, el límite del citoplasma y el cuerpo polar — las cuatro estructuras clave para evaluar la madurez del ovocito.
```

**Guion Propuesto:**
```
El objetivo general del trabajo se cumplió en tres etapas secuenciales: generación de la base sintética, preentrenamiento y transferencia sobre imágenes PLM reales, y desarrollo y evaluación de modelos con módulos de atención.

Los tres objetivos específicos también se alcanzaron: la base oocyte_synthetic_2025b, el método sistemático de evaluación, y la comparación exhaustiva de 13 configuraciones.

El resultado principal fue YOLOv9m como el modelo con mejor balance entre precisión global, latencia y estabilidad temporal: mAP50 de 0,902 y mAP50-95 de 0,627, con detección robusta del huso meiótico, la zona pelúcida, el límite del citoplasma y el cuerpo polar.

Dos aclaraciones sobre la interpretación de los resultados. Primero: el conjunto real tiene 40 imágenes de prueba con un único anotador. Para diferencias de mAP entre modelos inferiores a un punto porcentual, el ranking debe interpretarse como indicativo, no definitivo. La selección de YOLOv9m descansa en tres criterios — mAP50, latencia y estabilidad en video — no en una diferencia marginal de tabla. Segundo: el diseño experimental usa semilla fija para reproducibilidad, lo que no permite cuantificar la varianza entre corridas. Para las diferencias grandes que vemos —de 0,195 a 0,902— la dirección de la conclusión es robusta. Para diferencias pequeñas entre modelos, la conclusión es de carácter exploratorio.
```

**Justificación del cambio:** Las observaciones 6 y 7 del jurado son sobre exactamente estos puntos. Reconocerlos de forma proactiva en la presentación es más sólido que esperar la pregunta. El guion propuesto lo hace sin sonar defensivo — se presenta como parte de la interpretación cuidadosa de los resultados, que es lo que se espera de un trabajo de maestría.

---

### Slide: "Hallazgos y aportes" (Conclusiones — slide ~37)

**Fuente:** Observaciones 1 y 4 del jurado (conexión clínica) + feedback Laura (lenguaje superlativo)

**Guion Actual:**
```
Este slide sintetiza lo que aprendimos y lo que dejamos a la comunidad.

Entre los hallazgos: la transferencia de dominio no es opcional, es esencial. El preentrenamiento sintético solo produce modelos que apenas detectan; la transferencia sobre imágenes reales genera mejoras dramáticas: el cuerpo polar pasó de mAP50 de 0,012 a 0,516. Los módulos de atención mostraron su mayor valor precisamente cuando no hay ajuste fino disponible — YOLOv9m-triple-attention superó al modelo estándar en 17 puntos en ese escenario. Con transferencia la diferencia se reduce a menos de tres puntos, pero en video el CBAM detectó el citoplasma establemente donde el modelo estándar falló.

Como aportes concretos dejamos tres cosas: la base sintética pública oocyte_synthetic_2025b, el marco metodológico sintético→real demostrado en imágenes PLM biomédicas, y una referencia comparativa de 13 configuraciones con YOLOv9m como punto de partida sólido para este problema.
```

**Guion Propuesto:**
```
Este slide sintetiza lo que aprendimos y lo que dejamos a la comunidad.

Entre los hallazgos: la transferencia de dominio no es opcional, es esencial — el cuerpo polar pasó de mAP50 de 0,007 a 0,642 solo cuando se incorporan datos reales. Los módulos de atención mostraron su mayor valor cuando no hay ajuste fino disponible: YOLOv9m-Triple Attention superó al baseline en 17 puntos en ese escenario, y CBAM mantuvo una ventaja en video que el baseline no logró igualar.

Quiero conectar esto con el problema clínico que motivó el trabajo. Huso meiótico a 0,993 y zona pelúcida a 0,995 no son solo números en una tabla. Significan que un sistema basado en este trabajo podría, en tiempo real, confirmar si un ovocito está en metafase II y localizar el huso para orientar la aguja de inyección. Esa decisión hoy depende de un embriólogo entrenado con acceso al PolScope, observando manualmente. Este trabajo demuestra que el componente de percepción de esa decisión puede automatizarse.

Como aportes concretos: la base sintética oocyte_synthetic_2025b, el marco metodológico sintético→real para imágenes PLM biomédicas, y la referencia comparativa de 13 configuraciones que no existía hasta ahora. Además, los resultados están siendo preparados para envío a publicación científica.
```

**Justificación del cambio:** La observación 4 del jurado pregunta cómo se conecta la contribución técnica con el problema clínico planteado en la motivación. El guion propuesto cierra explícitamente ese círculo, que es la pregunta más conceptualmente importante que puede hacer el jurado. Además elimina el lenguaje "dramático" y añade la mención del artículo en construcción.

---

### Slide: "Trabajo futuro" (slide ~38)

**Fuente:** Observaciones 3, 5, 6 y 7 del jurado (video en vivo real, ablación, semilla múltiple, interobservador) + feedback Prof. Restrepo

**Guion Actual:**
```
El trabajo abre cinco líneas naturales de continuación.

La más urgente es construir una base de datos real PLM anotada por expertos — sin ella, la dependencia del esquema sintético→real seguirá siendo un supuesto que no hemos podido contrastar directamente.

La segunda línea es estudiar el efecto del zoom óptico: nuestros modelos se entrenaron con una relación micra-píxel específica, y no sabemos cómo se comportan con otras magnificaciones.

Tercero, la evaluación en video necesita métricas cuantitativas por fotograma — hasta ahora solo tenemos evidencia visual.

Cuarto, el cuerpo polar fue la estructura más difícil de detectar; ampliar su variabilidad en la síntesis podría cerrar esa brecha.

Y quinto, la integración clínica: estudiar inferencia en tiempo real, usabilidad en el laboratorio, e impacto real en la toma de decisiones del embriólogo. Ese es, en última instancia, el objetivo del trabajo.
```

**Guion Propuesto:**
```
El trabajo abre cinco líneas naturales de continuación, y quiero conectar tres de ellas directamente con limitaciones metodológicas que el diseño experimental no pudo resolver.

La más urgente es la base de datos real anotada por expertos — plural: dos o más embriólogos con protocolo formal de resolución de desacuerdos. Esta sería la validación interobservador que el trabajo actual no tiene y que permitiría separar la incertidumbre del ground truth de la incertidumbre del modelo.

La segunda, metodológicamente importante, es el experimento de ablación que no incluimos: comparar directamente las rutas COCO→real y COCO→sintético→real para cuantificar cuánto aporta el paso de preentrenamiento sintético frente a la transferencia directa desde COCO. Ese experimento pendiente delimita la contribución real de la base sintética.

La tercera es la evaluación en video con anotaciones por fotograma — necesaria para reportar métricas cuantitativas, no solo evidencia visual.

El cuarto punto es mejorar la modelación del cuerpo polar en el dominio sintético para reducir su dependencia de datos reales. Y el quinto, la integración clínica completa: inferencia en tiempo real integrada con el hardware del microscopio, validada con embriólogos en condiciones de laboratorio. Ese cierre es el objetivo final de este trabajo.
```

**Justificación del cambio:** Las observaciones 5, 6 y 7 del jurado quedarán sin respuesta durante la presentación si no se mencionan en trabajo futuro. El guion propuesto convierte las limitaciones del jurado en líneas activas de investigación futura —que es exactamente la actitud esperada en una defensa. La frase "quiero conectar tres de ellas directamente con limitaciones metodológicas" es una forma de demostrar consciencia crítica del propio trabajo.

---

## RESUMEN EJECUTIVO DE ACCIONES

### Cambios en diapositivas (Parte 1)
| Prioridad | Acción | Slide |
|---|---|---|
| CRÍTICA | A1 — ICSI needle-spindle localization | Marco Teórico / Justificación |
| CRÍTICA | A2 — Aclarar retardo vs intensidad | Marco Teórico — PLM matemático |
| CRÍTICA | A3 — Definir χ (swing) | Marco Teórico — PLM matemático |
| CRÍTICA | A4 — Normalización de señal | Metodología — base sintética |
| CRÍTICA | A5 — Aumentación de datos | Metodología — protocolo entrenamiento |
| CRÍTICA | A6 — Domingo Mery = rayos X industriales | Metodología — evaluación comparativa |
| CRÍTICA | A7 — Imagen sintética 2-3 nm (no 5.6 nm) | Resultados — base sintética |
| IMPORTANTE | B1 — Curvas P-R y convergencia | Resultados — nueva diapositiva |
| IMPORTANTE | B2 — Clarificar Δ en mancuerna | Resultados — mancueras 1 y 2 |
| IMPORTANTE | B3 — Artículo en borrador | Conclusiones / Trabajo futuro |
| IMPORTANTE | B4 — Ablación + interobservador + semilla | Trabajo futuro |
| DESEABLE | C1 — Contexto proyecto PLM del laboratorio | Estado del arte / Metodología |
| DESEABLE | C2 — Moderar lenguaje superlativo | Guion general |

### Cambios en el guion (Parte 2)
| Slide | Cambio principal | Observación/Feedback |
|---|---|---|
| Marco Teórico — marcadores | Añadir ICSI needle-spindle localization | Obs. 1, 4 + Prof. Restrepo |
| Marco Teórico — PLM matemático | Aclarar retardo vs intensidades; explicar χ | Juan José + Prof. |
| Pregunta e hipótesis | Spindle = madurez (no inferencia); "video en vivo" | Obs. 2, 3 |
| Resultados — transferencia | Multi-criteria YOLOv9m selection | Obs. 8 |
| Resultados — módulos atención | Expandir impacto y mecanismo | Prof. Restrepo |
| Conclusiones | Qualifiers estadísticos; multi-criteria | Obs. 6, 7 |
| Hallazgos y aportes | Cierre clínico + artículo en borrador | Obs. 1, 4 + Laura |
| Trabajo futuro | Ablación, interobservador, semilla múltiple | Obs. 5, 6, 7 |

---

*Documento de trabajo interno — no publicar. Generado para preparación de defensa.*
