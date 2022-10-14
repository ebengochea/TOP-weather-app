// IMPORTS
import { getWeather } from './api';
import { saveToLocalStorage } from './storage';

let location = 'bahia+blanca';

// GET LOCATION FROM USER IMPUT
function getLocationFromUserInput() {
  const userInput = document.querySelector('.search-field').value;
  // Convert user input to valid location string for URL
  return (
    userInput
      // Remove whitespace at start and end
      .trim()
      // Remove whitespace before comma
      .replace(/(\s+,)/g, ',')
      // Remove whitespace after comma
      .replace(/(,\s+)/g, ',')
      // Remove whitespace between words
      .replace(/\s+/g, '+')
  );
}

// SEARCH LOCATION IN API
(function searchLocation() {
  const userInput = document.querySelector('.search-field');
  const searchBtn = document.querySelector('.search-button');

  // When user clicks search button
  searchBtn.addEventListener('click', () => {
    if (userInput.value !== '') {
      saveToLocalStorage(getLocationFromUserInput());
      getWeather(getLocationFromUserInput());
      userInput.value = '';
    }
  });

  // When user presses enter key
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && userInput.value !== '') {
      e.preventDefault();
      searchBtn.click();
    }
  });
})();

// // EXPORTS
export { location };
