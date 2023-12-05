// PROBLEM
// - take a two-dimensional array as an argumnet
// - turn it into a flat array with all duplicates removed
// - treat numbers and numbers straings as duplicates - eg. 1 '1'
// - keep the one that comes first in the result

// INPUT: two-demensional array
// OUTPUT: array with unique values

// RULES
// - when flattening array, remove duplicates
// - duplicates can be strings and number - eg. 1, '1' 
// - keep element that came first - eg. 1
// - if empty array, return empty array

// APPROACH
// - flatten array - flat()
// - hift the first element to a unqiueArray
// - iterate over array and compare the string value of unqiueArrays lsat element
// - if matches, remove element friom flattenArray using splice
// 

// EXAMPLES
// [1, 2, 3, 4, 4, 4, 2] -> [1], [2, 3, 4, 4, 4, 2]
// [1, 2], [3, 4, 4, 4, 2] -> [1, 2], [3, 4, 4, 4]
// [1, 2, 3], [4, 4, 4] - >[1, 2, 3, 4], [4, 4]


// QUESTIONS / EDGE CASES
// - Will there be objects in the array? -> no
// - will there be undefined, null, NaN, etc? -> no
// - will the array be sparse? -> no
// - will the array have negative numbers? -> no
// - will the array have spaces? how are those treaated? - no
// - are strings case sensititve? - Yes

// ALGO
// given a 2d array
// - guard clause: if empty, return empty
// - flatten array using flat() to create 'flatArr'
// - create a new array for unique characters - 'uniqueArr'
// - shift the first element of the flatArr to uniqueArr
// - iterate over flatArr
//    - if string version of uniqueArr[lastindex] is the same as current value
//    - remove current value from flatArr
//    - index - 1
// - shift next element from flatArr to uniqueArr
// - repeat iterate until flatArr has no elements


// CODE
function flattenAndUnique(array) {
  if (array.length < 1) return [];

  let flatArr = array.flat();
  let uniqueArr = [];
  
  while (flatArr.length > 0) {
    uniqueArr.push(flatArr.shift());
    for (let index = 0; index < flatArr.length; index++) {
      if (String(uniqueArr[uniqueArr.length - 1]) === String(flatArr[index])) {
        flatArr.splice(index, 1);
        index -= 1;
      }
    }
  }
  return uniqueArr;
}


// TEST CASES
console.log(flattenAndUnique([])); // []
console.log(flattenAndUnique([[1, '1'], ['A', 'a', 2]])) // [1, 'A', 'a', 2]
console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']])); // [1, 2, 3, 4, 5, 'a']