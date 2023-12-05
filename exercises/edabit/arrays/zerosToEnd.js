
// PROBLEM
// Write a function that moves all the zeroes to the end of an array.
// Do this without returning a copy of the input array

// INPUT
// - array 
// OUTPUT
// - array mutated with zeros at the end

// RULES
// - if array has no zeros, or only 0's return array
// - return same array mutated, not a copy
// - keep the same relative order of elements
// - eg. [0, 0, 2, 0, 5] --> [2, 5, 0, 0, 0]

// APPROACH
// iterate over an array
// if find a zero, splice from array
// add to count of zeros
// when done, add zeros back to end of array

// EXAMPLES
// [1,0,0,2,0,3]
// [1,2,3] - all zeros removed, zerocount =3
// [1,2,3,0,0,0] - added 3 zeros back


// QUESTIONS / EDGE CASES

// ALGO
// given an array of integers
// iterate over the array and remove all elements that equal zero (use splice)
// add 1 to zeroCount when removing an elemnet
// once done, push number of 0's back onto array Array(zerocount).fill(0) concat onto array

// CODE
function zeroesToEnd(array) {
  let zeroCount = 0;

  for (let index = 0; index < array.length ; index++) {
    if (array[index] === 0)  {
      array.splice(index, 1);
      zeroCount += 1;
      index -= 1;
    }
  }
  let zerosArr = Array(zeroCount).fill(0);
  return array.concat(zerosArr);
}

// TEST CASES
console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5])) // ➞ [1, 2, 4, 5, 0, 0, 0]

console.log(zeroesToEnd([0, 0, 2, 0, 5])) //➞ [2, 5, 0, 0, 0]

console.log(zeroesToEnd([4, 4, 5])) // ➞ [4, 4, 5]

console.log(zeroesToEnd([0, 0])) // ➞ [0, 0]