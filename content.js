// Create a style element to hold our custom CSS
let styleElement = document.createElement('style');
styleElement.id = 'wallapop-customizer-styles';
document.head.appendChild(styleElement);

// CSS rules for different features
const cssRules = {
  hideReserved: `
    a:has([badge-type="reserved"]) {
      display: none !important;
    }

    li:has([badge-type="reserved"]) {
      display: none !important;
    }
  `
};

// Function to update the CSS based on settings
function updateCSS(settings) {
  let css = '';
  
  // Add CSS for each enabled feature
  if (settings.hideReserved) {
    css += cssRules.hideReserved;
  }
  
  // Update the style element
  styleElement.textContent = css;
}

// Load settings and apply CSS when page loads
chrome.storage.sync.get(['hideReserved'], function(result) {
  updateCSS({
    hideReserved: result.hideReserved || false
  });
});

// Listen for messages from popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateCSS') {
    updateCSS({
      hideReserved: request.hideReserved
    });
  }
});
