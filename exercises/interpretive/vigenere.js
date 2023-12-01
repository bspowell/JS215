// PROBLEM
  // uses letters of a keyword
  // each letter of the keyword is treated as a shift value
  // eg. 'B' corresponds to shift value of 1
      // 'd' corresponds to shift value of 3
  // shift avlue for a letter, is equal to index value in alphabet
  // a-z = 0-25
  // case insensitive
  // given a keyword (case insensitive) eg. MEAT or meat

// RULES
  // each letter is a shift value from 0-25

// EXAMPLES
// plaintext: Pineapples don't go on pizzas!
// keyword: meat

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// result: Bmnxmtpeqw dhz'x gh ar pbldal!

// INPUT: given a string and keyword
// OUTPUT: string cipher

// ALGO
  // given a string and keyword
  // map the keyword into an array of numbers based off indexes in alphabet
  // break stirng into words array
  // map over the words
    // iterate over each character in word
    // if it's a letter
      // look up letter in alphabet for index, add next number in shift array
      // move shift array counter + 1
      // if shift array counter >= shift array.length, make it 0
    // else
      // return same character
  // join array back together and return string


// CODE
const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function cipher(string, shiftKey) {
  let shiftArray = shiftKey.split('').map(char => ALPHA.indexOf(char.toUpperCase()));
  let shiftCount = 0;

  return string.split('').map((char) => {
      if (char.match(/[a-z]/)) {
        char = encryptChar(char.toUpperCase(), shiftArray[shiftCount]).toLowerCase()
        shiftCount += 1; 
      } else if (char.match(/[A-Z]/)) {
        char = encryptChar(char, shiftArray[shiftCount]);
        shiftCount += 1; 
      }
      if (shiftCount > shiftArray.length - 1) shiftCount = 0;

      return char;
  }).join('');
}

function encryptChar(char, shiftCount) {
  let newIndex = ALPHA.indexOf(char) + shiftCount;
  if (newIndex > 25) newIndex -= 26;

  return char = ALPHA[newIndex];
}
console.log(cipher("AAA", 'ba')); // --> BAB
console.log(cipher("Don't do it", 'b')); // --> Epo'q ep ju

console.log(cipher("Pineapples don't go on pizzas!", 'meat'));  // Bmnxmtpeqw dhz'x gh ar pbldal!

// TEST CASES