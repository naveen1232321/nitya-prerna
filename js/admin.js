/**
 * Nitya Prerna — Admin Dashboard & Content Management JavaScript
 * Simple, zero-code publishing studio designed for non-technical administrators.
 */

const ADMIN_PINS = ["1947", "prerna2025", "admin123"];
let currentSelectedType = "daily";

const SUGGESTED_IMAGES = [
  "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80", // Thanjavur temple
  "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80", // Classical portrait / architecture
  "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80", // Space / Mangalyaan
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80", // Sunrise mountains
  "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=80", // Diya / meditation
  "https://images.unsplash.com/photo-1599837565318-67429bde7162?auto=format&fit=crop&w=1200&q=80"  // Indian heritage fort
];

document.addEventListener("DOMContentLoaded", () => {
  checkAuth();
});

// Authentication checks
function checkAuth() {
  const isAuth = sessionStorage.getItem("nitya_admin_auth") === "true";
  const loginSection = document.getElementById("admin-login-section");
  const dashSection = document.getElementById("admin-dashboard-section");

  if (isAuth) {
    if (loginSection) loginSection.style.display = "none";
    if (dashSection) dashSection.style.display = "block";
    loadDashboard();
  } else {
    if (loginSection) loginSection.style.display = "flex";
    if (dashSection) dashSection.style.display = "none";
  }
}

window.handleAdminLogin = function(e) {
  e.preventDefault();
  const pin = document.getElementById("admin-pin-input").value.trim();

  if (ADMIN_PINS.includes(pin)) {
    sessionStorage.setItem("nitya_admin_auth", "true");
    showToast("Welcome back to the Publisher Studio!", "success");
    checkAuth();
  } else {
    showToast("Incorrect PIN. Please try again (Hint: 1947)", "error");
  }
};

window.handleAdminLogout = function() {
  sessionStorage.removeItem("nitya_admin_auth");
  showToast("Logged out successfully.", "info");
  checkAuth();
};

// Load Dashboard Overview & Posts Table
function loadDashboard() {
  renderMetrics();
  renderPostsTable();
  setupFilterListeners();
}

function renderMetrics() {
  const allPosts = StorageManager.getAll(true);
  const container = document.getElementById("admin-stats-container");
  if (!container) return;

  const published = allPosts.filter(p => p.isPublished !== false).length;
  const drafts = allPosts.length - published;
  const dailyCount = allPosts.filter(p => p.type === 'daily').length;
  const historyCount = allPosts.filter(p => p.type === 'history' || p.type === 'commemoration').length;
  const mythCount = allPosts.filter(p => p.type === 'mythology').length;

  container.innerHTML = `
    <div class="admin-stat-card">
      <span class="stat-number">${allPosts.length}</span>
      <span class="stat-label">Total Articles</span>
    </div>
    <div class="admin-stat-card">
      <span class="stat-number" style="color:#15803D;">${published}</span>
      <span class="stat-label">Published Live</span>
    </div>
    <div class="admin-stat-card">
      <span class="stat-number" style="color:var(--accent-secondary);">${drafts}</span>
      <span class="stat-label">Drafts</span>
    </div>
    <div class="admin-stat-card">
      <span class="stat-number">${dailyCount}</span>
      <span class="stat-label">Daily Inspirations</span>
    </div>
    <div class="admin-stat-card">
      <span class="stat-number">${historyCount}</span>
      <span class="stat-label">Historical Milestones</span>
    </div>
    <div class="admin-stat-card">
      <span class="stat-number">${mythCount}</span>
      <span class="stat-label">Mythological Shlokas</span>
    </div>
  `;
}

