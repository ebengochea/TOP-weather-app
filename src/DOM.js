// IMPORTS
import {
  assignIconToWeatherCondition,
  capitalizeFirstLetter,
  convertDegreesToCardinal,
  convertKelvin,
  convertMSToKMH,
} from './utilities';

// SHOW WEATHER DATA IN SITE
function pushWeatherDataToDOM(data) {
  const city = document.querySelector('.city');
  const actualConditions = document.querySelector('.actual-conditions');
  const temperature = document.querySelector('.temperature');
  const feelsLike = document.querySelector('.feels-like');
  const date = document.querySelector('.date');
  const time = document.querySelector('.time');
  const humidity = document.querySelector('.humidity');
  const windSpeed = document.querySelector('.wind-speed');
  const windGusts = document.querySelector('.wind-gusts');

  city.textContent = data.name;
  assignIconToWeatherCondition(data.weather[0].description);
  actualConditions.textContent = capitalizeFirstLetter(
    data.weather[0].description
  );
  temperature.textContent = convertKelvin.toCelsius(data.main.temp);
  feelsLike.textContent = convertKelvin.toCelsius(data.main.feels_like);
  date.textContent = new Date();
  humidity.textContent = `${data.main.humidity}%`;
  windSpeed.textContent = `${convertMSToKMH(
    data.wind.speed
  )} ${convertDegreesToCardinal(data.wind.deg)}`;
  windGusts.textContent = convertMSToKMH(data.wind.gust);

  console.log(data);
}

// EXPORTS
export { pushWeatherDataToDOM };
