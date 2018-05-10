// register service worker
// The service worker is the technology that enables your app to use many Progressive Web App features, such as offline, add to homescreen, and push notifications.
(function(){
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker
            .register("./sw.js")
            .then(function() {
                console.log("[Service Worker] Registered");
            });
    }
})()