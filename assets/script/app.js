// app.js

// Add a little delay so the user can see that the page is working before seeing the dialog
setTimeout(function() {
  // Check if cookies are enabled
  if (!checkCookiesEnabled()) {
    showCookieSettingsModal();
  }
}, 2000);