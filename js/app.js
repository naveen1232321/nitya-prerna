/**
 * Nitya Prerna — Core Application JavaScript
 * Global helpers, navigation, mobile drawer, Indian Standard Time clock, Lucide SVG Icons, and toasts.
 */

// Lucide SVG Icons Dictionary
const Icons = {
  lotus: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M12 2C8 6 4 11 4 16a8 8 0 0 0 16 0c0-5-4-10-8-14zM12 8c-3 3-5 6-5 9a5 5 0 0 0 10 0c0-3-2-6-5-9z"/></svg>`,
  search: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  calendar: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
  clock: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  book: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
  feather: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>`,
  user: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
  award: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
  archive: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
  share2: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>`,
  copy: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.07c-.24.67-1.39 1.29-1.93 1.37-.51.08-1.18.11-3.41-.81-2.85-1.18-4.69-4.08-4.83-4.27-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.37.26-.28.58-.35.77-.35.19 0 .39 0 .56.01.18.01.42-.07.65.49.24.58.82 2.01.89 2.16.07.15.12.33.02.53-.1.2-.15.33-.3.51-.15.17-.31.39-.45.52-.15.15-.31.31-.13.62.18.31.79 1.3 1.7 2.11 1.17 1.04 2.15 1.37 2.46 1.52.31.15.49.13.67-.08.19-.21.79-.92 1-1.24.21-.31.42-.26.71-.15.29.11 1.83.86 2.15 1.02.31.15.52.23.6.35.08.13.08.73-.16 1.4z"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
  x: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  check: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  sun: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  shield: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>`
};

// Global Header Component Generator
function renderGlobalHeader(activePage = '') {
  return `
    <header class="site-header">
      <div class="top-bar">
        <div class="container top-bar-inner">
          <div class="ist-time-badge" id="ist-time-container">
            ${Icons.clock}
            <span id="ist-clock-text">IST: Loading...</span>
          </div>
          <div class="top-quote">
            <span>"सत्यमेव जयते नानृतम्" — Truth alone triumphs, not falsehood</span>
          </div>
          <div style="font-size:0.8rem;">
            <span>భారతీయ వారసత్వం • भारतीय संस्कृति</span>
          </div>
        </div>
      </div>
      
      <div class="container nav-container">
        <!-- Brand -->
        <a href="index.html" class="brand">
          <div class="brand-emblem">
            ${Icons.lotus}
          </div>
          <div class="brand-text">
            <span class="brand-title">Nitya Prerna</span>
            <span class="brand-tagline">Inspiration • History • Mythology</span>
          </div>
        </a>

        <!-- Desktop Menu -->
        <nav>
          <ul class="nav-menu">
            <li><a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Home</a></li>
            <li><a href="daily-posts.html" class="nav-link ${activePage === 'daily' ? 'active' : ''}">Daily Posts</a></li>
            <li><a href="historical-dates.html" class="nav-link ${activePage === 'history' ? 'active' : ''}">Historical Dates</a></li>
            <li><a href="mythology.html" class="nav-link ${activePage === 'mythology' ? 'active' : ''}">Mythology</a></li>
            <li><a href="personalities.html" class="nav-link ${activePage === 'personalities' ? 'active' : ''}">Personalities</a></li>
            <li><a href="articles.html" class="nav-link ${activePage === 'articles' ? 'active' : ''}">Articles</a></li>
            <li><a href="archive.html" class="nav-link ${activePage === 'archive' ? 'active' : ''}">Archive</a></li>
          </ul>
        </nav>

        <!-- Right Actions -->
        <div class="nav-actions">
          <a href="search.html" class="btn-icon" title="Search Nitya Prerna" aria-label="Search">
            ${Icons.search}
          </a>
          <a href="admin.html" class="btn-admin" title="Admin Dashboard">
            ${Icons.shield}
            <span>Admin</span>
          </a>
          <button class="mobile-toggle" id="mobile-menu-btn" aria-label="Toggle navigation menu">
            ${Icons.menu}
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer -->
    <div class="mobile-drawer" id="mobile-drawer">
      <div class="drawer-content">
        <div class="drawer-header">
          <div class="brand">
            <div class="brand-emblem" style="width:36px; height:36px;">${Icons.lotus}</div>
            <span class="brand-title" style="font-size:1.2rem;">Nitya Prerna</span>
          </div>
          <button class="btn-icon" id="close-drawer-btn" aria-label="Close menu">
            ${Icons.x}
          </button>
        </div>

        <ul class="drawer-menu">
          <li><a href="index.html" class="drawer-link">${Icons.sun} Home</a></li>
          <li><a href="daily-posts.html" class="drawer-link">${Icons.feather} Daily Posts</a></li>
          <li><a href="historical-dates.html" class="drawer-link">${Icons.calendar} Historical Dates</a></li>
          <li><a href="mythology.html" class="drawer-link">${Icons.book} Mythology</a></li>
          <li><a href="personalities.html" class="drawer-link">${Icons.user} Personalities</a></li>
          <li><a href="articles.html" class="drawer-link">${Icons.feather} Articles</a></li>
          <li><a href="archive.html" class="drawer-link">${Icons.archive} Archive</a></li>
          <li><a href="search.html" class="drawer-link">${Icons.search} Search</a></li>
          <li><a href="admin.html" class="drawer-link" style="color:var(--accent-primary);">${Icons.shield} Admin Dashboard</a></li>
        </ul>
      </div>
    </div>
  `;
}

// Global Footer Component Generator
function renderGlobalFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Col 1: About -->
          <div class="footer-col">
            <div class="brand" style="color:#FFFFFF; margin-bottom:1.25rem;">
              <div class="brand-emblem">${Icons.lotus}</div>
              <div class="brand-text">
                <span class="brand-title" style="color:#FFFFFF;">Nitya Prerna</span>
                <span class="brand-tagline" style="color:var(--accent-secondary);">Inspiration • History • Mythology</span>
              </div>
            </div>
            <p style="color:var(--text-light-muted); font-size:0.95rem; margin-bottom:1.5rem; line-height:1.7;">
              A curated daily sanctuary dedicated to timeless Indian motivation, historical anniversaries, extraordinary personalities, and the philosophical wisdom of our sacred scriptures.
            </p>
            <div style="display:flex; gap:0.6rem; color:var(--accent-secondary);">
              <span>ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ॥</span>
            </div>
          </div>

          <!-- Col 2: Categories -->
          <div class="footer-col">
            <h4>Sections</h4>
            <ul class="footer-links">
              <li><a href="daily-posts.html">Daily Inspiration</a></li>
              <li><a href="historical-dates.html">Historical Dates</a></li>
              <li><a href="mythology.html">Mythological Wisdom</a></li>
              <li><a href="personalities.html">Great Personalities</a></li>
              <li><a href="articles.html">Featured Articles</a></li>
              <li><a href="archive.html">Full Archive</a></li>
            </ul>
          </div>

          <!-- Col 3: Quick Links -->
          <div class="footer-col">
            <h4>Navigation</h4>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="search.html">Search Archive</a></li>
              <li><a href="admin.html">Admin Publisher</a></li>
              <li><a href="archive.html?filter=today">Today's Content</a></li>
              <li><a href="#about">About Nitya Prerna</a></li>
            </ul>
          </div>

          <!-- Col 4: Daily Wisdom Subscribe -->
          <div class="footer-col">
            <h4>Daily Prerna</h4>
            <p style="color:var(--text-light-muted); font-size:0.92rem; margin-bottom:1.2rem;">
              Begin each morning connected to India's glorious heritage and timeless thoughts.
            </p>
            <form onsubmit="event.preventDefault(); showToast('Thank you for subscribing to daily inspiration!', 'success'); this.reset();" style="display:flex; gap:0.5rem; flex-direction:column;">
              <input type="email" required placeholder="Enter your email address" style="padding:0.7rem 0.9rem; border-radius:var(--radius-md); border:1px solid var(--border-dark); background:rgba(255,255,255,0.06); color:#fff; font-size:0.9rem;">
              <button type="submit" class="btn btn-gold btn-sm" style="width:100%;">
                Subscribe to Daily Wisdom
              </button>
            </form>
          </div>
        </div>

        <div class="footer-bottom">
          <div>
            &copy; ${new Date().getFullYear()} Nitya Prerna (నిత్య ప్రేరణ / नित्य प्रेरणा). All rights reserved.
          </div>
          <div>
            Built with reverence for Indian Heritage & Culture.
          </div>
        </div>
      </div>
    </footer>
    <div class="toast-container" id="toast-container"></div>
  `;
}

