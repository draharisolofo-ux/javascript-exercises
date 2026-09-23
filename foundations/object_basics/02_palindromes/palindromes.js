const palindromes = function (str) {
  str = str.toLowerCase().trim();
  const len = str.length
  for(let i = 0; i < len / 2; i++)
  {
    if(str[i] !== str[len - i - 1])
    {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
