// PROBLEM
// Implement a function that takes a string as an argument and returns a new string that contains the original string in reverse.

// INPUT - string
// OUTPUT - string in reverse

// RULES
// - reverse string without the use of reverse method

// APPROACH
// break string into words array, map it
// create a empty string
// iterate from lenght - 1 of word string to 0
// push each char into empty string
// return reversed string

// EXAMPLES

// QUESTIONS / EDGE CASES

// ALGO
// given a string
// break string into word array - wordArray
// map over wordArray
//  - interate from last index of wordArray
//  - iterate from last index of word
// - 

// CODE
function reverse(string) {
    let reverseString = '';
    for (let firstInd = string.length - 1; firstInd >= 0; firstInd -= 1) {
        reverseString += string[firstInd];
    }
  return reverseString;
}

// TEST CASES
console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"