// service-worker.js

// Instalar el Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cache-v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/ready.js',
        '/ul.js',
        '../dist/jq.js'
        // Agrega aquí todos los recursos que deseas almacenar en caché
      ]);
    })
  );
});

// Activar el Service Worker
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('cache-') && cacheName !== 'cache-v1';
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// Intercepta las solicitudes de red y sirve los recursos desde la caché si están disponibles
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
