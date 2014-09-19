/*globals chrome*/
chrome.extension.sendMessage({}, function(response) {
    // Wait until the page is ready
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            // Street Sharks unite
            setInterval(checkForAnnoyingModal, 100);
        }
    }, 10);


    /**
     * Check to see if the modal is there, if so KILL IT!
     */
    var checkForAnnoyingModal = function () {
        // var areYouStillListeningButton = $('');
        // if (areYouStillListeningButton) {
        //     areYouStillListeningButton.click();
        // }
    } 
});