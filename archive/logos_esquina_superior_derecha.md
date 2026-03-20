# Archivo: logos arriba a la derecha (respaldo)

Fragmento usado antes en la 1.ª diapositiva de **Justificación**: GPIMA + UNAL juntos, esquina **superior derecha**, tamaño compacto.

Si lo pegas en un `pages/*.md`, usa rutas `../images/...`.  
Si lo pegas en `slides.md`, usa `./images/...`.

---

## Desde `pages/` (p. ej. `01_justificacion.md`)

```html
<!-- Logos juntos en esquina superior derecha -->
<div class="pointer-events-none absolute right-6 top-10 z-0 flex items-center gap-3 sm:right-8 sm:top-10 sm:gap-4">
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
```

---

## Desde `slides.md` (raíz del deck)

```html
<!-- Logos juntos en esquina superior derecha -->
<div class="pointer-events-none absolute right-6 top-10 z-0 flex items-center gap-3 sm:right-8 sm:top-10 sm:gap-4">
  <img
    src="./images/logos/gpima_logo.png"
    alt="GPIMA"
    class="h-5 w-auto shrink-0 object-contain opacity-90 sm:h-6"
  />
  <img
    src="./images/logos/unal_logo_lateral.png"
    alt="Universidad Nacional de Colombia"
    class="h-14 w-auto shrink-0 object-contain opacity-90 sm:h-14"
  />
</div>
```
