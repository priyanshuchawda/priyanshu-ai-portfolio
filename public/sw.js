
const CACHE_NAME = 'priyanshu-portfolio-v1';
const urlsToCache = [
  '/',
  '/projects',
  '/skills', 
  '/contact',
  '/resume',
  '/src/main.tsx',
  '/src/index.css'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
