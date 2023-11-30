// PROBLEM
  // write a function ,takes a year (number) as an argument 
  // returns the # of Friday the 13th's in that year. 
  // The year is greater than 1752
  // it will be the same calendar 

// EXAMPLES
  // 1986 --> 1
  // 2015 --> 3
  // 2017 --> 2

// INPUT: number (year)
// OUTPUT: number of Friday the 13th's

// ALGO
  // given a year
  // iterate over all the given months in the year
    // create a date object with new Date(year, monthIndex, day(13))
    // if getDay 13th lands on index of 5, it's friday
  // +1 for each month that has a Friday the 13th.

// CODE
function fridayThe13ths(year) {
  let friCount = 0;
  for (let index = 0; index < 12; index++) {
    let date = new Date(year, index, 13);
    if (date.getDay() === 5) friCount += 1;
  }
  return friCount;
}


// TEST CASES

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2