
// PROBLEM
// Write a function that removes the last vowel in each word in a sentence.

// INPUT
// - string of words
// OUTPUT
// - string of words without last vowel

// RULES
// - vowels are a,e,i,o, u and uppercase 
// - last vowel in each word replaced with ' '

// APPROACH 
// - break string up into array of words
// - findLast element which contains a voewl
// - findLastIndex of element
// - split word inot array of elements
// - splice character out
// - join word back together

// EXAMPLES

// QUESTIONS / EDGE CASES
// - what is string is only vowels?
// - what if it includes numbers? how do we treat those?
// - is the string case sensitive? -> yes
// - will there be more arguments? -> no?
// - will every word have a voewl? -> no? leave word unchange 'my' -> 'my'

// ALGO
// guard clause: return empty string if empty string
// given a string
// break string up into a word array - 'wordArray'
// iterate over wordArray using map
// for each word, use findLast method to find last element that contains vowel
//  - use regex and match to see if it is avoewl
//  - if it is, split word into array, to findLastIndex
//  - splice character out
//  - join word back togeter to return

// CODE

function removeLastVowel(string) {
  if (string === '') return '';
  let wordsArray = string.split(' ');

  let mutatedWords = wordsArray.map(word => {
    let splitWord = word.split('');
    let index = splitWord.findLastIndex(char => {
      if (/[aeiou]/i.test(char)) return true;
    })
    if (index !== -1) {
      splitWord.splice(index, 1)
    }
    return splitWord.join('')
  })
  return mutatedWords.join(' ');
}
// TEST CASES


// console.log(removeLastVowel("")); // -> ""
// console.log(removeLastVowel("ThosE whO darE")); //-> 'Thos wh dar'
// console.log(removeLastVowel("Moo")); // -> 'Mo'
console.log(removeLastVowel('Myth')) // Myth

console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly."));
// ///➞ "Thos wh dar t fal miserbly cn achiev gretly."

// console.log(removeLastVowel("Love is a serious mental disease."));
// //➞ "Lov s  serios mentl diseas"

// console.log(removeLastVowel("Get busy living or get busy dying."));
// //➞ "Gt bsy livng r gt bsy dyng"