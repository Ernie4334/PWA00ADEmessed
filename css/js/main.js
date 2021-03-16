
function regSW(){
  
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.registry('./sw.js');
  }
}
