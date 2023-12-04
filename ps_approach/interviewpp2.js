// PROBLEM
// - given an array of integers
// - return the third largest number in array
// - if 3rd largest doesn't exist, return greatest number
// - you're not allowed to sort the array

// INPUT
// - array of integers
// OUTPUT
// - integer (third largest number in array)
// - or largest number if 3rd largest doesn't exist

// RULES
// - cannot sort array
// - 

// APPROACH
// join the array with ', ' 
// while counter doesn't equal 3 
  // check which is the max number 
  // replace number with ' '.
  // counter += 1
// 
// QUESTIONS / EDGE CASES
// - Will the array always contain positive integers? 
// - will the array always contain values? No, return an empty array if not.
  // - return [] if []
// - Can the array be a sparce array? No
// - Can the array contain null, undefined, NaN? If so, what do I do?
  // - ignore
// - What if the array has string numbers? Are those included in the evaluation?
// - what if there are duplicates? Do we treat those are numbers or ignore them?

// ALGO
// iterate over the array to get greatest number
  // let x = greatest number
  // if current number > x, x = current number
// once done, add x to newArray
// remove number from array
// repeat finding greatest number, remove from array
// find greatest number again

// CODE
"use strict";

function thirdMax(array) {

  let counter = 0;
  let thirdMaxArr = [];
  let currMax = 0;
  let trackIndex = 0;
  while (counter < 3) {

    for (let index = 0; index < array.length - 1; index ++) {
      console.log(currMax)
      if (array[index] > currMax) {
        currMax = array[index];
        trackIndex = index;
      }
    }
    thirdMaxArr.push(currMax)
    array.splice(trackIndex, 1)
    counter += 1;
  }
  return thirdMaxArr[2];

}

// TEST CASES
// console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2, 3])); // 1
// console.log(thirdMax([1, 2, 1, 3, 5, 6, 1, 4])); // 4
// console.log(thirdMax([3, 'T', 1])); // 3
// console.log(thirdMax([])); // []