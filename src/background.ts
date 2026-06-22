chrome.tabs.onRemoved.addListener(async (_tabId, removeInfo) => {
  if (removeInfo.isWindowClosing) {
    return;
  }

  try {
    await chrome.tabs.create({
      windowId: removeInfo.windowId,
      active: true
    });
  } catch (error) {
    console.warn("新しいタブを開けなかったよ:", error);
  }
});