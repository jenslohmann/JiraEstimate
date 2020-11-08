chrome.browserAction.onClicked.addListener(function (tab) {
    console.log('Clicked.');
    chrome.tabs.executeScript(null, {file: "sumup.js"});
})