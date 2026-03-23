---
transition: slide-up
deckSection: marco
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-2xl font-bold leading-tight tracking-tight text-unal-gray sm:text-3xl">El ovocito y el huso meiótico</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>

<p class="mb-1.5 max-w-3xl text-left text-sm font-normal leading-snug text-unal-gray sm:mb-2 sm:max-w-4xl sm:text-base sm:leading-snug">
  El ovocito es la célula femenina más grande y se caracteriza por su gran tamaño y su contenido citoplasmático. El huso meiótico es una estructura celular que se forma en la meiosis y que ayuda a separar los cromosomas homólogos.
</p>

</div>

<!-- Logos abajo a la derecha (misma distribución que Agenda y resto del deck) -->
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img
    src="../images/logos/gpima_logo.png"
    alt="GPIMA"
    class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6"
  />
  <img
    src="../images/logos/unal_logo_lateral.png"
    alt="Universidad Nacional de Colombia"
    class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14"
  />
</div>

---
transition: slide-up
deckSection: marco
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-2xl font-bold leading-tight tracking-tight text-unal-gray sm:text-3xl">Recuperación cuantitativa del retardo</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>

<p class="mb-2 max-w-5xl text-left text-xs leading-snug text-unal-gray sm:text-sm sm:leading-snug">
  <span class="font-semibold">Algoritmo de cinco tomas</span> (PLM cuantitativa): a partir de las intensidades
  <span class="font-medium">I₀…I₄</span> se definen <span class="font-medium">A</span> y <span class="font-medium">B</span>; con ellas se obtienen la retardancia
  <span class="font-medium">Δ</span> y el azimut <span class="font-medium">φ</span>.
</p>

<div class="plm-three-col-grid">
  <div class="relative z-10 min-w-0 space-y-3 text-left plm-katex-col-left text-unal-gray">
  <p class="plm-section-label">Retardancia y azimut</p>

$$
\begin{aligned}
\Delta &= \arctan\!\left(\sqrt{A^2 + B^2}\right) && \text{si } I_1 + I_2 - 2I_0 \geq 0, \\[0.3em]
\Delta &= 180^\circ - \arctan\!\left(\sqrt{A^2 + B^2}\right) && \text{si } I_1 + I_2 - 2I_0 \lt 0, \\[0.3em]
\phi &= \tfrac{1}{2}\arctan\!\left(\frac{A}{B}\right). &&
\end{aligned}
$$

  <p class="plm-section-label mt-3">Términos auxiliares</p>

$$
\begin{gathered}
A \equiv \frac{I_1 - I_2}{I_1 + I_2 - 2I_0}\,\tan\frac{\chi}{2} = \sin 2\phi\,\tan \Delta \\[0.35em]
B \equiv \frac{I_4 - I_3}{I_4 + I_3 - 2I_0}\,\tan\frac{\chi}{2} = \cos 2\phi\,\tan \Delta
\end{gathered}
$$
  </div>

  <div class="relative z-0 min-w-0 flex flex-col items-center justify-start self-start px-0.5">
  <p class="plm-section-label-center">Retardo óptico</p>
  <figure class="m-0 flex w-full min-w-0 flex-col items-stretch">
  <img
    src="/Users/salperezate/Documents/GitHub/thesis/figures/Diagramas_Tesis-Página-2.png"
    alt="Ejemplo de imagen de retardo óptico"
    class="plm-retardo-img"
  />
  <figcaption lang="es" class="plm-figcaption">
  <span class="font-semibold">Fig. 4.</span>
  Mapa de magnitud de retardo (algoritmo de cinco cuadros, corrección de fondo) de un astero de microtúbulos reconstituido desde centrosoma; haces brillantes sobre centrosoma oscuro. Blanco ≈ 1,2&nbsp;nm de retardo de birrefringencia; negro, birrefringencia nula.
  <span class="mt-1 block font-medium opacity-100">Fuente: Shribak &amp; Oldenbourg (2003) <span class="font-semibold text-unal-blue">[13]</span>. En la tesis aparece como Fig.&nbsp;2-4 (cap.&nbsp;2).</span>
  </figcaption>
  </figure>
  </div>

  <div class="relative z-10 min-w-0 text-left plm-katex-col-right text-unal-gray">
  <p class="plm-section-label">Ecuaciones de intensidad</p>

$$
I_0(x, y) = \tfrac{1}{2}\,\tau(x,y)\,I_{\text{max}}\bigl[1 - \cos \Delta(x,y)\bigr] + I_{\text{min}}(x,y)
$$

$$
I_1(x, y) = \tfrac{1}{2}\,\tau(x,y)\,I_{\text{max}}\bigl[1 - \cos\chi\cos\Delta(x,y) + \sin\chi\sin 2\phi(x,y)\sin\Delta(x,y)\bigr] + I_{\text{min}}(x,y)
$$

$$
I_2(x, y) = \tfrac{1}{2}\,\tau(x,y)\,I_{\text{max}}\bigl[1 - \cos\chi\cos\Delta(x,y) - \sin\chi\sin 2\phi(x,y)\sin\Delta(x,y)\bigr] + I_{\text{min}}(x,y)
$$

$$
I_3(x, y) = \tfrac{1}{2}\,\tau(x,y)\,I_{\text{max}}\bigl[1 - \cos\chi\cos\Delta(x,y) - \sin\chi\cos 2\phi(x,y)\sin\Delta(x,y)\bigr] + I_{\text{min}}(x,y)
$$

$$
I_4(x, y) = \tfrac{1}{2}\,\tau(x,y)\,I_{\text{max}}\bigl[1 - \cos\chi\cos\Delta(x,y) + \sin\chi\cos 2\phi(x,y)\sin\Delta(x,y)\bigr] + I_{\text{min}}(x,y)
$$
  </div>

</div>

</div>

<!-- Logos abajo a la derecha (misma distribución que Agenda y resto del deck) -->
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img
    src="../images/logos/gpima_logo.png"
    alt="GPIMA"
    class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6"
  />
  <img
    src="../images/logos/unal_logo_lateral.png"
    alt="Universidad Nacional de Colombia"
    class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14"
  />
</div>

---
transition: slide-up
deckSection: marco
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-2xl font-bold leading-tight tracking-tight text-unal-gray sm:text-3xl">Redes Neuronales para Detección de Objetos</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>

</div>

<!-- Logos abajo a la derecha (misma distribución que Agenda y resto del deck) -->
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img
    src="../images/logos/gpima_logo.png"
    alt="GPIMA"
    class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6"
  />
  <img
    src="../images/logos/unal_logo_lateral.png"
    alt="Universidad Nacional de Colombia"
    class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14"
  />
</div>

---
transition: slide-left
deckSection: marco
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="mt-0 text-2xl font-bold leading-tight tracking-tight text-unal-gray sm:text-3xl">Métricas de evaluación de la detección de objetos</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-unal-green" />
</header>

</div>

<!-- Logos abajo a la derecha (misma distribución que Agenda y resto del deck) -->
<div class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4">
  <img
    src="../images/logos/gpima_logo.png"
    alt="GPIMA"
    class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6"
  />
  <img
    src="../images/logos/unal_logo_lateral.png"
    alt="Universidad Nacional de Colombia"
    class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14"
  />
</div>
