
// Status messages
const FOUND_MESSAGE = "Profile Readme has been hidden.";
const NOT_FOUND_MESSAGE = "No profile readme found on this page.";

// After DOM has been loaded, send a status request to the content script
document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "status"}, function(response) {
            if (!chrome.runtime.lastError && response !== undefined) {
                // Set status text of the popup
                let statusText = response.found === true ? FOUND_MESSAGE : NOT_FOUND_MESSAGE;
                document.getElementById("status-text").innerHTML = statusText;
            }
        });
    });
});