# Notas — Reunión ~20 mar (transcripción `audio_marzo20.txt`)

**Contexto:** Revisión rápida de diapositivas de sustentación + cierre de un experimento sobre **escala/tamaño del ovocito** en la red.  
**Interlocutores:** **Profesor (director)** · **Estudiante (Salomón)** — según turnos en la transcripción.

---

## Resumen ejecutivo del documento

1. **Bloque inicial (técnico, no solo diapositivas):** El director pide un **experimento de sensibilidad al tamaño**: tomar la imagen con el ovocito detectado, **recortar el ovocito**, **escalar ese recorte a la mitad o al doble**, volver a **pegarlo en una imagen del mismo tamaño global** y observar si la red falla. Objetivo: **saber en qué rango de tamaño “vive” la detección** y no confundir efectos de **atención** con simple **re-escalado** (relación píxel–micra). Complemento: **“prueba de escritorio”** sobre los resultados experimentales (reflexión explícita, no solo ejecutar código).

2. **Diapositivas — tono general:** Lo narrativo (justificación, estado del arte, discurso) puede ser **menos pegado al documento** que ecuaciones, método y resultados; hay que **enganchar al evaluador** con contexto claro. Varias secciones piden **más figuras, menos texto**, **palabras clave** en diapositiva y **discurso oral** para el resto.

3. **Orden y contenido por secciones:** Ajustes de **portada** (énfasis en el estudiante como ingeniero, afiliaciones). **Diapositiva previa a la agenda** para **agradecer a jurados** y nombrarlos. **Justificación** con **imágenes y datos** (FIV, etc.), orden **biología → visión por computador → detalle**, y mensajes de **costo, invasividad, rapidez** (el ovocito “muere” si el algoritmo es lento). **Marco teórico** en **4 temas** acordados, con **ecuaciones de polarización completas** y sitio para **YOLO (columna vertebral / cuello / cabeza)**. **Estado del arte** muy trabajado: **listado explícito de arquitecturas**, **datos sintéticos** con énfasis en **base de Domingo Mery**, **YOLO + modelos de atención/Transformers**, **tablas comparativas** (p. ej. atención vs tiempo real). **Hipótesis** alineada con detección + caracteres morfológicos + madurez, con **definición de madurez** en marco teórico (videos del director). **Metodología** con **referencias a artículos de rangos de medida**, **números** (p. ej. orden de magnitud de imágenes sintéticas), **diagrama** del flujo sintético → real / control, **hiperparámetros y optimizadores**, **diapositiva resumen** al final. **Resultados** con **curvas/tabla**, **métricas por clase**, orden **de mejor a peor**; **atención** en **dos diapositivas** mostrando el aporte. **Conclusiones** con **ritmo**, ejemplos de **dónde funciona** y **por qué mejora**.

4. **Logística presentación:** **Video embebido en PDF** es problemático; sugerencia: **GIF** o **enlace**, o evitar depender de video en el PC del salón. **Simulacro** la semana siguiente; entregar avance **el jueves**.

---

## Qué pide el profesor (director) — por tema

### Experimento / validación (antes o aparte del deck)

- Recortar el ovocito, **reducir o agrandar** ese recorte (p. ej. mitad / doble), **reinsertar** en imagen de **igual dimensión global** para ver **cuándo falla** la red y acotar la **zona de tamaño** donde opera bien.
- No quedarse solo con el término “atención”: interpretar qué implica en **tamaño aparente** del objeto.
- Hacer **prueba de escritorio** / reflexión explícita sobre resultados experimentales (no solo “correr y listo”).
- En resultados donde se ve la **atención**: relacionar con **tamaño estimado** del ovocito (p. ej. si el recuadro es ~10% del campo, implicaciones para detección).

### Portada y formato general

- No tratar cada palabra del título con **mayúscula** (“tipo título inglés”); el **foco** es el estudiante como **ingeniero** (no solo “estudiante”).
- Director con **nombre pequeño** abajo.
- Texto institucional: **Universidad Nacional de Colombia, Sede Medellín**; **Facultad de Minas**; mencionar **Departamento de Ciencias de la Computación** donde corresponda.
- Título del trabajo: algo como **deep learning / red neuronal profunda** y **microscopía polarizada** (formulación ya alineada en la conversación).

### Antes de la agenda / agenda

