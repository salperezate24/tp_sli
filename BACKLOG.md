# BACKLOG — Pendientes de la presentación

> Fuente: reunión con director (grabación "New Recording 37" y "meeting-with-professor-monday13.txt"), abril 2026.

---

## Tweaks rápidos — sin imágenes ni reestructuración mayor

- [x] **Portada: agregar nombre del programa de maestría** — falta "Maestría en Ingeniería — Ciencias de la Computación". Agregar en el bloque institucional y quitar "Departamento de Ciencias de la Computación" (el profe dijo "puedes quitarlo del grupo de abajo"). (`slides.md` ~línea 63–68)

- [x] **Guion + slide: cuerpo polar no tiene "hueco" en PLM** — el CP no aparece como hueco sino que pierde contraste (baja birrefringencia → borde negro → invisible). Frase sugerida: *"el cuerpo polar se ve invisible, pero cuando lo tratas de ver en polarización pierde el contraste"*. Agregar bullet en slide 11 y corregir `script.txt` SLIDE 11 (~línea 69). (`pages/03_estado_del_arte.md`, `script.txt`)

- [x] **Marco Teórico IV: enfatizar ventaja de YOLO** — agregar explícitamente que YOLO detecta en un solo paso → inferencia en tiempo real (< 10 ms/img) → viable para integración clínica. (`pages/02_marco_teorico.md` ~línea 215–230)

- [x] **Videos: YOLOv9m-CBAM debe quedar a la DERECHA** — el profe: "usted habla, termina, la primera falla y la última se queda en pantalla". Cambiar orden de `CBAM (izq.) | baseline (der.)` a `baseline (izq.) | CBAM (der.)` en los 3 slides de video. Actualizar encabezados de tablas y `script.txt` SLIDES 32–34. (`pages/07_resultados.md` ~líneas 398–781, `script.txt`)

- [x] **Metodología — Conjuntos de datos: explicar por qué 526K → 21.600** — agregar nota: subconjunto estratificado de 21.600 para preentrenamiento (escala + balance de clases); el profe dijo "hay que atacarlo ahí una vez para que no [pregunten]". (`pages/06_metodologia.md` ~línea 117)

- [x] **Slide introductorio antes de los videos de resultados** — título colocado; contenido pendiente — antes de las secuencias YOLOv9m vs YOLOv9m-CBAM, un slide que advierta que requiere internet y contextualice qué va a ver el jurado (duración, qué comparar, qué destacar). Solo texto. (`pages/07_resultados.md`)

- [x] **Unificar contenedor en Hipótesis y Conclusiones** — usan `flex h-full flex-col` directo en vez de `slide-deck-shell`. Cambio de clase CSS, sin afectar contenido. (`pages/04_pregunta_hipotesis.md`, `pages/08_conclusiones.md`)

---

## Pendientes mayores — requieren imágenes, diagramas o rediseño estructural

- [ ] **Pipeline metodológico: rediseño visual como diagrama de flujo** — el profe: "el éxito está en que sea más gráfico en líneas, crea un flujo". Las 4 cajas actuales no tienen conexiones visuales. Rediseñar con flechas conectoras; alinear etiquetas con los títulos de los slides siguientes; hacer visible "Desarrollo de redes personalizadas" como sub-paso (es un aporte). (`pages/06_metodologia.md` ~línea 1–64)

- [ ] **Resultados: convertir tablas a gráficos de barras** — el profe: "esos datos en gráficos, porque ese número no se lee ni se entiende". 4 slides: (28) preentrenamiento + control, (29) TL comparativa, (30) rendimiento por clase, (31) módulos de atención. Requiere implementar gráficos (CSS barras o componente Vue). (`pages/07_resultados.md` ~líneas 66–396)

- [ ] **Mapas de activación: mostrar comparativa con y sin atención** — agregar el mapa de activación de YOLOv9m estándar junto al de CBAM. Primero verificar si existe imagen baseline en `images/`; si no, generar. (`pages/07_resultados.md` ~línea 311)

- [ ] **Vincular base sintética con marco teórico en slide de Metodología** — la diapositiva de síntesis PLM tiene los datos técnicos pero no hace el vínculo explícito con las propiedades físicas (birrefringencia, retardo óptico) fundamentadas en el marco teórico. (`pages/06_metodologia.md`)

---

## Externo

- [ ] **Revisar y responder correos del profe** — envió información sobre el **Congreso Latino de Óptica** (Bogotá). Evaluar participación y enviar respuesta.
