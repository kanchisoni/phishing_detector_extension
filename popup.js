document.addEventListener("DOMContentLoaded", function () {
    function updateStatus() {
        chrome.storage.local.get("urlStatus", function (data) {
            document.getElementById("status").innerText = data.urlStatus || "No URL checked.";
        });
    }

    // Update status when popup is opened
    updateStatus();

    // Listen for changes in storage to update the status
    chrome.storage.onChanged.addListener(updateStatus);
});
