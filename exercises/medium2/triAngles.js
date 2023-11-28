// PROBLEM
  // write a function that takes 3 angles
  // returns string classification of triangle

// Rules
  // triangle classification
    // Right: One angle is a right angle (exactly 90 degrees).
    // Acute: All three angles are less than 90 degrees.
    // Obtuse: One angle is greater than 90 degrees.
  // valid triangle
    // sum of angles must equal 180 degress
    // angles > 0

// EXAMPLES
// (60, 70, 50);   "acute"
// (30, 90, 60);   "right"
// (120, 50, 10);  "obtuse"
// (0, 90, 90);    "invalid"

// INPUT: 3 angles (numbers)
// OUTPUT: string of triangle: 'right', 'acute', 'obtuse', or 'invalid'.

// ALGO
  // given 3 numbers
  // check to see if valid triangle (return 'invalid' if false)
    // add up all numbers, if does not equal 180 return false;
    // if any angle equals 0, return false;
    // otherwise true;
  // check triangle class
    // if every angle is less than 90 - return 'acute'
    // if one equals 90, then return 'right'
    // else return 'obtuse'
// CODE
function triangle(a1, a2, a3) {
  if (!checkValid(a1, a2, a3)) return 'invalid'

  if ([a1, a2, a3].every(angle => angle < 90)) {
    return 'acute';
  } else if (a1 === 90 || a2 === 90 || a3 === 90) {
    return 'right';
  }
  return 'obtuse'
}

function checkValid(a1, a2, a3) {
  if(a1 === 0 || a2 === 0 | a3 === 0) {
    return false;
  } else if (a1 + a2 + a3 !== 180) {
    return false;
  }
  return true;
}

// TEST CASES

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"