- **Opcional:** diapositiva **antes de la agenda** con **evaluadores nombrados** (aunque no esté en la agenda impresa).
- **Primero:** **agradecer el tiempo** dedicado a evaluar el trabajo.

### Justificación

- Debe haber **imágenes**; no solo texto de contexto.
- Incluir **datos** (p. ej. volumen de procedimientos FIV / contexto nacional o mundial).
- **Orden del discurso sugerido:** primero **biología**, luego **visión por computador**, después el detalle del problema.
- Reducir texto largo: más **palabras clave** y **gráficos**; el texto largo puede ir al **discurso**.
- Mensajes claros: técnicas **más baratas**; **invasividad** y alternativas; **rapidez** — un algoritmo muy lento implica que **el ovocito no aguanta** el tiempo de observación.
- Conectar con por qué la técnica de **polarización** importa en el flujo (p. ej. ICSI / uso médico) — ideas que también pueden **anticiparse** en justificación y **retomarse** en estado del arte.

### Marco teórico

- Cuatro bloques acordados en conversación: **embriología + uso médico**; **polarización** (con **ecuaciones**, no solo una frase sobre retardo); **redes neuronales / detección**; **métricas** (mención explícita a **IoU**, **AP50**, **AP75**, etc.).
- Incluir la **parte matemática más importante** de polarización (ecuaciones completas donde aplique).
- **YOLO** debe explicarse aquí: **backbone (columna vertebral), cuello, cabeza** — qué son y qué hacen.
- **Definición de “ovocito maduro”** (p. ej. metáfase II, cuerpo polar, etc.) para **despejar ambigüedades** respecto a la hipótesis — enlazado a **videos** que el director envió.

### Estado del arte

- Textos guía están bien pero hay que **desarrollarlos**; no quedarse en superficial.
- **Polarización** para evaluar **madurez** del ovocito; estructuras relevantes (huso, zona pelúcida, cuerpo polar, etc.).
- **Datos sintéticos:** dar **énfasis** a la **base de datos de Domingo Mery**; incluir **imágenes**; distinguir **sintéticas irreales** vs entrenar con algo **parecido a uso médico real**.
- **Listado explícito de familias de redes** (p. ej. **Faster R-CNN**, **YOLO**, etc.): narrativa tipo “tras revisar **muchos** artículos, se concluye…”, **sin afirmaciones vagas** (Germán puede **preguntar fuerte** aquí).
- Cerrar el hilo con **YOLO** y también **modelos de atención / Transformers**.
- Posible **tabla** (atención vs desempeño en tiempo real, etc.) — material de **seminarios previos** en el grupo.
- Relacionar con el **por qué** se elige el enfoque final.

### Pregunta de investigación e hipótesis

- Títulos claros: **Pregunta de investigación** e **Hipótesis** (formato con **negrillas** / secciones bien marcadas).
- Hipótesis alrededor de: **detección** en imagen de microscopía polarizada + **identificación de características morfológicas** + **evidencia de madurez** (matizar “madurez” según lo definido en marco teórico).

### Objetivos

- Redacción **no egocéntrica** en primera persona si aplica; **descriptiva** del trabajo.
- **Ecuaciones de polarización** mostradas **completas** donde corresponda.
- Incluir **montaje** experimental / de adquisición si está modelado en la tesis.

### Metodología

- En **estado del arte** (o transición a metodología): citar **artículos científicos** de donde salen **rangos de medida** (p. ej. **nanómetros**, rangos) para **defender** el uso de microscopía polarizada y la construcción de datos.
- Mencionar **limitación** de datos reales y **proyecto** o contexto donde se explicitó (según documento).
- Describir **base sintética**, **referencias** a decisiones tomadas de la literatura.
- **Otras bases:** videos reales, imágenes de **papers** para evaluación — puede ser **delicado** ante jurado pero es lo que hay.
- Dar **números** (p. ej. orden de magnitud **500.000** imágenes totales vs subconjunto usado por **costo/plata** de entrenamiento).
- **Experimentos:** preentrenamiento con sintético, **transferencia** a reales, **control** (pesos solo sintéticos sobre reales); pide **diagrama** tipo el que menciona “Vega”.
- Listar **redes** usadas (p. ej. YOLO 8, 9, 10, 12…), **hiperparámetros**, **optimizadores** — en metodología; **tablas de resultados** principalmente en **resultados** (extractos o **dos mejores** si la tabla es enorme).
- **Diapositiva final** de metodología: **esquema** que **resuma** todo el flujo.

