// ---------------------------------------------------------------- elenco do folclore
const TIPOS = window.TIPOS || (window.TIPOS = {});
Object.assign(ROLES, {
  // gente do interior (o "voce" das historias)
  caipira:   {pele: '#d8a070', cabelo: '#2a1a10', penteado: 'mop', chapeu: 'safari', corChapeu: '#e0c070', faixa: '#7a4a2a', camisa: '#c85a3a', colete: '#3a5a8a', calca: '#8a6a3a', bota: '#3a2a1a', cinto: '#5a3a1a'},
  ribeirinha:{pele: '#b87850', cabelo: '#1a1010', penteado: 'rabo', lenco: '#e8c040', camisa: '#e8e0d0', calca: '#3a6a8a', bota: '#6a4a2a'},
  menino:    {pele: '#c88a5e', cabelo: '#1c1210', penteado: 'mop', camisa: '#e8d040', calca: '#3a5a9a', bota: '#6a4a2a', escala: 0.82},
  vovo:      {pele: '#d29c76', cabelo: '#e8e4dc', penteado: 'careca', barba: '#e8e4dc', chapeu: 'safari', corChapeu: '#b8a068', camisa: '#e8e0c8', colete: '#6a5a3a', calca: '#5a4a32', bota: '#3a2a1a', oculos: '#2a2a30'},
  // criaturas (desenhadas por TIPOS)
  curupira:  {tipo: 'curupira', pele: '#e8a060', camisa: '#4aa84a', manga: '#e8a060', calca: '#e8a060', bota: '#e8a060', cinto: '#2a7a3a'},
  saci:      {tipo: 'saci', pele: '#4a2e28', camisa: '#4a2e28', manga: '#4a2e28', calca: '#c8281e', bota: '#4a2e28', cinto: '#c8281e', umaPerna: true},
  boto:      {tipo: 'boto', pele: '#f0b0a0', cabelo: '#f4f4f4', penteado: 'mop', camisa: '#f6f6f2', manga: '#f6f6f2', calca: '#f0f0ea', bota: '#d8d0c0', gravata: '#d83a5a', chapeuBoto: '#f6f2e6'},
});

