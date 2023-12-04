// PROBLEM
// Write a function that returns true if each abbreviation uniquely identifies a word, and false otherwise.

// INPUT
// - array of abbreviations
// - array of words

// OUTPUT
// - boolean
//  - if an abbreviation identifies with more than 1 word, false

// RULES
// - if the abbreviation is 1 letter, then compare to strings first letter
// - if an abbreviation is more than 1 letter, than compare to size of abbreviation
// - if an abbreviation identifies with more than 1 word, return false

// APPROACH
// - take abbrev, compare against each elements in word array
// - can use startsWith to check values

// EXAMPLES 
// ho -> false, identifies with house and hope 

// QUESTIONS
// - will there be abbreviations bigger than the words?
// - will there be values other than strings? 
// - will there be empty arrays?
// - will there be empty values?
// - will there be more abbreviations than words? or vice versa?

// ALGO
// - given two arrays
// - iterate over abrreviations
//  - for each one, filter to find all words in second array that startWith current abbrev
//  - if length of array is greater than 1, return false.

// CODE
function uniqueAbbrev(arr1, arr2) {
  for (let abbrev of arr1) {
    let filteredArr = arr2.filter(word => word.startsWith(abbrev))
    if (filteredArr.length !== 1) return false;
  }
  return true;
}


// TEST CASES




console.log(uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"])) //➞ false
// "ho" and "h" are ambiguous and can identify either "house" or "hope"

console.log(uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"]))// ➞ true

console.log(uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"])) //➞ false

console.log(uniqueAbbrev(["mo", "ma", "me"], ["moment", "many", "mean"]))// ➞ true