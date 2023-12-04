// PROBLEM
// - function that returns an array
// - that expands by 1 from 1 to the value of the input
// - then reduces back to 1
// - values in the sub arrays, will be the same as the lengths

// INPUT
// - integer 
// OUTPUT
// - array of arrays

// RULES
// - each subarray's value corresponds to it's length (eg. [2, 2], [3,3,3])
// - the diamond always starts and ends in [1]
// - a diamond of 1 just returns [[1]]

// APPROACH
// - iterate to -1 of the integer
// - create an array for every index
// - loop pushing the index+1 onto the array.
// - push each array onto another array
// - create a copy of the array
// - then push an array of the integer values onto the original array
// - push the reversed copy off the array.



// QUESTIONS / EDGE CASES
// - will there ever be negative integers or 0? if so, what should I return?
// - Can there be another value like null, undefined, NaN?
// - can there be no arguments given? what should I return?

// ALGO
// - given an integer (n)
// - create an empty array 
// - iterate to n - 2
//  - create new array
//  - loop index +1 times, pushing index+1 onto new array
// - loop n times, creating an array of n, n's.
// - push onto array
// - reverse copied array, push onto array
// - return array
// Array(n).fill(0)
// CODE
"use strict";

function diamondArrays(num) {
  let diamond = [];

  if (num === 1) return [[1]];

  for (let index = 0; index < num - 1; index++) {
    let innerArr = Array(index+1).fill(index+1);
    diamond = diamond.concat([innerArr]);
  }
  let midArr = Array(num).fill(num)
  let copyArr = diamond.slice().reverse()
  diamond.push(midArr);
  diamond = diamond.concat(copyArr);

  return diamond;
}


// TEST CASES

// console.log(diamondArrays(1)) // ➞ [[1]]

console.log(diamondArrays(2)) // ➞ [[1], [2, 2], [1]]
console.log(diamondArrays(3))
// console.log(diamondArrays(4))
// console.log(diamondArrays(5)) // ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]