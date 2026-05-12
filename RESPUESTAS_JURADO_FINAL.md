# Respuestas a las Observaciones del Jurado

**Tesis:** Desarrollo de un modelo de red neuronal profunda para la identificación de ovocitos y sus características a través de microscopía polarizada

**Estudiante:** Salomón Pérez Atencia  
**Director:** Alejandro Restrepo Martínez, Ph.D.  
**Institución:** Universidad Nacional de Colombia, Sede Medellín — Facultad de Minas  
**Programa:** Maestría en Ingeniería — Ciencias de la Computación  
**Evaluador:** Germán Sánchez  
**Fecha de las observaciones:** 26 de febrero de 2026

---

## Nota introductoria

Agradecemos al evaluador la lectura cuidadosa del documento y las observaciones formuladas. Compartimos la apreciación de que la correspondencia explícita entre pregunta de investigación, metodología, resultados y conclusiones es un elemento central de la formación investigativa, y reconocemos que varias de las observaciones identifican aspectos en los que la presentación del trabajo podría haber sido más precisa. Las respuestas que siguen tienen el propósito de aclarar el alcance real de la contribución, justificar las decisiones de diseño adoptadas y reconocer abiertamente las limitaciones donde estas existen.

---

## Grupo A — Observaciones 1 y 4

### Observación 1

> El objetivo general y la motivación hablan de identificación automática de ovocitos en una muestra, pero las clases del detector corresponden a estructuras internas o periféricas: zona pelúcida, cuerpo polar, citoplasma y huso meiótico. No aparece una clase "ovocito" ni una evaluación explícita de detección del ovocito completo. La zona pelúcida o el límite del citoplasma podrían funcionar como aproximadores en esta tarea, pero esa equivalencia no se define ni se valida en el documento. ¿Qué criterios adicionales permitirían usar la detección de estructuras morfológicas como identificación automática del ovocito?

### Observación 4

> En la motivación y la justificación, el problema se presenta en términos de selección de ovocitos, evaluación de madurez, tasa de fertilización y generación de embriones. La contribución desarrollada se ubica en un nivel anterior: detección de estructuras morfológicas mediante métricas de visión por computador. ¿Cómo se pasa de las detecciones reportadas a una solución del problema planteado en la motivación?

### Nuestra respuesta

Estas dos observaciones apuntan al mismo punto de articulación y se responden conjuntamente.

La ausencia de una clase *"ovocito"* en el detector no constituye una omisión, sino una consecuencia directa de la naturaleza de las imágenes PLM y del contexto experimental. En microscopía de luz polarizada, el ovocito no presenta una señal birefringente propia que lo delimite como entidad independiente. Las estructuras que sí exhiben birrefringencia —y que, por tanto, son detectables en PLM— son la zona pelúcida (ZP) y el huso meiótico: la primera delimita el ovocito externamente a modo de envuelta proteínica; el segundo, junto con el límite del citoplasma, lo delimita internamente. La co-detección de ambas estructuras cumple funcionalmente el rol de identificador del ovocito, sin necesidad de una clase abstracta adicional. En el contexto experimental utilizado —ovocitos desnudados y cultivados individualmente en condiciones controladas—, no existen otras células de tamaño comparable que puedan generar confusión; la detección de la ZP es condición suficiente para la identificación del ovocito en este entorno.

Respecto a la conexión con el problema clínico planteado en la justificación, es necesario precisar el alcance de la contribución dentro de la cadena de apoyo embriológico. La detección automática de las estructuras abordadas en este trabajo no es simplemente un *prerrequisito* para la evaluación de madurez: en el contexto de la microscopía de luz polarizada, **la detección del huso meiótico equivale directamente a la determinación del estado de maduración nuclear del ovocito**. En la práctica clínica del ICSI (*intracytoplasmic sperm injection*), el criterio de madurez nuclear se basa en la visualización del huso meiótico en metafase II: si el huso es detectado, el ovocito está en MII y se encuentra en el estado óptimo para la inyección; si no es detectado, el ovocito aún no ha completado la transición MI→MII y debe permanecer en la incubadora por un período adicional. Esta es una decisión binaria —apto / no apto— que hoy requiere un embriólogo entrenado operando el sistema PLM de forma manual. La tesis demuestra que esa determinación puede realizarse automáticamente.

