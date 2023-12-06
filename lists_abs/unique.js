// PROBLEM
// Implement a function that determines whether a string 
// has any character that appears more than once. 
// The function should return true if, and only if, all characters in the string are unique. 
// We should ignore multiple spaces and case differences; 
// focus instead on the non-space characters without regard to case.

// INPUT
// - string with words
// OUTPUT
// - boolean - if all characters in string are unique

// RULES
// - ignore spaces and case differences
// - can have numbers and special characters
// - special characters count

// APPROACH 
// break string up into characters 
// iterate over the array add character to object
// if character is already there += 1, else, = 1
// ignore spaces

// EXAMPLES
// 'aBc' -> 'abc' -> ['a','b','c']
// {'a': 1, 'b': 1,'c': 1}
// 

// QUESTIONS / EDGE CASES

// ALGO
// - given a string
// - lowercase string, break into an array of chars - 'charsArr'
// - create countObj to empty obj
// - iterate over charsArr
//    - if char is a space, continue
//    - if char is not in countObj, add it equal to 1
//    - if char is included, + 1
// - iterate over the countObj keys, if every value equals 1, return true.


// CODE

// TEST CASES

function isAllUnique(string) {
  let charsArr = string.toLowerCase().split('');
  let countObj = {};

  for (let char of charsArr) {
    if (char === ' ') continue;
    if (countObj[char] === 1) countObj[char] += 1;
    countObj[char] = countObj[char] || 1;
  }

  return Object.values(countObj).every(value => value === 1);
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true