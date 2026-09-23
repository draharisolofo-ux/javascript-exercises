const removeFromArray = function(arr, n) {
  const index = arr.indexOf(n);
  arr.splice(index, 1);
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
