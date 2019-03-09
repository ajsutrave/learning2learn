

/*
 * init.js simply injects main.js into the current page
 * so we have access to the browser's ES6 module niceties
 */
function loadScript(path, type) {
  return new Promise(function(resolve, reject) {
    var s = document.createElement('script');
    if (type != undefined)
      s.type = type;
console.log(chrome.runtime.getURL(path)); // removing console log seems to break script load for some reason...
    s.src = chrome.runtime.getURL(path);

    s.onload = function() {
      console.log('loaded');
      this.remove();

      resolve(this);
    };

    s.onerror = function(error) {
      reject(Error('Failed to load: '+path+' - '+error));
    }
console.log(s); // removing console log seems to break script load for some reason...
    (document.head || document.documentElement).appendChild(s);
  });
}

window.addEventListener('load', function() {
 loadScript('main.js', 'module');
});
