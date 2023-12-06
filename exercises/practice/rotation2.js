// PROBLEM
// - function that rotates the last n digits of a number
// - rotation means, one digit to the left and first digit to the end
//  - eg. 912 -> 129
// - n - means about of numbers selected
//  - eg. 912, 2 -> 921 - only rotating the last two

// INPUT
//  - number, integer
// OUTPUT
//  - rotated number

// RULES
// - rotation is always one digit to the left and first moving to the end (right side)
// - 

// APPROACH 
// make number into string
// take last n digits of number (slice?)
// use helper function to rotate digits
//  adding second digit to last to new string, then adding first digit
//  return new string
// return number

// EXAMPLES

// QUESTIONS / EDGE CASES
// - will there always only be two arguments?
// - will the first argument always be number?
// - can the second argumnet be more than the number of numbers in the first arugment?
// - can the first argument have no numbers? 
// - 

// ALGO
// given a number and counter 'count'
// make number into a string - 'stringNum'
// slice from stringNum length - 1 - count to last element - 'digits'
// change length of stringNum to length - count
// pass 'digits' to helper 'rotate' function
// - rotate digits 1 to the left
// - return string 
// combine stringNum and digits
// return Number of stringNum

// CODE
function rotateRightmostDigits(number, count) {
  let stringNum = String(number);
  let digits = stringNum.slice((stringNum.length - count))
  stringNum = stringNum.slice(0,(stringNum.length - count))
  digits = rotate(digits)
  
  stringNum += digits;
  return Number(stringNum);
}

function rotate(digits) {
  let newDigits = '';
  for (let index = 1; index < digits.length; index++) {
    newDigits += digits[index]
  }
  newDigits += digits[0]
  return newDigits;
}


// TEST CASES

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
