const convertToCelsius = function (degreesFahrenheit) {
  return round((degreesFahrenheit - 32) * 5 / 9, 1);
};

const convertToFahrenheit = function (degreesCelsius) {
  return round(degreesCelsius * 9 / 5 + 32, 1);
};

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
