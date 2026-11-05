# 🔱 Nitya Prerna — Daily Inspiration, Indian History & Mythological Wisdom

> **"Daily Inspiration, Timeless History, Eternal Wisdom"**  
> *A daily digital magazine and sanctuary for motivation, India's rich history, great personalities, and the enduring wisdom of our scriptures.*

---

## 🌟 Overview & Key Features

**Nitya Prerna** is a complete, production-quality, responsive content-driven platform built with standard **HTML5, modern CSS3, and JavaScript**. It is thoughtfully tailored for a non-technical publisher to create, edit, draft, and publish rich cultural articles independently without touching a single line of code.

### 1. Cultural Design System
- **Authentic Indian Heritage Palette:**
  - Primary Background: `#FAF5EB` (Parchment & Ivory)
  - Secondary Background: `#F2E5D2` (Sandstone / Warm Temple Sand)
  - Primary Text: `#3B2118` (Deep Wood Brown)
  - Secondary Text: `#725B4C` (Warm Earth)
  - Primary Accent: `#B65322` (Terracotta / Saffron Red)
  - Secondary Accent: `#D99A42` (Temple Gold / Turmeric Ochre)
  - Dark Slate: `#241912` (Deep Umber)
  - Borders: `#E8D9C5`
- **Typography:** Classical serif (`Cinzel`, `Cormorant Garamond`), crisp body typography (`Plus Jakarta Sans`), and authentic Devanagari script (`Noto Sans Devanagari`) for Sanskrit verses.
- **Traditional Motifs:** Lotus emblem, Diya, ornamental sacred dividers, and subtle traditional patterns.

