/* ════════════════════════════════════════════════════════════
   AZURE LATCH — Nav + Bottom-right buttons
   ════════════════════════════════════════════════════════════ */
(() => {
  const DATA = window.LigaData;

  const links = [
    { href: "index.html", label: "Inicio" },
    { href: "clubes.html", label: "Clubes" },
    { href: "personajes.html", label: "Personajes" },
    { href: "tabla-clubes.html", label: "Tabla de Clubes" },
    { href: "tabla-jugadores.html", label: "Tabla de Jugadores" },
    { href: "enfrentamiento.html", label: "Enfrentamiento" },
    { href: "reglas.html", label: "Reglas y Extras" }
  ];

  // ── Nav normal ──────────────────────────────────────────
  const nav = document.querySelector(".site-nav");
  if (nav) {
    const page = location.pathname.split("/").filter(Boolean).pop() || "index.html";
    nav.innerHTML = links
      .map(l => `<a href="${l.href}" ${page === l.href ? 'class="active"' : ""}>${l.label}</a>`)
      .join("");
  }

  // ── Nav-box (botones quick) ─────────────────────────────
  const box = document.querySelector(".nav-box");
  if (box) {
    const page = location.pathname.split("/").filter(Boolean).pop() || "index.html";
    box.innerHTML = links
      .map(l => `<a href="${l.href}" ${page === l.href ? 'class="active"' : ""}>${l.label}</a>`)
      .join("");
  }

  // ── Hero ────────────────────────────────────────────────
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.innerHTML = `
      <div class="wrap">
        <div class="brand-main">${DATA.info.name}</div>
        <p>${DATA.info.description}</p>
        <div class="cta">
          <a class="btn" href="enfrentamiento.html">⚔️ Tabla de Enfrentamiento (1 ganador: el mejor club)</a>
          <a class="btn ghost" href="tabla-clubes.html">📊 Tabla de Clubes</a>
          <a class="btn ghost" href="clubes.html">🏟️ Clubes</a>
          <a class="btn ghost" href="personajes.html">👤 Personajes</a>
          <a class="btn ghost" href="tabla-jugadores.html">🔍 Tabla de Jugadores</a>
        </div>
      </div>`;
  }

  // ── Footer Extras (azul oscuro) ─────────────────────────
  const footer = document.querySelector("footer.extras");
  if (footer) {
    const info = DATA.info;
    footer.innerHTML = `
      <div class="wrap">
        <h3>Extras – ${info.name} ${info.season}</h3>
        <div class="cols">
          <div class="extras-col">
            <h3>Redes sociales</h3>
            <ul>
              <li><a href="${info.links.instagram}" target="_blank">Instagram: @${info.links.instagram.split('/').pop()}</a></li>
              <li><a href="${info.links.twitter}" target="_blank">Twitter/X</a></li>
              <li><a href="${info.links.telegram}" target="_blank">Telegram</a></li>
            </ul>
          </div>
          <div class="extras-col">
            <h3>Discord</h3>
            <ul><li><a href="${info.links.discord}" target="_blank">${info.links.discord}</a></li></ul>
          </div>
          <div class="extras-col">
            <h3>Ligas asociadas</h3>
            <ul>
              ${info.associated.map(a => `<li><a href="${a.url}" target="_blank">${a.name}</a></li>`).join("")}
            </ul>
          </div>
          <div class="extras-col">
            <h3>Creador</h3>
            <ul>
              <li><a href="${info.creator.discord ? 'https://discord.gg/' + info.creator.discord : '#'}" target="_blank">@${info.creator.name} (Discord)</a></li>
              <li><a href="${info.creator.instagram ? info.creator.instagram : '#'}" target="_blank">Instagram: @${info.creator.name}</a></li>
            </ul>
          </div>
        </div>
      </div>`;
  }
})();
