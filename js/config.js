/**
 * Nitya Prerna — MongoDB & Cloud Database Configuration
 * 
 * You have 2 flexible options to connect MongoDB:
 * 
 * Option 1: Fullstack / Node Server (Local or deployed on Render/Railway/Vercel)
 * Set MONGODB_URI in your .env file. The site will automatically use the /api/posts endpoint.
 * 
 * Option 2: Direct from GitHub Pages via MongoDB Atlas App Services (Realm)
 * 1. Go to https://cloud.mongodb.com -> App Services -> Create an App.
 * 2. Enable Anonymous Authentication.
 * 3. Link your Atlas cluster and collection (nitya_prerna.posts).
 * 4. Paste your Realm App ID below or enter it in the Admin Settings panel.
 */

window.MONGO_CONFIG = {
  // Option 1: Custom API Backend URL (if hosted on Render/Railway/Vercel), e.g. "https://my-backend.onrender.com"
  apiUrl: "",

  // Option 2: MongoDB Atlas App Services ID (for direct client-side sync on GitHub Pages)
  atlasAppId: localStorage.getItem("nitya_mongo_app_id") || "",

  // Database and collection names
  dbName: "nitya_prerna",
  collectionName: "posts"
};
