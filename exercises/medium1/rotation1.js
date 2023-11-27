//Problem
// rotate the array by moving the first element to end of array
// do not modify original array
// if input not array, return undefined
// if input is empty array, return empty array

// input: array
// output: rotated array, undefined or empty array


// given an array
  // if empty, return empty array
  // if not an array, return undefined
// intialize an empty arrray
// Use slice to copy original from index 1
  // then push index 0
// return array

function rotateArray(array) {
  if (array.length === 0) return [];
  if (array === undefined) return undefined;

  let rotatedArr = array.slice(1)
  rotatedArr.push(array[0])

  return rotatedArr;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]