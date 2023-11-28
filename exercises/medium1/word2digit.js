// PROBLEM
// write a function
// takes a sentence string as an arugment and returns that string witih every occurance
// of a number word.
// converting string to digits

// EXAMPLES
// 'one' -> 1
// 'please call me at one one two five nine nine' -> 'please call me at 1 1 2 5 9 9..'

// INPUT: string sentence
// OUTPUT: string with digits

// ALGO:
// given a string sentence
// break string up into an array of words
// iterate over the words using map
  // use a switch statement to evaluate each word 
  // default will be returning same word
// return joined versions of the string array


// CODE
function wordToDigit(string) {
  let strArr = string.split(' ');
  return strArr.map(word => {
    word = word.replace(/[^a-z]+/i, '')
    switch(word) {
      case 'one':
        return 1;
        break;
      case 'two':
        return 2;
        break; 
      case 'three':
        return 3;
        break;
      case 'four':
        return 4;
        break;
      case 'five':
        return 5;
        break;
      case 'six':
        return 6;
        break;
      case 'seven':
        return 7;
        break;
      case 'eight':
        return 8;
        break;
      case 'nine':
        return 9;
        break;
      default:
        return word;
    }
  }).join(' ')
}

// TEST CASES

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."