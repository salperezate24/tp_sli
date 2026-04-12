# Análisis de coherencia: guion oral ↔ diapositivas

> Secciones revisadas: Justificación, Marco Teórico, Estado del Arte, Pregunta/Hipótesis, Objetivos, Conclusiones, Trabajo Futuro.  
> Metodología y Resultados excluidos (pendiente de revisión separada).

---

## Resumen de prioridad

| Prioridad | Cantidad | Diapositivas |
|---|:---:|---|
| Crítico — placeholder que el guion describe como imagen real | 2 | 6, 15 |
| Alto — desajuste de contenido o referencia incorrecta | 3 | 5, 11, 16 |
| Medio — oportunidad de mejora en guion o slide | 4 | 3, 4, 17, 18 |
| Placeholder menor | 1 | 13 |
| Redundancia narrativa | 1 | 14–15 (guion) |

---

## Tabla detallada por diapositiva

| Slide | Sección | Estado | Tipo | Descripción del desajuste | Acción sugerida |
|:---:|---|:---:|---|---|---|
| 3 | Justificación | Medio | Guion incompleto | El guion cubre solo la industria porcina y cierra con "veamos eso en la siguiente diapositiva" para la medicina humana. Sin embargo, la diap ya muestra ambas columnas (porcina + medicina humana). El guion no comenta la columna derecha. | Agregar al guion una frase breve sobre la columna derecha antes del cierre, o eliminar el cierre y referirse a ambas columnas. |
| 4 | Justificación | Medio | Guion no referencia visual | El guion lista todos los datos SART (431.746 ciclos, 50.3%, 27.2%, 4.1%, 41.7%, 2.8%) pero nunca hace referencia oral al gráfico `IvfLiveBirthByAgeChart` que ocupa la mitad derecha del slide. | Agregar al guion: "como se aprecia en el gráfico…" o "esta caída la podemos ver claramente en la figura…" |
| 5 | Marco Teórico | **Alto** | Error de referencia espacial | El guion dice: "tres estructuras son claves… **todas visibles en la imagen PLM de la derecha**". En la diapositiva, la imagen PLM (Fig. 3, `oocyte_plm.png`) está en la columna **izquierda**; el diagrama de maduración está a la derecha. | Corregir el guion: cambiar "de la derecha" por "de la izquierda". |
| 6 | Marco Teórico | **Crítico** | Placeholder sin imagen | La columna izquierda tiene `[INSERTAR IMAGEN: Ejemplo de una de las cinco capturas de intensidad PLM]`. El guion describe esta imagen en tiempo presente: "La imagen de la izquierda **es** un ejemplo de una de esas capturas de intensidad." Si la imagen no está, la descripción oral queda sin referente visual. | Insertar una imagen real de intensidad PLM (I₀–I₄) del astero de microtúbulos o de un ovocito. Fuente sugerida: Shribak & Oldenbourg (2003) [13] o capítulo 4 de la tesis. |
| 7 | Marco Teórico | Coherente | — | Ecuaciones de intensidad, A/B, Δ y φ — alineación perfecta. | — |
| 8 | Marco Teórico | Coherente | — | Tres pasos, dos etapas vs una etapa, diagrama YOLO — todo coincide. | — |
| 9 | Marco Teórico | Coherente | — | Métricas IoU, mAP@50, mAP@50-95, Precisión, Sensibilidad, FPR — todo coincide. | — |
| 10 | Estado del Arte | Coherente | — | Brecha, MOMA, OoCount, variabilidad interobservador — todo alineado. | — |
| 11 | Estado del Arte | **Alto** | Inconsistencia numérica | El guion dice: "el huso meiótico con un retardo óptico típico de **2 a 3 nanómetros**". La diapositiva y todos los demás slides (incluido el 12 y 13) citan **"2–6 nm"**, que es el rango reportado en la tesis (Shribak & Oldenbourg). El guion usa el subconjunto inferior del rango. | Corregir el guion: cambiar "2 a 3 nanómetros" por "2 a 6 nanómetros" para ser consistente con la tesis y los demás slides. |
| 12 | Estado del Arte | Coherente | — | Mery, Frid-Adar, retardos, domain shift — todo alineado con el guion. | — |
| 13 | Estado del Arte | Menor | Placeholder pendiente | La columna "Fondo (background)" tiene `[INSERTAR IMAGEN: región de fondo sin estructura birrefringente]`. El guion la describe bien en texto pero sin imagen el slide queda visualmente incompleto. | Insertar imagen de región de fondo PLM (retardo ~0 nm, campo oscuro uniforme). |
| 14 | Estado del Arte | Coherente | — | Chips de arquitecturas y cuatro tarjetas temáticas (Backbone, Neck, Head, Atención) coinciden con el guion. | — |
| 15 | Estado del Arte | **Crítico** | Placeholder sin imagen | Un gran `[INSERTAR IMAGEN: Línea del tiempo YOLO 2017–2025]` ocupa la mayor parte del slide. El guion (SLIDE 15) describe la evolución histórica en detalle pero no hay visual de apoyo — el slide se ve casi vacío. | Crear o insertar un diagrama de línea del tiempo YOLO 2017–2025 que incluya YOLOv9, YOLOv12 y RT-DETR. Puede generarse en Figma/Inkscape o adaptarse de una figura de la tesis. |
| 16 | Estado del Arte | **Alto** | Contenido del slide adelanta trabajo propio | Tres problemas: (1) La imagen `stage18_features.png` muestra mapas de características de **YOLOv9m del trabajo propio**, no de la literatura — el guion no aclara esto y podría confundir al jurado. (2) El bullet "En este trabajo: CBAM integrado en YOLOv9m" anticipa metodología/resultados sin respaldo en el guion de este slide. (3) El bullet "Confluencia: brecha PLM + datos sintéticos + detector con atención" no aparece en el guion — es útil como cierre pero el presentador no lo menciona oralmente. | Opción A: añadir al guion una frase que presente la imagen como "un ejemplo anticipado de cómo se activan los mapas de características en nuestro trabajo" y leer el bullet de confluencia. Opción B: reemplazar la imagen por un ejemplo de mapa de características de la literatura (ej. visualización de CBAM publicada) y eliminar el bullet de anticipación. |
| 17 | Hipótesis | Medio | Redacciones divergentes | **Pregunta**: la diap dice "varios tipos de imagen" y "distintos estados de maduración"; el guion es más específico: "variando arquitectura, formato de entrada y mecanismos de atención" / "estructuras birrefringentes". **Hipótesis**: la diap es más detallada (menciona "vectores de características", "modelos de color") que el guion. Ambas versiones son compatibles pero el jurado puede notar la diferencia. | Alinear el guion con la redacción exacta de la pregunta en la diap, o simplificar la diap al nivel del guion. La versión más técnica del guion oral es preferible para la defensa. |
| 18 | Objetivos | Medio | Calificador "algunas" ausente en guion | La diap dice "**algunas** características morfológicas" (más preciso: no se detectan todas). El guion dice "**sus** características morfológicas" sin limitador. Un jurado que lea el slide y escuche el guion puede notar la diferencia. | Agregar "algunas" al guion oral: "…para la identificación de ovocitos y **algunas** de sus características morfológicas…" |
| 19 | Objetivos | Coherente | — | Los tres objetivos específicos coinciden exactamente. | — |
| 33 | Conclusiones | Coherente | — | Tres etapas, OE1/2/3, YOLOv9m con mAP50=0.902 — alineación perfecta. | — |
| 34 | Conclusiones | Coherente | — | Hallazgos y aportes coinciden exactamente con el guion. | — |
| 35 | Trabajo futuro | Coherente | — | Cinco líneas (01–05) coinciden exactamente con el guion. | — |

