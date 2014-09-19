/**
 * This script is run when Grooveshark first loads. It's purpose is
 * to inject script.js to the page. This is necessary because we
 * need access to the window.Grooveshark attribute (Grooveshark JS API) 
 */

var script = document.createElement('script');
script.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(script);
script.onload = function() {
    script.parentNode.removeChild(script);
};