// Initialize default settings when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(['hideReserved'], function(result) {
    // Only set default if setting doesn't exist
    if (result.hideReserved === undefined) {
      chrome.storage.sync.set({ 'hideReserved': false });
    }
  });
});