// Indian Standard Time (Asia/Kolkata) Clock
function initISTClock() {
  function update() {
    const el = document.getElementById("ist-clock-text");
    if (!el) return;
    
    const now = new Date();
    // Use Intl API with Asia/Kolkata timezone
    const formatter = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
    el.textContent = "IST: " + formatter.format(now);
  }
  update();
  setInterval(update, 1000);
}

// Mobile Drawer Listeners
function initMobileDrawer() {
  const openBtn = document.getElementById("mobile-menu-btn");
  const closeBtn = document.getElementById("close-drawer-btn");
  const drawer = document.getElementById("mobile-drawer");

  if (openBtn && drawer) {
    openBtn.addEventListener("click", () => drawer.classList.add("open"));
  }
  if (closeBtn && drawer) {
    closeBtn.addEventListener("click", () => drawer.classList.remove("open"));
  }
  if (drawer) {
    drawer.addEventListener("click", (e) => {
      if (e.target === drawer) drawer.classList.remove("open");
    });
  }
}

// Global Toast System
function showToast(message, type = 'info') {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span>${Icons.sparkles}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Helper to format dates
function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

// Copy to Clipboard
function copyToClipboard(text, successMsg = 'Link copied to clipboard!') {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg, 'success');
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(successMsg, 'success');
  } catch (err) {
    showToast('Failed to copy', 'error');
  }
  document.body.removeChild(textArea);
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  initISTClock();
  initMobileDrawer();
});

// Expose globally
window.Icons = Icons;
window.renderGlobalHeader = renderGlobalHeader;
window.renderGlobalFooter = renderGlobalFooter;
window.showToast = showToast;
window.formatDate = formatDate;
window.copyToClipboard = copyToClipboard;

