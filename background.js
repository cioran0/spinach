browser.contextMenus.create({
    id: "toggle-theme",
    title: "Toggle Custom Theme",
    contexts: ["all"]
  });
  
  browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "toggle-theme") {
      browser.tabs.sendMessage(tab.id, { action: "toggleTheme" });
    }
  });