function chamaLingua(c, cx, base, h, w, col, lean) {
  c.fillStyle = col; c.beginPath();
  c.moveTo(cx - w, base); c.quadraticCurveTo(cx - w * 0.9, base - h * 0.5, cx + lean, base - h);
  c.quadraticCurveTo(cx + w * 0.9, base - h * 0.5, cx + w, base); c.closePath(); c.fill();
}
TIPOS.curupira = function (c, o, x, y, s, t, falando, amp, olhaX) {
  // cabelo de fogo (atras da cabeca)
  c.save(); c.translate(x, y + Math.sin(t * 2.2 + (o.fase || 0)) * 3 * 0.4 * s); c.scale(s, s);
  const hy = -450;
  glow(c, 0, hy - 40, 260, '#ff7a2a', 0.45);
  const fl = (i) => Math.sin(t * 7 + i * 1.7) * 14;
  const L = [[-92, 150, 34, -18], [-56, 215, 40, -10], [0, 270, 48, 4], [56, 215, 40, 10], [92, 150, 34, 18], [-28, 235, 30, -6], [28, 235, 30, 6]];
  L.forEach(([dx, h, w, lean], i) => chamaLingua(c, dx, hy - 70, h + fl(i), w, '#e8402a', lean + fl(i) * 0.4));
  [[-56, 160, 26, -6], [0, 210, 34, 3], [56, 160, 26, 6], [-28, 175, 22, -3], [28, 175, 22, 3]].forEach(([dx, h, w, lean], i) => chamaLingua(c, dx, hy - 66, h + fl(i + 3), w, '#ff9a2a', lean));
  [[0, 130, 22, 2], [-28, 100, 16, -2], [28, 100, 16, 2]].forEach(([dx, h, w, lean], i) => chamaLingua(c, dx, hy - 62, h + fl(i + 6), w, '#ffe070', lean));
  c.restore();
  const o2 = Object.assign({}, o, {tipo: undefined, penteado: 'careca', cabelo: '#8a4a1a'});
  humano(c, o2, x, y, s, t, falando, amp, olhaX);
  // saiote de folhas + folhinha no cabelo
  c.save(); c.translate(x, y); c.scale(s, s);
  for (let i = 0; i < 7; i++) { const lx = -66 + i * 22; c.fillStyle = i % 2 ? '#3a9a44' : '#5cc060'; c.beginPath(); c.moveTo(lx - 14, -146); c.lineTo(lx + 14, -146); c.lineTo(lx, -96 + (i % 2) * 12); c.closePath(); c.fill(); c.strokeStyle = 'rgba(0,40,10,0.5)'; c.lineWidth = 3; c.stroke(); }
  c.restore();
};
TIPOS.saci = function (c, o, x, y, s, t, falando, amp, olhaX) {
  const pulo = Math.abs(Math.sin(t * 3.2)) * 26 * s;
  // redemoinho de vento no chao
  c.save(); c.translate(x, y); c.scale(s, s);
  c.strokeStyle = 'rgba(255,255,255,0.38)'; c.lineWidth = 6; c.lineCap = 'round';
  for (let k = 0; k < 4; k++) { const r = 70 + k * 26, a0 = t * 4 + k; c.beginPath(); c.ellipse(0, 4 - k * 10, r, 16 + k * 3, 0, a0, a0 + 3.4); c.stroke(); }
  c.restore();
  humano(c, Object.assign({}, o, {tipo: undefined, penteado: 'careca', cabelo: '#1a1010'}), x, y - pulo, s, t, falando, amp, olhaX);
  // gorro vermelho + cachimbo
  c.save(); c.translate(x, y - pulo); c.scale(s, s);
  const hy = -450;
  c.fillStyle = '#d8281e'; c.beginPath(); c.moveTo(-108, hy - 18); c.quadraticCurveTo(-112, hy - 150, -10, hy - 138); c.quadraticCurveTo(110, hy - 130, 110, hy - 18); c.quadraticCurveTo(0, hy - 60, -108, hy - 18); c.closePath(); c.fill();
  c.strokeStyle = 'rgba(80,0,0,0.5)'; c.lineWidth = 4; c.stroke();
  c.fillStyle = '#d8281e'; c.beginPath(); c.moveTo(80, hy - 100); c.quadraticCurveTo(170 + Math.sin(t * 4) * 14, hy - 120, 190, hy - 40 + Math.sin(t * 5) * 10); c.quadraticCurveTo(150, hy - 80, 70, hy - 70); c.closePath(); c.fill();
  c.fillStyle = '#f0d060'; ell(c, 190, hy - 40 + Math.sin(t * 5) * 10, 10, 10); c.fill();
  c.strokeStyle = '#4a2a14'; c.lineWidth = 9; c.lineCap = 'round'; c.beginPath(); c.moveTo(18, hy + 76); c.lineTo(78, hy + 98); c.stroke();
  c.fillStyle = '#3a2210'; ell(c, 88, hy + 94, 15, 17); c.fill();
  for (let k = 0; k < 4; k++) { const u = (t * 0.6 + k / 4) % 1; c.fillStyle = `rgba(230,230,235,${0.5 * (1 - u)})`; ell(c, 92 + u * 30, hy + 70 - u * 90, 8 + u * 16, 8 + u * 16); c.fill(); }
  c.restore();
};
TIPOS.boto = function (c, o, x, y, s, t, falando, amp, olhaX) {
  humano(c, Object.assign({}, o, {tipo: undefined, chapeu: null}), x, y, s, t, falando, amp, olhaX);
  // chapeu panama branco (cobre o "buraco" na cabeca)
  c.save(); c.translate(x, y); c.scale(s, s);
  const hy = -450;
  c.fillStyle = '#f2ecd8'; ell(c, 0, hy - 70, 160, 36); c.fill();
  c.fillStyle = '#fbf6e6'; c.beginPath(); c.moveTo(-86, hy - 72); c.quadraticCurveTo(-90, hy - 170, 0, hy - 172); c.quadraticCurveTo(90, hy - 170, 86, hy - 72); c.closePath(); c.fill();
  c.fillStyle = '#d83a5a'; c.fillRect(-88, hy - 98, 176, 16);
  c.restore();
};

