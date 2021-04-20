workbox.core.setCacheNameDetails({ prefix: "pwa" });
workbox.routing.registerNavigationRoute('/index.html')

// workbox.routing.registerRoute(
//   new RegExp('https://priceless-morse-f661d5.netlify.app'),
//   new workbox.strategies.NetworkFirst()
// );
// workbox.routing.registerRoute(
//   /.*\.(?:js|woff|woff2|otf|ttf)(?:$|\?)/,
//   workbox.strategies.networkFirst({
//     cacheName: 'assets-cache',
//     plugins: [
//       new workbox.expiration.Plugin({})
//     ],
//   })
// )

// workbox.routing.registerRoute(
//   /\.(?:png|gif|jpg|jpeg|svg)$/,
//   workbox.strategies.staleWhileRevalidate({
//     cacheName: 'images',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 60,
//         maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
//       }),
//     ],
//   }),
// );
// workbox.routing.registerRoute(
//   /\.(?:js|css)$/,
//   workbox.strategies.staleWhileRevalidate({
//     cacheName: 'static-resources',
//   })
// );


// workbox.routing.registerRoute(
//   new RegExp('https://priceless-morse-f661d5.netlify.app/orders'),
//   workbox.strategies.networkFirst({
//     cacheName: 'api',
//   }),
// );

// workbox.routing.registerRoute(
//   new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
//   workbox.strategies.cacheFirst({
//     cacheName: 'googleapis',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 30,
//       }),
//     ],
//   }),
// );


self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});


/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
