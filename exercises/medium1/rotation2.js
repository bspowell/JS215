// PROBLEM
// write a function
// rotates the last n digits of a number 
// rotation happens one digit to the left, first digit to the end

// EXAMPLES
// (735291, 1);      // 735291
// (735291, 3);      // 735912
// (735291, 6);      // 352917

// INPUT: set of digits and last n digits to rotate
// OUPUT: rotated digits

// ALGO
// given a number
// convert to a string 
// slice the amount of digits from the end
  // rotate them
//concat with front digits to return

// CODE

function rotateRightmostDigits(number, n) {
  const numberString = String(number);
  const firstPart = numberString.slice(0, numberString.length - n);
  const secondPart = numberString.slice(numberString.length - n);
  const resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}
// TEST CASES

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917