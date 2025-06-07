// Create a style element to hold our custom CSS
let styleElement = document.createElement('style');
styleElement.id = 'wallapop-customizer-styles';
document.head.appendChild(styleElement);

// CSS rules for different features
const generalRules = `
    .search-page-results_SearchPageResults__adsense__2K_5X {
      display: none;
    }

    .search-page_SearchPage__topSky__VT7UG.w-100.d-flex.align-items-center.justify-content-center.my-3.mt-lg-4.overflow-hidden {
      display: none !important;
    }
`;
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
  css += generalRules;
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
