const CACHE_NAME = "toolspark-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/css/main.css",
  "/js/jquery.js",
  "/js/encoder.js",
  "/js/solidmac.js",
  "/js/qrscript.js",
  "/js/dnatool.js",
  "/img/settings.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
