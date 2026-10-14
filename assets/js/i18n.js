/* =========================================================
   NexVory Games — dil desteği (TR / EN)
   - Türkçe metinler HTML'de durur, İngilizceleri aşağıdaki EN sözlüğündedir.
   - HTML'de: data-i18n="anahtar" (içerik), data-i18n-attr="placeholder:anahtar,aria-label:anahtar2"
   - JS metinleri için: t("anahtar")
   ========================================================= */

const I18N = {
  // Sadece JS'de üretilen metinler iki dilde de burada
  tr: {
    "meta.title": "NexVory Games — Bağımsız Oyun Stüdyosu",
    "meta.desc": "NexVory Games: PC ve konsollar için akılda kalan oyun dünyaları kuran bağımsız oyun stüdyosu.",

    "ach.start.t": "Yeni Oyun Başladı", "ach.start.d": "NexVory'ye hoş geldin, oyuncu.",
    "ach.buttons.t": "Buton Ezici", "ach.buttons.d": "Kolun tuşlarına 10 kez bastın.",
    "ach.curious.t": "Meraklı Çiftçi", "ach.curious.d": "Farmaro Islands'a göz attın.",
    "ach.explorer.t": "Kaşif", "ach.explorer.d": "Sitenin sonuna kadar geldin.",
    "ach.contact.t": "İlk Temas", "ach.contact.d": "Bize mesaj gönderdin.",
    "ach.insider.t": "İçeriden Biri", "ach.insider.d": "Bültene katıldın.",
    "ach.konami.t": "Efsane Kod", "ach.konami.d": "↑↑↓↓←→←→BA. Klasik.",

    "form.err": "Lütfen işaretli alanları doldur.",
    "form.ok": "Mail uygulaman açılıyor, mesajı oradan <b>Gönder</b>'e basarak yolla. Açılmadıysa <a href=\"{gmail}\" target=\"_blank\" rel=\"noopener\">Gmail ile gönder</a> ya da <a href=\"mailto:{email}\">{email}</a> adresine yaz.",
    "mail.prefix": "NexVory Sitesi",
    "mail.name": "Ad Soyad",
    "mail.email": "E-posta",
    "mail.subject": "Konu",
    "nl.mailSubject": "NexVory Bülten Kaydı",
    "nl.mailBody": "Merhaba NexVory,\n\nBültene katılmak istiyorum: {email}",
    "nl.sent": "Mail uygulamandan gönder 📬",
  },

  en: {
    "meta.title": "NexVory Games — Independent Game Studio",
    "meta.desc": "NexVory Games: an independent game studio crafting memorable worlds for PC and consoles.",

    "ach.start.t": "New Game Started", "ach.start.d": "Welcome to NexVory, player.",
    "ach.buttons.t": "Button Masher", "ach.buttons.d": "You pressed the controller buttons 10 times.",
    "ach.curious.t": "Curious Farmer", "ach.curious.d": "You checked out Farmaro Islands.",
    "ach.explorer.t": "Explorer", "ach.explorer.d": "You made it to the end of the site.",
    "ach.contact.t": "First Contact", "ach.contact.d": "You sent us a message.",
    "ach.insider.t": "Insider", "ach.insider.d": "You joined the newsletter.",
    "ach.konami.t": "Legendary Code", "ach.konami.d": "↑↑↓↓←→←→BA. A classic.",

    "form.err": "Please fill in the highlighted fields.",
    "form.ok": "Your mail app is opening — just hit <b>Send</b> there. If it didn't open, <a href=\"{gmail}\" target=\"_blank\" rel=\"noopener\">send with Gmail</a> or write to <a href=\"mailto:{email}\">{email}</a>.",
    "mail.prefix": "NexVory Website",
    "mail.name": "Full name",
    "mail.email": "Email",
    "mail.subject": "Subject",
    "nl.mailSubject": "NexVory Newsletter Signup",
    "nl.mailBody": "Hi NexVory,\n\nI'd like to join the newsletter: {email}",
    "nl.sent": "Send it from your mail app 📬",

    /* ---- sayfa metinleri ---- */
    "a11y.home": "NexVory Games home",
    "a11y.menu": "Main menu",
    "a11y.burger": "Open menu",
    "a11y.platforms": "Platforms",
    "a11y.art": "Game console and controller illustration",
    "a11y.close": "Close",

    "nav.about": "About",
    "nav.games": "Games",
    "nav.services": "What We Do",
    "nav.journey": "Journey",
    "nav.careers": "Careers",
    "nav.contact": "Contact",
    "nav.cta": "Contact Us",

    "hero.tag": "Independent Game Studio",
    "hero.title": 'Play.<br/>\n<span class="grad">Feel.</span><br/>\nRemember.',
    "hero.lead": "At NexVory Games we build worlds for PC and consoles that you won't want to leave. Small team, big passion.",
    "hero.cta1": 'Our Games <span aria-hidden="true">→</span>',
    "hero.cta2": "Join the Team",
    "hero.console": "Console",
    "hero.hint": "Try pressing the buttons 🎮",

    "mq.console": "CONSOLE",
    "mq.design": "GAME DESIGN",
    "mq.art": "ART",
    "mq.music": "MUSIC",
    "mq.community": "COMMUNITY",

    "about.eyebrow": "01 · About Us",
    "about.title": 'We make games <span class="grad">as players</span>.',
    "about.p1": "NexVory Games is an independent studio founded by a team that loves playing games as much as making them. We want today's players to feel what we felt as kids, glued to games we just couldn't put down.",
    "about.p2": 'On every project we ask the same question: <strong>"Would we want to play this?"</strong> If the answer isn\'t yes, it\'s back to the drawing board.',
    "about.s1": "Game in the works",
    "about.s2": "Independent",
    "about.s3": "Notebook of ideas",
    "about.s4": "Coffee machine",

    "val.1t": "Fun first",
    "val.1p": "Every mechanic has to entertain us first. If it doesn't, it doesn't belong in the game.",
    "val.2t": "Craft",
    "val.2p": "Small details make a big difference. We even obsess over how a button feels.",
    "val.3t": "Community",
    "val.3p": "We grow our games together with players and take feedback to heart.",
    "val.4t": "Honesty",
    "val.4p": "No pay-to-win, no dark patterns. Just good games.",

    "games.eyebrow": "02 · Games",
    "games.title": 'What\'s <span class="grad">cooking?</span>',
    "games.soon": "Coming Soon",
    "games.farmaro": "Bring a storm-ravaged, abandoned archipelago back to life, one seed at a time. A cozy island adventure full of farming, exploration and co-op with friends.",
    "games.farming": "Farming",
    "games.exploration": "Exploration",
    "games.details": "View Details",
    "games.notify": "Stay Updated",
    "games.secret": "Secret",
    "games.secretTitle": "PROJECT ███",
    "games.secretP": "Not announced yet. But here's a hint: best played with the lights off. 👀",

    "srv.eyebrow": "03 · What We Do",
    "srv.title": 'From idea to <span class="grad">console</span>.',
    "srv.lead": "We build every game in-house, by hand, from the first sketch to launch day.",
    "srv.1t": "Game Design",
    "srv.1p": "Mechanics, economies, level design and the loops behind that \"just one more turn\" feeling.",
    "srv.2t": "Art &amp; Animation",
    "srv.2p": "Characters, worlds, UI and animation that gives every frame personality.",
    "srv.3t": "Programming",
    "srv.3p": "Gameplay systems, tools and performant code that runs smoothly on every platform.",
    "srv.4t": "Sound &amp; Music",
    "srv.4p": "Sound design that makes worlds breathe, and music that sticks with you.",
    "srv.5t": "Multiplayer",
    "srv.5p": "Co-op and online tech for the kind of fun that multiplies with friends.",
    "srv.6t": "PC &amp; Console",
    "srv.6p": "Games that feel great on the big screen or in your hands, with keyboard, mouse and controller support.",

    "jr.eyebrow": "04 · Journey",
    "jr.1t": "Studio founded",
    "jr.1p": "A handful of game lovers, a notebook full of ideas and never-ending coffee.",
    "jr.done": "✓ Completed",
    "jr.2t": "First prototypes",
    "jr.2p": "Dozens of ideas were tested and the best one won: Farmaro Islands was born.",
    "jr.3t": "Farmaro in development",
    "jr.3p": "We're working on the islands, farming systems and co-op infrastructure.",
    "jr.now": "▶ We are here",
    "jr.4t": "Launch &amp; beyond",
    "jr.4p": "Bringing Farmaro to players and revealing the secret project.",
    "jr.locked": "🔒 Locked",

    "car.eyebrow": "05 · Careers",
    "car.title": 'Player 2 <span class="grad">wanted.</span>',
    "car.lead": "We want to work with people who love making games, are hungry to learn and believe in teamwork. Don't see your role below? Write to us anyway.",
    "car.1t": "Game Programmer",
    "car.1p": "Gameplay systems · Co-op",
    "car.2t": "2D / 3D Artist",
    "car.2p": "Environments &amp; characters",
    "car.3t": "Game Designer",
    "car.3p": "Economy · Level design",
    "car.4t": "Open Application",
    "car.4p": "Tell us about yourself",
    "car.full": "Full-time",
    "car.part": "Part-time",
    "car.any": "Anytime",
    "car.apply": "Apply →",
    "car.write": "Write →",

    "ct.eyebrow": "06 · Contact",
    "ct.title": 'Let\'s <span class="grad">talk.</span>',
    "ct.lead": "Partnerships, press, publishing or just saying hi. We always reply.",
    "ct.email": "Email",
    "ct.name": "Name",
    "ct.namePh": "Your full name",
    "ct.emailPh": "you@example.com",
    "ct.subject": "Subject",
    "ct.message": "Message",
    "ct.messagePh": "What would you like to tell us?",
    "ct.send": 'Send <span aria-hidden="true">▶</span>',

    "opt.general": "General",
    "opt.collab": "Partnership",
    "opt.press": "Press",
    "opt.dev": "Careers: Game Programmer",
    "opt.art": "Careers: 2D / 3D Artist",
    "opt.design": "Careers: Game Designer",
    "opt.open": "Careers: Open Application",

    "nl.title": "Join the newsletter",
    "nl.text": "Be the first to hear about Farmaro Islands and new projects.",
    "nl.ph": "Your email address",
    "nl.join": "Join",
    "ft.rights": "All rights reserved.",

    "md.badge": "In Development",
    "md.p": "You start on a small beach with nothing but a hoe. Build your farm, raise your animals, trade between islands by boat and uncover the secret of a mysterious island that isn't on any map. Solo or with friends.",
    "md.f1": "Deep farming system",
    "md.f2": "Islands to explore",
    "md.f3": "Animal friends",
    "md.f4": "Co-op with friends",
    "md.f5": "Sea trade",
    "md.f6": "Living seasons",
    "md.genre": "Genre",
    "md.genreV": "Farming · Exploration",
    "md.release": "Release",
    "md.cta": "Notify Me at Launch",

    "ach.label": "Achievement Unlocked",
  },
};

