
if (document.domain == "sugang.khu.ac.kr") {
	chrome.tabs.onUpdated.addListener(function(tab) {
		chrome.tabs.executeScript({
			file: "exploit.js",
			allFrames: false
		});
	});
}


chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({
		file: "exploit.js",
		allFrames: false
	});
});
