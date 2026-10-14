/* =========================================================
   NexVory Games — site etkileşimleri
   ========================================================= */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); }
    catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* gizli sekme vb. */ }
  },
};

/* ---------- Başarımlar ---------- */
const ACHIEVEMENTS = {
  start:    { title: "Yeni Oyun Başladı", desc: "NexVory'ye hoş geldin, oyuncu.", icon: "🎮" },
  buttons:  { title: "Buton Ezici", desc: "Kolun tuşlarına 10 kez bastın.", icon: "🕹️" },
  curious:  { title: "Meraklı Çiftçi", desc: "Farmaro Islands'a göz attın.", icon: "🌴" },
  explorer: { title: "Kaşif", desc: "Sitenin sonuna kadar geldin.", icon: "🗺️" },
  contact:  { title: "İlk Temas", desc: "Bize mesaj gönderdin.", icon: "✉️" },
  insider:  { title: "İçeriden Biri", desc: "Bültene katıldın.", icon: "📬" },
  konami:   { title: "Efsane Kod", desc: "↑↑↓↓←→←→BA. Klasik.", icon: "👾" },
};
const unlocked = new Set(store.get("nv_achievements", []));
const achQueue = [];
let achBusy = false;

function unlock(id) {
  if (unlocked.has(id) || !ACHIEVEMENTS[id]) return;
  unlocked.add(id);
  store.set("nv_achievements", [...unlocked]);
  achQueue.push(ACHIEVEMENTS[id]);
  if (!achBusy) showNextAchievement();
}

function showNextAchievement() {
  const a = achQueue.shift();
  if (!a) { achBusy = false; return; }
  achBusy = true;
  const el = $("#achievement");
  $(".achievement__icon", el).textContent = a.icon;
  $("#achTitle").textContent = a.title;
  $("#achDesc").textContent = a.desc;
  el.classList.add("is-show");
  setTimeout(() => {
    el.classList.remove("is-show");
    setTimeout(showNextAchievement, 600);
  }, 3200);
}

/* ---------- Boot ekranı ---------- */
function initBoot() {
  const boot = $("#boot");
  const bar = $("#bootBar");
  const press = $("#bootPress");
  let done = false;

  const finish = () => {
    if (done) return;
    done = true;
    boot.classList.add("is-done");
    document.body.classList.remove("is-loading");
    $$(".hero .reveal").forEach((el, i) => setTimeout(() => el.classList.add("is-visible"), 110 * i));
    setTimeout(() => unlock("start"), 1400);
  };

  if (reducedMotion) { finish(); return; }

  let p = 0;
  const step = setInterval(() => {
    p = Math.min(100, p + 9 + Math.random() * 12);
    bar.style.width = p + "%";
    if (p >= 100) {
      clearInterval(step);
      press.classList.add("is-on");
      setTimeout(finish, 900);
    }
  }, 90);

  boot.addEventListener("click", finish);
  window.addEventListener("keydown", () => { if (!done) finish(); }, { once: true });
}

/* ---------- Arka plan: uçuşan kol tuşları ---------- */
function initParticles() {
  const canvas = $("#particles");
  const ctx = canvas.getContext("2d");
  const colors = ["#a78bfa", "#22d3ee", "#f472b6", "#a3e635"];
  const shapes = ["tri", "circle", "cross", "square", "dpad"];
  let w, h, dpr, items = [];
  const mouse = { x: 0, y: 0 };

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = window.innerWidth * dpr;
    h = canvas.height = window.innerHeight * dpr;
    const count = Math.min(46, Math.round((window.innerWidth * window.innerHeight) / 32000));
    items = Array.from({ length: count }, () => spawn(Math.random() * h));
  }

  function spawn(y) {
    return {
      x: Math.random() * w,
      y,
      size: (8 + Math.random() * 16) * dpr,
      vy: -(0.12 + Math.random() * 0.35) * dpr,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.01,
      depth: 0.2 + Math.random() * 0.8,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 0.08 + Math.random() * 0.18,
    };
  }

  function draw(p) {
    const s = p.size;
    ctx.save();
    ctx.translate(p.x - mouse.x * 30 * p.depth * dpr, p.y - mouse.y * 30 * p.depth * dpr);
    ctx.rotate(p.rot);
    ctx.globalAlpha = p.alpha;
    ctx.strokeStyle = p.color;
    ctx.lineWidth = 2 * dpr;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.beginPath();
    switch (p.shape) {
      case "tri":
        ctx.moveTo(0, -s * 0.6); ctx.lineTo(s * 0.55, s * 0.4); ctx.lineTo(-s * 0.55, s * 0.4); ctx.closePath();
        break;
      case "circle":
        ctx.arc(0, 0, s * 0.5, 0, Math.PI * 2);
        break;
      case "cross":
        ctx.moveTo(-s * 0.45, -s * 0.45); ctx.lineTo(s * 0.45, s * 0.45);
        ctx.moveTo(s * 0.45, -s * 0.45); ctx.lineTo(-s * 0.45, s * 0.45);
        break;
      case "square":
        ctx.rect(-s * 0.45, -s * 0.45, s * 0.9, s * 0.9);
        break;
      case "dpad": {
        const a = s * 0.18, b = s * 0.55;
        ctx.moveTo(-a, -b); ctx.lineTo(a, -b); ctx.lineTo(a, -a); ctx.lineTo(b, -a); ctx.lineTo(b, a);
        ctx.lineTo(a, a); ctx.lineTo(a, b); ctx.lineTo(-a, b); ctx.lineTo(-a, a); ctx.lineTo(-b, a);
        ctx.lineTo(-b, -a); ctx.lineTo(-a, -a); ctx.closePath();
        break;
      }
    }
    ctx.stroke();
    ctx.restore();
  }

  function frame() {
    ctx.clearRect(0, 0, w, h);
    items.forEach((p, i) => {
      p.y += p.vy;
      p.rot += p.vr;
      if (p.y < -60 * dpr) items[i] = spawn(h + 60 * dpr);
      draw(p);
    });
    if (!reducedMotion) requestAnimationFrame(frame);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (e) => {
    mouse.x = e.clientX / window.innerWidth - 0.5;
    mouse.y = e.clientY / window.innerHeight - 0.5;
  }, { passive: true });

  resize();
  frame();
}

