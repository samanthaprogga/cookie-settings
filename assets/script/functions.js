// functions.js

// Function to get the browser name
function getBrowserName() {
  const userAgent = navigator.userAgent;
  let browserName = 'Unknown';

  if (userAgent.indexOf('Firefox')!== -1) {
    browserName = 'Firefox';
  } else if (userAgent.indexOf('Chrome')!== -1) {
    browserName = 'Chrome';
  } else if (userAgent.indexOf('Safari')!== -1) {
    browserName = 'Safari';
  } else if (userAgent.indexOf('Opera')!== -1) {
    browserName = 'Opera';
  } else if (userAgent.indexOf('MSIE')!== -1) {
    browserName = 'Internet Explorer';
  }

  return browserName;
}

// Function to get the operating system name
function getOSName() {
  const userAgent = navigator.userAgent;
  let osName = 'Unknown';

  if (userAgent.indexOf('Windows NT')!== -1) {
    osName = 'Windows';
  } else if (userAgent.indexOf('Mac')!== -1) {
    osName = 'MacOS';
  } else if (userAgent.indexOf('Linux')!== -1) {
    osName = 'Linux';
  } else if (userAgent.indexOf('Android')!== -1) {
    osName = 'Android';
  } else if (userAgent.indexOf('iPhone')!== -1) {
    osName = 'iOS';
  }

  return osName;
}

// Function to get the screen width
function getScreenWidth() {
  return screen.width;
}

// Function to get the screen height
function getScreenHeight() {
  return screen.height;
}

// Function to set a cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days*24*60*60*1000));
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
}

// Function to get a cookie by name
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.indexOf(name + '=') === 0) {
      return cookie.substring(name.length + 1);
    }
  }
  return '';
}

// Function to check if cookies are enabled
function checkCookiesEnabled() {
  const testCookie = 'testCookie';
  setCookie(testCookie, 'testValue', 1);
  if (getCookie(testCookie)) {
    return true;
  } else {
    return false;
  }
}

// Function to show a modal
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
}

// Function to hide a modal
function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

// Function to handle the 'Accept all' button click event
function handleAcceptAllButtonClick() {
  setCookie('browser', getBrowserName(), 30);
  setCookie('os', getOSName(), 30);
  setCookie('screenWidth', getScreenWidth(), 30);
  setCookie('screenHeight', getScreenHeight(), 30);
  hideModal('cookieSettingsModal');
  hideModal('cookiePreferencesModal');
}

// Function to handle the 'Settings' button click event
function handleSettingsButtonClick() {
  showModal('cookiePreferencesModal');
}

// Function to handle the 'Save changes' button click event in the cookie preferences modal
function handleSaveChangesButtonClick() {
  if (document.getElementById('browserCheckbox').checked) {
    setCookie('browser', getBrowserName(), 30);
  }
  if (document.getElementById('osCheckbox').checked) {
    setCookie('os', getOSName(), 30);
  }
  if (document.getElementById('screenWidthCheckbox').checked) {
    setCookie('screenWidth', getScreenWidth(), 30);
  }
  if (document.getElementById('screenHeightCheckbox').checked) {
    setCookie('screenHeight', getScreenHeight(), 30);
  }
  hideModal('cookiePreferencesModal');
}

// Function to handle the 'X' button click event in the modals
function handleCloseButtonClick(modalId) {
  hideModal(modalId);
}

// Function to initialize the cookie settings and preferences modals
function initializeModals() {
  const cookieSettingsModal = document.getElementById('cookieSettingsModal');
  const cookiePreferencesModal = document.getElementById('cookiePreferencesModal');

  // Check if cookies are enabled
  if (!checkCookiesEnabled()) {
    showModal('cookieSettingsModal');
  }

  // Handle the 'Accept all' button click event
  const acceptAllButton = document.getElementById('acceptAllButton');
  acceptAllButton.addEventListener('click', handleAcceptAllButtonClick);

  // Handle the 'Settings' button click event
  const settingsButton= document.getElementById('settingsButton');
  settingsButton.addEventListener('click', handleSettingsButtonClick);

  // Handle the 'Save changes' button click event in the cookie preferences modal
  const saveChangesButton = document.getElementById('saveChangesButton');
  saveChangesButton.addEventListener('click', handleSaveChangesButtonClick);

  // Handle the 'X' button click event in the modals
  const closeButtons = document.getElementsByClassName('close');
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function() {
      hideModal(closeButtons[i].parentElement.id);
    });
  }
}

// Initialize the cookie settings and preferences modals
initializeModals();