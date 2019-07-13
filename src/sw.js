workbox.routing.registerRoute(
  new RegExp(`https://mock-io.herokuapp.com/.*`),
  new workbox.strategies.NetworkFirst({
    cacheName: 'api-cache',
  }),
);

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
