// PROBLEM
// given a number
// rotate it by one digit to the left - number in front goes to the end
// next, keep first digit in place, then rotate remaining digits
// next, keep first 2 digits in place, rotate again
// rotate each argument, he maximum rotation - which is until you have 2 integers letft

// EXAMPLES
// 735291;     rotates until first 4 are kept in place     // 321579
// 35;   rotates once              // 53
// 105;  rotates to 051, then keeps 0 in place, then rotates to 015    // 15 -- the leading zero gets dropped

// INPUT: integer
// OUPUT: maximum rotated integer

// ALGO
// given a number
// convert it to a string
// interate over it using a for loop - until the size of the array - 2.
  // rotate string from current index onward
// return number converted back to string

// CODE

function rotateArray(string) {
  return string.slice(1).concat(string[0])
}
function maxRotation(number) {
  let strNum = String(number);
  let totalLength = strNum.length
  let storedDigits = ''
  for (let index = 0; index < totalLength; index++) {
    strNum = rotateArray(strNum)
    storedDigits += strNum[0]
    strNum = strNum.slice(1)
  }
  return Number(storedDigits)
}

// TEST CASES

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845