/* ═══════════════════════════════════════════════════════════
   AZURE LATCH — Lógica del sitio cinematográfico
   ═══════════════════════════════════════════════════════════ */
(() => {
  const D = window.MovieData;
  const $ = id => document.getElementById(id);
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ── Navegación ──────────────────────────────────────── */
  const topLinks = D.nav.filter(n => ["TOP", "SPECIAL", "NEWS", "MEDIA"].includes(n.label));
  $("top-links").innerHTML = topLinks.map(n => `<a href="${n.href}">${n.label}</a>`).join("");

  $("side-nav").innerHTML =
    `<div class="sec-title">Navegación</div>` +
    D.nav.map(n => `<a href="${n.href}">${n.label}</a>`).join("") +
    `<div class="sec-title">Síguenos</div>` +
    `<div class="social">` +
    D.socials.map(s => `<a href="${s.href}" target="_blank">${s.label} ↗</a>`).join("") +
    `</div>`;

  $("menu-toggle").addEventListener("click", () => $("side-nav").classList.toggle("open"));
  $("side-nav").addEventListener("click", e => {
    if (e.target.tagName === "A") $("side-nav").classList.remove("open");
  });

  /* ── Héroe ───────────────────────────────────────────── */
  $("hero-kicker").textContent = D.kicker;
  $("hero-logo").innerHTML = `${esc(D.title)}<small>${esc(D.subtitle)}</small>`;
  $("hero-tag").textContent = D.tagline;
  $("hero-date").textContent = D.date;
  $("marquee-text").textContent = Array(8).fill(`${D.title} ✦ ${D.subtitle} ✦ ${D.date} ✦`).join("   ");

  /* ── Episodios ───────────────────────────────────────── */
  $("ep-grid").innerHTML = D.episodes.map((ep, i) => `
    <article class="ep-card reveal" data-type="ep" data-index="${i}">
      <div class="ep-art ${ep.art}" data-num="${ep.num}">
        <div class="glyph">${ep.glyph}</div>
      </div>
      <div class="ep-body">
        <div class="ep-tag">${esc(ep.tag)}</div>
        <h3>${esc(ep.name)} — ${esc(ep.title)}</h3>
        <p>${esc(ep.desc)}</p>
        <span class="detail">DETAIL +</span>
      </div>
    </article>`).join("");

  /* ── Videos ───────────────────────────────────────────── */
  $("video-grid").innerHTML = D.videos.map((v, i) => `
    <a class="video-card reveal" href="${v.href}" style="background:${i % 2 ? "linear-gradient(135deg,#16213a,#0b0e16)" : "linear-gradient(135deg,#2b1636,#0b0e16)"}">
      <span class="play">${v.glyph}</span>
      <span class="label">${esc(v.label)}</span>
    </a>`).join("");

  /* ── Noticias ────────────────────────────────────────── */
  $("news-list").innerHTML = D.news.map(n => `
    <a class="news-item reveal" href="${n.href}">
      <span class="date">${esc(n.date)}</span>
      <span class="title">${esc(n.title)}</span>
      <span class="more">&gt; DETAIL</span>
    </a>`).join("");

  /* ── Introducción ─────────────────────────────────────── */
  $("intro-lead").innerHTML = D.intro.lead;
  $("intro-cols").innerHTML = D.intro.paragraphs.map(p => `<p class="reveal">${esc(p)}</p>`).join("");
  $("ep-logos").innerHTML = D.episodes.map(ep =>
    `<div class="ep-logo">${esc(ep.num)} | ${esc(ep.name)}</div>`).join("");

  /* ── Cast / Staff ─────────────────────────────────────── */
  $("cast-grid").innerHTML = D.cast.map(c => `
    <div class="cast-card reveal">
      <span class="cast-avatar" style="background:${c.color}">${esc(c.name.slice(0, 1))}</span>
      <div><strong>${esc(c.name)}</strong><small>${esc(c.role)}</small></div>
    </div>`).join("");
  $("staff-table").innerHTML = D.staff.map(s => `
    <div class="staff-row reveal"><span>${esc(s.role)}</span><span>${esc(s.name)}</span></div>`).join("");

  /* ── Personajes ───────────────────────────────────────── */
  const groups = [
    { id: "all", label: "TODOS" },
    { id: "q1", label: "Q1 / ÆLIENS" },
    { id: "q2", label: "Q2 / 4649 GIRL" },
    { id: "q3", label: "Q3 / NOCTURNE" }
  ];
  $("char-tabs").innerHTML = groups.map((g, i) =>
    `<button class="char-tab ${i === 0 ? "active" : ""}" data-group="${g.id}">${g.label}</button>`).join("");

  function renderChars(group) {
    const list = group === "all" ? D.characters : D.characters.filter(c => c.group === group);
    $("char-grid").innerHTML = list.map(c => {
      const i = D.characters.indexOf(c);
      return `
        <article class="char-card reveal" data-type="char" data-index="${i}">
          <div class="char-art" style="background:linear-gradient(160deg,${c.clubColor},#0b0e16)">${c.glyph}</div>
          <div class="char-info"><strong>${esc(c.name)}</strong><small>${esc(c.pos)}</small></div>
        </article>`;
    }).join("");
    observeReveals();
  }
  renderChars("all");

  $("char-tabs").addEventListener("click", e => {
    const btn = e.target.closest(".char-tab");
    if (!btn) return;
    $("char-tabs").querySelectorAll(".char-tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderChars(btn.dataset.group);
  });

  /* ── Música ───────────────────────────────────────────── */
  $("song-list").innerHTML = D.music.map(s => `
    <div class="song reveal">
      <span class="n">${esc(s.n)}</span>
      <div><strong>${esc(s.title)}</strong><small>${esc(s.artist)}</small></div>
      <span class="badge">${esc(s.badge)}</span>
    </div>`).join("");

  /* ── Entradas ─────────────────────────────────────────── */
  $("ticket-grid").innerHTML = D.tickets.map(t => `
    <div class="ticket reveal">
      <h3>${esc(t.name)}</h3>
      <div class="price">${esc(t.price)} <small>${esc(t.note)}</small></div>
      <ul>${t.list.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
      <a class="btn" href="${t.href}">ELEGIR →</a>
    </div>`).join("");

  /* ── Créditos ─────────────────────────────────────────── */
  $("credits-big").textContent = D.title.repeat(3);
  $("credits-social").innerHTML = D.socials.map(s =>
    `<a href="${s.href}" target="_blank">${s.label} ↗</a>`).join("");
  $("credits-legal").innerHTML = `${esc(D.credits.line1)}<br>${esc(D.credits.line2)}`;
  $("credits-back").textContent = D.credits.back;
  $("credits-back").href = D.credits.backHref;

  /* ── Modal ────────────────────────────────────────────── */
  const modal = $("modal");
  const modalContent = $("modal-content");
  let modalState = { type: null, index: 0 };

  function episodeHTML(ep, i) {
    return `
      <div class="modal-hero ${ep.art}">
        <div>
          <div class="kicker">${esc(ep.tag)}</div>
          <h3>${esc(ep.name)}</h3>
          <p style="color:#fff;letter-spacing:2px;margin:0">${esc(ep.title)}</p>
        </div>
      </div>
      <div class="modal-body">
        <h4>STORY</h4>
        <p>${esc(ep.story)}</p>
        <div class="mini-grid">
          ${ep.stats.map(s => `<div><b>${esc(s.v)}</b>${esc(s.k)}</div>`).join("")}
        </div>
        <h4 style="margin-top:24px">ESCENAS</h4>
        <div class="mini-grid">
          ${ep.scenes.map(s => `<div>${esc(s)}</div>`).join("")}
        </div>
        <div class="modal-nav">
          <button data-go="-1">← EPISODIO ANTERIOR</button>
          <button data-go="1">EPISODIO SIGUIENTE →</button>
        </div>
      </div>`;
  }

  function charHTML(c, i) {
    return `
      <div class="modal-hero" style="background:linear-gradient(135deg,${c.clubColor},#0b0e16)">
        <div>
          <div class="kicker">${esc(c.club)} · ${esc(c.pos)}</div>
          <h3>${esc(c.name)}</h3>
          <p style="color:#fff;margin:0">“${esc(c.phrase)}”</p>
        </div>
      </div>
      <div class="modal-body">
        <h4>ESTADÍSTICAS</h4>
        <div class="mini-grid">
          ${c.stats.map(s => `<div><b>${esc(s.v)}</b>${esc(s.k)}</div>`).join("")}
        </div>
        <h4 style="margin-top:24px">EQUIPO</h4>
        <p>${esc(c.club)} — ${esc(c.pos)} de Azure Latch.</p>
        <div class="modal-nav">
          <button data-go="-1">← PERSONAJE ANTERIOR</button>
          <button data-go="1">PERSONAJE SIGUIENTE →</button>
        </div>
      </div>`;
  }

  function openModal(type, index) {
    modalState = { type, index };
    renderModal();
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function renderModal() {
    const { type, index } = modalState;
    const list = type === "ep" ? D.episodes : D.characters;
    const item = list[index];
    modalContent.innerHTML = type === "ep" ? episodeHTML(item, index) : charHTML(item, index);
  }
  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.addEventListener("click", e => {
    const card = e.target.closest("[data-type]");
    if (card) {
      openModal(card.dataset.type, +card.dataset.index);
      return;
    }
    const go = e.target.closest("[data-go]");
    if (go) {
      const list = modalState.type === "ep" ? D.episodes : D.characters;
      modalState.index = (modalState.index + +go.dataset.go + list.length) % list.length;
      renderModal();
      return;
    }
    if (e.target === modal) closeModal();
  });
  $("modal-close").addEventListener("click", closeModal);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  /* ── Reveal + nav activo ──────────────────────────────── */
  let observer;
  function observeReveals() {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("show"); observer.unobserve(en.target); } });
    }, { threshold: .08 });
    document.querySelectorAll(".reveal:not(.show)").forEach(el => observer.observe(el));
  }
  observeReveals();

  const sections = [...document.querySelectorAll("section[id], footer[id]")];
  const navLinks = [...document.querySelectorAll(".side-nav a[href^='#']")];
  window.addEventListener("scroll", () => {
    const y = window.scrollY + 120;
    let current = sections[0]?.id;
    sections.forEach(s => { if (s.offsetTop <= y) current = s.id; });
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
  }, { passive: true });
})();