// Mata Adentro: elenco do folclore (Curupira, Saci, Boto, gente do interior) + cenario "mata" (Mata Atlantica / Amazonia).
// Usa as plantas e utilidades de cena2d_cretaceo.js (fronde, samambaia, palmeiraT, arvoreGuardaChuva...).

const PALM = {
  manha:  {sky: ['#4cb4ea', '#a8e4d8', '#ffeab0'], sol: ['#fff8d0', 0.74, 0.26, 150], haze: '#cdf4de', ridge: ['#86c4b8', '#5fa89a'], vulc: '#6f8a9a', far: '#3f9a7a', mid: '#2a8450', near: '#1d6a3a', chao: ['#6eb43c', '#386f26'], agua: ['#8ee4ee', '#3a9ec0'], tom: 'rgba(255,236,180,0.10)', noite: 0},
  dia:    {sky: ['#2a94e6', '#78cdf4', '#d8f4ff'], sol: ['#ffffff', 0.62, 0.18, 130], haze: '#d4f4f0', ridge: ['#7ec0b8', '#5aa49a'], vulc: '#6a8a9c', far: '#3a9678', mid: '#2a8a4c', near: '#1a7236', chao: ['#78c042', '#34802c'], agua: ['#8ae8f6', '#2a98c8'], tom: 'rgba(255,255,255,0.04)', noite: 0},
  tarde:  {sky: ['#4a92d8', '#f4c474', '#ffe2a0'], sol: ['#fff0b0', 0.28, 0.34, 190], haze: '#ffe0b0', ridge: ['#c8a88a', '#9a8a8a'], vulc: '#8a7a88', far: '#6a8a5a', mid: '#4a7a3a', near: '#2c5a2a', chao: ['#a8aa44', '#5a6a2a'], agua: ['#ffd8a0', '#c8884a'], tom: 'rgba(255,190,100,0.16)', noite: 0},
  entardecer: {sky: ['#2a2c78', '#e0705a', '#ffc070'], sol: ['#ffd890', 0.30, 0.42, 210], haze: '#ffb08a', ridge: ['#b8707a', '#8a5a78'], vulc: '#7a5a74', far: '#5a5a5a', mid: '#3e5a38', near: '#243e2a', chao: ['#8a8a3a', '#4a5a28'], agua: ['#ffb088', '#a85a60'], tom: 'rgba(255,120,80,0.22)', noite: 0.15},
  noite:  {sky: ['#050a22', '#10204a', '#2a3a72'], sol: ['#eaf2ff', 0.68, 0.2, 120], haze: '#4a68b0', ridge: ['#1c2c5c', '#141e44'], vulc: '#1c2c5c', far: '#122a3a', mid: '#0e2230', near: '#08141c', chao: ['#1c3a2c', '#0c1c14'], agua: ['#2a4a8a', '#101c44'], tom: 'rgba(60,100,255,0.16)', noite: 0.55},
};
const HORAM = {manha: 'manha', amanhecer: 'manha', dia: 'dia', tarde: 'tarde', entardecer: 'entardecer', noite: 'noite', madrugada: 'noite', impacto: 'noite', 'ceu-vermelho': 'entardecer'};

