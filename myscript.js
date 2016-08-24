function createTabAtTheBegining() {
  chrome.tabs.create({index: 0});
}

chrome.browserAction.onClicked.addListener(createTabAtTheBegining);