Adicionalmente, conocer la localización precisa del huso meiótico tiene un valor clínico independiente: permite orientar el ovocito de modo que el huso quede en posición 12 en punto respecto al cuerpo polar, evitando que la aguja de inyección lo dañe. El daño al huso durante el ICSI provoca segregación cromosómica aberrante, lo que conduce a embriones aneuploides no viables. Esta función —localizar el huso para protegerlo— es una de las aplicaciones clínicas más documentadas de la PLM cuantitativa y es habilitada directamente por la detección automática que la tesis desarrolla.

La motivación y la justificación describen el problema clínico en su totalidad para situar el trabajo en su contexto de relevancia. La contribución de la tesis aporta la capa de percepción que hace posible automatizar la evaluación que hoy depende de la disponibilidad de un experto y de observación manual: la detección objetiva, reproducible y cuantificable de las estructuras PLM que son los marcadores clínicos del estado de maduración. La validación prospectiva integrada en un flujo clínico con embriólogos humanos —paso que cierra el ciclo desde la detección hasta la decisión asistida— queda identificada como trabajo futuro inmediato.

---

## Grupo B — Observaciones 2 y 3

### Observación 2

> La pregunta de investigación plantea el uso de imágenes de microscopía polarizada para identificar distintos estados de maduración de ovocitos. No es claro cómo se conecta la detección de estructuras con la inferencia de estados de maduración. ¿Qué sería necesario para pasar de detección de estructuras morfológicas hacia estados de maduración?

### Observación 3

> La pregunta de investigación menciona identificación en un "video en vivo", una formulación que sugiere operación en tiempo real. Sin embargo, la evaluación se hace sobre secuencias previamente guardadas, sin integración con un microscopio y sin evaluación de interacción con experto humano. ¿Qué elementos adicionales serían necesarios para pasar de una evaluación sobre secuencias previamente guardadas a una validación de funcionamiento en video en vivo o en tiempo real?

### Nuestra respuesta

**Sobre la conexión entre detección de estructuras y estados de maduración (Obs. 2):**

La observación identifica correctamente que el documento no explicita con suficiente detalle el nexo biológico entre las estructuras detectadas y los estados de maduración. Sin embargo, ese nexo es directo y no requiere una etapa de inferencia adicional. Para comprender esto, es necesario describir brevemente el proceso de maduración en el contexto PLM.

Los ovocitos inician su desarrollo en estado de vesícula germinal (GV), que corresponde a un estadio inmaduro. Tras la estimulación hormonal, el ovocito progresa a metafase I (MI), luego expulsa el primer cuerpo polar y alcanza metafase II (MII), que es el estado óptimo para la fecundación mediante ICSI. En los porcinos utilizados en esta investigación, esta progresión ocurre entre las 38 y 48 horas de cultivo, y los eventos críticos —transición MI→MII y ensamblaje del huso— se concentran en una ventana de aproximadamente dos horas dentro de ese período.

En imágenes PLM, la evaluación del estado de maduración se basa en la birrefringencia de las estructuras con alta organización molecular. La vesícula germinal (GV) y el primer cuerpo polar **no presentan señal birrefringente en PLM** y no son detectables mediante esta técnica. Las estructuras visibles en PLM son: la zona pelúcida, cuya organización de glicoproteínas genera una señal birrefringente mensurable; y el huso meiótico (cuando está presente), cuya señal birrefringente con retardación de 2–3 nm es directamente proporcional al grado de organización molecular de sus microtúbulos. La presencia o ausencia de señal del huso meiótico en PLM **es** la determinación del estado de maduración nuclear: huso presente → ovocito en MII → maduro y apto para ICSI; huso ausente → ovocito en GV, MI o en transición MI→MII → no apto en ese momento. En este sentido, la tesis no detecta estructuras para luego *inferir* el estado de maduración: la detección automática del huso meiótico en PLM **constituye directamente** la evaluación de madurez nuclear.

