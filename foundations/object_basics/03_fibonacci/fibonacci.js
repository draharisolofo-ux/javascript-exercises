const fibonacci = function(n) {
  if(n == 0) return 0;
  let i = 1;
  let j = 0;
  for(let count = 1; count < n; count++)
  {
    let temp = i;
    i = i + j;
    j = temp;
    console.log({i, j});
  }
  return i;
};

// Do not edit below this line
module.exports = fibonacci;
