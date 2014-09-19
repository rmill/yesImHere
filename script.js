/**
 * This script will touch the API after every song status change. This
 * keeps the 'Are you still listening?' modal from popping up
 */
var readyStateCheckInterval = setInterval(function() {
    if (window.Grooveshark !== undefined) {
        clearInterval(readyStateCheckInterval);

        // Party On
        var GroovesharkApi = window.Grooveshark;
        GroovesharkApi.setSongStatusCallback(function() {
            // Accessing the API stops the modal from popping up
            GroovesharkApi.getAPIVersion();
        })
    }
}, 10);