// This file helps create placeholder icons for the extension
// You can replace these with actual icon files later

function generateIcon(size) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  
  // Background color - Wallapop green
  ctx.fillStyle = '#13c1ac';
  ctx.fillRect(0, 0, size, size);
  
  // Add a "W" letter
  ctx.fillStyle = 'white';
  ctx.font = `bold ${size * 0.6}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('W', size / 2, size / 2);
  
  return canvas.toDataURL();
}

// Generate icons when extension is installed
chrome.runtime.onInstalled.addListener(() => {
  const sizes = [16, 48, 128];
  sizes.forEach(size => {
    const iconUrl = generateIcon(size);
    // You would save this or use it directly
    console.log(`Generated icon of size ${size}`);
  });
});
