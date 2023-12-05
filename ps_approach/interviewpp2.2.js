"use strict";

// PROBLEM
// Given an array of integers, nums
// return the third largest number in the array
// If the third largest number does not exist, return the greatest number.

// You are not allowed to sort the array.

// INPUT
// - array of integers

// OUTPUT
// - return third largest number

// RULES
// - if there are less than 3 integers in array, return largest
// - if the 3rd largest doesn't exist, return largest

// APPROACH 
// - if array is less than length of 3, return largest num
// - find the largest number in array
//  - add to count array
// - find the largest number in array
//  - add to count array
// - find the largest number in array

// EXAMPLES
// [4, 3, 3] --> [4], [4,3], since 3 is not greater than 3, only 2 elements (return 4 - first index)
// [-1, -2, 0, 4] --> [4], [4,0], [4,0,-1], at least 3 elements, return third index

// QUESTIONS / EDGE CASES
// - can other values be in the array?
  // - no
// - can the array be empty?
  // - yes, make sure to return empty array
// - can the array be sparse?
  // no
// - can the array contain undefined, null, Nan?
  // no
// - can it include negative numbers?
  // yes


// ALGO
// - given an array of integers
// - if empty array, return empty array
// - iterate over the array with for loop, finding largest number
//  - replace maxvalue wtih new starting index 
//  - if curent index is greater than maxValue, then replace maxValue
// - After finding max,
//  - if maxvalue equals last index in thirdMax array, don't add
//  - if not, then add to thirdMax array
// - remove maxValue from array using splice and index

// - if array length is less than 3, return first index
// - if array length is 3 or greater, return third index.
// - 
// 4
// CODE
function thirdMax(array) {
  if (array.length === 0) return [];
  let thirdMax = [];
  let count = 0;

  while (count < 3) {
    let maxValue = array[0];
    maxValue = findMax(array, maxValue)
    if (maxValue[0] !== thirdMax[thirdMax.length - 1]) {
      thirdMax.push(maxValue[0])
    }
    maxValue[1] === undefined ? array.splice(0,1) : array.splice(maxValue[1],1)
    count += 1;
  }
  return thirdMax.length > 2 ? thirdMax[2] : thirdMax[0];
}


function findMax(array, maxValue) {
  let maxIndex = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > maxValue) {
      maxValue = array[index];
      maxIndex = index;
    }
  }
  return [maxValue, maxIndex]
}

// TEST CASES

// console.log(thirdMax([3, 2, 1])) // 1
// console.log(thirdMax([4, 3, 3])) // 4
// console.log(thirdMax([-1, -2, -3, 4])) // -2
// console.log(thirdMax([-1, -2, 0, 4])) // -1
console.log(thirdMax([])) // []