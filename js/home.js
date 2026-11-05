/**
 * Nitya Prerna — Homepage JavaScript
 * Today's Highlights, Category Grid, Recent Posts with filtering,
 * Historical Interactive Calendar, and Featured Personality spotlight.
 */

let currentCalendarMonth = new Date().getMonth(); // 0-11
let currentCalendarYear = new Date().getFullYear();
let selectedCalendarDay = new Date().getDate();

document.addEventListener("DOMContentLoaded", () => {
  renderTodaysHighlights();
  renderRecentPosts("All");
  initCalendar();
  renderSpotlightPersonality();
});

// Refresh on MongoDB live sync
document.addEventListener("nitya:data-updated", () => {
  renderTodaysHighlights();
  renderRecentPosts("All");
  renderCalendarDays();
  renderSpotlightPersonality();
});

// 1. Render Today's Highlights
function renderTodaysHighlights() {
  const container = document.getElementById("todays-highlights-container");
  if (!container) return;

  const data = StorageManager.getTodaysHighlights();
  
  // Set date header
  const dateHeader = document.getElementById("todays-date-header");
  if (dateHeader) {
    dateHeader.textContent = data.istDateString;
  }

  const { inspiration, history, commemoration } = data;

  let html = `
    <!-- Card 1: Today's Inspiration -->
    <div class="highlight-card">
      <span class="highlight-badge badge-inspiration">
        ${Icons.sparkles} Today's Inspiration
      </span>
      ${inspiration ? `
        <blockquote class="highlight-quote">
          "${inspiration.quote || inspiration.shortDescription}"
        </blockquote>
        <span class="highlight-author">— ${inspiration.quoteAuthor || inspiration.author || 'Timeless Wisdom'}</span>
        <p class="highlight-thought">
          ${inspiration.supportingThought || inspiration.shortDescription}
        </p>
        <a href="post.html?id=${inspiration.id}" class="btn-link">
          Read Full Reflection ${Icons.arrowRight}
        </a>
      ` : `
        <div class="empty-state" style="padding:2rem 1rem;">
          <p>No inspirational quote recorded for today.</p>
          <a href="daily-posts.html" class="btn btn-secondary btn-sm" style="margin-top:1rem;">Explore All Quotes</a>
        </div>
      `}
    </div>

    <!-- Card 2: This Day in History -->
    <div class="highlight-card">
      <span class="highlight-badge badge-history">
        ${Icons.history || Icons.calendar} This Day in History
      </span>
      ${history ? `
        <div class="highlight-image-box">
          <img src="${history.coverImage || 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'}" alt="${history.title}" loading="lazy">
          <span class="highlight-meta-date">${history.historicalYear || ''}</span>
        </div>
        <h3 class="highlight-title">${history.title}</h3>
        <p class="highlight-desc">${history.shortDescription}</p>
        <a href="post.html?id=${history.id}" class="btn-link">
          Explore Historical Significance ${Icons.arrowRight}
        </a>
      ` : `
        <div class="empty-state" style="padding:2rem 1rem;">
          <p>No major anniversary recorded for today yet.</p>
          <a href="historical-dates.html" class="btn btn-secondary btn-sm" style="margin-top:1rem;">Browse History Calendar</a>
        </div>
      `}
    </div>

    <!-- Card 3: Today's Commemoration -->
    <div class="highlight-card">
      <span class="highlight-badge badge-commemoration">
        ${Icons.award} Today's Commemoration
      </span>
      ${commemoration ? `
        <div class="highlight-image-box">
          <img src="${commemoration.coverImage || 'https://images.unsplash.com/photo-1599837565318-67429bde7162?auto=format&fit=crop&w=800&q=80'}" alt="${commemoration.title}" loading="lazy">
          <span class="highlight-meta-date">${commemoration.historicalYear || 'Honored'}</span>
        </div>
        <h3 class="highlight-title">${commemoration.title}</h3>
        <p class="highlight-desc">
          ${commemoration.historicalSignificance || commemoration.shortDescription}
        </p>
        <a href="post.html?id=${commemoration.id}" class="btn-link">
          Read Tribute ${Icons.arrowRight}
        </a>
      ` : `
        <div class="empty-state" style="padding:2rem 1rem;">
          <p>Explore our biographical tribute archives.</p>
          <a href="personalities.html" class="btn btn-secondary btn-sm" style="margin-top:1rem;">View Personalities</a>
        </div>
      `}
    </div>
  `;

  container.innerHTML = html;
}

