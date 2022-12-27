const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(numbers) {
	let sum = 0;
  for (number of numbers) {
    sum += number;
  }
  return sum;
};

const multiply = function(numbers) {
  let mult = 1;
  for (number of numbers) {
    mult *= number;
  }
  return mult;
};

const power = function(a,b) {
	let power = 1;
  for (let i = 1 ; i <= b; i++) {
    power *= a;
  }
  return power;
};

const factorial = function(a) {
  let fact = 1;
  for (let i = 1; i <= a; i++) {
    fact *= i;
  }
  return fact;
	
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
