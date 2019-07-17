importScripts("/react-pwa-example/precache-manifest.f1aef587e6df7958f9a3fb544daa0265.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets'
  })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30
      })
    ]
  })
);

// Cache API response
workbox.routing.registerRoute(
  new RegExp(`https://mock-io.herokuapp.com/.*`),
  new workbox.strategies.NetworkFirst({
    cacheName: 'api-cache'
  })
);

// Cache static files
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