---

## Observación adicional: redundancia narrativa Slides 14–15 (guion)

El guion de **SLIDE 14** cubre la evolución histórica de detectores con: backbones eficientes, necks con FPN/PANet y cabezas desacopladas con pérdidas IoU.

El guion de **SLIDE 15** comienza repitiendo esos mismos conceptos ("la literatura identifica tendencias estructurales claras: bloques de backbone cada vez más eficientes, fusión multi-escala mediante FPN y PANet…") antes de entrar en YOLO específicamente.

Hay solapamiento de ~2 oraciones que puede percibirse como repetitivo. Sugerencia: eliminar del guion de SLIDE 15 la enumeración de tendencias estructurales generales (ya cubiertas en SLIDE 14) y arrancar directamente con "En ese panorama, la familia YOLO se consolidó…" pasando inmediatamente a YOLOv9, YOLOv12 y RT-DETR.

---

## Estado general

Las secciones de **Conclusiones** y **Trabajo Futuro** están perfectamente alineadas — guion y slides son coherentes al detalle.

Las secciones de **Justificación** y **Objetivos** tienen desajustes menores de redacción fáciles de corregir en el guion.

Los problemas más urgentes son los **dos placeholders críticos** (slides 6 y 15) donde el guion describe imágenes que aún no existen, y el **desajuste de contenido en el slide 16** donde se anticipa el trabajo propio sin introducción oral adecuada.
