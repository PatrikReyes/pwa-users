let cacheData = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "static/js/bundle.js",
        "static/js/0.chunk.js",
        "static/js/main.chunk.js",
        "/favicon.ico",
        "/manifest.json",
        "/logo192.png",
        "/index.html",
        "/",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp;
        }

        let requestUrl = event.request.clone()
        fetch(requestUrl)
      })
    );
  }
});