### Resultados

- **Curvas de pérdida** generales o, si no, **tablas**; elegir **mejores** experimentos.
- **Graficar métricas por clase** (p. ej. AP por clase) si aplica.
- **Cualitativos** también.
- **Modelos con atención (desarrollados):** **dos diapositivas**, **completas**, con **diagrama** (módulos, bloques) — es el **aporte**; caracterización un poco más **formal/matemática** si se puede.
- Orden de presentación: **mejores métricas primero** (no al revés).

### Conclusiones

- Dar **ritmo**: no terminar en tono negativo; cerrar con **dónde funciona**, **en qué condiciones mejora el tiempo/calidad**, **un par de imágenes**.
- Se puede **dividir** en varias diapositivas si hace falta.

### Trabajo futuro

_(Sin comentarios específicos en la transcripción.)_

### Referencias

_(Sin comentarios específicos en la transcripción.)_

### Logística y formato de presentación

- **Conteo de diapositivas / títulos:** revisar si los **títulos** cuentan en el límite; tema abierto a **revaluar**.
- **Video vs PDF:** exportar a PDF complica **video embebido**; recomendación del director: **GIF** o **enlace**, o **no depender** de abrir video en el PC del salón.
- **Simulacro** la semana siguiente; enviar avance el **jueves**.

---

## Qué dijo / planteó el estudiante (resumen)

- Cuestiona si el experimento de **reducir el ovocito** aplica igual porque en el pipeline hay **transfer learning** y **redimensionado al entrar** al entrenamiento.
- Aclara dimensiones reales de la imagen de ejemplo (**~536×516**), cercanas a lo que ya usaban.
- Propone orden en justificación: **biología primero**, luego **visión por computador**, luego qué hay que identificar en el óvulo.
- Resume los **cuatro temas** del marco teórico (embriología/uso médico, polarización, redes, métricas) y menciona **diseño** visual en polarización.
- En estado del arte: **brecha** (pocas redes específicas en el área), **datos sintéticos** por privacidad y costo; duda de **orden** (YOLO al final vs flujo); confirma tener **Faster** y variantes; **Domingo** (Mery) para la base.
- **Pregunta e hipótesis** alineadas con lo conversado.
- **Objetivos** ya en borrador; debe **ver videos** del director sobre madurez/metáfase.
- **Metodología:** esquema con bases de datos, entrenamiento, evaluación en **videos**; limitación de datos reales; **1100** vs **500k** imágenes; experimentos por etapas; dónde poner **tablas** (prefiere resultados para tablas grandes).
- **Resultados:** separar metodología vs tablas finales; hablar **cuerpo polar**, etc.
- **Formato:** plantilla actual (**Slidev** / exportación); problema de **video en PDF** y de **datos** si no puede ser binario con video; considera **pasar plantilla** o adaptar formato.
- **Disponibilidad** para simulacro: posible **conflicto con jueves** la semana siguiente.

---

## Accionables ordenados por sección del deck

### Portada

- [ ] Ajustar título: **no** capitalizar cada palabra al estilo inglés; mantener lectura clara.
- [ ] Rol: **Ingeniero mecánico** (énfasis profesional, no solo “estudiante”).
- [ ] Director con **tipografía pequeña** en su sitio.
- [ ] Bloque institucional: **Universidad Nacional de Colombia, Sede Medellín**, **Facultad de Minas**, **Departamento de Ciencias de la Computación**.

### Pre-agenda / apertura

- [ ] Opcional: **1 diapositiva** antes de la agenda con **nombres de jurados/evaluadores**.
- [ ] **Primera intervención:** agradecer el **tiempo** dedicado a evaluar.

### Agenda

_(Sin pedidos adicionales más allá del orden general de la reunión.)_

### Justificación

- [ ] Incluir **imágenes** y **datos** (estadísticas FIV / procedimientos, etc.).
- [ ] Orden sugerido: **biología → visión por computador → problema concreto**.
- [ ] Reducir párrafos; más **palabras clave** y **gráficos**; texto largo al **discurso**.
- [ ] Mensajes: **costo**, **invasividad/alternativas**, **necesidad de rapidez** (tiempo de vida del ovocito).

