/* ════════════════════════════════════════════════════════════
   AZURE LATCH — Datos editables
   Acá está todo lo que se puede cambiar:
   nombre de la liga, clubes, personajes, extras.
   Editá, recargá la página y listo.
   ════════════════════════════════════════════════════════════ */
window.LigaData = {
  info: {
    name: "Azure Latch",
    season: "2026",
    description: "Liga oficial de Azure Latch. 1 ganador: el mejor club.",
    links: {
      discord: "https://discord.gg/azure-latch",
      instagram: "https://instagram.com/azure_latch",
      twitter: "https://twitter.com/azure_latch",
      telegram: "https://t.me/azure_latch",
      web: "https://azurelatch.com"
    },
    creator: {
      name: "Azure Latch",
      discord: "azure_latch",
      instagram: "azure_latch",
      twitter: "azure_latch",
      note: "Creador: Azure Latch"
    },
    associated: [
      { name: "Azure Cloud Season", url: "https://azurelatch.com/cloud-season" },
      { name: "Azure Latch Nations", url: "https://azurelatch.com/nations" }
    ]
  },

  /* ── Los 16 Clubes (tabla de enfrentamiento) ─────────────── */
  clubs: [
    { id: "club-01", name: "Azure Latch Atlas",   color: "#2f5fd1" },
    { id: "club-02", name: "Azure Latch Nova",    color: "#7c3aed" },
    { id: "club-03", name: "Azure Latch Verge",   color: "#d9851f" },
    { id: "club-04", name: "Azure Latch Zeta",    color: "#2563eb" },
    { id: "club-05", name: "Azure Latch Arra",    color: "#b91c1c" },
    { id: "club-06", name: "Azure Latch Orra",    color: "#16a34a" },
    { id: "club-07", name: "Azure Latch Vora",    color: "#0d9488" },
    { id: "club-08", name: "Azure Latch Rion",    color: "#db2777" },
    { id: "club-09", name: "Azure Latch Touva",   color: "#ca8a04" },
    { id: "club-10", name: "Azure Latch Kove",    color: "#4b5563" },
    { id: "club-11", name: "Azure Latch Rela",    color: "#1d4ed8" },
    { id: "club-12", name: "Azure Latch Onda",    color: "#a855f7" },
    { id: "club-13", name: "Azure Latch Jett",    color: "#dc2626" },
    { id: "club-14", name: "Azure Latch Sney",    color: "#15803d" },
    { id: "club-15", name: "Azure Latch Viam",    color: "#0891b2" },
    { id: "club-16", name: "Azure Latch tracts",  color: "#475569" }
  ],

  /* ── Los Personajes = los jugadores de Azure Latch ───────── */
  players: [
    { id: "pj-01", name: "Alden Platforms",  club: "club-01", pos: "Delantero",    goles: 12, asist: 6, defensa: 4, atajadas: 2,  msg: "Nadie me pasa" },
    { id: "pj-02", name: "Nebo del Valle",   club: "club-02", pos: "Portero",      goles: 0,  asist: 2, defensa: 9, atajadas: 41, msg: "Invisible aquí, todo alto" },
    { id: "pj-03", name: "Rion Little",      club: "club-03", pos: "Defensa",      goles: 2,  asist: 1, defensa: 15, atajadas: 5,  msg: "Aquí pa'voidar" },
    { id: "pj-04", name: "Tova Storm",       club: "club-04", pos: "Mediocampista",goles: 4,  asist: 9, defensa: 8,  atajadas: 3,  msg: "El qué y el cómo" },
    { id: "pj-05", name: "Bel high",         club: "club-05", pos: "Delantero",    goles: 21, asist: 3, defensa: 2,  atajadas: 1,  msg: "Soñé en la copa" },
    { id: "pj-06", name: "TalorAEK",         club: "club-06", pos: "Delantero",    goles: 10, asist: 8, defensa: 3,  atajadas: 1,  msg: "Clásico 10 clásicos" },
    { id: "pj-07", name: "Verie merch",      club: "club-07", pos: "Mediocampista",goles: 2,  asist: 12, defensa: 5,  atajadas: 0,  msg: "Ahí estoy, gas" },
    { id: "pj-08", name: "Jordie",           club: "club-08", pos: "Defensa",      goles: 0,  asist: 1, defensa: 11, atajadas: 2,  msg: "Wiiiiiind" },
    { id: "pj-09", name: "Crea una",         club: "club-09", pos: "Mediocampista",goles: 3,  asist: 5, defensa: 6,  atajadas: 2,  msg: "Me gusta generar" },
    { id: "pj-10", name: "NalaZ",            club: "club-10", pos: "Defensa",      goles: 1,  asist: 0, defensa: 14, atajadas: 6,  msg: "Expandir más" },
    { id: "pj-11", name: "Searr",            club: "club-11", pos: "Delantero",    goles: 8,  asist: 4, defensa: 2,  atajadas: 0,  msg: "Sparkle" },
    { id: "pj-12", name: "Fractal",          club: "club-12", pos: "Delantero",    goles: 6,  asist: 7, defensa: 2,  atajadas: 1,  msg: "Oberón" },
    { id: "pj-13", name: "D graphics",       club: "club-13", pos: "Portero",      goles: 0,  asist: 0, defensa: 12, atajadas: 25, msg: "Gunner" },
    { id: "pj-14", name: "Sayge",            club: "club-14", pos: "Defensa",      goles: 1,  asist: 2, defensa: 13, atajadas: 3,  msg: "Mito" },
    { id: "pj-15", name: "Xionite",          club: "club-15", pos: "Mediocampista",goles: 2,  asist: 6, defensa: 5,  atajadas: 2,  msg: "Jefe de la fila 8" },
    { id: "pj-16", name: "Azriel",           club: "club-16", pos: "Delantero",    goles: 5,  asist: 5, defensa: 1,  atajadas: 0,  msg: "Against the System" }
  ],

  /* ── Fórmula de puntos (tabla de clubes) ─────────────────── */
  form: {
    goles: 1,                // 1 punto por gol del equipo
    asistencias: 1,          // 1 punto por asistencia
    accionesDefensivas: 0.5, // 0,5 por acción defensiva
    atajadas: 1,             // 1 punto por atajada
    posBonus: { 1: 5, 2: 3, 3: 1, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0,
                9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0 }
  }
};

/* ── Datos derivados para las tablas ─────────────────────── */
window.LigaData.standings = window.LigaData.clubs.map((club, i) => ({
  rank: 0,
  club: club.name,
  color: club.color,
  pts: 0,
  goles: 0,
  asist: 0,
  def: 0,
  ata: 0
}));

window.LigaData.bracket = (function () {
  const clubs = window.LigaData.clubs;
  const qf = [];
  // Quarterfinals: 8 matches: 1v16, 2v15, 3v14, 4v13, 5v12, 6v11, 7v10, 8v9
  const pairs = [[0,15],[1,14],[2,13],[3,12],[4,11],[5,10],[6,9],[7,8]];
  for (const [a, b] of pairs) qf.push({ a: clubs[a], b: clubs[b], winner: null });
  // Semifinals: 4 matches
  const sf = [[0,1],[2,3],[4,5],[6,7]].map(([a, b]) => ({ a: null, b: null, winner: null }));
  // Final: 1 match
  const final = { a: null, b: null, winner: null };
  return { qf, sf, final };
})();
