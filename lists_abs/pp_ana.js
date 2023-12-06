// PROBLEM
// Write a Function named anagram that takes two arguments: a word and an array of words. 
// Your function should return an array 
// that contains all the words from the array argument that are anagrams
// For example, given the word "listen" and an array of words "enlist", "google", "inlets", and "banana",
// the program should return an array that contains "enlist" and "inlets".


// INPUT
// - string
// - array of string words
// OUTPUT
// - array of words that are anagrams of given string

// RULES
// - anagram is a word that uses the same characters as another word
// - "listen" is an anagram of "enlist"

// APPROACH 
// compare a sorted string with a sorted version of each word in array

// EXAMPLES
// 'bdca' -> 'abcd'

// QUESTIONS / EDGE CASES
// will the string and words only contain alphabetical characters?
// will the array every be empty? if so what should I return? 
// are the strings case sensitive? -> no
// 


// ALGO
// - given a string and array of strings 
// - break string up into an array, sort it, join it
// - filter array
//  - break each word into array and sort, join it
//  - if eqaual to string, return true
// - return filtered array

// CODE


// TEST CASES

function anagram(word, list) {
  let sortedWord = word.split('').sort().join('');

  return list.filter(word => {
    return (sortedWord === word.split('').sort().join('').toLowerCase());
  })
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
console.log(anagram('listen', ['ENLIST', 'google', 'inlets', 'banana']));   // [ "ENLIST", "inlets" ]
