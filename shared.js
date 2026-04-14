// ── SHARED HEADER + FOOTER INJECTOR ──
// Call injectShared('pageName') at top of each page body

const PAGES = {
  home:         { file: 'index.html',        label: 'Home' },
  tournaments:  { file: 'tournaments.html',  label: 'Tournaments' },
  registration: { file: 'registration.html', label: 'Register' },
  past:         { file: 'past.html',         label: 'Past Events' },
  rankings:     { file: 'rankings.html',     label: 'Rankings' },
};

function injectShared(activePage) {
  // ── TICKER ──
  const ticker = `
  <div class="ticker">
    <div class="ticker-track">
      <span class="tick-item">⚡ BGIS 2026 Registrations Open ★</span>
      <span class="tick-item">🏆 Prize Pool ₹2 Crore+ ★</span>
      <span class="tick-item">📅 Qualifier Slots: 14–16 April 2026 ★</span>
      <span class="tick-item">🎮 Register Your Squad Now ★</span>
      <span class="tick-item">🔥 IRS 2026 — Registration Closed ★</span>
      <span class="tick-item">🌏 BMPS 2026 — Coming Soon ★</span>
      <span class="tick-item">⚡ BGIS 2026 Registrations Open ★</span>
      <span class="tick-item">🏆 Prize Pool ₹2 Crore+ ★</span>
      <span class="tick-item">📅 Qualifier Slots: 14–16 April 2026 ★</span>
      <span class="tick-item">🎮 Register Your Squad Now ★</span>
      <span class="tick-item">🔥 IRS 2026 — Registration Closed ★</span>
      <span class="tick-item">🌏 BMPS 2026 — Coming Soon ★</span>
    </div>
  </div>`;

  // ── HEADER ──
  const navLinks = [
    { page: 'tournaments',  label: 'Tournaments' },
    { page: 'registration', label: 'Register' },
    { page: 'past',         label: 'Past Events' },
    { page: 'rankings',     label: 'Rankings' },
  ];
  const navHTML = navLinks.map(n =>
    `<a href="${PAGES[n.page].file}" class="${activePage===n.page?'active':''}">${n.label}</a>`
  ).join('');

  const header = `
  <div id="hdr">
    <div class="hdr-in">
      <a href="index.html" class="logo">
        <img class="kie" src="https://esports.battlegroundsmobileindia.com/images/Updated_Logos_2026/KIE%20Logo.svg" alt="KIE"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="logo-fb" style="display:none">KIE<span>KRAFTON</span></div>
        <div class="logo-div"></div>
        <img class="bgmi" src="https://esports.battlegroundsmobileindia.com/images/Updated_Logos_2026/BGMI%20logo-1.svg" alt="BGMI"
          onerror="this.outerHTML='<span style=\\'font-family:Barlow Condensed,sans-serif;font-size:1.3rem;font-weight:800;color:var(--gold)\\'>BGMI</span>'">
      </a>
      <nav id="dNav">${navHTML}
        <a href="#" class="hot">BGIS 2026 ⚡</a>
      </nav>
      <div class="hdr-btns">
        <button class="btn-l" onclick="openLogin()">Login</button>
        <button class="btn-s" onclick="openLogin()">Sign Up</button>
        <button class="ham" onclick="toggleNav()">
          <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" d="M3 6h16M3 12h16M3 18h16"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="mob-nav" id="mobNav">
      ${navLinks.map(n => `<a href="${PAGES[n.page].file}" onclick="toggleNav()">${n.label}</a>`).join('')}
      <a href="#" style="color:var(--gold)" onclick="toggleNav()">BGIS 2026 ⚡</a>
    </div>
  </div>`;

  // ── FOOTER ──
  const footer = `
  <footer>
    <div class="ft">
      <div class="ft-top">
        <div class="ft-brand">
          <div style="display:flex;align-items:center;gap:.8rem">
            <img src="https://esports.battlegroundsmobileindia.com/images/Updated_Logos_2026/KIE%20Logo.svg" alt="KIE" style="height:36px" onerror="this.style.display='none'">
            <div style="width:1px;height:30px;background:#2e2e2e"></div>
            <img src="https://esports.battlegroundsmobileindia.com/images/Updated_Logos_2026/BGMI%20logo-1.svg" alt="BGMI" style="height:22px" onerror="this.style.display='none'">
          </div>
          <p>India's premier BGMI esports platform. Organizing the biggest open-for-all tournaments since 2022.</p>
          <div class="ft-social">
            <a class="soc">𝕏</a><a class="soc">📸</a><a class="soc">▶</a><a class="soc">💬</a>
          </div>
        </div>
        <div class="ft-col"><h4>Tournaments</h4><ul>
          <li><a href="tournaments.html">Active Events</a></li>
          <li><a href="past.html">Past Events</a></li>
          <li><a href="#">3rd Party</a></li>
          <li><a href="#">Global</a></li>
          <li><a href="rankings.html">Rankings</a></li>
        </ul></div>
        <div class="ft-col"><h4>Register</h4><ul>
          <li><a href="registration.html">Squad Registration</a></li>
          <li><a href="#">Rule Book</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Media Kit</a></li>
        </ul></div>
        <div class="ft-col"><h4>Company</h4><ul>
          <li><a href="#">About KRAFTON</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul></div>
      </div>
      <div class="ft-div"></div>
      <div class="ft-bot">
        <p>© 2026 Krafton India Esports. All rights reserved. BGMI is a trademark of KRAFTON, Inc.</p>
        <p><a href="#">Privacy</a> &nbsp;·&nbsp; <a href="#">Terms</a> &nbsp;·&nbsp; <a href="#">Cookies</a></p>
      </div>
    </div>
  </footer>

  <!-- LOGIN MODAL -->
  <div class="modal" id="loginModal">
    <div class="modal-box">
      <div style="display:flex;justify-content:flex-end;margin-bottom:.5rem">
        <button onclick="closeLogin()" style="background:none;border:none;color:var(--c100);cursor:pointer;font-size:1.2rem">✕</button>
      </div>
      <div style="margin-bottom:.8rem">
        <img src="https://esports.battlegroundsmobileindia.com/images/Updated_Logos_2026/KIE%20Logo.svg" alt="" style="height:36px" onerror="this.style.display='none'">
      </div>
      <div class="m-title" style="font-size:1.4rem">Player Login</div>
      <div class="m-text">Sign in with your KRAFTON account to manage your squad.</div>
      <div style="display:flex;flex-direction:column;gap:.75rem;margin-bottom:1.1rem">
        <input class="fi" type="email" placeholder="Email address" style="background:var(--c700)">
        <input class="fi" type="password" placeholder="Password" style="background:var(--c700)">
      </div>
      <div style="display:flex;gap:.75rem">
        <button class="btn-reg" style="flex:1;background:var(--gold);color:#111;border:none;padding:.58rem;font-size:.88rem" onclick="closeLogin()">Login</button>
        <button class="btn-reg" style="flex:1;background:var(--c600);color:white;border:none;padding:.58rem;font-size:.88rem" onclick="closeLogin()">Sign Up</button>
      </div>
    </div>
  </div>`;

  // Inject
  document.body.insertAdjacentHTML('afterbegin', ticker + header);
  document.body.insertAdjacentHTML('beforeend', footer);

  // Shared scripts
  window.toggleNav = () => document.getElementById('mobNav').classList.toggle('open');
  window.openLogin = () => document.getElementById('loginModal').classList.add('show');
  window.closeLogin = () => document.getElementById('loginModal').classList.remove('show');
  document.querySelectorAll('.modal').forEach(m =>
    m.addEventListener('click', function(e){ if(e.target===this) this.classList.remove('show'); })
  );
}
