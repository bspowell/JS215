// PROBLEM
  // featured number - is an odd number that is a multiple of 7, all digits occuring exactly once
  // write a function, takes an integer
  // returns next featured number, greater than the integer
  // issue error message if thre is no next featured number
    // eg. "There is no possible number that fulfills those requirements."
    // NOTE: The largest possible featured number is 9876543201.

//Rules:
  // can't be odd number
  // has to be multiple of 7
  // digits only occur once

// EXAMPLES
  // eg. 49 is a featured number
  // eg. 98 is not (not an odd number)
  // eg. 97 not (not multi of 7)
  // eg. 133 not (3 appears twice)



// INPUT: number (integer)
// OUTPUT: number (next featured number)

// ALGO:
  // given a number
  // add to that number + 1 until it's divisible by 7 and odd
  // then check to see if each digit occurs only once
  // return number if divisible by 7, odd and occur only once.


// CODE

// TEST CASES
// 12 --> next multiples of 7: 14, 21
  // 13
  // 14 -> divisble by 7, not odd
  // ..21 -> divisble by 7, odd, only once


function featured(number) {
  for (let index = number; index < 9876543202; index++) {
    number += 1;
    if (number % 7 === 0 && number % 2 !== 0) {
      if (isEven(number)) return number;
    }
  }
  return "There is no possible number that fulfills those requirements"
} 

function isEven(number) {
  let strNum = number.toString().split('')
  let valueSoFar = [];
  for (let subIndex = 0; subIndex < strNum.length; subIndex++) {
    let value = strNum[subIndex];
    if (valueSoFar.indexOf(value) !== -1) {
      return false;
    }
    valueSoFar.push(value);
  }
  return true;
}
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."