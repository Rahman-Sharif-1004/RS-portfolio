/* Preview illustrations for project cards (inline SVG, no image files needed). */
(function () {
  var wrap = function (label, inner) {
    return '<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + label +
      '" preserveAspectRatio="xMidYMid meet">' + inner + '</svg>';
  };

  var fontAttr = 'font-family="JetBrains Mono, monospace"';

  /* ---------- Magical Keyboard: hand landmarks over a dashed "invisible" keyboard ---------- */
  function keyboard() {
    var pts = [[200,160],[178,150],[160,132],[148,112],[140,94],[184,118],[180,96],[178,78],[177,62],[200,112],[200,88],[200,70],[200,52],[216,118],[220,96],[222,80],[224,66],[230,130],[238,112],[243,98],[247,86]];
    var links = [[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[9,10],[10,11],[11,12],[13,14],[14,15],[15,16],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17],[0,17]];
    var s = '<defs><radialGradient id="kbGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#5aaef0" stop-opacity=".35"/><stop offset="1" stop-color="#5aaef0" stop-opacity="0"/></radialGradient></defs>';
    s += '<rect width="400" height="250" fill="#0a1019"/><ellipse cx="200" cy="120" rx="170" ry="110" fill="url(#kbGlow)"/>';
    /* dashed keys */
    var rows = [[11,27],[10,43],[9,59]];
    rows.forEach(function (r, ri) {
      for (var i = 0; i < r[0]; i++) {
        var x = r[1] + i * 32, y = 182 + ri * 22;
        var hot = ri === 0 && i === 4;
        s += '<rect x="' + x + '" y="' + y + '" width="26" height="17" rx="4" fill="' + (hot ? 'rgba(90,174,240,.45)' : 'none') + '" stroke="' + (hot ? '#5aaef0' : 'rgba(143,161,181,.45)') + '" stroke-width="1.2"' + (hot ? '' : ' stroke-dasharray="3 3"') + '/>';
      }
    });
    /* fingertip to key guide */
    s += '<line x1="177" y1="62" x2="168" y2="182" stroke="#ffb340" stroke-width="1" stroke-dasharray="3 4" opacity=".7"/>';
    /* hand skeleton */
    links.forEach(function (l) {
      s += '<line x1="' + pts[l[0]][0] + '" y1="' + pts[l[0]][1] + '" x2="' + pts[l[1]][0] + '" y2="' + pts[l[1]][1] + '" stroke="#5aaef0" stroke-width="2" stroke-linecap="round"/>';
    });
    pts.forEach(function (p, i) {
      var tip = i === 8;
      s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + (tip ? 5 : 3.2) + '" fill="' + (tip ? '#ffb340' : '#e8eef6') + '"/>';
    });
    s += '<circle cx="177" cy="62" r="11" fill="none" stroke="#ffb340" stroke-width="1.5" opacity=".8"><animate attributeName="r" values="7;15;7" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values=".9;0;.9" dur="2s" repeatCount="indefinite"/></circle>';
    /* HUD */
    s += '<text x="22" y="48" ' + fontAttr + ' font-size="9" fill="#8fa1b5" letter-spacing="1">FPS</text><text x="22" y="66" ' + fontAttr + ' font-size="18" font-weight="700" fill="#37d6a0">30-60</text>';
    s += '<text x="378" y="48" text-anchor="end" ' + fontAttr + ' font-size="9" fill="#8fa1b5" letter-spacing="1">TRACKING</text><text x="378" y="66" text-anchor="end" ' + fontAttr + ' font-size="18" font-weight="700" fill="#ffb340">85%+</text>';
    return wrap('Illustration of a hand tracked by computer vision over a virtual keyboard', s);
  }

  /* ---------- Smart Campus Assistant: event list UI ---------- */
  function campus() {
    var s = '<rect width="400" height="250" fill="#0a1019"/>';
    s += '<rect x="28" y="26" width="250" height="198" rx="14" fill="#111924" stroke="rgba(120,170,220,.25)"/>';
    s += '<circle cx="46" cy="44" r="4" fill="#ff5d5d"/><circle cx="60" cy="44" r="4" fill="#ffb340"/><circle cx="74" cy="44" r="4" fill="#37d6a0"/>';
    s += '<rect x="44" y="60" width="218" height="22" rx="11" fill="#0a1019" stroke="rgba(120,170,220,.25)"/><text x="58" y="75" ' + fontAttr + ' font-size="9" fill="#8fa1b5">Search campus events...</text>';
    var cols = ['#ffb340', '#5aaef0', '#37d6a0'];
    var titles = [120, 96, 140];
    for (var i = 0; i < 3; i++) {
      var y = 94 + i * 42;
      s += '<rect x="44" y="' + y + '" width="218" height="34" rx="9" fill="#16212f"/>';
      s += '<rect x="52" y="' + (y + 6) + '" width="22" height="22" rx="6" fill="' + cols[i] + '" opacity=".9"/>';
      s += '<rect x="84" y="' + (y + 8) + '" width="' + titles[i] + '" height="6" rx="3" fill="#e8eef6" opacity=".85"/><rect x="84" y="' + (y + 20) + '" width="' + (titles[i] - 44) + '" height="5" rx="2.5" fill="#8fa1b5" opacity=".6"/>';
      s += '<circle cx="246" cy="' + (y + 17) + '" r="3.5" fill="#37d6a0"><animate attributeName="opacity" values="1;.25;1" dur="1.6s" begin="' + (i * .4) + 's" repeatCount="indefinite"/></circle>';
    }
    /* stat tiles */
    s += '<rect x="292" y="26" width="86" height="92" rx="14" fill="#111924" stroke="rgba(120,170,220,.25)"/>';
    s += '<text x="335" y="62" text-anchor="middle" ' + fontAttr + ' font-size="22" font-weight="700" fill="#ffb340">200+</text><text x="335" y="80" text-anchor="middle" ' + fontAttr + ' font-size="8" fill="#8fa1b5" letter-spacing="1">ATTENDEES</text>';
    for (var b = 0; b < 5; b++) { var h = [8, 13, 10, 17, 20][b]; s += '<rect x="' + (302 + b * 14) + '" y="' + (110 - h) + '" width="8" height="' + h + '" rx="2" fill="#5aaef0" opacity="' + (.45 + b * .12) + '"/>'; }
    s += '<rect x="292" y="132" width="86" height="92" rx="14" fill="#111924" stroke="rgba(120,170,220,.25)"/>';
    s += '<text x="335" y="168" text-anchor="middle" ' + fontAttr + ' font-size="22" font-weight="700" fill="#37d6a0">-15%</text><text x="335" y="186" text-anchor="middle" ' + fontAttr + ' font-size="8" fill="#8fa1b5" letter-spacing="1">RETRIEVAL TIME</text>';
    s += '<path d="M306 212 L322 204 L336 208 L352 196 L366 200" fill="none" stroke="#37d6a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    return wrap('Illustration of a campus events web app with attendee and speed statistics', s);
  }

  /* ---------- MailGuard: risk dashboard ---------- */
  function mailguard() {
    var s = '<rect width="400" height="250" fill="#0a1019"/>';
    /* email analysis panel */
    s += '<rect x="24" y="26" width="178" height="198" rx="14" fill="#111924" stroke="rgba(120,170,220,.25)"/>';
    s += '<text x="40" y="50" ' + fontAttr + ' font-size="9" fill="#8fa1b5" letter-spacing="1">EMAIL ANALYSIS</text>';
    var items = [['SPF', 'FAIL', '#ff5d5d'], ['DKIM', 'FAIL', '#ff5d5d'], ['URLs', 'SUSPICIOUS', '#ffb340'], ['Content', 'URGENT TONE', '#ffb340'], ['Attachment', 'CLEAN', '#37d6a0']];
    items.forEach(function (it, i) {
      var y = 62 + i * 31;
      s += '<rect x="36" y="' + y + '" width="154" height="25" rx="7" fill="#16212f"/>';
      s += '<rect x="36" y="' + y + '" width="3" height="25" rx="1.5" fill="' + it[2] + '"/>';
      s += '<text x="48" y="' + (y + 16) + '" ' + fontAttr + ' font-size="9" fill="#e8eef6">' + it[0] + '</text>';
      s += '<text x="182" y="' + (y + 16) + '" text-anchor="end" ' + fontAttr + ' font-size="8" font-weight="700" fill="' + it[2] + '">' + it[1] + '</text>';
    });
    /* gauge */
    s += '<rect x="216" y="26" width="160" height="198" rx="14" fill="#111924" stroke="rgba(120,170,220,.25)"/>';
    s += '<text x="232" y="50" ' + fontAttr + ' font-size="9" fill="#8fa1b5" letter-spacing="1">RISK SCORE</text>';
    s += '<path d="M246 152 A50 50 0 0 1 271 108.7" fill="none" stroke="#37d6a0" stroke-width="10"/>';
    s += '<path d="M271 108.7 A50 50 0 0 1 321 108.7" fill="none" stroke="#ffb340" stroke-width="10"/>';
    s += '<path d="M321 108.7 A50 50 0 0 1 346 152" fill="none" stroke="#ff5d5d" stroke-width="10"/>';
    s += '<line x1="296" y1="152" x2="334" y2="134" stroke="#e8eef6" stroke-width="3" stroke-linecap="round"/><circle cx="296" cy="152" r="6" fill="#e8eef6"/>';
    s += '<text x="296" y="186" text-anchor="middle" ' + fontAttr + ' font-size="13" font-weight="700" fill="#ff5d5d">HIGH RISK</text>';
    s += '<rect x="232" y="196" width="128" height="18" rx="9" fill="rgba(255,93,93,.14)" stroke="rgba(255,93,93,.5)"/><text x="296" y="208" text-anchor="middle" ' + fontAttr + ' font-size="8" fill="#ff8f8f" letter-spacing=".5">ESCALATED: SPOOFED LINK</text>';
    return wrap('Illustration of a phishing risk dashboard with authentication checks and a high-risk gauge', s);
  }

  /* ---------- NEVIXA 2K26: symposium website (red + gold, matches the real site) ---------- */
  function symposium() {
    var s = '<defs>' +
      '<radialGradient id="nvMoon" cx="40%" cy="38%" r="65%"><stop offset="0" stop-color="#d8401f"/><stop offset=".6" stop-color="#8a1608"/><stop offset="1" stop-color="#3a0000"/></radialGradient>' +
      '<radialGradient id="nvHalo" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ec240e" stop-opacity=".32"/><stop offset="1" stop-color="#ec240e" stop-opacity="0"/></radialGradient>' +
      '<clipPath id="nvBand"><rect x="0" y="220" width="400" height="18"/></clipPath></defs>';
    s += '<rect width="400" height="250" fill="#0a0000"/>';
    /* stars */
    var st = [[40,70],[92,40],[150,62],[246,36],[288,92],[372,40],[60,118],[352,120],[120,26],[210,70]];
    st.forEach(function (p, i) { s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + (i % 3 ? .8 : 1.2) + '" fill="#f5f0e8" opacity="' + (.25 + (i % 4) * .12) + '"/>'; });
    /* red moon */
    s += '<circle cx="330" cy="64" r="46" fill="url(#nvHalo)"><animate attributeName="opacity" values=".6;1;.6" dur="4s" repeatCount="indefinite"/></circle>';
    s += '<circle cx="330" cy="64" r="17" fill="url(#nvMoon)"/><circle cx="335" cy="60" r="3" fill="#000" opacity=".25"/><circle cx="325" cy="71" r="2" fill="#000" opacity=".25"/>';
    /* mountains */
    s += '<path d="M0 222 L0 190 Q30 170 62 186 Q96 160 132 184 Q168 158 204 182 Q246 150 286 180 Q324 160 356 182 Q384 172 400 184 L400 222 Z" fill="#150202"/>';
    s += '<path d="M0 222 L0 204 Q48 190 96 202 Q150 186 204 200 Q262 184 316 200 Q362 192 400 202 L400 222 Z" fill="#090000"/>';
    /* torii gate */
    s += '<g fill="#7b1010" opacity=".9"><rect x="52" y="176" width="3.5" height="30"/><rect x="74" y="176" width="3.5" height="30"/><path d="M46 177 Q65 170 84 177 L84 181 Q65 175 46 181 Z"/><rect x="52" y="186" width="26" height="2.5"/></g>';
    /* HUD */
    s += '<text x="22" y="26" ' + fontAttr + ' font-size="9" fill="#8fa1b5" letter-spacing="1">EVENTS</text><text x="22" y="46" ' + fontAttr + ' font-size="18" font-weight="700" fill="#d4a01a">07</text>';
    /* college line */
    s += '<text x="200" y="76" text-anchor="middle" ' + fontAttr + ' font-size="7.5" fill="#d4a01a" letter-spacing="2">MAMCET &#183; CSE DEPARTMENT</text>';
    /* title */
    s += '<text x="200" y="116" text-anchor="middle" font-family="Sora, sans-serif" font-size="46" font-weight="800" letter-spacing="2" fill="none" stroke="#ec240e" stroke-width="1.6">NEVIXA</text>';
    s += '<text x="200" y="116" text-anchor="middle" font-family="Sora, sans-serif" font-size="46" font-weight="800" letter-spacing="2" fill="#ec240e" opacity=".14">NEVIXA</text>';
    s += '<text x="200" y="138" text-anchor="middle" font-family="Sora, sans-serif" font-size="15" font-weight="700" letter-spacing="9" fill="#d4a01a">2K26</text>';
    /* info pills */
    var pills = [['28 MAR', 56], ['NEWTON HALL', 84], ['&#8377;200', 48]], x = 98;
    pills.forEach(function (p) {
      s += '<rect x="' + x + '" y="150" width="' + p[1] + '" height="18" rx="2" fill="rgba(236,36,14,.1)" stroke="rgba(236,36,14,.5)"/>';
      s += '<text x="' + (x + p[1] / 2) + '" y="162" text-anchor="middle" ' + fontAttr + ' font-size="8" fill="#f5f0e8" letter-spacing=".8">' + p[0] + '</text>';
      x += p[1] + 8;
    });
    /* register button */
    s += '<polygon points="166,176 242,176 238,192 162,192" fill="#ec240e"/><text x="202" y="188" text-anchor="middle" ' + fontAttr + ' font-size="8" font-weight="700" fill="#f5f0e8" letter-spacing="2">REGISTER</text>';
    /* ticker band */
    s += '<rect x="0" y="220" width="400" height="18" fill="#ec240e"/>';
    s += '<g clip-path="url(#nvBand)"><text y="232" ' + fontAttr + ' font-size="7.5" fill="#f5f0e8" letter-spacing="1.6">PAPER PRESENTATION &#183; CODE DEBUG &#183; UI-UX &#183; CRITICAL THINK &#183; CODE CONNECT &#183; SHORT FILM &#183; QUIZ &#183; PAPER PRESENTATION &#183; CODE DEBUG<animateTransform attributeName="transform" type="translate" from="400 0" to="-620 0" dur="18s" repeatCount="indefinite"/></text></g>';
    return wrap('Illustration of the NEVIXA 2K26 symposium website with event details and registration', s);
  }

  /* ---------- Generic fallback for new projects ---------- */
  function generic(title) {
    var initials = (title || 'P').split(/\s+/).map(function (w) { return w[0]; }).join('').slice(0, 2).toUpperCase();
    var s = '<rect width="400" height="250" fill="#0a1019"/>';
    for (var i = 0; i < 8; i++) s += '<line x1="0" y1="' + (i * 36) + '" x2="400" y2="' + (i * 36) + '" stroke="rgba(120,170,220,.07)"/>';
    s += '<circle cx="200" cy="125" r="62" fill="none" stroke="#5aaef0" stroke-width="3" stroke-dasharray="4 8"/>';
    s += '<text x="200" y="140" text-anchor="middle" font-family="Sora, sans-serif" font-size="44" font-weight="800" fill="#e8eef6">' + initials + '</text>';
    return wrap('Project preview', s);
  }

  window.PROJECT_VISUALS = { keyboard: keyboard, campus: campus, mailguard: mailguard, symposium: symposium, generic: generic };
})();