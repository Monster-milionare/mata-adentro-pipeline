// Mata Adentro: cenarios "rio" (beira de rio) e "roca" (casa no interior + pasto) e novas figuras do folclore.
Object.assign(ROLES, {
  pescador: {pele: '#b8764c', cabelo: '#1c1210', penteado: 'mop', chapeu: 'safari', corChapeu: '#d8b868', camisa: '#3a8a8a', calca: '#6a5a42', bota: '#4a3220', bigode: '#1c1210'},
  moca:     {tipo: 'moca', pele: '#c8895e', cabelo: '#2a160e', penteado: 'rabo', camisa: '#c8486a', calca: '#4a4a7a', bota: '#5a3a2a'},
  iara:     {tipo: 'iara', pele: '#c08a62', cabelo: '#101c18', camisa: '#2aa890', manga: '#c08a62', calca: '#1e8a78', bota: '#1e8a78', cinto: '#e8d060'},
  matinta:  {tipo: 'matinta', pele: '#b8906e', camisa: '#2a2434', manga: '#2a2434', calca: '#1c1824', bota: '#141018', cinto: '#4a3a5a'},
  boitata:  {tipo: 'boitata'},
  boiuna:   {tipo: 'boiuna'},
});

TIPOS.iara = function (c, o, x, y, s, t, falando, amp, olhaX) {
  c.save(); c.translate(x, y); c.scale(s, s);
  const on = Math.sin(t * 1.8) * 10;
  c.fillStyle = o.cabelo; c.beginPath(); c.moveTo(-110, -500); c.quadraticCurveTo(-200, -300 + on, -150, -140); c.quadraticCurveTo(0, -200, 150, -140); c.quadraticCurveTo(200, -300 - on, 110, -500); c.quadraticCurveTo(0, -600, -110, -500); c.closePath(); c.fill();
  c.restore();
  humano(c, Object.assign({}, o, {tipo: undefined, penteado: 'longo'}), x, y, s, t, falando, amp, olhaX);
  c.save(); c.translate(x, y); c.scale(s, s);
  c.fillStyle = lg(c, -90, -170, 120, 20, [[0, '#48d0b0'], [1, '#14685e']]);
  c.beginPath(); c.moveTo(-74, -165); c.quadraticCurveTo(-100, -20, -50, 40); c.quadraticCurveTo(40, 80, 130, 30); c.quadraticCurveTo(170, 0, 190, -40 + on); c.lineTo(250, -90 + on); c.quadraticCurveTo(240, -10, 205, 0); c.quadraticCurveTo(250, 20, 262, 60 - on); c.quadraticCurveTo(200, 40, 160, 40); c.quadraticCurveTo(90, 100, -10, 80); c.quadraticCurveTo(100, 30, 74, -165); c.closePath(); c.fill();
  c.strokeStyle = 'rgba(220,255,240,0.55)'; c.lineWidth = 3; for (let i = 0; i < 4; i++) for (let k = -2; k <= 1; k++) { c.beginPath(); c.arc(k * 34 + 18 + (i % 2) * 17, -128 + i * 30, 18, 0.2, Math.PI - 0.2); c.stroke(); }
  pedra(c, 20, 100, 170, 62, '#5a6a72');
  const fx = -78, fy = -532; for (let i = 0; i < 6; i++) { c.fillStyle = '#ffe8f4'; ell(c, fx + Math.cos(i) * 18, fy + Math.sin(i) * 18, 15, 11, i); c.fill(); } c.fillStyle = '#ffc83a'; ell(c, fx, fy, 11, 11); c.fill();
  c.restore();
};
TIPOS.moca = function (c, o, x, y, s, t, falando, amp, olhaX) {
  c.save(); c.translate(x, y); c.scale(s, s); c.fillStyle = o.cabelo; rrect(c, -138, -520, 276, 250, 110); c.fill(); c.restore();
  humano(c, Object.assign({}, o, {tipo: undefined}), x, y, s, t, falando, amp, olhaX);
};
TIPOS.matinta = function (c, o, x, y, s, t, falando, amp, olhaX) {
  c.save(); c.translate(x, y); c.scale(s, s);
  c.fillStyle = '#1c1826'; c.beginPath(); c.moveTo(-60, -560); c.quadraticCurveTo(-170, -500, -140, -300); c.lineTo(-170, -20); c.lineTo(170, -20); c.lineTo(140, -300); c.quadraticCurveTo(170, -500, 60, -560); c.quadraticCurveTo(0, -610, -60, -560); c.closePath(); c.fill();
  c.restore();
  humano(c, Object.assign({}, o, {tipo: undefined, penteado: 'careca', cabelo: '#b8b4c0'}), x, y, s, t, falando, amp, olhaX);
  c.save(); c.translate(x, y); c.scale(s, s);
  c.strokeStyle = '#1c1826'; c.lineWidth = 46; c.lineCap = 'round'; c.beginPath(); c.arc(0, -448, 124, Math.PI * 0.98, Math.PI * 2.02); c.stroke();
  c.strokeStyle = '#d8d4e0'; c.lineWidth = 7; for (const d of [-1, 1]) { c.beginPath(); c.moveTo(d * 80, -520); c.quadraticCurveTo(d * 108, -440, d * 84, -380); c.stroke(); }
  const bx = Math.cos(t * 1.4) * 210, by = -640 + Math.sin(t * 2.8) * 36, asa = Math.sin(t * 12) * 30;
  c.fillStyle = '#0c0a12'; ell(c, bx, by, 30, 18); c.fill(); ell(c, bx + 28, by - 10, 14, 13); c.fill();
  for (const d of [-1, 1]) { c.beginPath(); c.moveTo(bx, by - 4); c.quadraticCurveTo(bx + d * 40, by - 30 - asa, bx + d * 72, by - asa); c.quadraticCurveTo(bx + d * 38, by - 4, bx, by + 6); c.fill(); }
  c.fillStyle = '#ffd040'; ell(c, bx + 33, by - 13, 4, 4); c.fill();
  c.restore();
};
TIPOS.boitata = function (c, o, x, y, s, t, falando, amp) {
  c.save(); c.translate(x, y); c.scale(s, s);
  glow(c, 0, -240, 480, '#ff8a1a', 0.55);
  const pt = u => [Math.sin(u * 8.5 - t * 3) * (150 * (1 - u * 0.6)) + (1 - u) * 130, -u * 400 - 20];
  for (const [col, k] of [['#e8401a', 1], ['#ff9a1e', 0.68], ['#ffe870', 0.34]]) {
    for (let i = 0; i <= 44; i++) { const u = i / 44, p = pt(u), r = (14 + u * 54) * k; c.fillStyle = col; ell(c, p[0], p[1], r, r); c.fill(); }
  }
  for (let i = 3; i < 40; i += 4) { const p = pt(i / 44); chamaLingua(c, p[0], p[1] - 8, 70 + Math.sin(t * 9 + i) * 22, 16, '#ffb02a', Math.sin(t * 7 + i) * 18); }
  const h = pt(1), ab = falando ? clamp(amp * 1.4, 0.15, 1) : 0.12;
  c.fillStyle = '#f0521c'; ell(c, h[0], h[1] - 36, 108, 86); c.fill();
  c.fillStyle = '#ffb52a'; ell(c, h[0], h[1] - 26, 76, 58); c.fill();
  c.fillStyle = '#3a0a04'; ell(c, h[0], h[1] + 2, 38, 6 + ab * 28); c.fill();
  for (const d of [-1, 1]) { glow(c, h[0] + d * 42, h[1] - 58, 56, '#9affff', 0.8); c.fillStyle = '#eaffff'; ell(c, h[0] + d * 42, h[1] - 58, 24, 18, d * 0.3); c.fill(); c.fillStyle = '#10333a'; ell(c, h[0] + d * 42, h[1] - 58, 6, 15); c.fill(); }
  c.restore();
};
TIPOS.boiuna = function (c, o, x, y, s, t, falando, amp) {
  c.save(); c.translate(x, y); c.scale(s, s);
  const on = Math.sin(t * 1.5) * 14;
  c.strokeStyle = '#12302a'; c.lineCap = 'round'; c.lineWidth = 120; c.beginPath(); c.moveTo(20, -20); c.bezierCurveTo(-90, -130, 110, -220, 0, -330 + on); c.stroke();
  for (const [dx, r] of [[230, 90], [400, 62]]) { c.lineWidth = r * 0.7; c.beginPath(); c.arc(dx, 0, r, Math.PI, Math.PI * 2); c.stroke(); }
  const hy = -360 + on, ab = falando ? clamp(amp * 1.4, 0.15, 1) : 0.1;
  c.fillStyle = '#1a4438'; ell(c, 0, hy, 140, 96); c.fill();
  c.fillStyle = '#5a9a7a'; ell(c, 0, hy + 42, 96, 44); c.fill();
  c.fillStyle = '#0a1410'; ell(c, 0, hy + 56, 52, 6 + ab * 28); c.fill();
  for (const d of [-1, 1]) { glow(c, d * 62, hy - 22, 150, '#ffd860', 0.75); c.fillStyle = '#fff0a0'; ell(c, d * 62, hy - 22, 34, 26); c.fill(); c.fillStyle = '#2a1a04'; ell(c, d * 62, hy - 22, 7, 22); c.fill(); }
  c.strokeStyle = 'rgba(210,240,255,0.6)'; c.lineWidth = 6; for (let i = 0; i < 4; i++) { c.beginPath(); c.ellipse(60, 6 + i * 6, 190 + i * 90 + Math.sin(t * 2 + i) * 20, 22 + i * 7, 0, 0, Math.PI); c.stroke(); }
  c.restore();
};

