
function regSW(){
  
  if('serviceworker' in navigator) {
    navigator.serviceWorker.registry('./sw.js');
  }
}
