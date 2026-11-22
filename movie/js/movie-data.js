/* ═══════════════════════════════════════════════════════════
   AZURE LATCH — Datos del sitio cinematográfico
   Editá acá todos los textos. Recargá y listo.
   ═══════════════════════════════════════════════════════════ */

const LIGA = window.LigaData || { clubs: [], players: [] };

window.MovieData = {
  title: "AZURE LATCH",
  subtitle: "LA PELÍCULA",
  kicker: "UNA LIGA. TRES HISTORIAS. UN CAMPEÓN.",
  tagline: "16 clubes. 3 episodios. Un solo destino: lo más alto de la tabla.",
  date: "2026.11.06 — ESTRENO MUNDIAL",

  nav: [
    { label: "TOP", href: "#top", group: "inicio" },
    { label: "SPECIAL", href: "#episode", group: "inicio" },
    { label: "NEWS", href: "#news", group: "inicio" },
    { label: "MEDIA", href: "#movie", group: "inicio" },
    { label: "EPISODE", href: "#episode", group: "historia" },
    { label: "MOVIE", href: "#movie", group: "historia" },
    { label: "INTRODUCTION", href: "#introduction", group: "historia" },
    { label: "CAST / STAFF", href: "#cast", group: "historia" },
    { label: "CHARACTER", href: "#character", group: "historia" },
    { label: "MUSIC", href: "#music", group: "historia" },
    { label: "TICKET", href: "#ticket", group: "historia" },
    { label: "CREDITS", href: "#credits", group: "historia" }
  ],

  socials: [
    { label: "DISCORD", href: "https://discord.gg/azure-latch" },
    { label: "INSTAGRAM", href: "https://instagram.com/azure_latch" },
    { label: "X / TWITTER", href: "https://twitter.com/azure_latch" }
  ],

  episodes: [
    {
      id: "q1",
      num: "Q1",
      tag: "EPISODE 01 / CUARTOS DE FINAL",
      name: "ÆLIENS",
      title: "EL COMIENZO DE TODO",
      art: "q1",
      glyph: "1",
      desc: "16 clubes entran a la arena. Solo 8 sobreviven.",
      story: "En un mundo donde cada club tiene su propia forma de jugar, comienza la temporada más dura de Azure Latch. Los favoritos chocan contra los debutantes, las estadísticas se rompen y nadie sabe quién será el último en quedar parado. El primer golpe define el tono de toda la liga.",
      scenes: ["El sorteo", "Primer gol", "La sorpresa", "Undefeated"],
      stats: [
        { k: "Clubes", v: "16" },
        { k: "Partidos", v: "8" },
        { k: "Clasificados", v: "8" }
      ]
    },
    {
      id: "q2",
      num: "Q2",
      tag: "EPISODE 02 / SEMIFINALES",
      name: "4649 GIRL",
      title: "DONDE CAEN LOS GIGANTES",
      art: "q2",
      glyph: "2",
      desc: "Los elegidos se enfrentan. La tabla ya no perdona.",
      story: "Cuatro clubes, dos llaves y una sola oportunidad. Las semifinales revelan quién tuvo una temporada de suerte y quién construyó un equipo para ganar. Las asistencias valen oro, las atajadas cambian partidos y la posición en la cancha define cada decisión.",
      scenes: ["La noche", "Duelo táctico", "Atajada imposible", "Último pase"],
      stats: [
        { k: "Clubes", v: "8" },
        { k: "Partidos", v: "4" },
        { k: "Finalistas", v: "2" }
      ]
    },
    {
      id: "q3",
      num: "Q3",
      tag: "EPISODE 03 / LA FINAL",
      name: "NOCTURNE",
      title: "UN SOLO CAMPEÓN",
      art: "q3",
      glyph: "3",
      desc: "Todo se decide en un partido. El mejor club se corona.",
      story: "La final es el momento que todos esperaban. Dos clubes, un trofeo y una temporada entera de goles, asistencias, acciones defensivas y atajadas resumida en noventa minutos. Cuando el reloj llega a cero, solo queda un nombre en la cima: el mejor club de Azure Latch.",
      scenes: ["Llegada", "Himno", "Gol decisivo", "El título"],
      stats: [
        { k: "Clubes", v: "2" },
        { k: "Partidos", v: "1" },
        { k: "Campeón", v: "1" }
      ]
    }
  ],

  videos: [
    { label: "TRÁILER OFICIAL", glyph: "▶", href: "#episode" },
    { label: "Q1 / CUARTOS", glyph: "▶", href: "#episode" },
    { label: "Q2 / SEMIFINALES", glyph: "▶", href: "#episode" },
    { label: "Q3 / LA FINAL", glyph: "▶", href: "#episode" },
    { label: "MEJORES GOLES", glyph: "▶", href: "#movie" },
    { label: "ATAJADAS 2026", glyph: "▶", href: "#movie" },
    { label: "ENTREVISTAS", glyph: "▶", href: "#movie" }
  ],

  news: [
    { date: "2026.11.20", title: "¡Se revela el cuadro completo de los 16 clubes!", href: "#episode" },
    { date: "2026.11.17", title: "Nuevo sistema de puntos: la posición también suma.", href: "#introduction" },
    { date: "2026.11.10", title: "Los personajes de Azure Latch ya tienen perfil oficial.", href: "#character" },
    { date: "2026.11.06", title: "El estreno de la película está confirmado.", href: "#top" }
  ],

  intro: {
    lead: "Lo que empezó como una liga se convirtió en una <b>historia que se vive en cada partido</b>.",
    paragraphs: [
      "16 clubes. Cada uno con un color, una identidad y una forma distinta de entender el juego. En Azure Latch no gana quien más corre: gana quien mejor decide.",
      "Tres episodios recorren el camino completo —los cuartos, las semifinales y la final— hasta encontrar al único club que se lleva el título de mejor del torneo.",
      "Goles, asistencias, acciones defensivas y atajadas. Cada número cuenta, y la posición en la cancha también. Bienvenido a la liga donde todo suma."
    ]
  },

  staff: [
    { role: "Director / Creador", name: "Azure Latch" },
    { role: " Producción", name: "Liga Oficial 2026" },
    { role: "Sistema de puntos", name: "Goles + Asist + Defensa + Atajadas + Posición" },
    { role: "Diseño", name: "Equipo Azure Latch" },
    { role: "Distribución", name: "GitHub Pages" }
  ],

  music: [
    { n: "01", title: "Shoot Shoot Shoot", artist: "METALVERSE · Opening", badge: "OP" },
    { n: "02", title: "Pavilion", artist: "Elie & Nanahira · Q1", badge: "Q1" },
    { n: "03", title: "Love Culture", artist: "Hashimero · Q1", badge: "Q1" },
    { n: "04", title: "Ceiling City", artist: "Reol & Mizusou · Q2", badge: "Q2" },
    { n: "05", title: "Tiny Luck", artist: "Kairi Yagi · Q3", badge: "Q3" },
    { n: "06", title: "Changed Shampoo", artist: "Haoto · Ending", badge: "ED" }
  ],

  tickets: [
    {
      name: "Pase Digital",
      price: "AR$ 1.600",
      note: "entrada única",
      list: ["Acceso a la película completa", "Los 3 episodios", "Subtítulos en español", "Válido desde el estreno"],
      href: "#movie"
    },
    {
      name: "Pase de Temporada",
      price: "AR$ 3.200",
      note: "el más elegido",
      list: ["Todo lo del pase digital", "Tabla de clubes en vivo", "Perfiles de personajes", "Acceso anticipado a noticias"],
      href: "#movie"
    },
    {
      name: "Edición Campeón",
      price: "AR$ 4.900",
      note: "limitada",
      list: ["Todo lo anterior", "Credencial del mejor club", "Galería de instantáneas", "Nombre en los créditos"],
      href: "#credits"
    }
  ],

  credits: {
    line1: "© 2026 Azure Latch. Todos los derechos reservados.",
    line2: "Página no oficial de fans creada para la comunidad de Azure Latch.",
    back: "← VOLVER A LA LIGA",
    backHref: "../index.html"
  }
};

/* Personajes = jugadores definidos en js/data.js de la liga */
window.MovieData.characters = LIGA.players.map((p, i) => {
  const club = LIGA.clubs.find(c => c.id === p.club);
  return {
    id: p.id,
    name: p.name,
    club: club ? club.name : p.club,
    clubColor: club ? club.color : "#2f7bff",
    pos: p.pos,
    glyph: p.name.slice(0, 1).toUpperCase(),
    phrase: p.msg || "",
    stats: [
      { k: "Goles", v: p.goles },
      { k: "Asist", v: p.asist },
      { k: "Def.", v: p.defensa },
      { k: "Atajadas", v: p.atajadas ?? p.ata ?? 0 }
    ],
    group: i < 8 ? "q1" : i < 12 ? "q2" : "q3"
  };
});

window.MovieData.cast = LIGA.players.slice(0, 8).map(p => ({
  name: p.name,
  role: p.pos,
  color: (LIGA.clubs.find(c => c.id === p.club) || {}).color || "#2f7bff"
}));