Lo que el documento no desarrolló con suficiente claridad es este marco biológico que hace explícita esa equivalencia. Esa omisión explicativa es la que genera la aparente desconexión entre las estructuras detectadas y los estados de maduración señalada por el evaluador.

**Sobre el funcionamiento en video en vivo (Obs. 3):**

El término "video en vivo" en la pregunta de investigación hace referencia a la capacidad del modelo de procesar la señal PLM fotograma a fotograma, con una latencia de inferencia compatible con la frecuencia de adquisición del microscopio. Esta capacidad queda demostrada experimentalmente: el tiempo de inferencia de YOLOv9m es de 7,4 ms por imagen, valor sustancialmente inferior al período de trama de la cámara PLM empleada en el laboratorio, lo que garantiza que la velocidad del modelo no constituye el factor limitante para una eventual operación integrada.

Los videos empleados en la evaluación son grabaciones reales del microscopio PLM del laboratorio, no simulaciones sintéticas. Lo que la evaluación no incluye —y que la observación señala con precisión— es la integración directa con el sistema de adquisición en tiempo real: la interfaz con el controlador del microscopio, el pipeline de captura y preprocesamiento en bucle, y la visualización continua superpuesta. Estos elementos corresponden a ingeniería de sistema, no a limitaciones del modelo, y quedan identificados como trabajo futuro en la integración hardware-software.

Conviene precisar además que las exigencias temporales de esta aplicación no son particularmente restrictivas: la ventana de maduración crítica dura aproximadamente dos horas dentro de un proceso de 40–48 horas de cultivo, de modo que incluso un sistema con latencias de segundos —muy por encima de lo demostrado— sería clínicamente viable. El valor de demostrar tiempos de inferencia por debajo del período de trama es señalar que el modelo no impone ninguna restricción adicional sobre la frecuencia de observación.

---

## Grupo C — Observación 5

### Observación

> El trabajo propone un flujo sintético-a-real en el que los modelos parten de pesos COCO, se preentrenan con imágenes sintéticas y luego se ajustan con imágenes reales. Esa comparación no permite estimar con claridad cuánto aporta el preentrenamiento sintético frente a una transferencia directa desde COCO hacia el conjunto real. ¿Cuál se considera que es el aporte real de la inicialización con COCO y cuál el aporte específico del paso de preentrenamiento sintético en el desempeño final del modelo?

### Nuestra respuesta

Esta es una limitación legítima del diseño experimental que reconocemos abiertamente. El diseño del trabajo no incluyó el brazo de transferencia directa COCO→real como condición de control, lo que efectivamente impide aislar la contribución neta del paso de preentrenamiento sintético frente a la inicialización con pesos COCO aplicada directamente al dominio real.

Lo que sí es posible afirmar a partir de los resultados obtenidos es lo siguiente: los modelos entrenados únicamente en el dominio sintético —sin ajuste fino sobre el conjunto real— presentan, al evaluarse sobre imágenes PLM reales, un rango de mAP50 global de 0,195 a 0,521 para las arquitecturas estándar, frente al valor de 0,995 obtenido sobre el conjunto sintético de prueba. Esta caída de hasta 80 puntos porcentuales establece que el ajuste fino en el dominio real es imprescindible para alcanzar un desempeño funcional, independientemente de la ruta de inicialización empleada. Adicionalmente, los modelos con arquitecturas personalizadas —en particular los que incorporan mecanismos de atención CBAM— alcanzaron valores de detección superiores a los obtenidos con las arquitecturas base. Esta diferencia es consistente con la hipótesis de que el flujo COCO→sintético→real favorece la convergencia hacia soluciones más especializadas, aunque el experimento diseñado no permite cuantificar en qué medida esta mejora se debe al paso sintético y en qué medida se atribuye a la capacidad del módulo de atención por sí mismo.

El ablation que contrastaría, bajo condiciones comparables, las rutas COCO→real y COCO→sintético→real es el experimento pendiente natural para delimitar esta contribución. Se identifica como trabajo futuro prioritario con valor metodológico independiente.

---

## Grupo D — Observaciones 6 y 7

### Observación 6

> El documento usa una semilla aleatoria fija y modo determinístico, lo cual favorece la reproducibilidad de una corrida, pero no permite saber si las diferencias pequeñas entre modelos se mantendrían bajo otras semillas, particiones o condiciones de entrenamiento. ¿Las diferencias encontradas son estadísticamente significativas?

