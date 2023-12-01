// The newly-improved calibration document consists of lines of text; each line 
// originally contained a specific calibration value that the Elves now need to recover. 
// On each line, the calibration value can be found by combining the first digit and 
// the last digit (in that order) to form a single two-digit number.

// For example:

// 1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet
// In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.

// PROBLEM

// INPUT:
 // string containing letters and numbers
// OUTPUT
  // combining the first and last digit in each line
  // and returning the sum of those

// RULES
  // each line has letters and numbers
  // if there is only 1 digit, combine that digit twice (eg. 1 -> 11)
  // when combining digits, concat them (eg. 1, 4 -> 14)
  

// QUESTIONS
  // What happens when we have no digits? What is returned? 
  // what happens when there are symbols? 

// EXAMPLES / TEST CASES
  // 1abc2
    // findIndex - takes a function, returns -1 if not there.
    // lastIndex - takes a function, returns -1 if not there.
    // findIndex to get index, then grab element
    // lastIndex to get, then grab element
    // combined to return
  // pqr3stu8vwx
  // a1b2c3d4e5f
  
// ALGO
  // given a string
  // create an empty string to return
  // break into an array
  // use findIndex to return a positive index number
    // if negative, then no numbers, return 0
    // add to new string
  // use lastIndex to return a positive index number
  

// CODE