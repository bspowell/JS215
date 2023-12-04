// PROBLEM
// - function that takes two arrays
// - adds first element in the first array with first element in second array
// - second element in first array, second element in second array, etc
// - return true if all combinations add up to the same number
// - false otherwise

// INPUT
// - two arrays with integers
// OUTPUT
// - boolean 

// RULES
// - add elements at each index in both arrays, sum must all be the same 
// - if different length arrays, return false
// - can have negative numbers

// QUESTIONS / EDGE CASES
// - can the arrays contain anything else but positive integers?
// - can the arrays be empty?
// - will the arrays always be the

// APPROACH
// use a for loop to interate over indexes
// create a new array of sums, see if all equal

//EXAMPLES
// [1, 2], [-1, -1] --> [0, 1]
// --> false

// ALGO
// given two arrays
// use for loop to iterate over indexes
//  sum each index value from both arrays
//  add sum to new array
// use `every` method to see if all are the same as first index of array

// CODE

function puzzlePieces(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let sumArr = [];
  for (let index = 0; index < arr1.length; index++) {
    sumArr.push(arr1[index] + arr2[index])
  }
  return sumArr.every(ele => ele === sumArr[0]);
}
// TEST CASES


console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]))// ➞ true
// 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// Both arrays sum to [5, 5, 5, 5]

console.log(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6])) //➞ true

console.log(puzzlePieces([1, 2], [-1, -1])) //➞ false

console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10])) //➞ false