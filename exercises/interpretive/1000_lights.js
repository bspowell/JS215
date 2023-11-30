// PROBLEM
  // You have a bank of switches numbered 1 to n
  // Every switch is connected to 1 light - each light is initially off.
  // First pass, You then turn them all on
  // Second pass, start at beginning, toggle 2, 4, 6 +
  // Third pass, start at beginning, toggle 3, 6, 9 +
  // repeate until you've gone through n reptitiions

// RULES
  // the integer passed in is the number of elements in array
  // when turning on a light, make element a number - it's index + 1
  // turning off a light, removes element
  // iterate over the array, n times
  // each iteration, add 1 to counter

// EXAMPLES
  // lightsOn(5);        // [1, 4]
  // array = [1,2,3,4,5]
  // repeat 5 times. 
  // Detailed result of each round for `5` lights
  // Round 1: all lights are on
    // adding 1, 2, 3, 4, 5
  // Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
  // Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
  // Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
  // Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

  // 
// INPUT: integer (total number of switches)
// OUTPUT: array (lights that are on after n reptitions)

// ALGO:
  // given a number
  // create an empty array
  // iterate n times
    // each iteration, add 1 to starting index and index counter
    // on if there is no number at index, add number
    // if there is a number, remove number
  

// CODE
function lightsOn(num) {
  let lights = [];
  let n = 0;
  let counter = 1;
  while (n < num) {
    for (let index = n; index < num; index += (1 * counter)) {
      if (lights[index] === undefined) {
        lights[index] = index + 1;
      } else {
        lights.splice(index, 1, undefined);
      }
    }
    counter += 1;
    n += 1;
  }
  return lights.filter(value => value !== undefined);
}
// TEST CASES
// console.log(lightsOn(3));        // [1]
console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
