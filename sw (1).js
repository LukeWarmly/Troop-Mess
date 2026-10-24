/* Troop Mess service worker.
   Bump CACHE when the app changes — that is what makes installed copies update. */
const CACHE = "troop-mess-v3.22";

/* Everything the app needs to run with no signal. */
const SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      /* addAll fails the whole install if one file 404s, so add them one at a time. */
      .then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const isFont = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!sameOrigin && !isFont) return;

  /* The page itself: try the network so a new version is picked up, but give it
     only a few seconds. One bar of signal at camp means requests that hang rather
     than fail, and the old code waited for the phone's own timeout (15–60 s) before
     showing the saved copy. Now the saved copy appears after 3 s and the network
     fetch carries on in the background, so the next open has the new version. */
  if (req.mode === "navigate") {
    /* cache:"no-cache" makes the browser check with the server instead of serving
       its own stale copy for up to ten minutes — the reason a fresh upload could
       still show the old version on the first open. */
    const net = fetch(req, { cache: "no-cache" }).then(res => {
      if (res && res.ok) caches.open(CACHE).then(c => c.put("./index.html", res.clone()));
      return res;
    });
    const cached = caches.match("./index.html").then(r => r || caches.match("./"));
    const slow = new Promise(resolve => setTimeout(() => resolve("slow"), 3000));
    e.respondWith(
      Promise.race([net.catch(() => "fail"), slow]).then(r => {
        if (r !== "slow" && r !== "fail") return r;
        return cached.then(c => c || net);
      })
    );
    /* Keep the worker alive until the background fetch settles (or fails). */
    if (e.waitUntil) e.waitUntil(net.catch(() => {}));
    return;
  }

  /* Everything else, fonts included: cache first, then network, and keep what comes back. */
  e.respondWith(
    caches.match(req).then(hit =>
      hit || fetch(req).then(res => {
        if (res && (res.ok || res.type === "opaque")) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => hit)
    )
  );
});
