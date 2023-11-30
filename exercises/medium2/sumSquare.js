// PROBLEM
  // write a function
  // computes difference between square of the sum of first n positive integers
  // and sum of the squares of first n positive integers
// EXAMPLES
  // 3 --> 22 (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)

// RULES
  // first n postiive integers is inclusive
  
// INPUT: number integer
// OUTPUT: number integer

// ALGO:
  // given a number
  // find all integers leading up to and including that number
  // for first calculation
    // sum all numbers, then square the sum
  // second calc
    // square each number and add them together
  // return firstNum - secondNum

// CODE
function sumSquareDifference(number) {
  let arr = [];
  for (let index = 0; index <= number; index++) {
    arr.push(index);
  }
  // first calc
  let firstSum = arr.reduce((acc, value) => value + acc, 0);
  firstSum = Math.pow(firstSum, 2);
  //secondCalc
  let secondNum = arr.reduce((acc, value) => Math.pow(value, 2) + acc, 0)
  return firstSum - secondNum;
}


// TEST CASES


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150