"use strict";
// PROBLEM
// - function called swap
// - takes a string argument
// - returns a new string
// - the alphabetic chars have taken the place of numeric characters and vice versa

// INPUT
// - string argument
// OUTPUT
// - string (numbers and letters swapped)

// RULES
// - swap letters / numbers until one runs out, then keep others same spot

// APPROACH / EXAMPLES
// - swap("1a2b3c") === "a1b2c3"
// create an array of the string
// map the array and replae each letter or number with l or n

// iterate over string
// - if number, add to number array
// - if letter, add to letter array

// map the array again
// - if n, check letter array > 1
//  - shift letter from letter array
//  - if less than 1, pop from number array
  //  - index = (letter array length + count) from number array
  //  - count += 1
// - if l, check number array > 1
//  - shift number from number array
//  - if less than 1, pop from letter array
  //  - index = (number array length + count) from letter array
  //  - count += 1

//Example
// "1a2b3c" --> [n,l,n,l,n,l]
//  ---> [1,2,3], [a,b,c]
// ---> [a,1,b,2,c,3]
// "abcd123" --> [l,l,l,l,n,n,n]
// ---> [a,b,c,d], [1,2,3]
// ---> [1,2,3,d,a,b,c]

// QUESTIONS / EDGE CASES
// - How should non-alphanumeric chars be treated?
// - how do you determine which characters and numbers are switched?
// - what if there are more numbers/letters than the other?
// - What if the argument is an object or array? 
// - What if the arguments is null, undefined, NaN? 
// - what if there are only numbers or only strings? what should be returned?

// ALGO
// given a string
// - make string into arrayString
// - create letter array, number array, extra array
// - iterate over arrayString
//  - if number, add to a new number array
//  - if letter, add to letter array
// if letterArr > numArr 
  // add the letters that exceed the length of numArr to extra arrray
  // else
  // add the numbers that exceed the length of letterArr to extra arrray

// - map arrayString
  // - if number & letterArrays length is not 0
  //  - shift letter from letter array
  //  - else, shift number from extra array

  // - if letter, & numberArray length is not 0
  //  - shift number from number array
  //  - else, shift letter from extra array
// CODE


// TEST CASES
function swap(str) {
  if (str === '') return '';

  let arrString = str.split('');

  let letterArr = arrString.filter(char => char.match(/[a-z]/i))
  let numArr = arrString.filter(char => char.match(/[0-9]/i))

  return arrString.map(char => {
    if (char.match(/[0-9]/) && letterArr.length > 0) {
      return letterArr.shift();
    } else if (char.match(/[a-z]/i) && numArr.length > 0) {
      return numArr.shift();
    }
    return char;
  }).join('');
}

console.log(swap("1a2b3c") === "a1b2c3"); // true
console.log(swap("abcd123") === "123dabc"); // true
console.log(swap("abcdef123") === "123defabc"); // true
console.log(swap("1") === "1"); // true