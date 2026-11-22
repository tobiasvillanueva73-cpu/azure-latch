/* ════════════════════════════════════════════════════════════
   AZURE LATCH — Tabla de Jugadores (personajes)
   Fórmula: goles + asistencias + acciones defensivas + atajadas (porteros: x1.4)
   ════════════════════════════════════════════════════════════ */
(() => {
  const L = window.ligaPoints;
  const body = document.getElementById("players-tbody");
  const search = document.getElementById("players-search");

  const P = window.LigaData.players.slice().map(p => ({
    id: p.id, name: p.name, club: p.club, pos: p.pos,
    goles: p.goles, asist: p.asist, defensa: p.defensa, ata: p.ata,
    msg: p.msg, pts: L.playerPts(p)
  }));

  function render() {
    const q = (search?.value || "").toLowerCase().trim();
    const filtered = q ? P.filter(p =>
      p.name.toLowerCase().includes(q) ||
      window.LigaData.clubs.find(c => c.id === p.club)?.name.toLowerCase().includes(q)
    ) : P;

    filtered.sort((a, b) =>
      (b.pts - a.pts) || a.name.localeCompare(b.name)
    );

    body.innerHTML = filtered.map((p, i) => {
      const club = window.LigaData.clubs.find(c => c.id === p.club);
      const first = p.name.slice(0, 1).toUpperCase();
      return `
        <tr>
          <td class="rank"><span class="rank-box">${i + 1}</span></td>
          <td>${p.name}</td>
          <td><span class="chip" style="--brand:${club?.color || '#6b7280'};background:color-mix(in srgb, var(--brand) 12%, #fff);color:var(--brand);border:1px solid color-mix(in srgb, var(--brand) 28%, #fff);padding:3px 10px">${club?.name || p.club}</span></td>
          <td class="numeric">${p.pos}</td>
          <td class="numeric">${p.goles}</td>
          <td class="numeric">${p.asist}</td>
          <td class="numeric">${p.defensa}</td>
          <td class="numeric">${p.ata}</td>
          <td class="numeric"><b>${Math.round(p.pts)}</b></td>
          <td>${p.msg || ""}</td>
        </tr>`;
    }).join("");
  }

  render();
  search?.addEventListener("input", render);
})();
