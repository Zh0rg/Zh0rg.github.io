const CACHE_NAME = 'v2';

self.addEventListener("install", event => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => {
        return cache.addAll([
            '/',
            '/index.html',
            '/style.css',
            '/index.css',
            '/news.php',
            '/assets/logo.webp',
            '/assets/OIP.png',
            '/assets/2.jpg',
            '/assets/icon.png',
            '/assets/eolienne.png',
            '/assets/header-total-energy1.png',
            '/assets/offres-total-energie.png',
            '/assets/total-cc_mobile_3.jpg'
        ]);
    }));
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(keyList.map(key => {
                if (key !== CACHE_NAME)
                    return caches.delete(key);
                else
                    return Promise.resolve();
            }));
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        fetch(event.request).then(response => {
            if (!response.ok)
                throw Error()

            let responseClone = response.clone();

            caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));

            return response;
        }).catch(() => caches.match(event.request).then(match => {
            if (match === undefined)
                return new Response("Un problème est survenu");
            else
                return match;
        }))
    )
})