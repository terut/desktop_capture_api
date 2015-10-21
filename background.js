chrome.browserAction.onClicked.addListener(function() {
  chrome.windows.create({
    url: 'index.html',
    focused: true,
    type: 'popup'
  });
});
