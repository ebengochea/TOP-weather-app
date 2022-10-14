// IMPORTS
import './style.css';
import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css';
import '../node_modules/@fortawesome/fontawesome-free/css/solid.css';
import '../node_modules/@fortawesome/fontawesome-free/css/brands.css';

import { loadFromLocalStorage } from './storage';
import { location } from './user-input';
import { getWeather } from './api';

// INITIALIZE APP
// Get last saved location
if (loadFromLocalStorage()) {
  getWeather(loadFromLocalStorage());
} else {
  getWeather('bahia+blanca');
}
