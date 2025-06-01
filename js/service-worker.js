const CACHE_NAME = "toolspark-cache-v2";
const urlsToCache = [
  "/",
  "/index.html",
  "/css/main.css",
  "/js/jquery.js",
  "/js/encoder.js",
  "/js/solidmac.js",
  "/js/qrscript.js",
  "/js/dnatool.js",
  "/img/settings.png",
  "/homepage.html",
  "/content.html",
  "/js/pdff.js",
  "/js/cordial.js",
  "/img/baramuda.png",
  "/img/glass-of-water.png",
  "/img/microscope_947539.png",
  "/img/qr.png",
  "/img/scale.png",
  "/img/weightmanagement.png"
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
