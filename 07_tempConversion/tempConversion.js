const rounded = function(num) {
  return (Math.round(num * 10) / 10)
}


const convertToCelsius = function(tempF) {
  let tempC = (tempF - 32) * (5 / 9);
  return rounded(tempC);
};

const convertToFahrenheit = function(tempC) {
  let tempF = (tempC * (9 / 5) + 32);
  return rounded(tempF);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
