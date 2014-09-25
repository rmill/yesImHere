/**
 * This script is run when Grooveshark first loads. It's purpose is
 * to inject script.js to the page. This is necessary because we
 * need to be able to trigger events on the page's DOM 
 */

// Append Jquery to the page
var jquery = document.createElement('script');
jquery.src = chrome.extension.getURL('library/jquery-2.1.1.min.js');
(document.head||document.documentElement).appendChild(jquery);

// Append out script to the page
var script = document.createElement('script');
script.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(script);
