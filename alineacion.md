# Análisis de coherencia: guion oral ↔ diapositivas

> Secciones revisadas: Justificación, Marco Teórico, Estado del Arte, Pregunta/Hipótesis, Objetivos, Conclusiones, Trabajo Futuro.  
> Metodología y Resultados excluidos (pendiente de revisión separada).

---

## Resumen de prioridad

| Prioridad | Cantidad | Diapositivas |
|---|:---:|---|
| Crítico — placeholder que el guion describe como imagen real | 2 | 6, 15 |
| Alto — desajuste de contenido o referencia incorrecta | 1 | ~~5~~, ~~11~~, 16 |
| Medio — oportunidad de mejora en guion o slide | 4 | 3, 4, 17, 18 |
| Placeholder menor | 1 | 13 |
| Redundancia narrativa | 1 | 14–15 (guion) |

---

## Tabla detallada por diapositiva

| Slide | Sección | Estado | Tipo | Descripción del desajuste | Acción sugerida |
|:---:|---|:---:|---|---|---|
| 3 | Justificación | ~~Medio~~ ✅ Resuelto | ~~Guion incompleto~~ | ~~La diap mostraba dos columnas (porcina + medicina humana) pero el guion solo cubría porcina.~~ Diap 3 reestructurada: solo industria porcina + caja de transición hacia medicina humana. Diap 4 recibe caja de síntesis final ("ese es el punto de partida de este trabajo"). | — |
| 4 | Justificación | ~~Medio~~ ✅ Resuelto | ~~Guion no referencia visual~~ | ~~El guion listaba 5 bullets redundantes con el gráfico y nunca lo referenciaba.~~ Bullets reducidos a 3 (431.746 ciclos, <35=50.3%, >42=4.1%); eliminados 38-40 y datos por recuperación. Guion simplificado con referencia explícita al gráfico ("como vemos en el gráfico, la probabilidad cae dramáticamente"). | — |
| 5 | Marco Teórico | ~~**Alto**~~ ✅ Resuelto | ~~Error de referencia espacial~~ | ~~El guion decía "imagen PLM de la derecha" pero la imagen PLM está en la columna izquierda.~~ Corregido en `script.txt`: "de la derecha" → "de la izquierda". | — |
| 6 | Marco Teórico | **Crítico** | Placeholder sin imagen | La columna izquierda tiene `[INSERTAR IMAGEN: Ejemplo de una de las cinco capturas de intensidad PLM]`. El guion describe esta imagen en tiempo presente: "La imagen de la izquierda **es** un ejemplo de una de esas capturas de intensidad." Si la imagen no está, la descripción oral queda sin referente visual. | Insertar una imagen real de intensidad PLM (I₀–I₄) del astero de microtúbulos o de un ovocito. Fuente sugerida: Shribak & Oldenbourg (2003) [13] o capítulo 4 de la tesis. |
| 7 | Marco Teórico | Coherente | — | Ecuaciones de intensidad, A/B, Δ y φ — alineación perfecta. | — |
| 8 | Marco Teórico | Coherente | — | Tres pasos, dos etapas vs una etapa, diagrama YOLO — todo coincide. | — |
| 9 | Marco Teórico | Coherente | — | Métricas IoU, mAP@50, mAP@50-95, Precisión, Sensibilidad, FPR — todo coincide. | — |
| 10 | Estado del Arte | Coherente | — | Brecha, MOMA, OoCount, variabilidad interobservador — todo alineado. | — |
| 11 | Estado del Arte | ~~**Alto**~~ ✅ Resuelto | ~~Inconsistencia numérica~~ | ~~El guion decía "2 a 3 nanómetros" mientras la diap y la tesis reportan "2–6 nm".~~ Corregido en `script.txt`: "2 a 3 nanómetros" → "2 a 6 nanómetros". | — |
| 12 | Estado del Arte | Coherente | — | Mery, Frid-Adar, retardos, domain shift — todo alineado con el guion. | — |
| 13 | Estado del Arte | Menor | Placeholder pendiente | La columna "Fondo (background)" tiene `[INSERTAR IMAGEN: región de fondo sin estructura birrefringente]`. El guion la describe bien en texto pero sin imagen el slide queda visualmente incompleto. | Insertar imagen de región de fondo PLM (retardo ~0 nm, campo oscuro uniforme). |
| 14 | Estado del Arte | Coherente | — | Chips de arquitecturas y cuatro tarjetas temáticas (Backbone, Neck, Head, Atención) coinciden con el guion. | — |
| 15 | Estado del Arte | **Crítico** | Placeholder sin imagen | Un gran `[INSERTAR IMAGEN: Línea del tiempo YOLO 2017–2025]` ocupa la mayor parte del slide. El guion (SLIDE 15) describe la evolución histórica en detalle pero no hay visual de apoyo — el slide se ve casi vacío. | Crear o insertar un diagrama de línea del tiempo YOLO 2017–2025 que incluya YOLOv9, YOLOv12 y RT-DETR. Puede generarse en Figma/Inkscape o adaptarse de una figura de la tesis. |
| 16 | Estado del Arte | **Alto** | Contenido del slide adelanta trabajo propio | Tres problemas: (1) La imagen `stage18_features.png` muestra mapas de características de **YOLOv9m del trabajo propio**, no de la literatura — el guion no aclara esto y podría confundir al jurado. (2) El bullet "En este trabajo: CBAM integrado en YOLOv9m" anticipa metodología/resultados sin respaldo en el guion de este slide. (3) El bullet "Confluencia: brecha PLM + datos sintéticos + detector con atención" no aparece en el guion — es útil como cierre pero el presentador no lo menciona oralmente. | Opción A: añadir al guion una frase que presente la imagen como "un ejemplo anticipado de cómo se activan los mapas de características en nuestro trabajo" y leer el bullet de confluencia. Opción B: reemplazar la imagen por un ejemplo de mapa de características de la literatura (ej. visualización de CBAM publicada) y eliminar el bullet de anticipación. |
| 17 | Hipótesis | Medio — dejado intencionalmente | Las redacciones del guion y la diap difieren en nivel de detalle técnico pero son compatibles. Se decide no modificar. | — |
| 18 | Objetivos | ~~Medio~~ ✅ Resuelto | ~~Calificador "algunas" ausente en guion~~ | ~~El guion decía "sus características morfológicas" sin limitador.~~ Corregido en `script.txt`: → "**algunas** de sus características morfológicas". | — |
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
