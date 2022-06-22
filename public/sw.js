// install event
this.addEventListener('install', evt => {
    console.log('Service Worker installed');
  });
    
    // activate event
  this.addEventListener('activate', evt => {
    console.log('Service Worker actived');
  });
  
  // fetch event
  this.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);
  });