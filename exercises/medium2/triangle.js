// PROBLEM
  // write a function that takes 3 lengths
  // and retursn a string representing classification 
// RULES
// triangles are classified like so:
  // Equilateral: All three sides are of equal length.
  // Isosceles: Two sides are of equal length, while the third is different.
  // Scalene: All three sides are of different lengths.
// To be a valid triangle:
  // sum of two shortest sides must be greater than longest side
  // every side must have length > 0

// EXAMPLES
// 3, 3, 3;        // "equilateral"
// 3, 3, 1.5;      // "isosceles"
// 3, 4, 5;        // "scalene"
// 0, 3, 3;        // "invalid"

// INPUT: 3 integers
// OUTPUT: string classification

// ALGO
  // given 3 numbers
  // check if valid triangle
    // check is all numbers are greater than 0
      //return false if not
    // sum two sides > max side
      // find max in array and set to variable
      // remove max from array and sum other two variables
      // return false if two shortest sides smaller than longest side 
    // return true if both pass
  // If every side is equal, return 'equilateral'
    //use every
  // If count of 2 sides are the same, retrun 'isoceles'
  // if all different, return 'scalene'

// CODE
function triangle(...nums) {
  if (!checkValid(nums)) return 'invalid';

  if (nums.every(ele => ele === nums[0])) {
    return 'equilateral';
  } else if ((nums[0] !== nums[1]) && (nums[1] !== nums[2]) && (nums[0] !== nums[2])) {
    return 'scalene'
  }

  return 'isoceles'
}

function checkValid(nums) {
  // check sides greater than 0
  if ((nums.filter(value => value <= 0)).length > 0) {
    return false;
  }
  // check 2 sides > 1 side
  let longest = Math.max(nums)
  console.log(longest)
  let sum = 0;
  for (let index = 0; index < nums.length; index++) {
    if (index === longest) continue;
    sum += nums[index];
  }
  // console.log(nums[longest])
  console.log(sum)
  if (nums[longest] < sum) return false;

  return true;
}


// TEST CASES
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"