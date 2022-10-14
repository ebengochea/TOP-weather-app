// SAVE DATA TO LOCALSTORAGE
function saveToLocalStorage(location) {
  localStorage.setItem('location', location);
}

// RETRIEVE DATA FROM LOCAL STORAGE
function loadFromLocalStorage() {
  return localStorage.getItem('location');
}

// EXPORTS
export { saveToLocalStorage, loadFromLocalStorage };
