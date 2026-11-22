/* ════════════════════════════════════════════════════════════
   AZURE LATCH — Tabla de clubes (standings)
   Input editable → recalculamos automáticamente los PTS
   Fórmula: goles + asistencias + acciones defensivas + atajadas + bonus(posición)
   ════════════════════════════════════════════════════════════ */
(() => {
  const L = window.ligaPoints;
  const S = window.LigaData.standings;

  const state = S.map(s => ({
    club: s.club,
    goles: s.goles || 0,
    asist: s.asist || 0,
    def: s.def || 0,
    ata: s.ata || 0,
    rank: 0,
    pts: 0
  }));

  const clubColor = name =>
    window.LigaData.clubs.find(c => c.name === name)?.color || "#6b7280";

  function read() {
    document.querySelectorAll("#standings-tbody input").forEach(inp => {
      const row = inp.closest("tr");
      const club = row.querySelector(".chip").textContent;
      const s = state.find(x => x.club === club);
      if (s) s[inp.dataset.field] = +inp.value || 0;
    });
  }

  function render() {
    read();
    // Orden: por goles+asist+def+ata (sin bonus), empate por nombre.
    const rows = state.slice().sort((a, b) =>
      (b.goles - a.goles) || (b.asist - a.asist) || (b.def - a.def) ||
      (b.ata - a.ata) || a.club.localeCompare(b.club)
    );
    rows.forEach((r, i) => { r.rank = i + 1; r.pts = L.clubPts(r); });

    const body = document.getElementById("standings-tbody");
    body.innerHTML = rows.map(r => `
      <tr>
        <td class="rank"><span class="rank-box">${r.rank}</span></td>
        <td><span class="chip" style="--brand:${clubColor(r.club)};background:color-mix(in srgb, var(--brand) 12%, #fff);color:var(--brand);border:1px solid color-mix(in srgb, var(--brand) 28%, #fff);padding:3px 10px">${r.club}</span></td>
        <td class="numeric"><input type="number" data-club="${r.club}" data-field="goles" value="${r.goles}"></td>
        <td class="numeric"><input type="number" data-club="${r.club}" data-field="asist" value="${r.asist}"></td>
        <td class="numeric"><input type="number" data-club="${r.club}" data-field="def" value="${r.def}"></td>
        <td class="numeric"><input type="number" data-club="${r.club}" data-field="ata" value="${r.ata}"></td>
        <td class="numeric"><b>${Math.round(r.pts)}</b></td>
      </tr>`).join("");

    body.querySelectorAll("input").forEach(inp => inp.addEventListener("input", render));
  }

  render();
})();
