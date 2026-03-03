const CACHE_NAME = 'admission-planet-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/style.css',
  '/assets/js/script.js',
  '/assets/images/logo.png',
  '/assets/images/college_campus_1772563253847.png',
  '/assets/images/mba_students_1772563274269.png',
  '/assets/images/engineering_lab_1772563318153.png',
  '/assets/images/nursing_students_1772563342399.png',
  '/assets/images/graduation_ceremony_1772563365161.png',
  '/assets/images/library_study_1772563381609.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