/* ---------- İmleç parıltısı ---------- */
function initCursorGlow() {
  if (!finePointer) return;
  const glow = $("#cursorGlow");
  let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
  window.addEventListener("pointermove", (e) => { tx = e.clientX; ty = e.clientY; }, { passive: true });
  const loop = () => {
    x += (tx - x) * 0.12;
    y += (ty - y) * 0.12;
    glow.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(loop);
  };
  loop();
}

/* ---------- Nav + XP barı ---------- */
function initNav() {
  const nav = $("#nav");
  const burger = $("#burger");
  const links = $("#navLinks");
  const xpFill = $("#xpFill");
  const xpLabel = $("#xpLabel");

  const onScroll = () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 20);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    xpFill.style.width = pct * 100 + "%";
    xpLabel.textContent = pct > 0.985 ? "LV MAX" : `LV ${1 + Math.floor(pct * 9)}`;
    if (pct > 0.985) unlock("explorer");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const setMenu = (open) => {
    links.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  };
  burger.addEventListener("click", () => setMenu(!links.classList.contains("is-open")));
  $$("a", links).forEach((a) => a.addEventListener("click", () => setMenu(false)));

  const map = new Map($$("a", links).map((a) => [a.getAttribute("href").slice(1), a]));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      map.forEach((a) => a.classList.remove("is-active"));
      map.get(e.target.id)?.classList.add("is-active");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  map.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
}

/* ---------- Scroll reveal + sayaçlar ---------- */
function initReveal() {
  const count = (el) => {
    const target = Number(el.dataset.count);
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / 1400);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-visible");
      $$("[data-count]", e.target).forEach(count);
      io.unobserve(e.target);
    });
  }, { threshold: 0.12 });

  $$(".reveal").forEach((el, i) => {
    if (el.closest(".hero")) return; // hero, boot ekranı bitince açılır
    el.style.transitionDelay = (i % 4) * 70 + "ms";
    io.observe(el);
  });
}

/* ---------- Hero: konsol & kol ---------- */
function initHeroArt() {
  const art = $("#heroArt");
  const layers = $$(".layer", art);
  const sticks = $$(".stick__top", art);

  if (finePointer && !reducedMotion) {
    window.addEventListener("pointermove", (e) => {
      const dx = e.clientX / window.innerWidth - 0.5;
      const dy = e.clientY / window.innerHeight - 0.5;
      layers.forEach((l) => {
        const d = Number(l.dataset.depth);
        l.style.transform = `translate(${dx * d}px, ${dy * d}px)`;
      });
      sticks.forEach((s) => { s.style.transform = `translate(${dx * 14}px, ${dy * 14}px)`; });
    }, { passive: true });
  }

  let presses = 0;
  $$(".fbtn", art).forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.add("is-pressed");
      setTimeout(() => btn.classList.remove("is-pressed"), 140);
      if (++presses === 10) unlock("buttons");
    });
  });
}

/* ---------- Hizmet kartı eğimi ---------- */
function initTilt() {
  if (!finePointer) return;
  $$("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      card.style.setProperty("--ry", `${(x - 0.5) * 10}deg`);
      card.style.setProperty("--rx", `${(0.5 - y) * 10}deg`);
      card.style.setProperty("--mx", `${x * 100}%`);
      card.style.setProperty("--my", `${y * 100}%`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });
}

