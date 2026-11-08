const CACHE='atelier-papiers-v0.5.0';
const CORE=['./','./index.html','./styles.css','./data.js','./app.js','./sketches.js','./sketch-ui.js','./manifest.webmanifest','./pwa.js','./changelog.json','./icons/icon.svg','./icons/icon-192.png','./icons/icon-512.png',
'./assets/hero-autumn.svg','./assets/hero-winter.svg','./assets/hero-spring.svg','./assets/hero-summer.svg','./assets/stamps.svg','./assets/inks.svg','./assets/gradient.svg','./assets/emboss.svg','./assets/stencils.svg','./assets/card.svg','./assets/album.svg','./assets/journal.svg','./assets/tag.svg','./assets/photo.svg','./assets/gift.svg','./assets/sketch.svg','./assets/patron-tag-7x12cm.pdf','./assets/tag-vintage-final.webp','./assets/tag-photo-01.webp','./assets/tag-photo-02.webp','./assets/tag-photo-03.webp','./assets/tag-photo-04.webp','./assets/tag-photo-05.webp','./assets/tag-photo-06.webp','./assets/tag-photo-07.webp','./assets/tag-photo-08.webp','./assets/tag-photo-09.webp',
'./assets/duo-ink-oxide-01.webp',
'./assets/duo-ink-oxide-02.webp',
'./assets/duo-ink-oxide-03.webp',
'./assets/duo-ink-oxide-04.webp',
'./assets/duo-ink-oxide-05.webp',
'./assets/duo-ink-oxide-06.webp',
'./assets/duo-ink-oxide-07.webp',
'./assets/duo-ink-oxide-08.webp',
'./assets/duo-ink-oxide-09.webp',
'./assets/duo-ink-oxide-detail-03.webp',
'./assets/duo-ink-oxide-detail-04.webp',
'./assets/duo-ink-oxide-detail-06.webp',
'./assets/duo-ink-oxide-detail-08.webp',
'./assets/duo-ink-oxide-cover.webp',
'./assets/atelier-encres-ink-oxide.pdf'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(async()=>{const keys=await caches.keys();if(keys.includes('atelier-papiers-v0.2.0'))await self.skipWaiting()}))});;
self.addEventListener('message',e=>{if(e.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('atelier-papiers-')&&k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return; e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{if(r.ok&&r.type==='basic'){let copy=r.clone();caches.open(CACHE).then(x=>x.put(e.request,copy))}return r}).catch(()=>caches.match('./index.html'))))});