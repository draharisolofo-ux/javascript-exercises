const reverseString = function(str) {
  const len = str.length;
  let s = "";
  for(let i = len - 1; i >= 0; i--)
  {
    s += str[i];
  }
  return s;
};

// Do not edit below this line
module.exports = reverseString;