/* ---------- Farmaro modalı ---------- */
function initModal() {
  const modal = $("#farmaroModal");
  const art = $("#modalArt");
  // Kart görselini modala kopyala (gradient id'si çakışmasın)
  art.innerHTML = $("#farmaroCard .farmaro-art svg").outerHTML.replaceAll("fSky", "fSkyModal");

  $("#openFarmaro").addEventListener("click", () => {
    modal.showModal();
    unlock("curious");
  });
  $$("[data-close]", modal).forEach((el) => el.addEventListener("click", () => modal.close()));
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });
}

/* ---------- Formlar ---------- */
// Sunucu yok: gönderince ziyaretçinin mail uygulaması bu adrese hazır yazılmış bir mesajla açılır.
const CONTACT_EMAIL = "nexvorygames@gmail.com";

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

function mailLinks(subject, body) {
  const q = (o) => Object.entries(o).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&");
  return {
    mailto: `mailto:${CONTACT_EMAIL}?${q({ subject, body })}`,
    gmail: `https://mail.google.com/mail/?${q({ view: "cm", fs: 1, to: CONTACT_EMAIL, su: subject, body })}`,
  };
}

function openMail(subject, body) {
  const links = mailLinks(subject, body);
  window.location.href = links.mailto;
  return links;
}

function initContact() {
  const form = $("#contactForm");
  const msg = $("#formMsg");
  const select = $("#subjectSelect");

  // Kariyer "Başvur" linkleri konuyu otomatik seçer
  $$(".job__apply").forEach((a) => a.addEventListener("click", () => { select.value = a.dataset.subject; }));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // form.name formun kendi adını döndürür, bu yüzden alanlara elements üzerinden erişiyoruz
    const { name, email, message } = Object.fromEntries(["name", "email", "message"].map((n) => [n, form.elements.namedItem(n)]));
    const fields = [name, email, message];
    fields.forEach((f) => f.classList.remove("is-invalid"));
    const bad = fields.filter((f) => !f.value.trim() || (f === email && !isEmail(f.value.trim())));
    msg.className = "form__msg";

    if (bad.length) {
      bad.forEach((f) => f.classList.add("is-invalid"));
      bad[0].focus();
      msg.classList.add("is-err");
      msg.textContent = "Lütfen işaretli alanları doldur.";
      return;
    }

    const subject = `NexVory Sitesi: ${select.value} — ${name.value.trim()}`;
    const body = [
      `Ad Soyad: ${name.value.trim()}`,
      `E-posta: ${email.value.trim()}`,
      `Konu: ${select.value}`,
      "",
      message.value.trim(),
    ].join("\n");

    const { gmail } = openMail(subject, body);

    msg.classList.add("is-ok");
    msg.innerHTML = `Mail uygulaman açılıyor, mesajı oradan <b>Gönder</b>'e basarak yolla. Açılmadıysa <a href="${gmail}" target="_blank" rel="noopener">Gmail ile gönder</a> ya da <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> adresine yaz.`;
    unlock("contact");
  });
}

function initNewsletter() {
  const form = $("#newsletterForm");
  const input = $("input[type=email]", form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (!isEmail(value)) {
      input.classList.add("is-invalid");
      input.focus();
      return;
    }
    input.classList.remove("is-invalid");
    openMail("NexVory Bülten Kaydı", `Merhaba NexVory,\n\nBültene katılmak istiyorum: ${value}`);
    input.value = "";
    input.placeholder = "Mail uygulamandan gönder 📬";
    unlock("insider");
  });
}

/* ---------- Konami kodu ---------- */
function initKonami() {
  const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  let pos = 0;
  document.addEventListener("keydown", (e) => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    pos = key === code[pos] ? pos + 1 : key === code[0] ? 1 : 0;
    if (pos < code.length) return;
    pos = 0;
    unlock("konami");
    if (reducedMotion) return;
    const items = ["🎮", "👾", "🕹️", "⭐", "💎", "🏆"];
    for (let i = 0; i < 50; i++) {
      const el = document.createElement("span");
      el.className = "rain-item";
      el.textContent = items[i % items.length];
      el.style.left = Math.random() * 100 + "vw";
      el.style.animationDuration = 2.5 + Math.random() * 3 + "s";
      el.style.animationDelay = Math.random() * 1.2 + "s";
      el.addEventListener("animationend", () => el.remove());
      document.body.appendChild(el);
    }
  });
}

/* ---------- Tarayıcı konsolu selamı ---------- */
function devtoolsHello() {
  console.log("%cNexVory Games", "font: 800 26px Unbounded, sans-serif; color: #a78bfa;");
  console.log("%cKodu kurcalayan biri! Bize lazımsın: #careers 🎮", "font-size: 13px; color: #22d3ee;");
}

/* ---------- Başlat ---------- */
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  initBoot();
  initParticles();
  initCursorGlow();
  initNav();
  initReveal();
  initHeroArt();
  initTilt();
  initModal();
  initContact();
  initNewsletter();
  initKonami();
  devtoolsHello();
  if (reducedMotion) $$("svg").forEach((svg) => svg.pauseAnimations?.());
});