### Observación 7

> Las imágenes reales se anotaron manualmente sin reporte de número de anotadores, especialidad, protocolo de desacuerdo ni validación interobservador. ¿Hasta qué punto las diferencias de desempeño entre modelos pueden atribuirse al modelo y no a la variabilidad o incertidumbre de las anotaciones de referencia?

### Nuestra respuesta

Estas dos observaciones son complementarias y se abordan conjuntamente porque apuntan al mismo fenómeno: la incertidumbre asociada a comparaciones de desempeño con diferencias reducidas de mAP.

Respecto al uso de semilla fija (Obs. 6): la elección de un entorno de entrenamiento determinístico obedeció a un criterio de reproducibilidad experimental, no de validación estadística. Con un único conjunto real de 160 imágenes de entrenamiento y 40 de prueba, ejecutar múltiples corridas con semillas distintas habría requerido un número de repeticiones que el tamaño del conjunto real no justifica estadísticamente. Reconocemos que, para diferencias de mAP entre modelos inferiores a un punto porcentual, el ranking debe interpretarse como indicativo, no definitivo: parte de esa diferencia puede atribuirse a la variabilidad propia del proceso de entrenamiento. Para diferencias de mayor magnitud, la dirección de la conclusión es robusta.

Respecto a la anotación única (Obs. 7): las anotaciones del conjunto real fueron realizadas por el autor siguiendo el protocolo clínico de PLM, con referencia a las señales birrefringentes de zona pelúcida y huso meiótico. La ausencia de un segundo anotador entrenado —idealmente un embriólogo con experiencia en evaluación PLM— es una limitación reconocida del conjunto de datos. La evaluación manual en PLM puede presentar variabilidad interobservador, en particular para estructuras de señal débil, y esta incertidumbre del *ground truth* puede afectar las métricas de modelos cuyo desempeño difiere marginalmente. La validación interobservador formal es una prioridad para versiones futuras del conjunto real cuando este alcance un tamaño suficiente.

Es importante señalar que la selección de YOLOv9m como arquitectura de referencia no descansa exclusivamente en diferencias marginales de mAP entre modelos. Como se desarrolla en la respuesta a la Observación 8, la selección se fundamenta en un criterio multidimensional que incluye latencia de inferencia y estabilidad de detección en secuencias de video, aspectos en los que YOLOv9m presenta ventajas más inequívocas. Este encuadre multidimensional hace que la conclusión sobre la selección del modelo sea robusta aun reconociendo la incertidumbre asociada a comparaciones basadas exclusivamente en tablas de mAP obtenidas con una única semilla y un anotador único.

---

## Grupo E — Observación 8

### Observación

> En los resultados, YOLOv9m y RT-DETR-ResNet101 empatan en mAP50 = 0,902, mientras YOLOv11s alcanza mAP50-95 = 0,642, superior al 0,627 de YOLOv9m. ¿Cuál es la relevancia de priorizar el balance global de YOLOv9m frente a otros criterios como mAP50-95, rendimiento por clase, estabilidad en video o latencia?

### Nuestra respuesta

La selección de YOLOv9m como arquitectura de referencia se basó en un criterio multidimensional que abarca precisión global, latencia de inferencia y estabilidad de detección en secuencias de video. Los tres factores se explican a continuación.

**RT-DETR-ResNet101** iguala a YOLOv9m en mAP50 (0,902), pero su arquitectura basada en transformadores implica una latencia de inferencia de 14,8 ms, frente a los 7,4 ms de YOLOv9m —una diferencia de 2×—. Para una aplicación donde el tiempo de inferencia debe ser compatible con la frecuencia de adquisición de la cámara PLM, la diferencia de velocidad es relevante tanto para la operación en tiempo real como para la eventual integración en hardware de laboratorio con recursos computacionales limitados.