scenes['mata'] = {
  build(horaIn) {
    const pk = HORAM[horaIn] || 'manha', P = PALM[pk];
    const WW = 2592, YMIN = -420, YMAX = H;
    const mk = (p, y0, hh, fn) => { const w = Math.min(WW + 200, Math.ceil(W + 2 * 1012 * p + 60)); const [c, x] = off(w, hh); fn(x, w, hh); return {c, p, y: y0}; };
    _s = 424242 + pk.length * 7;

    // ---- ceu
    const sky = mk(0.02, YMIN, H + 420 + 200, (x, w, hh) => {
      x.fillStyle = lg(x, 0, 0, 0, hh, [[0, P.sky[0]], [0.55, P.sky[1]], [1, P.sky[2]]]); x.fillRect(0, 0, w, hh);
      const sy = (H * P.sol[2]) + 420, sxp = w * P.sol[1];
      glow(x, sxp, sy, 520, P.sol[0], 0.55); glow(x, sxp, sy, 240, '#ffffff', 0.55);
      x.fillStyle = P.sol[0]; ell(x, sxp, sy, P.sol[3] * 0.42, P.sol[3] * 0.42); x.fill();
      if (P.noite > 0.25) for (let i = 0; i < 120; i++) { x.fillStyle = `rgba(255,230,200,${rr(0.2, 0.8)})`; ell(x, rr(0, w), rr(0, hh * 0.5), rr(1, 3), rr(1, 3)); x.fill(); }
      // faixas de nuvem altas
      for (let i = 0; i < 6; i++) { const cy = rr(300, 900), cxp = rr(0, w); x.fillStyle = hex(P.haze, 0.22); for (let k = 0; k < 6; k++) { ell(x, cxp + k * 70, cy + Math.sin(k) * 14, 110, 26); x.fill(); } }
    });
    // ---- cordilheiras + vulcao
    const volX = 0.62;
    const ridge = mk(0.07, 260, 700, (x, w, hh) => {
      for (const [k, col] of [[0, P.ridge[0]], [1, P.ridge[1]]]) {
        x.fillStyle = col; x.beginPath(); x.moveTo(0, hh);
        for (let i = 0; i <= 40; i++) { const px = i / 40 * w; x.lineTo(px, hh - 160 - k * 70 - Math.abs(Math.sin(i * 0.7 + k * 2)) * (150 - k * 40) - Math.sin(i * 0.31 + k) * 40); }
        x.lineTo(w, hh); x.closePath(); x.fill();
      }
      x.fillStyle = hex(P.haze, 0.5); x.fillRect(0, hh - 90, w, 90);
    });
    ridge.vx = volX;
    // ---- selva de fundo (silhuetas de arvores)
    const far = mk(0.15, 360, 700, (x, w, hh) => {
      x.fillStyle = hex(P.haze, 0.0);
      for (let i = 0; i < 46; i++) { const px = rr(0, w), py = hh - 40 - rr(0, 40), h = rr(160, 340); const t = i % 3;
        if (t === 0) araucaria(x, px, py, h, mix(P.far, '#000000', 0.3), P.far); else if (t === 1) palmeiraT(x, px, py, h * 0.8, P.far, mix(P.far, '#000000', 0.35), P.far); else arvoreGuardaChuva(x, px, py, h, mix(P.far, '#000000', 0.3), P.far, mix(P.far, P.haze, 0.2)); }
      x.fillStyle = lg(x, 0, hh - 260, 0, hh, [[0, hex(P.haze, 0)], [1, hex(P.haze, 0.62)]]); x.fillRect(0, hh - 260, w, 260);
    });
    // ---- floresta media
    const mid = mk(0.3, 380, 760, (x, w, hh) => {
      for (let i = 0; i < 20; i++) { const px = rr(0, w), py = hh - rr(10, 60), h = rr(420, 640); const t = i % 3;
        if (t === 0) araucaria(x, px, py, h, mix(P.mid, '#000000', 0.45), P.mid); else if (t === 1) arvoreGuardaChuva(x, px, py, h, mix(P.mid, '#000000', 0.45), P.mid, mix(P.mid, '#ffffff', 0.1)); else palmeiraT(x, px, py, h * 0.6, P.mid, mix(P.mid, '#000000', 0.4), mix(P.mid, '#ffffff', 0.08)); }
      for (let i = 0; i < 20; i++) samambaia(x, rr(0, w), hh - rr(0, 40), rr(90, 170), P.mid, mix(P.mid, '#ffffff', 0.12), 9);
      x.fillStyle = lg(x, 0, hh - 220, 0, hh, [[0, hex(P.haze, 0)], [1, hex(P.haze, 0.45)]]); x.fillRect(0, hh - 220, w, 220);
    });
    // ---- lago com reflexo e neblina
    const lago = mk(0.45, 1090, 330, (x, w, hh) => {
      x.fillStyle = lg(x, 0, 0, 0, hh, [[0, P.agua[0]], [1, P.agua[1]]]); x.fillRect(0, 40, w, hh);
      x.fillStyle = lg(x, 0, 0, 0, 90, [[0, hex(P.haze, 0.8)], [1, hex(P.haze, 0)]]); x.fillRect(0, 20, w, 90);
      for (let i = 0; i < 70; i++) { x.strokeStyle = `rgba(255,255,255,${rr(0.1, 0.35)})`; x.lineWidth = rr(2, 4); const px = rr(0, w), py = rr(60, hh - 10); x.beginPath(); x.moveTo(px, py); x.lineTo(px + rr(40, 160), py); x.stroke(); }
      for (let i = 0; i < 22; i++) { x.fillStyle = mix(P.mid, '#000000', 0.2); const px = rr(0, w); x.fillRect(px, 14, 5, rr(40, 90)); ell(x, px + 2, 14, 8, 22); x.fill(); }
    });
    // ---- chao (mesma paralaxe dos personagens)
    const chao = mk(1.0, 1290, YMAX - 1290 + 160, (x, w, hh) => {
      x.fillStyle = lg(x, 0, 0, 0, hh, [[0, P.chao[0]], [1, P.chao[1]]]);
      x.beginPath(); x.moveTo(0, 60); for (let i = 0; i <= 60; i++) x.lineTo(i / 60 * w, 38 + Math.sin(i * 0.9) * 16 + Math.sin(i * 2.3) * 8); x.lineTo(w, hh); x.lineTo(0, hh); x.closePath(); x.fill();
      x.fillStyle = hex('#000000', 0.12); for (let i = 0; i < 14; i++) { ell(x, rr(0, w), rr(60, hh), rr(80, 240), rr(12, 30)); x.fill(); }
      x.fillStyle = hex(P.chao[0], 0.0);
      // trilha de pegadas
      x.fillStyle = hex('#000000', 0.18); for (let i = 0; i < 7; i++) { const px = w * (0.18 + i * 0.09), py = 230 + Math.sin(i) * 20 + i * 24; ell(x, px, py, 30, 20, 0.3); x.fill(); for (let k = -1; k <= 1; k++) { ell(x, px + k * 26, py - 26, 9, 14, k * 0.3); x.fill(); } }
      for (let i = 0; i < 520; i++) { const px = rr(0, w), py = rr(10, hh), h = rr(14, 52) * (0.5 + py / hh); x.strokeStyle = pick([P.chao[0], mix(P.chao[0], '#ffffff', 0.22), mix(P.chao[1], '#000000', 0.1), '#3f8a30']); x.lineWidth = rr(2, 4); x.beginPath(); x.moveTo(px, py); x.quadraticCurveTo(px + rr(-8, 8), py - h * 0.6, px + rr(-18, 18), py - h); x.stroke(); }
      for (let i = 0; i < 60; i++) { const px = rr(0, w), py = rr(10, hh * 0.55), s = rr(10, 20); x.fillStyle = pick(['#ffd23f', '#ff6b8a', '#ffffff', '#c78bff']); ell(x, px, py, s * 0.5, s * 0.4); x.fill(); x.fillStyle = '#6a3a10'; ell(x, px, py, s * 0.18, s * 0.15); x.fill(); }
      for (let i = 0; i < 9; i++) pedra(x, rr(0, w), rr(60, hh - 30), rr(30, 80), rr(20, 50), mix('#8a8678', P.chao[1], 0.15));
      for (let i = 0; i < 10; i++) cogumelo(x, rr(100, w - 100), rr(70, hh - 20), rr(30, 56), pick(['#e8452f', '#e8a02f', '#c85ad8']));
    });
    // ---- moldura em primeiro plano: folhas gigantes nas laterais (p alto)
    const frente = mk(1.28, 520, YMAX - 520 + 160, (x, w, hh) => {
      for (const lado of [0, 1]) {
        const bx = w / 2 + (lado ? 1 : -1) * (W / 2 + 30), by = hh - 20;
        for (let i = 0; i < 8; i++) fronde(x, bx, by - i * 22, rr(520, 880), (lado ? Math.PI + rr(0.25, 1.1) : -rr(0.25, 1.1)), rr(60, 190), i % 2 ? P.near : mix(P.near, '#ffffff', 0.12), 15);
        for (let i = 0; i < 4; i++) cipo(x, w / 2 + (lado ? 1 : -1) * (W / 2 - rr(0, 230)), -10, rr(260, 560), mix(P.near, '#ffffff', 0.05));
      }
      for (const lado of [0, 1]) for (let i = 0; i < 5; i++) { const px = w / 2 + (lado ? 1 : -1) * (W / 2 - rr(-30, 140)); samambaia(x, px, hh - rr(0, 30), rr(200, 330), mix(P.near, '#ffffff', 0.12), P.near, 9); }
    });

    // ---- dinossauros animados (fora do alcance dos personagens)
    const sauros = [{x: 0.34, y: 0.88, s: 0.66, cor: 0.55, v: 8, ph: 0}, {x: 0.52, y: 0.9, s: 0.5, cor: 0.6, v: 6, ph: 1.7}, {x: 0.74, y: 0.86, s: 0.58, cor: 0.55, v: 7, ph: 3.1}];
    const ptes = []; for (let i = 0; i < 5; i++) ptes.push({x: rr(0, 1), y: rr(0.08, 0.3), s: rr(0.12, 0.28), v: rr(0.012, 0.03), f: rr(0, 6)});
    const poeira = []; for (let i = 0; i < 70; i++) poeira.push({x: rr(0, 1), y: rr(0, 1), r: rr(1.5, 4.5), v: rr(8, 24), f: rr(0, 6)});
    const fumos = []; for (let i = 0; i < 9; i++) fumos.push({f: i / 9});

    function aScreen(L, lx, ly, cam) {  // ponto da camada -> tela
      const zl = 1 + (cam.z - 1) * (0.25 + 0.75 * L.p), sx = (cam.cx - WW / 2) * L.p, sy = (cam.cy - H / 2) * L.p * 0.8;
      return [W / 2 + (lx - L.c.width / 2 - sx) * zl, H / 2 + (L.y + ly - H / 2 - sy) * zl, zl];
    }
    const ESCOLHAS = {impacto: 1, noite: 1, entardecer: 0.4};
    return {
      WW, yMin: YMIN, yMax: YMAX, cyBase: 0,
      slots: {prot: [WW / 2 + 150, 1540, 1.18], f: [[WW / 2 - 270, 1480, 1.14], [WW / 2 + 450, 1470, 1.14], [WW / 2 - 60, 1730, 1.1]]},
      draw(g, t, cam, api) {
        api.layer(sky);
        // nuvens suaves
        for (let i = 0; i < 6; i++) { const [px, py, z] = aScreen(sky, ((i * 0.23 + t * 0.004) % 1.2) * sky.c.width - 100, 520 + (i % 3) * 150, cam); g.fillStyle = hex(P.haze, 0.38); for (let k = 0; k < 5; k++) { ell(g, px + k * 60 * z, py + Math.sin(k) * 12, 80 * z, 26 * z); g.fill(); } }
        api.layer(ridge);
        api.layer(far);
        api.layer(mid);
        api.layer(lago);
        api.layer(chao);
        api.personagens();
        if (cam.z < 1.3) { g.globalAlpha = clamp((1.3 - cam.z) / 0.15, 0, 1); api.layer(frente); g.globalAlpha = 1; }
        // brilho, poeira e brasas
        g.save(); g.globalCompositeOperation = 'lighter';
        for (const p of poeira) { const px = ((p.x * W + Math.sin(t * 0.5 + p.f) * 40 + t * p.v) % W + W) % W, py = ((p.y * H + t * p.v * (pk === 'noite' ? -0.25 : -0.6)) % H + H) % H;
          g.fillStyle = pk === 'impacto' || pk === 'noite' ? `rgba(${200 + (p.f * 8) | 0},255,90,${0.45 + 0.45 * Math.sin(t * 3 + p.f)})` : `rgba(255,248,200,${0.25 + 0.25 * Math.sin(t * 2 + p.f)})`; ell(g, px, py, p.r, p.r); g.fill(); }
        g.restore();
        g.fillStyle = P.tom; g.fillRect(0, 0, W, H);
        if (P.noite > 0) { g.fillStyle = `rgba(10,0,10,${P.noite * 0.35})`; g.fillRect(0, 0, W, H); }
      },
    };
  },
};
