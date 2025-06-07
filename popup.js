document.addEventListener('DOMContentLoaded', function() {
  // Load saved settings
  chrome.storage.sync.get(['hideReserved'], function(result) {
    document.getElementById('hideReserved').checked = result.hideReserved || false;
  });

  // Save settings when changed
  document.getElementById('hideReserved').addEventListener('change', function() {
    const isChecked = this.checked;
    
    // Save to storage
    chrome.storage.sync.set({ 'hideReserved': isChecked });
    
    // Apply changes to active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs[0].url.includes('wallapop.com')) {
        chrome.tabs.sendMessage(tabs[0].id, { 
          action: 'updateCSS',
          hideReserved: isChecked
        });
      }
    });
  });
});
