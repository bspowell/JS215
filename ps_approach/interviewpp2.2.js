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
//  - start value at index 0
//  - if curent index is greater than start value, then replace start value
// - once done, add start value to thirdMax array.
// - if array length is less than 3, return first index
// - if array length is 3 or greater, return third index.
// - 

// CODE
function thirdMax(array) {
  if (array === []) return [];
  let maxValue = array[0];
  let thirdMax = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] > maxValue) {
      maxValue = array[index];
    }
  }
  thirdMax.push(maxValue)
  console.log(thirdMax)
}

// TEST CASES

thirdMax([3, 2, 1]) // 1
// thirdMax([4, 3, 3]) // 4
// thirdMax([-1, -2, -3, 4]) // -2
// thirdMax([-1, -2, 0, 4]) // -1
// thirdMax([]) // []