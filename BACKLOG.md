# BACKLOG — Pendientes de la presentación

> Fuente: reunión con director (grabación "New Recording 37"), abril 2026.

---

## Presentación (slides)

- [ ] **Quitar imagen de línea del tiempo de slide 13 ("YOLO & RT-DETR")** — la figura `Slide9.png` (Fig. 9, línea del tiempo OD/E/SD 2017–2025) ocupa demasiado espacio y el guion no la referencia. Reemplazar por contenido textual o dejar solo los tres bullets de YOLOv9, YOLOv12 y RT-DETR. (`pages/03_estado_del_arte.md`)

- [x] **Aumentar tamaño de letra en la diapositiva de Hipótesis** — el profe lo mencionó dos veces, está demasiado pequeño. (`text-[0.8rem]` → `text-sm`/`text-[0.95rem]`, en `pages/04_pregunta_hipotesis.md`).
- [ ] **Completar sección Metodología** (`pages/06_metodologia.md`) — actualmente tiene solo texto placeholder.
- [ ] **Completar sección Resultados** (`pages/07_resultados.md`) — falta el análisis cualitativo (diapositiva 2 es placeholder).
- [ ] **Terminar Estado del Arte** (`pages/03_estado_del_arte.md`) — aún no está finalizado según revisión.
- [x] **Corregir inconsistencia mAP50-95 de YOLOv9m** — `pages/08_conclusiones.md` dice `0,627` pero la tabla en `pages/07_resultados.md` muestra `0.642`. Unificar o aclarar origen de cada cifra (¿diferente run? ¿con vs sin CBAM?). Prioritario: te lo van a preguntar en la defensa.
- [ ] **Agregar slide introductorio a los videos de resultados** — antes de las secuencias YOLOv9m vs YOLOv9m-CBAM, incluir un slide que advierta que requiere internet y contextualice qué va a ver el jurado (duración, qué comparar, qué destacar).
- [x] **Revisar columnas en hipótesis en modo presentación real** — resuelto: se eliminó el layout `lg:columns-2` al reducir el texto de la hipótesis a una sola oración.

## Guion oral (`script.txt`)

- [ ] **Completar guion desde slide 18 en adelante** — Metodología (slides 18–23), Resultados (24–30), Conclusiones (31–32), Trabajo futuro (33). Priorizar Metodología y Resultados, que son las secciones más largas y donde el jurado concentrará preguntas.
- [ ] **Resolver versión doble en slide 9** — actualmente tiene dos versiones activas en el archivo. Elegir una y eliminar la otra antes de la defensa.
- [ ] **Verificar numeración completa del guion** — confirmar que cada `SLIDE N:` del script corresponde exactamente al orden de aparición en la presentación.

## Narrativa / argumento

- [ ] **Reforzar justificación de imágenes sintéticas** — dejar claro en los slides que las imágenes simuladas tienen sustento en el marco teórico, y que si la parte experimental hubiera funcionado, los datos habrían salido de ahí.
- [ ] **Vincular base sintética con marco teórico en slide de Metodología** — la diapositiva "Generación de la base de datos sintética" tiene los datos técnicos pero no hace el vínculo explícito: *"las propiedades físicas modeladas (birrefringencia, retardo óptico) están fundamentadas en el marco teórico"*. Una oración de puente basta.

## Deuda técnica

- [ ] **Unificar contenedor en Hipótesis y Conclusiones** — usan `flex h-full flex-col` directo en vez de `slide-deck-shell`. No es un bug visual grave pero rompe la consistencia interna con el resto de secciones.

## Externo

- [ ] **Revisar y responder correos del profe** — envió información sobre el **Congreso Latino de Óptica** (Bogotá). Evaluar participación y enviar respuesta.
