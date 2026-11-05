/**
 * Nitya Prerna — Fullstack Server with MongoDB Integration
 * Serves static frontend files and provides REST API endpoints for MongoDB Atlas
 */

require('dotenv').config();
const http = require('http');
const fs = require('fs');
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || '';
const DB_NAME = process.env.MONGODB_DB_NAME || 'nitya_prerna';
const COLLECTION_NAME = 'posts';

const PUBLIC_DIR = __dirname;

let dbClient = null;
let db = null;
let postsCollection = null;

// Connect to MongoDB if URI is provided
async function connectMongoDB() {
  if (!MONGODB_URI) {
    console.log(`ℹ️  No MONGODB_URI set in .env. Running with local storage fallback.`);
    return;
  }

  try {
    // Connect with network compression enabled (zlib is built into Node.js)
    dbClient = new MongoClient(MONGODB_URI, {
      compressors: ['zlib']
    });
    await dbClient.connect();
    db = dbClient.db(DB_NAME);
    postsCollection = db.collection(COLLECTION_NAME);
    console.log(`✅ Connected successfully to MongoDB database: "${DB_NAME}"`);
    console.log(`⚡ MongoDB Network Compression: ENABLED (zlib)`);

    // Ensure initial posts exist in MongoDB if empty
    const count = await postsCollection.countDocuments();
    if (count === 0) {
      console.log(`📥 Initializing MongoDB with authentic starter posts...`);
      // Read initial posts from data.js or default template
      const dataFilePath = path.join(PUBLIC_DIR, 'js', 'data.js');
      if (fs.existsSync(dataFilePath)) {
        const fileContent = fs.readFileSync(dataFilePath, 'utf8');
        const match = fileContent.match(/const INITIAL_POSTS\s*=\s*(\[[\s\S]*?\]);/);
        if (match && match[1]) {
          try {
            // Safe evaluation or json parse
            const initialPosts = eval(match[1]);
            if (Array.isArray(initialPosts) && initialPosts.length > 0) {
              await postsCollection.insertMany(initialPosts);
              console.log(`✨ Inserted ${initialPosts.length} starter articles into MongoDB!`);
            }
          } catch (e) {
            console.error("Could not parse INITIAL_POSTS:", e.message);
          }
        }
      }
    }
  } catch (err) {
    console.error(`❌ MongoDB connection error:`, err.message);
  }
}

connectMongoDB();

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(data));
}

// Request Handler
const server = http.createServer(async (req, res) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // ----------------------------------------------------
  // REST API ENDPOINTS FOR MONGODB
  // ----------------------------------------------------

  // 1. API Health & Status
  if (pathname === '/api/health') {
    return sendJSON(res, 200, {
      status: 'ok',
      mongodbConnected: !!postsCollection,
      database: DB_NAME
    });
  }

  // 2. GET /api/posts - Fetch all posts from MongoDB
  if (pathname === '/api/posts' && req.method === 'GET') {
    if (!postsCollection) {
      return sendJSON(res, 200, { mongodb: false, posts: [] });
    }
    try {
      const posts = await postsCollection.find({}).sort({ publishDate: -1, createdAt: -1 }).toArray();
      return sendJSON(res, 200, { mongodb: true, posts });
    } catch (e) {
      return sendJSON(res, 500, { error: e.message });
    }
  }

  // 3. POST /api/posts - Create or Update post in MongoDB
  if (pathname === '/api/posts' && req.method === 'POST') {
    if (!postsCollection) {
      return sendJSON(res, 503, { error: 'MongoDB not connected. Check MONGODB_URI.' });
    }
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const post = JSON.parse(body);
        if (!post.title) {
          return sendJSON(res, 400, { error: 'Title is required' });
        }
        if (!post.id) {
          post.id = 'post-' + Date.now();
        }

        // Upsert into MongoDB
        const result = await postsCollection.updateOne(
          { id: post.id },
          { $set: { ...post, updatedAt: new Date().toISOString() } },
          { upsert: true }
        );

        return sendJSON(res, 200, { success: true, post, result });
      } catch (err) {
        return sendJSON(res, 400, { error: 'Invalid JSON or DB error: ' + err.message });
      }
    });
    return;
  }

  // 4. DELETE /api/posts/:id - Delete post from MongoDB
  if (pathname.startsWith('/api/posts/') && req.method === 'DELETE') {
    if (!postsCollection) {
      return sendJSON(res, 503, { error: 'MongoDB not connected.' });
    }
    const idToDelete = pathname.replace('/api/posts/', '').trim();
    try {
      await postsCollection.deleteOne({ id: idToDelete });
      return sendJSON(res, 200, { success: true, deletedId: idToDelete });
    } catch (e) {
      return sendJSON(res, 500, { error: e.message });
    }
  }

  // ----------------------------------------------------
  // STATIC FILE SERVING
  // ----------------------------------------------------
  if (pathname === '/') {
    pathname = '/index.html';
  } else if (!path.extname(pathname)) {
    if (fs.existsSync(path.join(PUBLIC_DIR, `${pathname}.html`))) {
      pathname = `${pathname}.html`;
    }
  }

  const filePath = path.join(PUBLIC_DIR, pathname);

  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      const notFoundPath = path.join(PUBLIC_DIR, '404.html');
      if (fs.existsSync(notFoundPath)) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        fs.createReadStream(notFoundPath).pipe(res);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      }
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });

    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`  🔱 NITYA PRERNA — Daily Inspiration & Indian Heritage`);
  console.log(`  🌐 Website running at: http://localhost:${PORT}`);
  console.log(`  🛠️  Admin CMS Portal:  http://localhost:${PORT}/admin.html`);
  console.log(`  🍃 MongoDB Integration: ${MONGODB_URI ? 'CONFIGURED' : 'PENDING MONGODB_URI'}`);
  console.log(`======================================================\n`);
});