const WWR = 2592;
function mkR(p, y0, hh, fn) { const w = Math.min(WWR + 200, Math.ceil(W + 2 * 1012 * p + 60)); const [c, x] = off(w, hh); fn(x, w, hh); return {c, p, y: y0}; }
function ceuR(P) {
  return mkR(0.02, -420, H + 620, (x, w, hh) => {
    x.fillStyle = lg(x, 0, 0, 0, hh, [[0, P.sky[0]], [0.5, P.sky[1]], [0.8, P.sky[2]]]); x.fillRect(0, 0, w, hh);
    const sx = w * P.sol[1], sy = H * P.sol[2] + 420;
    glow(x, sx, sy, 420, P.sol[0], 0.55); x.fillStyle = P.sol[0]; ell(x, sx, sy, P.sol[3] * 0.42, P.sol[3] * 0.42); x.fill();
    if (P.noite > 0.25) for (let i = 0; i < 170; i++) { x.fillStyle = 'rgba(235,240,255,' + (rr(0.25, 0.9)) + ')'; ell(x, rr(0, w), rr(0, hh * 0.5), rr(1, 3), rr(1, 3)); x.fill(); }
  });
}
function mataFundo(P, p, y0, hh, base, n, alt) {
  return mkR(p, y0, hh, (x, w, h2) => {
    for (let i = 0; i < n; i++) { const px = rr(0, w), py = h2 - rr(0, 30), h = rr(alt * 0.6, alt); const k = i % 3;
      if (k === 0) araucaria(x, px, py, h, mix(base, '#000000', 0.35), base); else if (k === 1) palmeiraT(x, px, py, h * 0.8, base, mix(base, '#000000', 0.4), base); else arvoreGuardaChuva(x, px, py, h, mix(base, '#000000', 0.35), base, mix(base, P.haze, 0.18)); }
    x.fillStyle = lg(x, 0, h2 - 200, 0, h2, [[0, hex(P.haze, 0)], [1, hex(P.haze, 0.45)]]); x.fillRect(0, h2 - 200, w, 200);
  });
}
function climaR(g, t, P, pk, vagalumes) {
  g.save(); g.globalCompositeOperation = 'lighter';
  for (const p of vagalumes) { const px = ((p.x * W + Math.sin(t * 0.5 + p.f) * 50) % W + W) % W, py = p.y * H + Math.sin(t * 0.8 + p.f) * 30;
    g.fillStyle = pk === 'noite' ? 'rgba(210,255,110,' + (0.4 + 0.4 * Math.sin(t * 3 + p.f)) + ')' : 'rgba(255,246,200,' + (0.18 + 0.18 * Math.sin(t * 2 + p.f)) + ')'; ell(g, px, py, p.r, p.r); g.fill(); }
  g.restore();
  g.fillStyle = P.tom; g.fillRect(0, 0, W, H);
  if (P.noite > 0) { g.fillStyle = 'rgba(4,8,30,' + (P.noite * 0.22) + ')'; g.fillRect(0, 0, W, H); }
}
const luzes = () => { const l = []; for (let i = 0; i < 46; i++) l.push({x: rnd(), y: rr(0.4, 0.92), r: rr(2, 4.5), f: rr(0, 6)}); return l; };
const SLOTSR = {prot: [WWR / 2 + 170, 1560, 1.16], f: [[WWR / 2 - 250, 1470, 1.12], [WWR / 2 + 470, 1490, 1.1], [WWR / 2 - 80, 1740, 1.08]]};

