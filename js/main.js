(function () {
  'use strict';
  var doc = document;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function esc(t) {
    return String(t).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ---------- Ignition splash: speedometer + RS, plays on every open ---------- */
  var ig = doc.getElementById('ignition');
  var igTicks = doc.getElementById('igTicks');
  if (igTicks) {
    var SVGNS = 'http://www.w3.org/2000/svg';
    for (var t = 0; t <= 54; t++) {
      var ang = (-135 + t * 5) * Math.PI / 180, major = t % 9 === 0, r1 = major ? 134 : 138, r2 = 148;
      var ln = doc.createElementNS(SVGNS, 'line');
      ln.setAttribute('x1', (150 + r1 * Math.sin(ang)).toFixed(1)); ln.setAttribute('y1', (150 - r1 * Math.cos(ang)).toFixed(1));
      ln.setAttribute('x2', (150 + r2 * Math.sin(ang)).toFixed(1)); ln.setAttribute('y2', (150 - r2 * Math.cos(ang)).toFixed(1));
      ln.setAttribute('stroke', t >= 44 ? '#ffb340' : '#5aaef0'); ln.setAttribute('stroke-width', major ? '3' : '1.5');
      ln.setAttribute('stroke-linecap', 'round'); ln.setAttribute('opacity', major ? '1' : '.55');
      igTicks.appendChild(ln);
    }
  }
  if (ig) {
    ig.classList.add('show');
    var igDone = false;
    var closeIg = function () {
      if (igDone) return; igDone = true;
      ig.classList.add('hide');
      setTimeout(function () { ig.classList.remove('show'); }, 600);
      startNeedle();
    };
    setTimeout(closeIg, reduce ? 1200 : 2600);
    ig.addEventListener('click', closeIg);
  }

  /* ---------- Hero cluster: ticks + needle ---------- */
  var ticks = doc.getElementById('ticks');
  if (ticks) {
    var NS = 'http://www.w3.org/2000/svg', total = 54, redFrom = 44;
    for (var i = 0; i <= total; i++) {
      var ang = -135 + i * (270 / total) , major = i % 9 === 0;
      var rad = ang * Math.PI / 180, r1 = major ? 222 : 228, r2 = 240;
      var l = doc.createElementNS(NS, 'line');
      l.setAttribute('x1', (250 + r1 * Math.sin(rad)).toFixed(2));
      l.setAttribute('y1', (250 - r1 * Math.cos(rad)).toFixed(2));
      l.setAttribute('x2', (250 + r2 * Math.sin(rad)).toFixed(2));
      l.setAttribute('y2', (250 - r2 * Math.cos(rad)).toFixed(2));
      l.setAttribute('stroke', i >= redFrom ? '#ffb340' : '#5aaef0');
      l.setAttribute('stroke-width', major ? '3' : '1.6');
      l.setAttribute('stroke-linecap', 'round');
      l.setAttribute('opacity', major ? '1' : '.6');
      ticks.appendChild(l);
    }
  }
  var needle = doc.getElementById('needle');
  function startNeedle() {
    if (!needle) return;
    needle.style.transform = 'rotate(' + (reduce ? 95 : 95) + 'deg)';
  }
  if (!ig) { setTimeout(startNeedle, 200); }

  /* ==================================================================
     RENDER ALL SECTIONS FROM js/site-data.js
     (You normally never edit this file. Add content in js/site-data.js.)
     ================================================================== */
  var D = window.SITE_DATA || {};
  var visuals = window.PROJECT_VISUALS || {};
  function setHTML(id, html) { var el = doc.getElementById(id); if (el && html) el.innerHTML = html; }
  function arr(k) { return Array.isArray(D[k]) ? D[k] : []; }
  function dot(cur) { return '<span class="wp' + (cur ? ' wp-amber' : '') + '"></span>'; }
  function certBtn(path) {
    path = (path || '').trim();
    return path ? '<button type="button" class="cert-btn" data-cert="' + esc(path) + '">Show certificate</button>' : '';
  }

  /* SKILLS */
  setHTML('skillsGrid', arr('skills').map(function (g) {
    return '<article class="card skill reveal"><h3>' + esc(g.group) + '</h3><ul class="chips">' +
      (g.items || []).map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul></article>';
  }).join(''));

  /* PROJECTS */
  setHTML('projectList', arr('projects').map(function (p, idx) {
    var vis = (visuals[p.visual] ? visuals[p.visual]() : (visuals.generic ? visuals.generic(p.title) : ''));
    var points = (p.points || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
    var tags = (p.tags || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
    var actions = '';
    if (p.github) actions += '<a class="btn btn-ghost" href="' + esc(p.github) + '" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>View Code</a>';
    else actions += '<span class="soon">CODE COMING SOON</span>';
    if (p.live) actions += '<a class="btn btn-primary" href="' + esc(p.live) + '" target="_blank" rel="noopener">Live Demo</a>';
    return '<article class="card project reveal">' +
      '<div class="p-visual">' + vis + '<span class="ill">Illustrative preview</span></div>' +
      '<div class="p-body">' +
        '<span class="p-num">Project ' + String(idx + 1).padStart(2, '0') + (p.category ? ' &middot; ' + esc(p.category) : '') + '</span>' +
        '<h3>' + esc(p.title) + '</h3>' +
        (p.subtitle ? '<p class="p-sub">' + esc(p.subtitle) + '</p>' : '') +
        '<ul class="p-points">' + points + '</ul>' +
        '<ul class="p-tags">' + tags + '</ul>' +
        '<div class="p-actions">' + actions + '</div>' +
      '</div></article>';
  }).join(''));

  /* EXPERIENCE */
  setHTML('experienceList', arr('experience').map(function (e) {
    var pts = (e.points || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
    if (e.link && e.link.url) pts += '<li>' + esc(e.link.prefix || '') + ' <a class="inline-link" href="' + esc(e.link.url) + '" target="_blank" rel="noopener">' + esc(e.link.text || e.link.url) + '</a></li>';
    return '<li class="reveal">' + dot(e.current) + '<h4>' + esc(e.role) + '</h4>' +
      '<p class="meta">' + esc(e.org) + (e.period ? ' &middot; ' + esc(e.period) : '') + '</p>' +
      (pts ? '<ul>' + pts + '</ul>' : '') + certBtn(e.certificate) + '</li>';
  }).join(''));

  /* EDUCATION */
  setHTML('educationList', arr('education').map(function (e) {
    return '<li class="reveal">' + dot(e.current) + '<h4>' + esc(e.degree) + '</h4>' +
      '<p class="meta">' + esc(e.school) + (e.period ? ' &middot; ' + esc(e.period) : '') + '</p></li>';
  }).join(''));

  /* CERTIFICATIONS */
  setHTML('certList', arr('certifications').map(function (c) {
    var sub = [c.issuer, c.details].filter(Boolean).map(esc).join(' &middot; ');
    return '<li class="reveal"><strong>' + esc(c.title) + '</strong><span>' + sub + '</span>' + certBtn(c.certificate) + '</li>';
  }).join(''));

  /* ACHIEVEMENTS */
  setHTML('achievementList', arr('achievements').map(function (a) {
    return '<article class="card medal reveal"><span class="place">' + esc(a.place || '') + '</span><div><h3>' + esc(a.title) + '</h3>' +
      (a.subtitle ? '<p class="meta">' + esc(a.subtitle) + '</p>' : '') +
      (a.description ? '<p>' + esc(a.description) + '</p>' : '') + certBtn(a.certificate) + '</div></article>';
  }).join(''));

  /* CONTACT */
  setHTML('contactGrid', arr('contact').map(function (c) {
    return '<a class="c-card' + (c.accent ? ' c-card-accent' : '') + ' reveal" href="' + esc(c.url) + '"' +
      (c.newTab ? ' target="_blank" rel="noopener"' : '') + (c.download ? ' download' : '') + '>' +
      '<span class="c-label">' + esc(c.label) + '</span><span class="c-value">' + esc(c.value) + '</span></a>';
  }).join(''));

  /* AUTO COUNTS (hero + About): data-stat="internships|projects|certifications|achievements" */
  var counts = {
    internships: arr('experience').filter(function (e) { return e.type === 'internship'; }).length,
    projects: arr('projects').length,
    certifications: arr('certifications').length,
    achievements: arr('achievements').length
  };
  doc.querySelectorAll('[data-stat]').forEach(function (el) {
    var n = counts[el.getAttribute('data-stat')];
    if (n === undefined || !D.experience) return;
    var pad = parseInt(el.getAttribute('data-pad') || '0', 10);
    el.textContent = String(n).padStart(pad, '0') + (el.getAttribute('data-suffix') || '');
  });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = doc.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Nav: scrolled state, mobile menu, active link ---------- */
  var nav = doc.getElementById('nav');
  var toggle = doc.getElementById('navToggle');
  var links = doc.getElementById('navLinks');
  function setMenu(open) {
    links.classList.toggle('open', open);
    nav.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  if (toggle) {
    toggle.addEventListener('click', function () { setMenu(!links.classList.contains('open')); });
    links.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
    doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }

  var sections = ['about', 'skills', 'projects', 'journey', 'recognition', 'contact'].map(function (id) { return doc.getElementById(id); }).filter(Boolean);
  var navAnchors = links ? links.querySelectorAll('a') : [];

  /* ---------- Scroll gauge (progress + back to top) ---------- */
  var gauge = doc.getElementById('scrollGauge');
  var arc = doc.getElementById('gaugeArc');
  var gtxt = doc.getElementById('gaugeText');
  var C = 163.4, ticking = false;
  function onScroll() {
    var y = window.scrollY || doc.documentElement.scrollTop;
    var max = doc.documentElement.scrollHeight - window.innerHeight;
    var pct = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
    nav.classList.toggle('scrolled', y > 20);
    if (arc) arc.style.strokeDashoffset = (C * (1 - pct)).toFixed(1);
    if (gtxt) gtxt.textContent = Math.round(pct * 100);
    if (gauge) gauge.classList.toggle('on', y > 500);
    var current = '';
    sections.forEach(function (s) { if (s.getBoundingClientRect().top <= 140) current = s.id; });
    navAnchors.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + current); });
    ticking = false;
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
  if (gauge) gauge.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });

  /* ---------- Certificate viewer ----------
     Buttons are created from the  certificate: "..."  field in js/site-data.js.
     - Set the path there. Delete the line (or use "") to hide the button. */
  doc.querySelectorAll('.cert-btn').forEach(function (b) { if (!(b.getAttribute('data-cert') || '').trim()) b.remove(); });
  var cm = doc.getElementById('certModal'), cb = doc.getElementById('certBody'), ct = doc.getElementById('certTitle'), co = doc.getElementById('certOpen');
  var lastFocus = null;
  function certTitleFor(btn) {
    var box = btn.closest('li, article');
    var h = box && box.querySelector('h4, h3, strong');
    return h ? h.textContent.trim() : 'Certificate';
  }
  function showCert(path, title) {
    var ext = (path.split('?')[0].split('.').pop() || '').toLowerCase();
    var isImg = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'avif'].indexOf(ext) > -1;
    ct.textContent = title; co.href = path;
    cb.innerHTML = '';
    var node;
    if (isImg) { node = doc.createElement('img'); node.alt = title + ' certificate'; node.src = path; node.onerror = function () { cb.innerHTML = '<p class="cert-msg">Certificate is not available right now.</p>'; }; }
    else { node = doc.createElement('iframe'); node.title = title + ' certificate'; node.src = path; }
    cb.appendChild(node);
    if (/^https?:/i.test(location.protocol)) {
      fetch(path, { method: 'HEAD' }).then(function (r) { if (r.status === 404) cb.innerHTML = '<p class="cert-msg">Certificate is not available right now.</p>'; }).catch(function () {});
    }
    lastFocus = doc.activeElement; cm.classList.add('open'); doc.body.style.overflow = 'hidden';
    doc.getElementById('certClose').focus();
  }
  function closeCert() { cm.classList.remove('open'); cb.innerHTML = ''; doc.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); }
  doc.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('.cert-btn') : null;
    if (btn) { e.preventDefault(); showCert(btn.getAttribute('data-cert').trim(), certTitleFor(btn)); return; }
    if (cm && cm.classList.contains('open') && (e.target === cm || e.target.id === 'certClose')) closeCert();
  });
  doc.addEventListener('keydown', function (e) { if (e.key === 'Escape' && cm && cm.classList.contains('open')) closeCert(); });

  /* ---------- Footer year ---------- */
  var yr = doc.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
