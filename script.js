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
            // Click the resume buttin if it exists
            $('[data-translate-text="LB_INTERACTION_TIME_RESUME"]').click();
        })
    }
}, 10);