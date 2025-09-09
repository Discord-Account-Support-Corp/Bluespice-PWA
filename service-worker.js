const CACHE_NAME = "bluespice-cache-v1";
const urlsToCache = [
  "https://wd0b4431bad2.bluespice.cloud/wiki/Main_Page",
  "https://wd0b4431bad2.bluespice.cloud/wiki/load.php"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