// 2. Render Recent Posts with Filtering
function renderRecentPosts(filterCategory = "All") {
  const container = document.getElementById("recent-posts-grid");
  if (!container) return;

  let posts = StorageManager.getAll(false);
  if (filterCategory !== "All") {
    posts = posts.filter(p => p.category.toLowerCase().includes(filterCategory.toLowerCase()));
  }

  // Display top 6
  const displayPosts = posts.slice(0, 6);

  if (displayPosts.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-state-icon">${Icons.archive}</div>
        <h3>No Articles Found</h3>
        <p>No published articles match the selected category right now.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = displayPosts.map(post => `
    <article class="article-card">
      <div class="article-card-image">
        <img src="${post.coverImage || 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'}" alt="${post.title}" loading="lazy">
        <span class="card-category-badge">${post.category}</span>
      </div>
      <div class="article-card-body">
        <div class="article-card-meta">
          <span>${Icons.calendar} ${formatDate(post.publishDate)}</span>
          <span>•</span>
          <span>${Icons.clock} ${post.readTime || '3 min'}</span>
        </div>
        <h3 class="article-card-title">
          <a href="post.html?id=${post.id}">${post.title}</a>
        </h3>
        <p class="article-card-excerpt">
          ${post.shortDescription || ''}
        </p>
        <div class="article-card-footer">
          <span class="article-author">By ${post.author || 'Nitya Prerna'}</span>
          <a href="post.html?id=${post.id}" class="btn-link" style="font-weight:700;">
            Read ${Icons.arrowRight}
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

// Filter Tab Click Handler
window.filterRecentPosts = function(category, btnElement) {
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");
  renderRecentPosts(category);
};

// 3. Historical Calendar Widget
function initCalendar() {
  const prevBtn = document.getElementById("cal-prev-month");
  const nextBtn = document.getElementById("cal-next-month");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentCalendarMonth--;
      if (currentCalendarMonth < 0) {
        currentCalendarMonth = 11;
        currentCalendarYear--;
      }
      renderCalendarDays();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentCalendarMonth++;
      if (currentCalendarMonth > 11) {
        currentCalendarMonth = 0;
        currentCalendarYear++;
      }
      renderCalendarDays();
    });
  }

  renderCalendarDays();
  loadCalendarDayEvents(currentCalendarMonth + 1, selectedCalendarDay);
}

function renderCalendarDays() {
  const monthTitle = document.getElementById("cal-month-title");
  const grid = document.getElementById("cal-days-grid");
  if (!grid || !monthTitle) return;

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  monthTitle.textContent = `${monthNames[currentCalendarMonth]} ${currentCalendarYear}`;

  // First day of month (0 = Sun, 1 = Mon...)
  const firstDayIndex = new Date(currentCalendarYear, currentCalendarMonth, 1).getDay();
  // Total days in month
  const totalDays = new Date(currentCalendarYear, currentCalendarMonth + 1, 0).getDate();

  // Day names row
  let html = `
    <div class="cal-day-name">Sun</div>
    <div class="cal-day-name">Mon</div>
    <div class="cal-day-name">Tue</div>
    <div class="cal-day-name">Wed</div>
    <div class="cal-day-name">Thu</div>
    <div class="cal-day-name">Fri</div>
    <div class="cal-day-name">Sat</div>
  `;

  // Empty leading days
  for (let i = 0; i < firstDayIndex; i++) {
    html += `<div class="cal-day empty"></div>`;
  }

  // Days
  const currentMonthNum = currentCalendarMonth + 1;

  for (let day = 1; day <= totalDays; day++) {
    // Check if any events exist on this month & day
    const eventsOnDay = StorageManager.getByDate(currentMonthNum, day);
    const hasEvent = eventsOnDay.length > 0;
    const isSelected = day === selectedCalendarDay;

    html += `
      <div class="cal-day ${isSelected ? 'active' : ''} ${hasEvent ? 'has-event' : ''}" 
           onclick="selectCalendarDay(${currentMonthNum}, ${day}, this)">
        <span>${day}</span>
      </div>
    `;
  }

  grid.innerHTML = html;
}

window.selectCalendarDay = function(month, day, el) {
  selectedCalendarDay = day;
  document.querySelectorAll(".cal-day").forEach(d => d.classList.remove("active"));
  if (el) el.classList.add("active");
  loadCalendarDayEvents(month, day);
};

function loadCalendarDayEvents(month, day) {
  const header = document.getElementById("cal-selected-date-text");
  const list = document.getElementById("cal-events-list");
  if (!header || !list) return;

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dateFormatted = `${monthNames[month - 1]} ${day}`;
  header.textContent = `Historical Events on ${dateFormatted}`;

  const events = StorageManager.getByDate(month, day);

  if (events.length === 0) {
    list.innerHTML = `
      <div class="empty-state" style="padding:2.5rem 1rem;">
        <p>No historical events recorded yet for ${dateFormatted}.</p>
        <span style="font-size:0.85rem; color:var(--text-muted); display:block; margin-top:0.5rem;">
          Our editors continuously enrich the historical archives.
        </span>
      </div>
    `;
    return;
  }

  list.innerHTML = events.map(ev => `
    <div class="cal-event-item">
      <span class="cal-event-year">${ev.historicalYear || ev.publishDate?.slice(0,4) || 'Historical Event'}</span>
      <h4 style="font-size:1.1rem; margin-bottom:0.4rem;">
        <a href="post.html?id=${ev.id}" style="color:var(--text-primary);">${ev.title}</a>
      </h4>
      <p style="font-size:0.88rem; color:var(--text-secondary); line-height:1.5; margin-bottom:0.6rem;">
        ${ev.historicalSignificance || ev.shortDescription}
      </p>
      <a href="post.html?id=${ev.id}" class="btn-link" style="font-size:0.82rem; font-weight:700;">
        Read Full Story ${Icons.arrowRight}
      </a>
    </div>
  `).join('');
}

// 4. Featured Personality Spotlight
function renderSpotlightPersonality() {
  const container = document.getElementById("spotlight-container");
  if (!container) return;

  // Find featured personality or default to Vivekananda
  const personality = StorageManager.getById("personality-swami-vivekananda") || 
                      StorageManager.getByType("personality")[0];

  if (!personality) return;

  container.innerHTML = `
    <div class="spotlight-portrait-wrap">
      <img src="${personality.coverImage}" alt="${personality.fullName || personality.title}" class="spotlight-portrait" loading="lazy">
      <div class="spotlight-ornament-frame"></div>
    </div>
    <div class="spotlight-content">
      <span class="section-tag" style="background:rgba(217, 154, 66, 0.15); color:var(--accent-secondary); border-color:rgba(217,154,66,0.3);">
        ${Icons.sparkles} Featured Personality
      </span>
      <h2>${personality.fullName || personality.title}</h2>
      <span class="spotlight-lifespan">${personality.lifespan || ''}</span>
      <p class="spotlight-bio">
        ${personality.shortDescription}
      </p>
      ${personality.majorAchievements ? `
        <ul class="spotlight-achievements">
          ${personality.majorAchievements.slice(0, 3).map(ach => `
            <li>${Icons.check} <span>${ach}</span></li>
          `).join('')}
        </ul>
      ` : ''}
      <div style="display:flex; gap:1rem; flex-wrap:wrap;">
        <a href="post.html?id=${personality.id}" class="btn btn-gold">
          Explore Complete Biography ${Icons.arrowRight}
        </a>
        <a href="personalities.html" class="btn btn-secondary" style="color:#fff; border-color:var(--border-dark);">
          View All Personalities
        </a>
      </div>
    </div>
  `;
}

