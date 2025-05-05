function toggleCustomTheme() {
    document.body.classList.toggle('custom-theme');
}

// Listen for messages from the context menu
browser.runtime.onMessage.addListener((message) => {
  if (message.action === "toggleTheme") {
    toggleCustomTheme();
  }
});