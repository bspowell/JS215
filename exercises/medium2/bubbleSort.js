// PROBLEM
  // write a function that takes an array
  // sorts the array with bubble sort algorithm
  // sorting done 'in-place' - the function should MUTATE the array
  // array will contain at least two elements

  // bubblesort explanation
    // bubble sort works by multiple passes thorugh an array
    // each pass the two values of each pair of consecutive elements are compared
    // if first > second, two elements are swapped.
    // repeat process until pass is made without performing any swaps
    
  // if we pass through an array without making a sort, array is sorted

// EXAMPLES
// 3 2 1  - 3 > 2? Yes
// 2 3 1  - 3 > 1? yes
// 2 1 3  - 2 > 1? yes
// 1 2 3  - no swaps: all done.



// INPUT: array of nums
// OUTPUT: sorted array of nums (same object)

// ALGO:
  // given an array
  // while changes var is equal to true iterate over array
  // assign changes variable to false;
  // iterate over the array until the second last index
    // compare current index with next index value
    // if current index > next index
      // swap values
      // make changes variable equal to true
  // continue until no changes are made

// CODE
function bubbleSort(array) {
  let changes = true;
  while (changes) {
    changes = false;
    for (let index = 0; index < array.length - 1; index++) {
      if (array[index] > array[index + 1]) {
        // let first = array[index];
        // let second = array[index + 1];
        // array[index] = second;
        // array[index + 1] = first;
        [array[index], array[index + 1]] = [array[index + 1], array[index]]
        changes = true;
      }
    }
  }
  return array;
}

// TEST CASES

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]