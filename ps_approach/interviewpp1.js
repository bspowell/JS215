// PROBLEM
// - a distinct string only is present once in an array
// - given an array of strings, arr
// - and an integer, k
// - return the kth, distinct string in arr
// - if there are fewer than k distinct strings, return an empty string.

// INPUT
// - array of strings
// - integer (kth distinct string)

// OUTPUT
// - kth disinct string in array
// - empty string if fewer than k disinct strings

// APPROACH
// - iterate over the array 
// - add each element to to an object as an object property
// - if it doesn't exist assign value 1, if it does, += 1
// - after, push all keys with values of 1 into array
// - get kth disinct key

// EXAMPLES
// ["d","b","c","b","c","a"], 2
// ["d","b","c","b","c","a"] --> { "d": 1, "b": 2, "c": 2, "a": 1}
// --> ["d", "a"] -->["d", "a"][1] = "a"

// QUESTIONS / EDGE CASES
// - What happens if there is an empty array? How should the program handle that and return?
// - what if there is a sparse array?
// - Should the program account for other values in the array?
// - What if there is undefined, null, NaN? 
// - what if the integer is 0? 
// - what if the integer is another value?
// - are the strings case sensitive?

// ALGO
// - given an array of strings and integer
// - intialize empty object
// - iterate over the array
//  - if the element is not a string, continue
//  - add each element into an empty object as a property
//   - if the property exists, += 1
//    - if the property doesn't exist, assign to 1
// - iterate over object keys
//   - if value === 1, then add to new array
// - if kth integer is > than length - 1 of array, return empty array
// - else return second element of new array

// CODE
function distinctString(array, num) {
  let letterCount = {}; 

  for (let letter of array) {
    if (!letter || `${letter}`.match(/[0-9]+/)) {
      continue;
    } else if (letterCount[letter] === undefined) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter] += 1;
    }
  }
  console.log(letterCount)
  let distinctLetters = Object.keys(letterCount).filter(property => {
    return letterCount[property] === 1;
  })
  console.log(distinctLetters)
  if (num > distinctLetters.length) return [];
  return distinctLetters[num - 1];
}

// TEST CASES
console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
console.log(distinctString(["d","B","C","b","c","a"], 2)); // "B"
console.log(distinctString(["dad","bob","cat","bob","man","man"], 2)); // "cat"
console.log(distinctString(["d",1,"c", undefined,"c","a"], 2)); // "a"
console.log(distinctString(["d", ,"c","a"], 2)); // "c"
console.log(distinctString(["d","a"], 3)); // []
