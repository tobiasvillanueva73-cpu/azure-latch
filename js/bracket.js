/* ════════════════════════════════════════════════════════════
   AZURE LATCH — Tabla de Enfrentamiento (bracket)
   16 clubes → Cuartos → Semifinales → Final.
   Un solo ganador: el mejor club de la liga.
   Estado: sfState (segundos QF) + finalState (semifinales)
   ════════════════════════════════════════════════════════════ */
(() => {
  const C = window.LigaData.clubs;
  const qfRow = document.querySelector(".bracket-quarter");
  const sfRow = document.querySelector(".bracket-semis");
  const finalRow = document.querySelector(".bracket-final");
  const championBox = document.getElementById("champion");
  const reinitBtn = document.getElementById("reinit");

  if (!qfRow) return;

  // QF: emparejamientos estáticos (1-16, 2-15, ..., 8-9)
  const qfPairs = [[0,15],[1,14],[2,13],[3,12],[4,11],[5,10],[6,9],[7,8]];
  const qfMatches = qfPairs.map(([a, b]) => ({
    teamA: C[a]?.name || `C${a+1}`,
    teamB: C[b]?.name || `C${b+1}`
  }));

  // SF: cada uno alimentado por 2 QF: [QF1,QF2] [QF3,QF4] [QF5,QF6] [QF7,QF8]
  const sfFeed = [[0,1],[2,3],[4,5],[6,7]];
  const sfState = sfFeed.map(() => ({ a: null, b: null }));

  const finalState = { a: null, b: null };

  function teamOptions(teams) {
    const opts = ['<option value="">---</option>'];
    teams.filter(Boolean).forEach(t => opts.push(`<option value="${t}">${t}</option>`));
    return opts.join("");
  }

  function qfTeamsFor(i) {
    const m = qfMatches[i];
    return m ? [m.teamA, m.teamB] : [];
  }

  function sfWinnerOf(i) {
    return sfState[i].a || sfState[i].b;
  }

  function updateChampion() {
    const champ = finalState.a || finalState.b || null;
    championBox.innerHTML = champ
      ? `<span class="medal">👑</span>👉 Campeón de la liga: <b>${champ}</b>`
      : `<span class="medal">👑</span>👉 Selecciona los ganadores de las semifinales y el final`;
  }

  function attachSfListeners() {
    sfRow.querySelectorAll("select").forEach(sel => {
      sel.addEventListener("change", () => {
        const idx = +sel.dataset.sf, side = sel.dataset.side;
        sfState[idx][side] = sel.value || null;
        updateFinalOptions();
        updateChampion();
      });
    });
  }

  function updateFinalOptions() {
    // opciones para el final: ganadores de las 4 SF
    const sfWinners = [0,1,2,3].map(i => sfWinnerOf(i)).filter(Boolean);
    finalState.a = null; finalState.b = null;
    finalRow.innerHTML = [0, 1].map(i => `
      <div class="match">
        <div class="match-title">FINAL – ${i === 0 ? "ida" : "vuelta"}</div>
        <select data-side="${i === 0 ? "a" : "b"}">${teamOptions(sfWinners)}</select>
      </div>`).join("");
    finalRow.querySelectorAll("select").forEach(sel => {
      sel.addEventListener("change", () => {
        finalState[sel.dataset.side] = sel.value || null;
        updateChampion();
      });
    });
    updateChampion();
  }

  function render() {
    // Cuartos (estáticos: 16 clubes)
    qfRow.innerHTML = qfMatches.map((m, i) => `
      <div class="match">
        <div class="match-title">QF-${i+1}</div>
        <span class="team">🏆 ${m.teamA}</span>
        <span class="vs">⚔️ vs</span>
        <span class="team">🏆 ${m.teamB}</span>
      </div>`).join("");

    // Semifinales (selects para elección de ganador)
    sfRow.innerHTML = [0, 1, 2, 3].map(i => {
      const feed = sfFeed[i];
      const teams = [...qfTeamsFor(feed[0]), ...qfTeamsFor(feed[1])];
      return `
        <div class="match">
          <div class="match-title">SF-${i+1}</div>
          <select data-sf="${i}" data-side="a">${teamOptions(teams)}</select>
          <span class="vs">⚔️ vs</span>
          <select data-sf="${i}" data-side="b">${teamOptions(teams)}</select>
        </div>`;
    }).join("");
    attachSfListeners();

    updateFinalOptions();
  }

  render();

  reinitBtn?.addEventListener("click", () => {
    sfState.forEach(s => { s.a = null; s.b = null; });
    finalState.a = null; finalState.b = null;
    render();
  });
})();
