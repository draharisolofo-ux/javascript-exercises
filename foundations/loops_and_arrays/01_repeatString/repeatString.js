const repeatString = function(str, n) {
  if(n < 0) return "ERROR";
  let s = "";
  for(let i = 1; i <= n; i++)
  {
    s += str;
  }
  return s;
};

// Do not edit below this line
module.exports = repeatString;
