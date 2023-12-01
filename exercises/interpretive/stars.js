// PROBLEM
  // display an 8 pointed star in an n x n grid
  // where n is an odd integer (argument)
  // smallest grid is 7 x 7


// INPUT
  // an odd integer greater or equal to 7
// OUTPUT
  // 8 pointed star in a n x n grid (n is the integer passed in)

// RULES
  // if the integer is odd and greater than 7, create n x n grid
  // first and last n / 2 lines, only print 3 stars
    // First line printing stars at end of grid and one in middle 
    // Second line, progresses 1 space inward and removes a space from inside
    // Next line, progressses 2 spaces inward and removes 2 spaces from inside, etc
    // Last line, 3 stars in the middle
  // middle line, print only stars
    // reverse above


//Questions
  // What if the integer is negative, 0 or not an odd integer? how should the program handle it and return?
  // what if the passed in value is not an integer? NaN, null, undefined, boolean, etc. How should the program handle it and return?
  // If the integer s less than 7, what should the program return?

// EXAMPLES / TEST CASES
  // 3 --> number must be greater or equal to 7
  // 7 -- >
    // outsidespaces = 0, inside spaces = 7-3 = 4, 4/2 = 2
    // print outside spaces + star + inside space + star + insidespace + outside space
    // outside space + 1, inside space - 1
    // print outside spaces + star + inside space + star + insidespace + outside space
    // once inside space is 0, print outside space + stars * 3 + outside space
    // print all stars
    // reverse above
//  *  *  *
//   * * *
//    ***
//  *******
//    ***
//   * * *
//  *  *  *
 
 // ALGO
  // given an integer
  // set outside space to 0
  // set inside space to integer - 3 / 2
  // create loop until inside space === 0
    // print outside spaces + star + inside space + star + insidespace + star + outside space
    // inside space -= 1
    // outside space += 1
  // once inside space === 0 
    // print outside space + stars * 3 + outside space
    // print star * integer
    // print outside space + stars * 3 + outside space
  // create loop until inside space == integer-3 / 2
    // print outside spaces + star + inside space + star + insidespace + outside space
    // inside space += 1
    // outside space -= 1

 // CODE

 "use strict";

 function star(number) {

  if (badNum(number)) return console.log('Not an odd integer > 7');

  let outsideSpace = 0;
  let insideSpace = (number - 3) / 2;

  while (insideSpace > 0) {
    printStars(outsideSpace, insideSpace);
    outsideSpace += 1;
    insideSpace -= 1;
  }

  console.log(' '.repeat(outsideSpace) +
  '*'.repeat(3) + 
  ' '.repeat(outsideSpace));
  console.log('*'.repeat(number))

  while (insideSpace <= (number - 3) / 2) {
    printStars(outsideSpace, insideSpace);
    outsideSpace -= 1;
    insideSpace += 1;
  }
 }

 function badNum(number) {
  if (Number.isNaN(number) || number === undefined || number === null) return true;
  number = number.toString();
  if (number.match(/[^0-9]/g)) return true;
  if (number < 7 || number % 2 !== 1) return true;
 }

 function printStars(outside, inside) {
  console.log(' '.repeat(outside) + '*' + 
  ' '.repeat(inside) + '*' + 
  ' '.repeat(inside) + '*' + 
  ' '.repeat(outside));
 }
//  star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *
// star(9);

star('x');
star('?');
star([]);
star(undefined);
star(NaN)