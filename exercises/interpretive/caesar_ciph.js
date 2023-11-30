// PROBLEM
  // write a function that implements Casesar Cippher
  // How it works:
    // Each letter in a plaintext is subsituted by the located n positions away in the alphabet
    // eg. if A is right-shifted 3 positions, it will be substituted by D
    // the shift value, is referred to as a key. 
    // the encrypted paintext, can be decoded by this key.

// RULES:
  // can have uppercase or lowercase - must return same case
  // if key value exceeds length of alphabet, it wraps to the beginning.
  // return symbols in same spot
  // 
// EXAMPLES
  // A, 26 --> A
  // A, 25 --> Z
  // y, 5 -->  d
  // Right?; Wrong?', 2 --->  Tkijv?; Ytqpi?

// INPUT: string, number
// OUTPUT: string (encrypted)

// ALGO
  // given a string and number
  // split the string into an array
  // create an empty string
  // create empty letter variable to track new letter
    // for each letter, check if it's uppercase or lowercase 
      // if lowercase (check if it's included in uppercase Alpha array)
        // check it's index in the Alphabet array letter to match array (uppercase it to match)
        // add the shift value (key) to the letter's index
        // retrieve the letter at the new index in the Alphabet array
      // if uppercase
        // same as above

    //add letter / symbol to string
  // return string


// CODE
const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
function caesarEncrypt(string, key) {
  let strArray = string.split('');
  let returnStr = '';
  let letter = '';

  for (let index = 0; index < strArray.length; index++) {
    if (ALPHA.includes(strArray[index])) {
      let currentInd = encryptKey(ALPHA.indexOf(strArray[index], key))
      letter = ALPHA[currentInd];
    } else if (strArray[index].match(/[a-z]/)) {
      let currentInd = encryptKey(ALPHA.indexOf(strArray[index].toUpperCase(), key))
      letter = ALPHA[currentInd].toLowerCase();
    } else {
      letter = strArray[index];
    }
    returnStr += letter;
  }
  return returnStr;
}

function encryptKey(currentInd, key) {
  currentInd += key;
  if (currentInd > 25) {
    currentInd -= 25;
  }
  return currentInd
}
// TEST CASES

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// // wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// // all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// // // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// // // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// // // many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// // // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"