function renderPostsTable() {
  const tbody = document.getElementById("admin-posts-tbody");
  if (!tbody) return;

  const allPosts = StorageManager.getAll(true);
  const searchTerm = (document.getElementById("admin-table-search")?.value || "").toLowerCase().trim();
  const typeFilter = document.getElementById("admin-type-filter")?.value || "All";

  let filtered = allPosts;

  if (typeFilter !== "All") {
    filtered = filtered.filter(p => p.type === typeFilter);
  }

  if (searchTerm) {
    filtered = filtered.filter(p => 
      (p.title || "").toLowerCase().includes(searchTerm) ||
      (p.author || "").toLowerCase().includes(searchTerm) ||
      (p.shortDescription || "").toLowerCase().includes(searchTerm)
    );
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
          No posts found. Click "Create New Post" to publish something new.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(post => {
    const isPub = post.isPublished !== false;
    return `
      <tr>
        <td>
          <button onclick="togglePublishStatus('${post.id}')" class="btn-sm" style="background:${isPub ? '#DCFCE7' : '#FEF3C7'}; color:${isPub ? '#15803D' : '#B45309'}; border:1px solid ${isPub ? '#86EFAC' : '#FDE68A'}; border-radius:var(--radius-full); cursor:pointer; font-weight:700;">
            ${isPub ? '● Live' : '○ Draft'}
          </button>
        </td>
        <td>
          <span class="highlight-badge badge-inspiration" style="margin:0; font-size:0.75rem;">
            ${post.category || post.type}
          </span>
        </td>
        <td>
          <strong>
            <a href="post.html?id=${post.id}" target="_blank" style="color:var(--text-primary);">
              ${post.title}
            </a>
          </strong>
          ${post.isFeatured ? `<span style="font-size:0.75rem; color:var(--accent-secondary); margin-left:0.4rem; font-weight:700;">★ Featured</span>` : ''}
          <div style="font-size:0.8rem; color:var(--text-muted);">${post.shortDescription?.slice(0, 60)}...</div>
        </td>
        <td style="white-space:nowrap; font-size:0.85rem;">
          ${post.historicalYear ? `Year ${post.historicalYear} (${post.historicalMonth}/${post.historicalDay})` : (post.publishDate || 'Unscheduled')}
        </td>
        <td style="font-size:0.85rem;">
          ${post.associatedPersonality || post.author || 'Editorial'}
        </td>
        <td style="text-align:right; white-space:nowrap;">
          <div style="display:inline-flex; gap:0.4rem;">
            <button onclick="editPost('${post.id}')" class="btn btn-secondary btn-sm" title="Edit this post">
              Edit
            </button>
            <button onclick="duplicatePost('${post.id}')" class="btn btn-secondary btn-sm" title="Duplicate as a new draft">
              Duplicate
            </button>
            <button onclick="deletePost('${post.id}')" class="btn-sm" style="background:#FEE2E2; color:#DC2626; border:1px solid #FCA5A5; border-radius:var(--radius-md); cursor:pointer;" title="Delete this post">
              Delete
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function setupFilterListeners() {
  const searchInput = document.getElementById("admin-table-search");
  const typeSelect = document.getElementById("admin-type-filter");

  if (searchInput) searchInput.addEventListener("input", renderPostsTable);
  if (typeSelect) typeSelect.addEventListener("change", renderPostsTable);
}

// Modal controls
window.openCreatePostModal = function() {
  document.getElementById("modal-form-title").textContent = "Create New Article";
  document.getElementById("post-editor-form").reset();
  document.getElementById("edit-post-id").value = "";
  document.getElementById("post-publish-date").value = new Date().toISOString().slice(0, 10);
  document.getElementById("post-is-published").checked = true;
  
  selectFormType("daily");
  document.getElementById("post-modal-overlay").classList.add("active");
};

window.closePostModal = function() {
  document.getElementById("post-modal-overlay").classList.remove("active");
};

window.selectFormType = function(type, element) {
  currentSelectedType = type;
  document.querySelectorAll(".type-pill").forEach(p => p.classList.remove("active"));
  if (element) {
    element.classList.add("active");
  } else {
    const pill = document.querySelector(`.type-pill[data-type="${type}"]`);
    if (pill) pill.classList.add("active");
  }

  // Toggle conditional field groups
  document.getElementById("fields-daily").style.display = type === 'daily' ? 'block' : 'none';
  document.getElementById("fields-history").style.display = (type === 'history' || type === 'commemoration') ? 'block' : 'none';
  document.getElementById("fields-mythology").style.display = type === 'mythology' ? 'block' : 'none';
  document.getElementById("fields-personality").style.display = type === 'personality' ? 'block' : 'none';
};

window.chooseSuggestedImage = function() {
  const randomImg = SUGGESTED_IMAGES[Math.floor(Math.random() * SUGGESTED_IMAGES.length)];
  document.getElementById("post-image-url").value = randomImg;
  showToast("Sample Indian heritage image selected!", "info");
};

// Edit Post
window.editPost = function(id) {
  const post = StorageManager.getById(id);
  if (!post) {
    showToast("Post not found", "error");
    return;
  }

  document.getElementById("modal-form-title").textContent = "Edit Article";
  document.getElementById("edit-post-id").value = post.id;
  document.getElementById("post-title-input").value = post.title || "";
  document.getElementById("post-desc-input").value = post.shortDescription || "";
  document.getElementById("post-author-input").value = post.author || "";
  document.getElementById("post-publish-date").value = post.publishDate || "";
  document.getElementById("post-image-url").value = post.coverImage || "";
  document.getElementById("post-main-content").value = post.content || "";
  document.getElementById("post-tags-input").value = post.tags ? post.tags.join(", ") : "";
  document.getElementById("post-readtime-input").value = post.readTime || "";
  document.getElementById("post-is-published").checked = post.isPublished !== false;
  document.getElementById("post-is-featured").checked = !!post.isFeatured;

  // Set type
  selectFormType(post.type || "article");

  // Conditional values
  if (post.type === 'daily') {
    document.getElementById("daily-quote-text").value = post.quote || "";
    document.getElementById("daily-quote-author").value = post.quoteAuthor || "";
    document.getElementById("daily-supporting-thought").value = post.supportingThought || "";
  } else if (post.type === 'history' || post.type === 'commemoration') {
    document.getElementById("hist-month-input").value = post.historicalMonth || 11;
    document.getElementById("hist-day-input").value = post.historicalDay || 5;
    document.getElementById("hist-year-input").value = post.historicalYear || "";
    document.getElementById("hist-event-type").value = post.eventType || "Anniversary";
    document.getElementById("hist-personality").value = post.associatedPersonality || "";
    document.getElementById("hist-significance").value = post.historicalSignificance || "";
    document.getElementById("hist-sources").value = post.sources || "";
  } else if (post.type === 'mythology') {
    document.getElementById("myth-scripture").value = post.scripture || "Bhagavad Gita";
    document.getElementById("myth-chapter").value = post.chapter || "";
    document.getElementById("myth-verse").value = post.verse || "";
    document.getElementById("myth-sanskrit").value = post.sanskritText || "";
    document.getElementById("myth-english").value = post.englishTranslation || "";
    document.getElementById("myth-lesson").value = post.practicalLesson || "";
  } else if (post.type === 'personality') {
    document.getElementById("person-fullname").value = post.fullName || "";
    document.getElementById("person-lifespan").value = post.lifespan || "";
    document.getElementById("person-achievements").value = post.majorAchievements ? post.majorAchievements.join("\n") : "";
  }

  document.getElementById("post-modal-overlay").classList.add("active");
};

// Save Post
window.handleSavePost = function(e) {
  e.preventDefault();

  const id = document.getElementById("edit-post-id").value;
  const title = document.getElementById("post-title-input").value.trim();
  const shortDescription = document.getElementById("post-desc-input").value.trim();
  const author = document.getElementById("post-author-input").value.trim() || "Nitya Prerna";
  const publishDate = document.getElementById("post-publish-date").value || new Date().toISOString().slice(0, 10);
  const coverImage = document.getElementById("post-image-url").value.trim() || SUGGESTED_IMAGES[0];
  const content = document.getElementById("post-main-content").value.trim();
  const tags = document.getElementById("post-tags-input").value.split(",").map(t => t.trim()).filter(Boolean);
  const readTime = document.getElementById("post-readtime-input").value.trim() || "3 min read";
  const isPublished = document.getElementById("post-is-published").checked;
  const isFeatured = document.getElementById("post-is-featured").checked;

  const categoryMap = {
    daily: "Daily Inspiration",
    history: "Historical Dates",
    commemoration: "Historical Dates",
    mythology: "Mythological Wisdom",
    personality: "Great Personalities",
    article: "Articles"
  };

  const newPost = {
    id: id || undefined,
    title,
    type: currentSelectedType,
    category: categoryMap[currentSelectedType] || "Articles",
    shortDescription,
    author,
    publishDate,
    coverImage,
    content: content || `<p>${shortDescription}</p>`,
    tags,
    readTime,
    isPublished,
    isFeatured
  };

  // Add type-specific attributes
  if (currentSelectedType === 'daily') {
    newPost.quote = document.getElementById("daily-quote-text").value.trim();
    newPost.quoteAuthor = document.getElementById("daily-quote-author").value.trim();
    newPost.supportingThought = document.getElementById("daily-supporting-thought").value.trim();
  } else if (currentSelectedType === 'history' || currentSelectedType === 'commemoration') {
    newPost.historicalMonth = parseInt(document.getElementById("hist-month-input").value);
    newPost.historicalDay = parseInt(document.getElementById("hist-day-input").value) || 1;
    newPost.historicalYear = parseInt(document.getElementById("hist-year-input").value) || new Date().getFullYear();
    newPost.eventType = document.getElementById("hist-event-type").value;
    newPost.associatedPersonality = document.getElementById("hist-personality").value.trim();
    newPost.historicalSignificance = document.getElementById("hist-significance").value.trim();
    newPost.sources = document.getElementById("hist-sources").value.trim();
  } else if (currentSelectedType === 'mythology') {
    newPost.scripture = document.getElementById("myth-scripture").value;
    newPost.chapter = document.getElementById("myth-chapter").value.trim();
    newPost.verse = document.getElementById("myth-verse").value.trim();
    newPost.sanskritText = document.getElementById("myth-sanskrit").value.trim();
    newPost.englishTranslation = document.getElementById("myth-english").value.trim();
    newPost.practicalLesson = document.getElementById("myth-lesson").value.trim();
  } else if (currentSelectedType === 'personality') {
    newPost.fullName = document.getElementById("person-fullname").value.trim();
    newPost.lifespan = document.getElementById("person-lifespan").value.trim();
    const achievementsRaw = document.getElementById("person-achievements").value.trim();
    newPost.majorAchievements = achievementsRaw ? achievementsRaw.split("\n").map(s => s.trim()).filter(Boolean) : [];
  }

  try {
    StorageManager.save(newPost);
    showToast("Article published successfully!", "success");
    closePostModal();
    loadDashboard();
  } catch (err) {
    showToast("Error saving article: " + err.message, "error");
  }
};

// Delete Post
window.deletePost = function(id) {
  if (confirm("Are you sure you want to permanently delete this post?")) {
    StorageManager.delete(id);
    showToast("Post deleted.", "info");
    loadDashboard();
  }
};

// Duplicate Post
window.duplicatePost = function(id) {
  const original = StorageManager.getById(id);
  if (!original) return;

  const copy = { ...original };
  copy.id = "post-" + Date.now();
  copy.title = copy.title + " (Copy)";
  copy.isPublished = false; // set as draft

  StorageManager.save(copy);
  showToast("Article duplicated as a Draft.", "success");
  loadDashboard();
};

// Toggle Publish Status
window.togglePublishStatus = function(id) {
  const post = StorageManager.getById(id);
  if (!post) return;

  post.isPublished = post.isPublished === false ? true : false;
  StorageManager.save(post);
  showToast(`Article status updated to ${post.isPublished ? 'Live' : 'Draft'}`, "info");
  loadDashboard();
};

// Import Backup File
window.handleImportBackup = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      StorageManager.importJSON(e.target.result);
      showToast("All posts restored successfully from backup!", "success");
      loadDashboard();
    } catch (err) {
      showToast(err.message, "error");
    }
  };
  reader.readAsText(file);
};

