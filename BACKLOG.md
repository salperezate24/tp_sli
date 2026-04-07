# BACKLOG — Pendientes de la presentación

> Fuente: reunión con director (grabación "New Recording 37"), abril 2026.

---

## Presentación (slides)

- [ ] **Aumentar tamaño de letra en la diapositiva de Hipótesis** — el profe lo mencionó dos veces, está demasiado pequeño. (`text-[0.8rem]` → `text-[0.9rem]` o `text-sm` mínimo, en `pages/04_pregunta_hipotesis.md` líneas 19 y 27).
- [ ] **Completar sección Metodología** (`pages/06_metodologia.md`) — actualmente tiene solo texto placeholder.
- [ ] **Completar sección Resultados** (`pages/07_resultados.md`) — falta el análisis cualitativo (diapositiva 2 es placeholder).
- [ ] **Terminar Estado del Arte** (`pages/03_estado_del_arte.md`) — aún no está finalizado según revisión.
- [x] **Corregir inconsistencia mAP50-95 de YOLOv9m** — `pages/08_conclusiones.md` dice `0,627` pero la tabla en `pages/07_resultados.md` muestra `0.642`. Unificar o aclarar origen de cada cifra (¿diferente run? ¿con vs sin CBAM?). Prioritario: te lo van a preguntar en la defensa.
- [ ] **Agregar slide introductorio a los videos de resultados** — antes de las secuencias YOLOv9m vs YOLOv9m-CBAM, incluir un slide que advierta que requiere internet y contextualice qué va a ver el jurado (duración, qué comparar, qué destacar).
- [ ] **Revisar columnas en hipótesis en modo presentación real** — el layout `lg:columns-2` puede cortar texto en mitad de frase según la pantalla del jurado.

## Narrativa / argumento

- [ ] **Reforzar justificación de imágenes sintéticas** — dejar claro en los slides que las imágenes simuladas tienen sustento en el marco teórico, y que si la parte experimental hubiera funcionado, los datos habrían salido de ahí.
- [ ] **Vincular base sintética con marco teórico en slide de Metodología** — la diapositiva "Generación de la base de datos sintética" tiene los datos técnicos pero no hace el vínculo explícito: *"las propiedades físicas modeladas (birrefringencia, retardo óptico) están fundamentadas en el marco teórico"*. Una oración de puente basta.

## Deuda técnica

- [ ] **Unificar contenedor en Hipótesis y Conclusiones** — usan `flex h-full flex-col` directo en vez de `slide-deck-shell`. No es un bug visual grave pero rompe la consistencia interna con el resto de secciones.

## Externo

- [ ] **Revisar y responder correos del profe** — envió información sobre el **Congreso Latino de Óptica** (Bogotá). Evaluar participación y enviar respuesta.
