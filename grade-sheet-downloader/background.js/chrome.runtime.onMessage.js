chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "downloadFiles") {
      message.urls.forEach(url => {
        chrome.downloads.download({
          url: url,
          filename: "grade-sheets/" + url.split("/").pop() // Save files in a folder
        });
      });
    }
  });