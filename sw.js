// sw.js: Service Worker mínimo para que el sitio califique como PWA
const urlsToCache = [ 
    '/',
    '/index.html',
    '/app.js',
    '/manifest.webmanifest',
];

self.addEventListener("install", (event) => {
  console.log("SW: instalado");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("SW: activado");
  return self.clients.claim();
});

// En esta práctica no interceptamos fetch.