### 2. Core Functional Highlights
- **Dynamic Indian Standard Time (IST):** Automatically computes current date and time in the `Asia/Kolkata` timezone (UTC +5:30).
- **Date-Driven Today's Highlights:** Dynamically extracts:
  1. *Today's Inspiration* (morning motivational quote and reflection).
  2. *This Day in History* (historical event anniversary matching today's month & day across all years).
  3. *Today's Commemoration* (personality or national milestone honored on this day).
- **Historical Interactive Calendar:** Browse any month, pick any day (1-31), view all recorded events across history with highlighted indicators for dates with records.
- **Dedicated Section Portals:**
  - `/daily-posts.html` — Inspirational quotes, thoughts, tags, search.
  - `/historical-dates.html` — Full date & month browser across years.
  - `/mythology.html` — Bhagavad Gita, Ramayana, Mahabharata, and Upanishads with Sanskrit verses, translations, and practical modern life applications.
  - `/personalities.html` — Profiles of freedom fighters, scientists, philosophers, and spiritual leaders.
  - `/articles.html` — In-depth essays on temple architecture, Vedic cosmology, and arts.
  - `/archive.html` — Multi-faceted filter by Month, Day, Category, and Keyword.
  - `/search.html` — Instant live search across all articles, Sanskrit texts, and tags.
  - `/post.html` — Dedicated reader view with WhatsApp sharing, link copying, reading time, and related articles.
- **Publisher CMS Dashboard (`/admin.html`):**
  - Secured with Publisher Access PIN (Default: `1947`).
  - Dedicated forms for all 6 content types: Daily Inspiration, Historical Event, Commemoration, Mythological Shloka, Personality Biography, and General Article.
  - Image URL selector with authentic Indian heritage photography presets.
  - Status toggle (`Live` vs `Draft`).
  - Post duplication, live editing, and deletion.
  - **Export Backup (JSON)** and **Import Backup (JSON)** for 100% data preservation and offline safety.

---

## 🚀 How to Run Locally

### Option 1: Zero-Dependency Local Node Server (Recommended)
You do not need to install complex dependencies. A built-in Node server is provided:

```bash
# Start the server
npm start
# or
node server.js
```

Then open your browser to:
- **Main Website:** `http://localhost:3000`
- **Admin Studio:** `http://localhost:3000/admin.html`

### Option 2: Open Directly in Any Browser
Double-click `index.html` in Windows Explorer or open it in Chrome, Edge, Firefox, or Safari. All features work immediately using browser local storage!

---

## 👨‍👧 Simple Publishing Guide for Your Father

This website was designed so your father can manage everything independently with ease:

### Step 1: Open the Admin Dashboard
- Click the **"Admin"** button at the top-right of any page or visit: `http://localhost:3000/admin.html`
- Enter the Publisher PIN: `1947` (or `prerna2025`) and click **"Sign In"**.

### Step 2: Create a New Post
1. Click the terracotta **"+ Create New Post"** button.
2. Select what you want to publish by clicking one of the badges:
   - 🌅 **Daily Inspiration:** Enter an uplifting quote, the author's name, and a morning reflection thought.
   - 🏛️ **Historical Event:** Enter the Day (1-31), Month, Year, and historical significance. It will automatically show up every year on its anniversary!
   - 🕉️ **Mythological Wisdom:** Choose the scripture (e.g. *Bhagavad Gita*), enter the chapter/verse, type the Sanskrit verse, English translation, and a practical lesson for daily life.
   - ⭐ **Great Personality:** Enter the person's full name, lifespan, and bullet points of their greatest achievements.
   - 📖 **General Article:** For detailed essays and stories.
3. Enter the Title and a brief 1-2 sentence Summary.
4. Click **"Sample Image"** or paste any photo link for the cover.
5. In the Article Content box, write your message or paragraphs.
6. Leave **"Publish Immediately"** checked, then click **"Save & Publish Article"**.
7. The new post is instantly live on the website!

### Step 3: Backing up your writings
- In the Admin header, click **"Export Backup"**.
- A file named `nitya-prerna-backup-[DATE].json` will be saved to your computer.
- You can keep this file in your Google Drive or email as a permanent backup of all your published articles.
- If you ever switch computers, just click **"Import Backup"** and select your file.

---

## 📁 Project Directory Structure

```text
dad-web/
├── index.html               # Homepage (Hero, Today's Highlights, Calendar, Recent, Spotlight)
├── daily-posts.html         # Daily inspiration & motivational quotes
├── historical-dates.html    # Indian historical events by Day and Month across all years
├── mythology.html           # Bhagavad Gita, Ramayana, Mahabharata & Upanishad shlokas
├── personalities.html       # Great personalities & biographies catalog
├── articles.html            # In-depth essays & cultural heritage articles
├── archive.html             # Multi-filter master archive
├── search.html              # Instant live global repository search
├── post.html                # Full article reading page with WhatsApp sharing
├── admin.html               # Non-technical Publisher Admin CMS
├── 404.html                 # Custom heritage 404 page
├── robots.txt               # Search engine crawler permissions
├── sitemap.xml              # XML Sitemap for SEO indexing
├── server.js                # Lightweight zero-dependency Node.js HTTP server
├── package.json             # Project config & scripts
├── README.md                # Documentation & User Guide
├── css/
│   └── style.css            # Heritage Indian visual design system
└── js/
    ├── data.js              # 25+ rich starter articles & StorageManager API
    ├── app.js               # Shared components, IST clock, Lucide SVG icons, drawer
    ├── home.js              # Dynamic highlights, calendar widget, recent posts
    └── admin.js             # CMS form logic, validation, CRUD, backups
```

---

## 🌐 Deploying to the Web

Because the site is built with standard web technologies:

### 1. Deploying on Vercel
1. Upload this project folder to a GitHub repository.
2. In [Vercel](https://vercel.com), click **Add New Project** and select the repository.
3. Keep the default settings and click **Deploy**. Vercel will host it automatically!

### 2. Deploying on Netlify
1. Drag and drop the `dad-web` folder into [Netlify Drop](https://app.netlify.com/drop).
2. Your website is live in seconds with a free `.netlify.app` domain and free SSL!

### 3. Deploying on GitHub Pages
1. Push code to GitHub.
2. Go to **Settings > Pages > Source > Deploy from Branch (main)**.
3. Your site will be published at `https://<username>.github.io/<repo>/`.

---

## 🕉️ Cultural Statement
*"सत्यमेव जयते नानृतम्"* — Truth alone triumphs, not falsehood.  
*Nitya Prerna is crafted to preserve, celebrate, and share the eternal knowledge and inspiring history of Bharat.*