### Marco teórico

- [ ] Cubrir los **4 bloques** (embriología/uso médico; polarización con **ecuaciones completas**; detección/YOLO; métricas IoU, AP50, AP75…).
- [ ] Polarización: **ecuaciones de retardo**, no solo una frase.
- [ ] **YOLO:** explicar **backbone, cuello, cabeza** y su rol.
- [ ] Definir **madurez del ovocito** (criterios biológicos) para alinear con hipótesis — apoyarse en **videos** enviados por el director.

### Estado del arte

- [ ] Desarrollar texto guía; **figuras** donde falten.
- [ ] Línea **polarización ↔ madurez** y estructuras (huso, ZP, cuerpo polar, etc.).
- [ ] **Datos sintéticos:** énfasis en **base Domingo Mery** + **capturas/ejemplos**.
- [ ] **Listado explícito** de tipos de redes (p. ej. Faster R-CNN, YOLO, …) con narrativa de revisión bibliográfica seria.
- [ ] Cerrar con **YOLO** + **atención/Transformers** y **tabla comparativa** (p. ej. vs tiempo real) si existe del seminario.
- [ ] Conectar **justificación** (por qué polarización en el flujo clínico) con este capítulo.

### Pregunta de investigación e hipótesis

- [ ] Títulos muy claros: **Pregunta** / **Hipótesis** (negrillas o secciones).
- [ ] Hipótesis: detección + **características morfológicas** + **evidencia de madurez** (coherente con definiciones del marco teórico).

### Objetivos

- [ ] Redacción **descriptiva** del trabajo (evitar tono egocéntrico si aplica).
- [ ] **Ecuaciones** de polarización **completas** en el lugar adecuado.
- [ ] Mencionar **montaje** / adquisición si aplica.

### Metodología

- [ ] Citar **artículos** con **rangos de medida** (nm, etc.) que fundamentan criterios y datos.
- [ ] Declarar **limitación** de datos reales y **proyecto** de referencia.
- [ ] Describir: sintético, **referencias** de decisiones, **otras bases** (videos, papers).
- [ ] **Cifras:** orden de magnitud de imágenes (p. ej. **500k** vs subconjunto efectivo y motivo económico).
- [ ] **Diagrama** del flujo: sintético → transferencia → evaluación; **experimento control** (pesos sintéticos sobre reales).
- [ ] Listar **redes** (YOLO8–12, etc.), **hiperparámetros**, **optimizadores**; tablas **resumidas** o **top-2**; detalle numérico fuerte en **Resultados**.
- [ ] **Última diapositiva** de la sección: **esquema resumen** del pipeline metodológico.

### Resultados

- [ ] **Curvas** (p. ej. pérdida) o tablas de entrenamiento; elegir **mejores** corridas.
- [ ] **Métricas por clase** donde aplique.
- [ ] **Cualitativos** (detecciones, fallos típicos).
- [ ] **Atención (modelos propios):** **2 diapositivas**, diagrama **completo** (módulos/aporte).
- [ ] Orden: **mejores resultados primero**.

### Conclusiones

- [ ] Cierre con **tono positivo y claro**: dónde funciona, qué mejora, **ejemplos visuales**.
- [ ] Partir en **varias diapositivas** si mejora la lectura.

### Trabajo futuro

<!-- (vacío — sin comentarios en la transcripción) -->

### Referencias

<!-- (vacío — sin comentarios en la transcripción) -->

### Experimento complementario (validación / tesis)

- [ ] Recorte de ovocito → escala **×0.5 / ×2** → reinsertar en lienzo **misma resolución** → medir fallos de la red.
- [ ] **Prueba de escritorio** escrita sobre resultados (tamaño aparente vs mapas de atención).

### Logística

- [ ] Preferir **GIF** o **enlace** frente a video embebido en PDF; minimizar riesgo en PC del salón.
- [ ] Enviar avance el **jueves**; preparar **simulacro** semana siguiente; coordinar **día** (posible conflicto jueves).

---

*Generado a partir de `archive/audio_marzo20.txt`. Los nombres propios mal transcritos (p. ej. “Germán”, “Domingo”, “Vega”) conviene contrastarlos con actas o correos del director.*
