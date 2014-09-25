/**
 * This script kills the resume modal before it can be shown.
 */

// Make sure Jquery has loaded
var jqueryInterval = setInterval(function () {
	if (window.jQuery) {
		clearInterval(jqueryInterval);

		// When ever the modal DOM changes, check if it is the time resume modal and close it
		$('#lightbox-outer').on('DOMSubtreeModified', function() {
		    var resumeModal = $(this).find('.lightbox-interactionTimeout');
		    
		    if (resumeModal.length > 0) {
		        $(resumeModal).find('[data-translate-text="LB_INTERACTION_TIME_RESUME"]').click();
		    }
		});
	}
}, 10);
