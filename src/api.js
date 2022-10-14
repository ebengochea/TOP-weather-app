// IMPORTS
import { pushWeatherDataToDOM } from './DOM';

// GET WEATHER DATA FROM OPENWEATHERMAP
async function getWeather(location) {
  const KEY = 'e17e7d75018c29a0aa559997ec872149';
  const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${KEY}`;
  // TODO: Add extended forecast
  // const forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${KEY}`;

  try {
    const response = await fetch(weatherUrl, { mode: 'cors' });
    if (!response.ok) throw new Error(`Location ${location} not found`);
    const weatherData = await response.json();

    pushWeatherDataToDOM(weatherData);

    // TODO: Add extended forecast
    // const responseWF = await fetch(forecastUrl, { mode: 'cors' });
    // if (!responseWF.ok) throw new Error(`Location ${location} not found`);
    // const forecastData = await responseWF.json();
    // console.log(forecastData);
  } catch (error) {
    alert(error);
    return null;
  }
}

// async function getWeatherForecast(weatherData) {
//   const lat = weatherData.coord.lat;
//   const lon = weatherData.coord.lon;
//   const KEY = 'e17e7d75018c29a0aa559997ec872149';
//   const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${KEY}`;

//   try {
//     const response = await fetch(url, { mode: 'cors' });
//     if (!response.ok) throw new Error(`Location ${location} not found`);
//     const forecastData = await response.json();

//     console.log(forecastData);
//   } catch (error) {
//     alert(error);
//     return null;
//   }
// }

// EXPORTS
export { getWeather };
