
// PROBLEM
// Write a progrma that determines the longest sentence

// INPUT
// - string
// OUTPUT
// - string (longest sentence)

// RULES
// - sentences may end with . ! or ?
// - sentences always begin with a word char
// - and char that are not spaces or . ! ?, treat as word
// - keep punctuation, case in strings

// APPROACH 
// break string up into sentences
// find the word count for each sentence
// return longest sentence

// EXAMPLES
// 'string1. string.' -> ['string1', 'string']
// -> [84, 33] -> return string1

// QUESTIONS / EDGE CASES
// - will there be empty strings

// ALGO
// given a string
// - create an array of sentences using splits - /(\.|\?|!)/) - sentencesArr
// - create a copy of sentencesArr called wordCountArr
// - map over wordCountArr to change into word counts 
//    - split each sentence at " "
//    - get length of array and return number
// - find biggest number with Math.max(...wordCountArr) - biggestNum
// - find index of that number findIndex(biggestNum)
// - return that index sentence from sentencesArr + index + 1 sentence

// CODE
// TEST CASES



function longestSentence(text) {
  let sentencesArr = text.split(/(\.|\?|!)/);
  let wordCountArr = [...sentencesArr];

  wordCountArr = wordCountArr.map(sentence => {
    return sentence.split(' ').length
  })
  console.log(wordCountArr)
}



let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';


longestSentence(longText);

// console output
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.


// Assuming the last sentence is removed:

// longestSentence(longText);

// console output
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

// The longest sentence has 30 words.