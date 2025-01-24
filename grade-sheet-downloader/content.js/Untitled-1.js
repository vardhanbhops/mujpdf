// Example: Find all PDF links on the page
const pdfLinks = Array.from(document.querySelectorAll('a[href$=".pdf"]')).map(link => link.href);

// Send the links to the background script for downloading
if (pdfLinks.length > 0) {
  chrome.runtime.sendMessage({ action: "downloadFiles", urls: pdfLinks });
}