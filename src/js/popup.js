
const FOUND_MESSAGE = "Profile Readme has been hidden.";
const NOT_FOUND_MESSAGE = "No profile readme found on this page.";


document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "status"}, function(response) {
            if (!chrome.runtime.lastError && response !== undefined) {
                let statusText = response.found === true ? FOUND_MESSAGE : NOT_FOUND_MESSAGE;
                document.getElementById("status-text").innerHTML = statusText;
            }
        });
    });
});