**YOLOv11s** alcanza un mAP50-95 de 0,642, superior al 0,627 de YOLOv9m. Sin embargo, YOLOv11s es un modelo de menor capacidad —diseñado para eficiencia en dispositivos compactos— y su menor número de parámetros se refleja en una menor estabilidad de detección cuando se procesa una secuencia temporal. En la evaluación sobre videos reales PLM, YOLOv9m exhibió una consistencia de detección frame a frame superior a la de YOLOv11s, aspecto que es clínicamente relevante dado que el propósito final es el monitoreo continuo de ovocitos durante el proceso de maduración.

En síntesis, la ventaja de YOLOv9m se sitúa en el balance entre tres criterios: mAP50 global máximo o empatado, latencia de inferencia compatible con la frecuencia de adquisición PLM, y mayor estabilidad de detección en secuencias temporales. Ninguno de los otros modelos evaluados reúne los tres criterios de forma simultánea, lo que justifica la selección de YOLOv9m como la arquitectura con mayor potencial de transferencia a un entorno de operación clínica real.

---

## Grupo F — Observaciones de forma

Todas las correcciones de forma señaladas por el evaluador han sido identificadas y serán incorporadas en la versión final del documento. La siguiente tabla resume cada corrección y la acción comprometida:

| # | Corrección señalada | Ubicación | Acción |
|---|---|---|---|
| 1 | "Convolucionales" → "convolucionales" | pp. 2 | Corregido: minúscula en posición interna |
| 2 | Unificar estilo de títulos en secciones 2.3, 2.4, 2.5 y 4.2 | caps. 2 y 4 | Se unificarán todos los títulos de sección con estilo nominal (inicial mayúscula, resto minúsculas) |
| 3 | "identificación de ovocitos y algunas características morfológicas **de ovocitos**" → eliminar "de ovocitos" duplicado | pp. 26 y 142 | Corregido en ambas páginas |
| 4 | "MLP" → "PLM" o "microscopía de luz polarizada" cuando refiere a esa técnica | pp. 9, 17, 30 | Corregido en las tres páginas: MLP se reserva exclusivamente para *Multilayer Perceptron* |
| 5 | Unificar notación de métricas: elegir entre mAP50/mAP50-95 o mAP@50/mAP@50-95 | pp. 41 y tablas | Se adoptará `mAP50` y `mAP50-95` de forma uniforme en todo el documento |
| 6 | "mAP@50 se refiere que…" → "mAP@50 indica que…" | pp. 41 | Corregido |
| 7 | "la base sobre el cual" → "la base sobre la cual" | pp. 35 | Corregido (concordancia de género) |
| 8 | "útil para evaluar escoger" → "útil para escoger" | pp. 39 | Corregido |
| 9 | Normalizar guiones dobles y uso irregular: "v8--v12" → "v8-v12", "sintético--real" → "sintético-real" | pp. 13, 52, 54, 134, 146 | Corregido en todas las páginas indicadas |
| 10 | Unificar nombre del conjunto de datos: elegir `oocyte_synthetic_2025b` | pp. 51, 70, 159 | Se adoptará la forma en minúsculas `oocyte_synthetic_2025b` de forma uniforme |
| 11 | Definir una forma canónica para cada modelo y mantenerla | pp. 115–166 | Se adoptarán las formas: `YOLOv9m`, `YOLOv9m-CBAM`, `YOLOv11m`, `YOLOv11m-CA` (Conservative Attention), mantenidas en todo el documento |
| 12 | Traducir términos en inglés dentro de la narración española; conservar en inglés solo etiquetas técnicas | pp. 74, 95, 130–134 | Se revisará y traducirá: *dataset* → conjunto de datos, *framework* → marco de trabajo, *backbone* → red base, *grid* → cuadrícula, *score* → puntuación, *early stopping* → parada temprana. Se conservarán en inglés solo los nombres de clase propios del modelo (*spindle*, *zp*, *citolimit*, *pb*) con su equivalente en español la primera vez que aparecen |
| 13 | Agregar espacio: "Figura 5-10:Detección" → "Figura 5-10: Detección" | pp. 111 | Corregido |
| 14 | "se podría entrenar modelos" → "se podrían entrenar modelos" | pp. 146 | Corregido (concordancia de número) |
| 15 | "mean Average Precision" → "mean average precision" | pp. 7 | Corregido (capitalización estándar de la métrica) |
