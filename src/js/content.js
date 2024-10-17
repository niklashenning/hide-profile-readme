
let profileReadmeFound = false;


window.onload = function() {
    let userProfileFrame = document.getElementById("user-profile-frame");

    if (userProfileFrame && userProfileFrame.getElementsByClassName("Box mt-4")[0]) {
        profileReadmeFound = true;
    }

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            if (request.message === "status") {
                sendResponse({found: profileReadmeFound});
            }
        }
    );
};
