const add = function(i, j) {
	return i + j;
};

const subtract = function(a, b) {
	return Math.abs(a - b);
};

const sum = function(numbers) {
	return numbers.reduce((n, acc) => n + acc);
};

const multiply = function(numbers) {
  return numbers.reduce((n, acc) => n * acc, 1);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(n) {
  let fac = 1;
  if(n == 0) return 1;
  for(let i = n; i > 0; i--)
  {
    fac *= i;
  }
  return fac;
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
