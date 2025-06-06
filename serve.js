const express = require('express');
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const app = express();
const PORT = 3002;

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'dist'));

app.use(connectLivereload());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/privacy-policy', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'privacy-policy.html'));
});

app.get('/terms-of-service', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'terms-of-service.html'));
});

liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});

app.listen(PORT, () => {
  console.log(`🚀 Server started: http://localhost:${PORT}`);
});
