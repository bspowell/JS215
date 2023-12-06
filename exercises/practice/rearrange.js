// PROBLEM
// Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.

// INPUT
// - string with numbers and characters

// OUTPUT
// - string with words in order and numbers removed

// RULES
// - remove numbers from words
// - use numbers to add location of words in sentence
// - words are separated by " " 
// - if string has only a space, return empty string 
// - case matters


// APPROACH
// - break string into words
// - if there is a number in the word, remove it
// - place word in an array correspoding to number

// EXAMPLES
// "is2" -> "is" -> [ , , "is"]

// QUESTIONS / EDGE CASES
// - can there be mutliple numbers in a word?
// - can there be values other than alphanumeric -> no
// - can two numbers be the smae?
// - will all the numbers be in order? 1,2,3,4,5? or will there be missing numbers?
// - will each word contain a number? -> no

// ALGO
// given a string
// - create empty array - reArray
// - break string into an array of words - wordsArray
//  - guardclause: if array.length < 1, return "";
// - iterate over array to select each word
//  - if word contains a digit, store in wordDigit
//  - remove digit from word
//  - store word without digit in wordND
//  - add wordND to reArray at index wordDigit - 1
// - return reArray.join(' ')

// CODE
function rearrange(string) {
  let reArray = [];
  let wordsArray = string.split(' ');
  if (wordsArray.length < 1 || string === " ") return "";

  for (let word of wordsArray) {
    if (/[0-9]/.test(word)) {
      let digit = word.split('').find(char => /[0-9]/.test(char));
      let wordND = word.replace(/[0-9]/, '')
      reArray[digit - 1] = wordND;
    }
  }
return reArray.join(' ');
}

// TEST CASES
console.log(rearrange("is2 Thi1s T4est 3a")) // ➞ "This is a Test"
console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2")) // ➞ "For the good of the people"
console.log(rearrange("4of Fo1r here pe6ople best g3ood th5e the2 team")) // ➞ "For the good of the people"
console.log(rearrange(" ")) // ➞ ""