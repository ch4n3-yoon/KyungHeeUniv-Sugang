
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({
		file: "exploit.js",
		allFrames: false
	});
});

// location.href = "javascript:document.getElementById('Main').contentDocument.getElementById('coreMain').contentWindow.msgAlert('hihi')";