const findTheOldest = function(persons) {
  return persons.sort((a, b) => 
  {
    let year = Date.now().year;
    let aage = (a.yearOfDeath ?? year) - a.yearOfBirth;
    let bage = (b.yearOfDeath ?? year) - b.yearOfBirth;
    a["age"] = aage;
    b["age"] = bage;
    return b.age - a.age;
  })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
