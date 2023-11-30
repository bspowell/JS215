// PROBLEM
  // write a function to display a four-pointed diamond
  // in an n x n grid, where n, is an odd integer supplied as an argument

// RULES
  // each layer of the grid we are increasing the stars by 2 until half
  // at half,  we have the same amount of stars as the argument
  // then we decrease the stars by two
  // stars start from middle index


// EXAMPLES
  // an argument of 3, would mean 3 x 3 grid
  // which logs:
    //  *
    // ***
    //  *

// INPUT: number (number of stars max)
// OUTPUT: stars

// ALGO
  // given a number
  // iterate up to the given number
  // for each iteration
    // star count will equal iteration number
    // find the number of spaces on each side (number - star count / 2)
    // push the number of spaces into the array (splice?)
    // push the number of stars into the array
    // push the number of spaces into the array again
    // print string to console.
  // loop again but in reverse
// CODE
function diamond(number) {
  for (let starCount = 1; starCount < number; starCount += 2) {
    let starsArr = [];
    let spaces = (number - starCount) / 2;
    printLine(spaces, starCount, starsArr);
  }
  for (let starCount = number; starCount >= 1; starCount -= 2) {
    let starsArr = [];
    let spaces = (number - starCount) / 2;  
    printLine(spaces, starCount, starsArr);
  }
}

function printLine(spaces, stars, array) {
  array.push(' '.repeat(spaces));
  array.push('*'.repeat(stars));
  array.push(' '.repeat(spaces));
  console.log(array.join(''))
}




// TEST CASES
diamond(1);
// logs
// *

// diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// // logs
// //     *
// //    ***
// //   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *