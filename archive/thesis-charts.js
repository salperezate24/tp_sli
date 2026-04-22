// thesis-charts.js — DumbbellPlot SVG, IVF Chart, footer injection

function dumbbell(rows, opts = {}) {
  const {
    W = 1640, labelW = 330, deltaW = 130,
    leftLabel = 'Control (sin TL)', rightLabel = 'Con transferencia de aprendizaje',
    leftColor = '#9ca3af', rightColor = '#3981BF', compact = false
  } = opts;
  const RH = compact ? 44 : 60, DOT = 9;
  const CL = labelW, CW = W - labelW - deltaW;
  const PAD = 52, SEP = 16;
  const rowYs = [];
  let y = PAD;
  rows.forEach((r, i) => { if (i > 0 && r.separator) y += SEP; rowYs.push(y + RH / 2); y += RH; });
  const H = y + PAD;
  const xp = v => CL + v * CW;

  let s = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">`;
  // Grid
  [0, .25, .5, .75, 1].forEach(t => s += `<line x1="${xp(t)}" y1="${PAD * .5}" x2="${xp(t)}" y2="${H - PAD * .5}" stroke="#EDECEA" stroke-width="1.5"/>`);
  // Legend
  s += `<circle cx="${CL + 10}" cy="${PAD * .35}" r="7" fill="${leftColor}"/>`;
  s += `<text x="${CL + 25}" y="${PAD * .35 + 6}" font-size="24" fill="#6B7280" font-family="IBM Plex Sans,sans-serif">${leftLabel}</text>`;
  s += `<circle cx="${CL + 280}" cy="${PAD * .35}" r="7" fill="${rightColor}"/>`;
  s += `<text x="${CL + 295}" y="${PAD * .35 + 6}" font-size="24" fill="#6B7280" font-family="IBM Plex Sans,sans-serif">${rightLabel}</text>`;
  // Rows
  rows.forEach((r, i) => {
    const ry = rowYs[i], lc = r.leftColor || leftColor, rc = r.rightColor || rightColor;
    const lx = xp(r.leftVal), rx = xp(r.rightVal);
    if (r.separator && i > 0) {
      const sy = ry - RH / 2 - SEP / 2;
      s += `<line x1="${CL - 4}" y1="${sy}" x2="${CL + CW}" y2="${sy}" stroke="#E5E7EB" stroke-width="1" stroke-dasharray="5 3"/>`;
    }
    s += `<text x="${CL - 14}" y="${ry + 7}" font-size="${compact ? 24 : 25}" text-anchor="end" fill="${r.highlight ? '#3981BF' : '#374151'}" font-weight="${r.highlight ? 700 : 400}" font-family="IBM Plex Sans,sans-serif">${r.label}</text>`;
    s += `<line x1="${Math.min(lx, rx)}" y1="${ry}" x2="${Math.max(lx, rx)}" y2="${ry}" stroke="#E5E7EB" stroke-width="5"/>`;
    s += `<circle cx="${lx}" cy="${ry}" r="${DOT}" fill="${lc}" stroke="white" stroke-width="2.5"/>`;
    s += `<circle cx="${rx}" cy="${ry}" r="${DOT}" fill="${rc}" stroke="white" stroke-width="2.5"/>`;
    const d = r.rightVal - r.leftVal, dc = d >= 0 ? rc : '#dc2626';
    s += `<text x="${W - deltaW + 8}" y="${ry + 7}" font-size="24" fill="${dc}" font-weight="600" font-family="IBM Plex Sans,sans-serif">${d >= 0 ? '+' : ''}${d.toFixed(3)}</text>`;
  });
  // Axis
  const ax = H - PAD * .65;
  s += `<line x1="${CL}" y1="${ax}" x2="${CL + CW}" y2="${ax}" stroke="#D1D5DB" stroke-width="1.5"/>`;
  [0, .25, .5, .75, 1].forEach(t => {
    s += `<line x1="${xp(t)}" y1="${ax}" x2="${xp(t)}" y2="${ax + 5}" stroke="#D1D5DB" stroke-width="1.5"/>`;
    s += `<text x="${xp(t)}" y="${ax + 30}" font-size="24" text-anchor="middle" fill="#9CA3AF" font-family="IBM Plex Sans,sans-serif">${t.toFixed(2)}</text>`;
  });
  return s + '</svg>';
}

function ivfChart() {
  const bars = [
    { l: '<35', v: 50.3, c: '#4a8f1e' }, { l: '35–37', v: 40.5, c: '#7aab10' },
    { l: '38–40', v: 28.1, c: '#d49010' }, { l: '41–42', v: 14.9, c: '#d05818' },
    { l: '>42', v: 4.1, c: '#dc2626' }
  ];
  const W = 700, H = 420, PL = 72, PB = 68, PT = 48, PR = 20;
  const CW = W - PL - PR, CH = H - PT - PB, bw = CW / bars.length, mx = 55;
  const yp = v => PT + CH - (v / mx) * CH;
  let s = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">`;
  [0, 20, 40].forEach(v => {
    const y = yp(v);
    s += `<line x1="${PL}" y1="${y}" x2="${W - PR}" y2="${y}" stroke="#EDECEA" stroke-width="1.5"/>`;
    s += `<text x="${PL - 8}" y="${y + 7}" font-size="24" text-anchor="end" fill="#9CA3AF" font-family="IBM Plex Sans,sans-serif">${v}%</text>`;
  });
  bars.forEach((b, i) => {
    const bx = PL + i * bw + 18, bwi = bw - 36, by = yp(b.v), bh = CH - (by - PT);
    s += `<rect x="${bx}" y="${by}" width="${bwi}" height="${bh}" rx="5" fill="${b.c}" opacity="0.88"/>`;
    s += `<text x="${bx + bwi / 2}" y="${by - 11}" font-size="24" font-weight="700" text-anchor="middle" fill="${b.c}" font-family="IBM Plex Sans,sans-serif">${b.v}%</text>`;
    s += `<text x="${bx + bwi / 2}" y="${H - PB + 30}" font-size="24" text-anchor="middle" fill="#374151" font-family="IBM Plex Sans,sans-serif">${b.l}</text>`;
  });
  s += `<line x1="${PL}" y1="${H - PB}" x2="${W - PR}" y2="${H - PB}" stroke="#D1D5DB" stroke-width="1.5"/>`;
  return s + '</svg>';
}

function _initCharts() {
  const el = id => document.getElementById(id);

  if (el('ivf')) el('ivf').innerHTML = ivfChart();

  if (el('db1')) el('db1').innerHTML = dumbbell([
    { label: 'YOLOv9m', leftVal: .328, rightVal: .902, highlight: true },
    { label: 'YOLOv8m', leftVal: .393, rightVal: .899 },
    { label: 'YOLOv11s', leftVal: .511, rightVal: .892 },
    { label: 'YOLOv11l', leftVal: .425, rightVal: .875 },
    { label: 'YOLOv9s', leftVal: .521, rightVal: .862 },
    { label: 'YOLOv12s', leftVal: .195, rightVal: .855 },
    { label: 'YOLOv11m', leftVal: .501, rightVal: .849 },
    { label: 'YOLOv10m', leftVal: .375, rightVal: .843 },
    { label: 'YOLOv10s', leftVal: .310, rightVal: .834 },
    { label: 'YOLOv8s', leftVal: .232, rightVal: .833 },
    { label: 'RT-DETR-R101', leftVal: .448, rightVal: .902, highlight: true, separator: true },
    { label: 'RT-DETR-R50', leftVal: .348, rightVal: .890 },
    { label: 'RT-DETR-L', leftVal: .503, rightVal: .857 },
  ], { compact: true });

  if (el('db2')) el('db2').innerHTML = dumbbell([
    { label: 'Zona pelúcida', leftVal: .457, rightVal: .995 },
    { label: 'Huso meiótico', leftVal: .504, rightVal: .993 },
    { label: 'Lím. citoplasmático', leftVal: .344, rightVal: .979 },
    { label: 'Cuerpo polar', leftVal: .007, rightVal: .642, highlight: true, leftColor: '#dc2626' },
  ], { compact: false });

  if (el('db3')) el('db3').innerHTML = dumbbell([
    { label: 'YOLOv9m', leftVal: .328, rightVal: .902, highlight: true },
    { label: 'YOLOv9m-CBAM', leftVal: .470, rightVal: .868, rightColor: '#A0BF5E' },
    { label: 'YOLOv9m-Triple Att.', leftVal: .499, rightVal: .878, rightColor: '#A0BF5E' },
    { label: 'YOLO11m', leftVal: .501, rightVal: .849, separator: true },
    { label: 'YOLO11m-Cons. Att.', leftVal: .319, rightVal: .846, rightColor: '#A0BF5E' },
    { label: 'YOLO11m-Trans. Enh.', leftVal: .381, rightVal: .841, rightColor: '#A0BF5E' },
  ], { compact: false, rightLabel: 'Con TL  (azul = estándar · verde = atención)' });

  // Inject footer logos on every slide
  document.querySelectorAll('deck-stage > section .slide').forEach(slide => {
    if (!slide.querySelector('.s-footer')) {
      const f = document.createElement('div');
      f.className = 's-footer';
      f.innerHTML = '<img src="images/logos/gpima_logo.png" alt="GPIMA"><img src="images/logos/unal_logo_lateral.png" alt="UNAL">';
      slide.appendChild(f);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _initCharts);
} else {
  _initCharts();
}
