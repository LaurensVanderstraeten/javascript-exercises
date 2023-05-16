const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numberArray) {
  if (numberArray.length == 0) {
    return 0;
  }
  return numberArray.reduce(add);
};

const multiply = function (numberArray) {
  if (numberArray.length == 0) {
    return 0;
  }
  return numberArray.reduce((a, b) => a * b);
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
