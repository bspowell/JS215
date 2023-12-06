// PROBLEM
// - Given an array of integers, nums, return the third largest number in the array. 
// If the third largest number does not exist, return the greatest number.


// INPUT
// - array of integers

// OUTPUT
// - integer (third max)
// RULES


// APPROACH 
// - if array length is greater than 3
//  - find the minimun number in array, splice it out
//  - repeat until array lenght is 3
// - if array length is under 3, return max number

// EXAMPLES
// [3,2,2,1] -> [1], index 3
// [3,2,2] -> return 2


// QUESTIONS / EDGE CASES

// ALGO
// - given an array of integers
// - guardclause: if array length is less than 3, return max of array
// - if greater than 3
//  - find the minimun number in array, find the index
//  - splice the number out
//  - repeat until array.length is 3
// - once array.length equals 3, find min number again to return 

// CODE

// TEST CASES

function thirdMax(array) {
  if (array.length < 3) return Math.max(...array);

  while (array.length > 3) {
    array.splice(array.indexOf(Math.min(...array), 1))
  }
  console.log(array)
  return Math.min(...array);
}

// console.log(thirdMax([3, 2])); // 1
// console.log(thirdMax([3, 2, 1])); // 1
// console.log(thirdMax([3, 2, 1, 5, 3, 2])); // 2
console.log(thirdMax([3, 2, 1, 'd', undefined, ,])); // 1