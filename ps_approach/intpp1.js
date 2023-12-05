// PROBLEM
// A distinct string is a string that is present only once in an array.
// Given an array of strings, arr, and an integer, k, 
// return the kth distinct string present in arr. 
// If there are fewer than k distinct strings, return an empty string "".

// INPUT
// - array of strings, integer k
// OUTPUT
// - string, return kth distinct string
// - if fewer than k distinct strings, return empty string

// RULES
// - A distinct string is a string that is present only once in an array.
// - if array has less strings than integer, then return empty string

// APPROACH 
// iterate over array and push each string into an object
// count each time it comes across the same string
// when finished, add all the properties with a value of 1 to array
// take kth one

// EXAMPLES
// ['a', ,'b'][1] = undefined
// typeof char === 'string'
// ["d","b","c","b","c","a"] -> { "d": 1, "b": 2, "c":2, "a": 1}
// -> ["d", "a"][1] -> "a"

// QUESTIONS / EDGE CASES
// - Are distinct strings case sensitive? -> yes
// - Can there be other values in the array? -> yes, ignore them
// - Can k be a negative integer or 0, if so what do i return? - No
// - can the array be empty? -> yes, return empty string
// - can the strings have multiple letters? -> yes
// - can the string be sparse? - Yes

// ALGO
// given an array and an integer - k
// - guard clause: if empty array, return empty string
// - create stringCount obj
// - iterate over array
//    - if not a string continue, (typeof)
//    - else, if string is not a property of stringCount, add as property with value of 1
//    - else, if already a string, += 1 to string property value
// - iterate over array of the stringCount properties
//  - if the value equals 1, then add to uniqueArray
// - guardclause: if k > uniqueArray.length, return empty string
// - return unqiueArray[k-1]

// CODE

function distinctString(array, k) {
  if (array.length < 1) return "";

  let stringCount = {};

  for (let str of array) {
    if (typeof str !== 'string') continue;

    if (!Object.keys(stringCount).includes(str)) {
      stringCount[str] = 1;
    } else {
      stringCount[str] += 1;
    }
  }
  let uniqueArr = [];

  for (let property of Object.keys(stringCount)) {
    if (stringCount[property] === 1) {
      uniqueArr.push(property);
    }
  }
  if (k > uniqueArr.length) return "";

  return uniqueArr[k - 1];
}

// TEST CASES
// console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
// console.log(distinctString(['abc','def','abc','ABC'], 2)) // 'ABC'     -> longer strings
// console.log(distinctString(['a','b', 1, 2, 'b', 3, 'a', 'c'], 1)) // 'c'  -> other values
// console.log(distinctString([], 1)) // ""     -> empty array
// console.log(distinctString(['a','b'], 4)) // ""    -> fewer distinct strings than k
console.log(distinctString(['a', , ,'b'], 2))  // 'b'
console.log(distinctString(['a', ,'b'], 2))  // 'b'
