// CAPITALIZE FIRST LETTER OF A STRING
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// CONVERT WIND DEGREE DIRECTION TO CARDINAL DIRECTION
function convertDegreesToCardinal(deg) {
  if (deg > 348.75 && deg <= 11.25) {
    return 'N';
  } else if (deg > 11.25 && deg <= 33.75) {
    return 'NNE';
  } else if (deg > 33.75 && deg <= 56.25) {
    return 'NE';
  } else if (deg > 56.25 && deg <= 78.75) {
    return 'ENE';
  } else if (deg > 78.75 && deg <= 101.25) {
    return 'E';
  } else if (deg > 101.25 && deg <= 123.75) {
    return 'ESE';
  } else if (deg > 123.75 && deg <= 146.25) {
    return 'SE';
  } else if (deg > 146.25 && deg <= 168.75) {
    return 'SSE';
  } else if (deg > 168.75 && deg <= 191.25) {
    return 'S';
  } else if (deg > 191.25 && deg <= 213.75) {
    return 'SSW';
  } else if (deg > 213.75 && deg <= 236.25) {
    return 'SW';
  } else if (deg > 236.25 && deg <= 258.75) {
    return 'WSW';
  } else if (deg > 258.75 && deg <= 281.25) {
    return 'W';
  } else if (deg > 281.25 && deg <= 303.75) {
    return 'WNW';
  } else if (deg > 303.75 && deg <= 326.25) {
    return 'NW';
  } else if (deg > 326.25 && deg <= 348.75) {
    return 'NNW';
  }
}

// CONVERT WIND SPEED IN M/S TO KM/H
function convertMSToKMH(ms) {
  let kmh = ms * 3.6;
  kmh = Math.round((kmh + Number.EPSILON) * 10) / 10;
  return `${kmh} km/h`;
}

// CONVERT KELVIN TO CELSIUS OR FARENHEIT
const convertKelvin = (() => {
  const toCelsius = (K) => {
    let C = K - 273.15;
    C = Math.round((C + Number.EPSILON) * 10) / 10;
    return `${C}°C`;
  };

  const toFahrenheit = (K) => {
    let F = 1.8 * K - 459.67;
    F = Math.round((F + Number.EPSILON) * 10) / 10;
    return `${F}°C`;
  };

  return {
    toCelsius,
    toFahrenheit,
  };
})();

function assignIconToWeatherCondition(condition) {
  const icon = document.querySelector('#weather-condition');
  icon.removeAttribute('class');

  if (condition === 'clear sky') {
    icon.classList.add('fa-regular', 'fa-sun');
  } else if (condition === 'few clouds') {
    icon.classList.add('fa-regular', 'fa-cloud-sun');
  } else if (condition === 'scattered clouds') {
    icon.classList.add('fa-regular', 'fa-cloud');
  } else if (condition === 'broken clouds' || condition === 'overcast clouds') {
    icon.classList.add('fa-regular', 'fa-clouds');
  } else if (condition === 'shower rain' || condition === 'light rain') {
    icon.classList.add('fa-regular', 'fa-cloud-rain');
  } else if (condition === 'rain') {
    icon.classList.add('fa-regular', 'fa-cloud-sun-rain');
  } else if (condition === 'thunderstorm') {
    icon.classList.add('fa-regular', 'fa-cloud-bolt');
  } else if (condition === 'snow') {
    icon.classList.add('fa-regular', 'fa-snowflake');
  } else if (condition === 'mist') {
    icon.classList.add('fa-regular', 'fa-cloud-fog');
  }
}

// EXPORTS
export {
  assignIconToWeatherCondition,
  capitalizeFirstLetter,
  convertDegreesToCardinal,
  convertMSToKMH,
  convertKelvin,
};
