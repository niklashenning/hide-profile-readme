
let profileReadmeFound = false;


window.onload = function() {
    // Check if profile README exists on this page
    let userProfileFrame = document.getElementById("user-profile-frame");

    if (userProfileFrame && userProfileFrame.getElementsByClassName("Box mt-4")[0]) {
        profileReadmeFound = true;
    }

    // Add listenter for status request by the popup script
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            if (request.message === "status") {
                sendResponse({found: profileReadmeFound});
            }
        }
    );
};