scenes['rio'] = {
  build(horaIn) {
    const pk = HORAM[horaIn] || 'entardecer', P = PALM[pk];
    _s = 9001 + pk.length * 11;
    const ceu = ceuR(P);
    const margemLonge = mataFundo(P, 0.12, 420, 560, P.far, 52, 330);
    const agua = mkR(0.35, 940, 1100, (x, w, hh) => {
      x.fillStyle = lg(x, 0, 0, 0, 620, [[0, P.agua[0]], [1, P.agua[1]]]); x.fillRect(0, 30, w, hh);
      x.fillStyle = hex(P.near, 0.55); for (let i = 0; i < 90; i++) { const px = rr(0, w); ell(x, px, 40, rr(20, 60), rr(16, 90)); x.fill(); }
      for (let i = 0; i < 90; i++) { x.fillStyle = hex(P.sol[0], rr(0.12, 0.5)); const d = rr(60, 560); rrect(x, w * P.sol[1] + rr(-90, 90) * (1 + d / 300), d, rr(30, 130), 6, 3); x.fill(); }
      for (let i = 0; i < 60; i++) { x.fillStyle = 'rgba(255,255,255,' + (rr(0.06, 0.22)) + ')'; rrect(x, rr(0, w), rr(60, 600), rr(50, 190), 4, 2); x.fill(); }
      for (let i = 0; i < 26; i++) { const px = rr(0, w), py = rr(150, 520), r = rr(34, 70); x.fillStyle = mix('#3a9a4a', P.near, 0.3); x.beginPath(); x.ellipse(px, py, r, r * 0.34, 0, 0.35, Math.PI * 2); x.lineTo(px, py); x.fill(); if (i % 4 === 0) { x.fillStyle = '#ffd8ee'; for (let k = -2; k <= 2; k++) { ell(x, px + k * 10, py - 14 + Math.abs(k) * 4, 8, 17, k * 0.4); x.fill(); } } }
    });
    const canoa = mkR(0.7, 1220, 220, (x, w) => {
      const px = w * 0.72; x.fillStyle = '#5a3418'; x.beginPath(); x.moveTo(px - 240, 60); x.quadraticCurveTo(px, 170, px + 240, 60); x.quadraticCurveTo(px, 100, px - 240, 60); x.closePath(); x.fill();
      x.strokeStyle = '#8a5a2a'; x.lineWidth = 8; x.stroke(); x.beginPath(); x.moveTo(px - 40, 20); x.lineTo(px + 150, 130); x.stroke(); x.fillStyle = '#8a5a2a'; ell(x, px + 160, 138, 30, 12, 0.5); x.fill();
    });
    const chao = mkR(1.0, 1420, 800, (x, w, hh) => {
      x.fillStyle = lg(x, 0, 0, 0, hh, [[0, mix('#b89a6a', P.chao[1], 0.35)], [1, mix('#6a4a2a', P.chao[1], 0.5)]]);
      x.beginPath(); x.moveTo(0, 50); for (let i = 0; i <= 60; i++) x.lineTo(i / 60 * w, 36 + Math.sin(i * 0.8) * 18); x.lineTo(w, hh); x.lineTo(0, hh); x.closePath(); x.fill();
      for (let i = 0; i < 260; i++) { const px = rr(0, w), py = rr(30, hh), h = rr(16, 50); x.strokeStyle = pick([P.chao[0], mix(P.chao[1], '#000000', 0.1), '#3f8a30']); x.lineWidth = 3; x.beginPath(); x.moveTo(px, py); x.quadraticCurveTo(px + rr(-8, 8), py - h * 0.6, px + rr(-18, 18), py - h); x.stroke(); }
      for (let i = 0; i < 16; i++) pedra(x, rr(0, w), rr(70, hh - 40), rr(24, 74), rr(18, 46), '#8a8678');
    });
    const frente = mkR(1.28, 520, H - 360, (x, w, hh) => {
      for (const lado of [0, 1]) { const bx = w / 2 + (lado ? 1 : -1) * (W / 2 + 40); for (let i = 0; i < 7; i++) fronde(x, bx, hh - 30 - i * 26, rr(430, 760), (lado ? Math.PI + rr(0.25, 1.1) : -rr(0.25, 1.1)), rr(60, 180), i % 2 ? P.near : mix(P.near, '#ffffff', 0.12), 15); }
    });
    const vg = luzes();
    return {
      WW: WWR, yMin: -420, yMax: H, cyBase: 0, slots: SLOTSR,
      draw(g, t, cam, api) {
        api.layer(ceu); api.layer(margemLonge); api.layer(agua); api.layer(canoa); api.layer(chao);
        api.personagens();
        if (cam.z < 1.3) { g.globalAlpha = clamp((1.3 - cam.z) / 0.15, 0, 1); api.layer(frente); g.globalAlpha = 1; }
        climaR(g, t, P, pk, vg);
      },
    };
  },
};

