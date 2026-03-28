---
transition: slide-up
deckSection: resultados
---

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-[#262626] sm:text-2xl">Secuencia 1: <span class="font-mono text-[#3981BF]">OpenPolScope</span> — meiosis I</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-[#A0BF5E]" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-2">
  <div class="grid grid-cols-2 gap-4 max-w-[92%] mx-auto">
    <figure class="m-0 min-w-0">
      <div class="aspect-video w-full min-w-0 overflow-hidden rounded-lg bg-black/5 shadow-md ring-1 ring-gray-900/10">
        <iframe
          class="h-full w-full border-0"
          width="560" height="315"
          src="https://www.youtube.com/embed/lKPqXQZH1k0?si=8EwhGaEoiE1JphMS&autoplay=1&mute=1&playsinline=1&loop=1&playlist=lKPqXQZH1k0"
          title="YOLOv9m-CBAM — Secuencia 1 OpenPolScope meiosis I"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
      <figcaption lang="es" class="mt-1 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
        <span class="font-semibold text-[#262626]">Video 1.</span>
        YOLOv9m-CBAM — detección en secuencia 1 (<span class="font-mono">OpenPolScope</span>, meiosis I).
      </figcaption>
    </figure>
    <figure class="m-0 min-w-0">
      <div class="aspect-video w-full min-w-0 overflow-hidden rounded-lg bg-black/5 shadow-md ring-1 ring-gray-900/10">
        <iframe
          class="h-full w-full border-0"
          width="560" height="315"
          src="https://www.youtube.com/embed/a1OraXCZyKk?si=vNbHO_YAyjI98A__&autoplay=1&mute=1&playsinline=1&loop=1&playlist=a1OraXCZyKk"
          title="YOLOv9m — Secuencia 1 OpenPolScope meiosis I"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
      <figcaption lang="es" class="mt-1 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
        <span class="font-semibold text-[#262626]">Video 2.</span>
        YOLOv9m — detección en secuencia 1 (<span class="font-mono">OpenPolScope</span>, meiosis I).
      </figcaption>
    </figure>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full border-collapse text-[0.65rem] leading-snug text-[#262626] sm:text-[0.68rem]">
      <thead>
        <tr class="border-b-2 border-[#262626]">
          <th class="py-1 pr-3 text-left font-semibold">Clase</th>
          <th class="px-2 py-1 text-center font-semibold" colspan="3">YOLOv9m (100 fotogr.)</th>
          <th class="px-2 py-1 text-center font-semibold" colspan="3">YOLOv9m-CBAM (100 fotogr.)</th>
        </tr>
        <tr class="border-b border-gray-300 text-[0.62rem] text-gray-500">
          <th class="py-0.5 pr-3 text-left font-normal"></th>
          <th class="px-2 py-0.5 text-center font-medium">Detecc.</th>
          <th class="px-2 py-0.5 text-center font-medium">Fotogr.</th>
          <th class="px-2 py-0.5 text-center font-medium">Confianza</th>
          <th class="px-2 py-0.5 text-center font-medium">Detecc.</th>
          <th class="px-2 py-0.5 text-center font-medium">Fotogr.</th>
          <th class="px-2 py-0.5 text-center font-medium">Confianza</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-gray-200">
          <td class="py-0.5 pr-3 font-medium">Zona pelúcida (zp)</td>
          <td class="px-2 py-0.5 text-center">100</td>
          <td class="px-2 py-0.5 text-center">100</td>
          <td class="px-2 py-0.5 text-center">[0,48; 0,92]</td>
          <td class="px-2 py-0.5 text-center">100</td>
          <td class="px-2 py-0.5 text-center">100</td>
          <td class="px-2 py-0.5 text-center font-semibold text-[#3981BF]">[0,94; 0,95]</td>
        </tr>
        <tr class="border-b border-gray-200 bg-[#3981BF]/5">
          <td class="py-0.5 pr-3 font-semibold text-[#3981BF]">Límite citopl. (citolimit)</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">4</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">4</td>
          <td class="px-2 py-0.5 text-center">[0,51; 0,89]</td>
          <td class="px-2 py-0.5 text-center font-semibold text-[#3981BF]">100</td>
          <td class="px-2 py-0.5 text-center font-semibold text-[#3981BF]">100</td>
          <td class="px-2 py-0.5 text-center font-semibold text-[#3981BF]">[0,90; 0,96]</td>
        </tr>
        <tr class="border-b border-gray-200">
          <td class="py-0.5 pr-3 font-medium">Huso meiótico (spindle)</td>
          <td class="px-2 py-0.5 text-center">74</td>
          <td class="px-2 py-0.5 text-center">73</td>
          <td class="px-2 py-0.5 text-center">[0,58; 0,95]</td>
          <td class="px-2 py-0.5 text-center">74</td>
          <td class="px-2 py-0.5 text-center">74</td>
          <td class="px-2 py-0.5 text-center">[0,45; 0,89]</td>
        </tr>
        <tr>
          <td class="py-0.5 pr-3 font-medium">Cuerpo polar (pb)</td>
          <td class="px-2 py-0.5 text-center">5</td>
          <td class="px-2 py-0.5 text-center">5</td>
          <td class="px-2 py-0.5 text-center">[0,46; 0,82]</td>
          <td class="px-2 py-0.5 text-center">6</td>
          <td class="px-2 py-0.5 text-center">6</td>
          <td class="px-2 py-0.5 text-center">[0,46; 0,58]</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="rounded-md border-l-4 border-[#3981BF] bg-[#3981BF]/10 px-2 py-0.5">
    <p class="text-[0.72rem] leading-snug text-[#262626]">
      <span class="font-bold uppercase tracking-wide text-[#3981BF]">Diferencia más marcada:</span> <span class="font-semibold">Citolimit:</span> YOLOv9m lo detecta en solo 4 fotogramas; YOLOv9m-CBAM lo detecta en <span class="font-semibold text-[#3981BF]">todos los 100</span> con confianza estable [0,90; 0,96].
    </p>
  </div>
</div>
</div>
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
deckSection: resultados
---

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-[#262626] sm:text-2xl">Secuencia 2: <span class="font-mono text-[#3981BF]">OOSIGHT-Spindle View</span> — ICSI</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-[#A0BF5E]" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-2">
  <div class="grid grid-cols-2 gap-4 max-w-[92%] mx-auto">
    <figure class="m-0 min-w-0">
      <div class="aspect-video w-full min-w-0 overflow-hidden rounded-lg bg-black/5 shadow-md ring-1 ring-gray-900/10">
        <iframe
          class="h-full w-full border-0"
          width="560" height="315"
          src="https://www.youtube.com/embed/mO-GYGNMnw8?autoplay=1&mute=1&playsinline=1&loop=1&playlist=mO-GYGNMnw8"
          title="YOLOv9m-CBAM — Secuencia 2 OOSIGHT-Spindle View ICSI"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
      <figcaption lang="es" class="mt-1 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
        <span class="font-semibold text-[#262626]">Video 3.</span>
        YOLOv9m-CBAM — detección en secuencia 2 (<span class="font-mono">OOSIGHT-Spindle View</span>, ICSI).
      </figcaption>
    </figure>
    <figure class="m-0 min-w-0">
      <div class="aspect-video w-full min-w-0 overflow-hidden rounded-lg bg-black/5 shadow-md ring-1 ring-gray-900/10">
        <iframe
          class="h-full w-full border-0"
          width="560" height="315"
          src="https://www.youtube.com/embed/01CZ1IEIHjI?autoplay=1&mute=1&playsinline=1&loop=1&playlist=01CZ1IEIHjI"
          title="YOLOv9m — Secuencia 2 OOSIGHT-Spindle View ICSI"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
      <figcaption lang="es" class="mt-1 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
        <span class="font-semibold text-[#262626]">Video 4.</span>
        YOLOv9m — detección en secuencia 2 (<span class="font-mono">OOSIGHT-Spindle View</span>, ICSI).
      </figcaption>
    </figure>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full border-collapse text-[0.65rem] leading-snug text-[#262626] sm:text-[0.68rem]">
      <thead>
        <tr class="border-b-2 border-[#262626]">
          <th class="py-1 pr-3 text-left font-semibold">Clase</th>
          <th class="px-2 py-1 text-center font-semibold" colspan="3">YOLOv9m (146 fotogr.)</th>
          <th class="px-2 py-1 text-center font-semibold" colspan="3">YOLOv9m-CBAM (150 fotogr.)</th>
        </tr>
        <tr class="border-b border-gray-300 text-[0.62rem] text-gray-500">
          <th class="py-0.5 pr-3 text-left font-normal"></th>
          <th class="px-2 py-0.5 text-center font-medium">Detecc.</th>
          <th class="px-2 py-0.5 text-center font-medium">Fotogr.</th>
          <th class="px-2 py-0.5 text-center font-medium">Confianza</th>
          <th class="px-2 py-0.5 text-center font-medium">Detecc.</th>
          <th class="px-2 py-0.5 text-center font-medium">Fotogr.</th>
          <th class="px-2 py-0.5 text-center font-medium">Confianza</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-gray-200">
          <td class="py-0.5 pr-3 font-medium">Zona pelúcida (zp)</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">18</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">17</td>
          <td class="px-2 py-0.5 text-center">[0,41; 0,80]</td>
          <td class="px-2 py-0.5 text-center font-semibold text-[#3981BF]">150</td>
          <td class="px-2 py-0.5 text-center font-semibold text-[#3981BF]">150</td>
          <td class="px-2 py-0.5 text-center font-semibold text-[#3981BF]">[0,81; 0,96]</td>
        </tr>
        <tr class="border-b border-gray-200 bg-[#3981BF]/5">
          <td class="py-0.5 pr-3 font-semibold text-[#3981BF]">Límite citopl. (citolimit)</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">1</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">1</td>
          <td class="px-2 py-0.5 text-center">0,44</td>
          <td class="px-2 py-0.5 text-center font-semibold text-[#3981BF]">148</td>
          <td class="px-2 py-0.5 text-center font-semibold text-[#3981BF]">148</td>
          <td class="px-2 py-0.5 text-center font-semibold text-[#3981BF]">[0,67; 0,95]</td>
        </tr>
        <tr class="border-b border-gray-200">
          <td class="py-0.5 pr-3 font-medium">Huso meiótico (spindle)</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">538*</td>
          <td class="px-2 py-0.5 text-center">144</td>
          <td class="px-2 py-0.5 text-center">[0,40; 0,94]</td>
          <td class="px-2 py-0.5 text-center">151†</td>
          <td class="px-2 py-0.5 text-center">146</td>
          <td class="px-2 py-0.5 text-center">[0,42; 0,87]</td>
        </tr>
        <tr>
          <td class="py-0.5 pr-3 font-medium">Cuerpo polar (pb)</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">61*</td>
          <td class="px-2 py-0.5 text-center text-red-500">44</td>
          <td class="px-2 py-0.5 text-center">[0,40; 0,87]</td>
          <td class="px-2 py-0.5 text-center">3</td>
          <td class="px-2 py-0.5 text-center">3</td>
          <td class="px-2 py-0.5 text-center">[0,55; 0,75]</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="7" class="pt-1 text-[0.6rem] text-gray-500 leading-snug">* YOLOv9m: numerosos falsos positivos sobre la herramienta de inyección. † YOLOv9m-CBAM: 7 falsos positivos de spindle.</td>
        </tr>
      </tfoot>
    </table>
  </div>
  <div class="rounded-md border-l-4 border-[#3981BF] bg-[#3981BF]/10 px-2 py-0.5">
    <p class="text-[0.72rem] leading-snug text-[#262626]">
      <span class="font-bold uppercase tracking-wide text-[#3981BF]">Diferencia más marcada:</span> <span class="font-semibold">YOLOv9m</span> confunde la aguja de inyección con huso meiótico (538 detecc., ~FP masivos) y detecta zp solo en 17 fotogramas. <span class="font-semibold text-[#3981BF]">YOLOv9m-CBAM</span> detecta zp y citolimit en toda la secuencia, incluidos los tramos de inyección y deformación, con solo 7 FP de spindle.
    </p>
  </div>
</div>
</div>
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
deckSection: resultados
---

<div class="slide-deck-shell">
<header class="mb-2 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-[#262626] sm:text-2xl">Secuencia 3: <span class="font-mono text-[#3981BF]">OptimFert</span> — <span class="font-mono text-[#3981BF]">Prague IVF</span></h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-[#A0BF5E]" />
</header>
<div class="flex min-h-0 flex-1 flex-col gap-2">
  <div class="grid grid-cols-2 gap-4">
    <figure class="m-0 min-w-0">
      <div class="aspect-video w-full min-w-0 overflow-hidden rounded-lg bg-black/5 shadow-md ring-1 ring-gray-900/10">
        <iframe
          class="h-full w-full border-0"
          width="560" height="315"
          src="https://www.youtube.com/embed/HsXPM1nb5y4?autoplay=1&mute=1&playsinline=1&loop=1&playlist=HsXPM1nb5y4"
          title="YOLOv9m-CBAM — Secuencia 3 OptimFert Prague IVF"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
      <figcaption lang="es" class="mt-1 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
        <span class="font-semibold text-[#262626]">Video 5.</span>
        YOLOv9m-CBAM — detección en secuencia 3 (<span class="font-mono">OptimFert</span>, <span class="font-mono">Prague IVF</span>).
      </figcaption>
    </figure>
    <figure class="m-0 min-w-0">
      <div class="aspect-video w-full min-w-0 overflow-hidden rounded-lg bg-black/5 shadow-md ring-1 ring-gray-900/10">
        <iframe
          class="h-full w-full border-0"
          width="560" height="315"
          src="https://www.youtube.com/embed/f007H86yr2A?autoplay=1&mute=1&playsinline=1&loop=1&playlist=f007H86yr2A"
          title="YOLOv9m — Secuencia 3 OptimFert Prague IVF"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
      <figcaption lang="es" class="mt-1 text-left text-[10px] leading-snug text-gray-600 sm:text-[11px]">
        <span class="font-semibold text-[#262626]">Video 6.</span>
        YOLOv9m — detección en secuencia 3 (<span class="font-mono">OptimFert</span>, <span class="font-mono">Prague IVF</span>).
      </figcaption>
    </figure>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full border-collapse text-[0.65rem] leading-snug text-[#262626] sm:text-[0.68rem]">
      <thead>
        <tr class="border-b-2 border-[#262626]">
          <th class="py-1 pr-3 text-left font-semibold">Clase</th>
          <th class="px-2 py-1 text-center font-semibold" colspan="3">YOLOv9m (660 fotogr.)</th>
          <th class="px-2 py-1 text-center font-semibold" colspan="3">YOLOv9m-CBAM (660 fotogr.)</th>
        </tr>
        <tr class="border-b border-gray-300 text-[0.62rem] text-gray-500">
          <th class="py-0.5 pr-3 text-left font-normal"></th>
          <th class="px-2 py-0.5 text-center font-medium">Detecc.</th>
          <th class="px-2 py-0.5 text-center font-medium">Fotogr.</th>
          <th class="px-2 py-0.5 text-center font-medium">Confianza</th>
          <th class="px-2 py-0.5 text-center font-medium">Detecc.</th>
          <th class="px-2 py-0.5 text-center font-medium">Fotogr.</th>
          <th class="px-2 py-0.5 text-center font-medium">Confianza</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-gray-200">
          <td class="py-0.5 pr-3 font-medium">Zona pelúcida (zp)</td>
          <td class="px-2 py-0.5 text-center">660</td>
          <td class="px-2 py-0.5 text-center">660</td>
          <td class="px-2 py-0.5 text-center">[0,48; 0,95]</td>
          <td class="px-2 py-0.5 text-center font-semibold text-[#3981BF]">660</td>
          <td class="px-2 py-0.5 text-center font-semibold text-[#3981BF]">660</td>
          <td class="px-2 py-0.5 text-center font-semibold text-[#3981BF]">[0,95; 0,97]</td>
        </tr>
        <tr class="border-b border-gray-200 bg-[#3981BF]/5">
          <td class="py-0.5 pr-3 font-semibold text-[#3981BF]">Límite citopl. (citolimit)</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">0</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">0</td>
          <td class="px-2 py-0.5 text-center text-gray-400">—</td>
          <td class="px-2 py-0.5 text-center font-semibold text-[#3981BF]">660</td>
          <td class="px-2 py-0.5 text-center font-semibold text-[#3981BF]">660</td>
          <td class="px-2 py-0.5 text-center font-semibold text-[#3981BF]">[0,94; 0,96]</td>
        </tr>
        <tr class="border-b border-gray-200">
          <td class="py-0.5 pr-3 font-medium">Huso meiótico (spindle)</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">1710*</td>
          <td class="px-2 py-0.5 text-center">660</td>
          <td class="px-2 py-0.5 text-center">[0,40; 0,95]</td>
          <td class="px-2 py-0.5 text-center">570</td>
          <td class="px-2 py-0.5 text-center">570</td>
          <td class="px-2 py-0.5 text-center">[0,50; 0,90]</td>
        </tr>
        <tr>
          <td class="py-0.5 pr-3 font-medium">Cuerpo polar (pb)</td>
          <td class="px-2 py-0.5 text-center text-red-500 font-semibold">238*</td>
          <td class="px-2 py-0.5 text-center text-red-500">208</td>
          <td class="px-2 py-0.5 text-center">[0,40; 0,65]</td>
          <td class="px-2 py-0.5 text-center font-semibold text-[#3981BF]">510</td>
          <td class="px-2 py-0.5 text-center font-semibold text-[#3981BF]">510</td>
          <td class="px-2 py-0.5 text-center font-semibold text-[#3981BF]">[0,61; 0,82]</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="7" class="pt-1 text-[0.6rem] text-gray-500 leading-snug">* YOLOv9m: numerosos falsos positivos (logotipo superpuesto y herramienta de micromanipulación).</td>
        </tr>
      </tfoot>
    </table>
  </div>
  <div class="rounded-md border-l-4 border-[#3981BF] bg-[#3981BF]/10 px-2 py-0.5">
    <p class="text-[0.72rem] leading-snug text-[#262626]">
      <span class="font-bold uppercase tracking-wide text-[#3981BF]">Diferencia más marcada:</span> <span class="font-semibold">YOLOv9m</span> nunca detecta citolimit, genera 1710 detecc. de spindle (FP masivos por logotipo y herramienta) y pierde el huso real desde el fotograma 300. <span class="font-semibold text-[#3981BF]">YOLOv9m-CBAM</span> detecta las cuatro clases en toda la secuencia con confianzas altas y estables.
    </p>
  </div>
</div>
</div>
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
deckSection: resultados
---

<header class="mb-3 text-left">
  <h1 class="mt-0 text-xl font-bold leading-tight tracking-tight text-[#262626] sm:text-2xl">Análisis cualitativo</h1>
  <div class="mt-1.5 h-0.5 w-20 max-w-full rounded-full bg-[#A0BF5E]" />
</header>

<div class="max-w-4xl text-left text-base leading-relaxed text-[#262626] sm:text-[0.95rem]">
  <p>
    <em>(Diapositiva 2)</em> — Incluye aquí figuras, detecciones ejemplo, casos representativos o errores típicos sobre imágenes de microscopía polarizada.
  </p>
</div>

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
