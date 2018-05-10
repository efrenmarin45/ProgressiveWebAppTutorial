var staticUrls = [
    './',
    './index.html',
    './styles.css',
    './image.gif'
]

// add a listener to when the install event is called and cache all of the static assets:
self.addEventListener('install', function(event){
    console.log('[Service Worker] Install');
    event.waitUntil(
        caches.open('pwaTutorialCache')
            .then(function(cache){
                console.log('[Service Worker] Caching Static Files');
                return cache.addAll(staticUrls);
            })
    );
});

// when browser fetches or makes a network request, it serves the cached files
// Let's serve those cached files whenever there's a browser fetch. The service worker is a proxy that can intercept any fetch requests that the browser makes. Let's use that to serve cached assets when they are available.
self.addEventListener('fetch', function(event){
    console.log('[Service Worker] Fetch');
    event.respondWith(
        caches.match(event.request)
            .then(function(response){
                return response || fetch(event.request);
             })
    );
});