function casaR(x, px, py, P, noite) {
  x.fillStyle = mix('#c89a6a', P.near, 0.18); x.fillRect(px - 250, py - 300, 500, 300);
  x.fillStyle = mix('#8a6a30', P.near, 0.2); x.beginPath(); x.moveTo(px - 320, py - 285); x.lineTo(px, py - 520); x.lineTo(px + 320, py - 285); x.closePath(); x.fill();
  x.strokeStyle = 'rgba(60,40,10,0.45)'; x.lineWidth = 4; for (let i = -14; i <= 14; i++) { x.beginPath(); x.moveTo(px, py - 515); x.lineTo(px + i * 22, py - 287); x.stroke(); }
  x.fillStyle = '#4a2c18'; x.fillRect(px - 60, py - 200, 110, 200);
  for (const dx of [-180, 140]) { if (noite) glow(x, px + dx, py - 160, 130, '#ffc050', 0.6); x.fillStyle = noite ? '#ffd060' : '#3a4a5a'; x.fillRect(px + dx - 44, py - 205, 88, 88); x.strokeStyle = '#5a3a20'; x.lineWidth = 9; x.strokeRect(px + dx - 44, py - 205, 88, 88); x.beginPath(); x.moveTo(px + dx, py - 205); x.lineTo(px + dx, py - 117); x.stroke(); }
}
scenes['roca'] = {
  build(horaIn) {
    const pk = HORAM[horaIn] || 'noite', P = PALM[pk];
    _s = 7003 + pk.length * 13;
    const ceu = ceuR(P);
    const serra = mkR(0.07, 560, 560, (x, w, hh) => {
      for (const [k, col] of [[0, P.ridge[0]], [1, P.ridge[1]]]) { x.fillStyle = col; x.beginPath(); x.moveTo(0, hh); for (let i = 0; i <= 40; i++) x.lineTo(i / 40 * w, hh - 190 + k * 70 - Math.abs(Math.sin(i * 0.5 + k * 2)) * (150 - k * 50)); x.lineTo(w, hh); x.closePath(); x.fill(); }
    });
    const bosque = mataFundo(P, 0.18, 640, 520, P.far, 38, 270);
    const sitio = mkR(0.5, 640, 800, (x, w, hh) => {
      x.fillStyle = lg(x, 0, 480, 0, hh, [[0, mix(P.chao[0], P.haze, 0.3)], [1, P.chao[1]]]); x.fillRect(0, 490, w, hh - 490);
      casaR(x, w * 0.37, 640, P, pk === 'noite' || pk === 'entardecer');
      arvoreGuardaChuva(x, w * 0.74, 640, 520, mix(P.mid, '#000000', 0.45), P.mid, mix(P.mid, '#ffffff', 0.1));
      x.strokeStyle = mix('#8a5a30', P.near, 0.25); x.lineWidth = 14; for (let px = 0; px < w; px += 110) { x.beginPath(); x.moveTo(px, 740); x.lineTo(px, 640); x.stroke(); } x.lineWidth = 8; for (const py of [665, 700]) { x.beginPath(); x.moveTo(0, py); x.lineTo(w, py); x.stroke(); }
    });
    const chao = mkR(1.0, 1360, 860, (x, w, hh) => {
      x.fillStyle = lg(x, 0, 0, 0, hh, [[0, P.chao[0]], [1, P.chao[1]]]); x.fillRect(0, 30, w, hh);
      x.fillStyle = mix('#b07a48', P.chao[1], 0.35); ell(x, w * 0.5, 280, w * 0.33, 210); x.fill();
      for (let i = 0; i < 620; i++) { const px = rr(0, w), py = rr(40, hh), h = rr(14, 48); x.strokeStyle = pick([P.chao[0], mix(P.chao[0], '#ffffff', 0.18), mix(P.chao[1], '#000000', 0.1)]); x.lineWidth = 3; x.beginPath(); x.moveTo(px, py); x.quadraticCurveTo(px + rr(-8, 8), py - h * 0.6, px + rr(-18, 18), py - h); x.stroke(); }
      for (let i = 0; i < 8; i++) pedra(x, rr(0, w), rr(80, hh - 40), rr(24, 60), rr(18, 36), '#8a8678');
    });
    const vg = luzes();
    return {
      WW: WWR, yMin: -420, yMax: H, cyBase: 0, slots: SLOTSR,
      draw(g, t, cam, api) {
        api.layer(ceu); api.layer(serra); api.layer(bosque); api.layer(sitio); api.layer(chao);
        api.personagens();
        climaR(g, t, P, pk, vg);
      },
    };
  },
};
