const NUMBER_OF_TABS_TO_OPEN = 2;

chrome.tabs.onRemoved.addListener(async (_tabId, removeInfo) => {
  if (removeInfo.isWindowClosing) {
    return;
  }

  try {
    await Promise.all(
      Array.from({ length: NUMBER_OF_TABS_TO_OPEN }, () =>
        chrome.tabs.create({
          windowId: removeInfo.windowId,
          active: true
        })
      )
    );
  } catch (error) {
    console.warn("新しいタブを開けなかったよ:", error);
  }
});