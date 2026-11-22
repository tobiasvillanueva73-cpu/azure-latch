/* ════════════════════════════════════════════════════════════
   AZURE LATCH — Sistema de puntos
   clubPts: goles + asistencias + acciones defensivas + atajadas + bonus por posición
   playerPts: mismo criterio, con porteros (atajadas x1.4)
   ════════════════════════════════════════════════════════════ */
window.ligaPoints = {
  form: window.LigaData.form,

  clubPts(standing) {
    const f = this.form;
    const posBonus = (f.posBonus[standing.rank] || 0);
    return (
      standing.goles * f.goles +
      standing.asist * f.asistencias +
      standing.def * f.accionesDefensivas +
      standing.ata * f.atajadas +
      posBonus
    );
  },

  playerPts(p) {
    const f = this.form;
    // Atajadas: los porteros las cuentan mejor (maquinaria de seguridad)
    const atajadas = p.pos === "Portero" ? p.ata * 1.4 : p.ata;
    // Bonus de posición: porteros y delanteros detectan riesgos/goles, defensas lo tienen difícil en empates.
    const posBonus = { Portero: 2, Delantero: 2, Defensa: 1, Mediocampista: 1 }[p.pos] || 0;
    return (
      p.goles * f.goles +
      p.asist * f.asistencias +
      p.defensa * f.accionesDefensivas +
      atajadas +
      posBonus
    );
  }
};
