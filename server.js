require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const path = require('path');
const apiRoutes = require('./api/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }));
app.use(compression());

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json({ limit: '10kb' }));

const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 900000,
  max: parseInt(process.env.RATE_LIMIT_MAX) || 100,
  message: { error: 'Trop de requetes. Revenez dans le poulailler plus tard.' }
});
app.use('/api/', limiter);

app.use('/robots.txt', (_, res) => {
  res.type('text/plain').send(['User-agent: *', 'Allow: /', 'Sitemap: http://localhost:3000/sitemap.xml', '', 'Disallow: /api/messages'].join('\n'));
});

app.get('/sitemap.xml', (_, res) => {
  const pages = ['', 'pourquoi-manger.html', 'poulet-maison.html', 'deals.html', 'galerie.html', 'flappy-chicken.html', 'communaute.html', 'roi.html', 'recettes.html', 'contact.html', 'privacy.html', 'terms.html'];
  const urls = pages.map(p => `  <url><loc>http://localhost:3000/${p}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`).join('\n');
  res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`);
});

app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1d',
  etag: true,
  lastModified: true
}));

// Cache-control for API
app.use('/api', (req, res, next) => {
  res.set('Cache-Control', 'public, max-age=60, s-maxage=120');
  next();
});

app.use('/api', apiRoutes);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.use((err, req, res, next) => {
  console.error('Erreur Poulet:', err.message);
  res.status(500).json({ error: 'Erreur interne du poulailler.' });
});

const server = app.listen(PORT, () => {
  console.log(`Poulet Industrie API - Port ${PORT} | Mode: ${process.env.NODE_ENV || 'development'}`);
});

process.on('SIGTERM', () => server.close(() => process.exit(0)));
process.on('SIGINT', () => server.close(() => process.exit(0)));
