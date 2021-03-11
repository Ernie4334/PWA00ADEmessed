const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

//A list of local resource we always want to be cached
const PRECACHE_URLS = [
  'index.html', 
  './', //alias for index.html
  'css/style.css,
  'js/main.js',
  'sw.js'
  ];

// The install handlet takes care of preacaching our resources as directed
self.addEventListener('install',function(event){
  event.waitUntil(
    caches.open(PRECACHE).then(function(cache){
      return cache.addAll(PRECACHE_URLS);
    })
    };
});
  
// the activate handler
self.addEventLister ('activate',event => {
  console.log('Service worker activating. . . ');
});
  
//the fetch handler
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response){
      return response || fetch(event.request);
    })
    );
});
  
  