const LANGS = ["tr", "en"];
let currentLang = "tr";
const originals = new WeakMap(); // Türkçe orijinalleri DOM'dan bir kez okunur

function t(key, vars = {}) {
  const str = I18N[currentLang][key] ?? I18N.tr[key] ?? key;
  return str.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");
}

function original(el) {
  if (!originals.has(el)) {
    const attrs = {};
    (el.dataset.i18nAttr || "").split(",").filter(Boolean).forEach((pair) => {
      const name = pair.split(":")[0].trim();
      attrs[name] = el.getAttribute(name);
    });
    originals.set(el, { html: el.innerHTML, attrs });
  }
  return originals.get(el);
}

function applyLang(lang) {
  currentLang = LANGS.includes(lang) ? lang : "tr";
  const dict = currentLang === "tr" ? {} : I18N[currentLang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const orig = original(el);
    el.innerHTML = dict[el.dataset.i18n] ?? orig.html;
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const orig = original(el);
    el.dataset.i18nAttr.split(",").filter(Boolean).forEach((pair) => {
      const [name, key] = pair.split(":").map((s) => s.trim());
      el.setAttribute(name, dict[key] ?? orig.attrs[name]);
    });
  });

  document.documentElement.lang = currentLang;
  document.title = t("meta.title");
  document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.desc"));

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    const active = btn.dataset.lang === currentLang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  try { localStorage.setItem("nv_lang", currentLang); } catch { /* gizli sekme vb. */ }
}

function detectLang() {
  try {
    const saved = localStorage.getItem("nv_lang");
    if (LANGS.includes(saved)) return saved;
  } catch { /* yoksay */ }
  return (navigator.language || "tr").toLowerCase().startsWith("tr") ? "tr" : "en";
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });
  applyLang(detectLang());
});
