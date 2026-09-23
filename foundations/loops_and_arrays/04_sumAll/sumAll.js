const sumAll = function(low, high) {
  /*let sum = 0;
  while(low < high)
  {
    sum += low;
    low++;
  }
  sum += high;
  return sum;*/
  // Gauss formula
  return (high - low + 1) * (high + low) / 2;
};

// Do not edit below this line
module.exports = sumAll;
