

// PROBLEM
// given a string
// return true if word can be spelled with set of blocks, false otherwise
// you can only use 1 letter from each block
// blocks are a collection of letters in an object
// letters are case insensitive
  // {
  //   B:O, X:K, D:Q, C:P, N:A,
  //   G:T, R:E, F:S, J:W, H:U,
  //   V:I, L:Y, Z:M,
  // }


// EXAMPLES
// 'BATCH'  returns true
// 'BUTCH'  returns false 
// 'jest'   returns true


// INPUT: string
// OUPUT: boolean

// ALGO
// given a string
// convert string into uppercase version
// iterate over the string with an index available
    //if it's a property (object.keys) || value (object.values) , remove the property, continue
    //if it's not included, then return false;
// return true if makes it through string.
// CODE

function isBlockWord(string) {
  let obj = {
       B:'O', X:'K', D:'Q', C:'P', N:'A',
       G:'T', R:'E', F:'S', J:'W', H:'U',
       V:'I', L:'Y', Z:'M',
     };
  string = string.toUpperCase().split('');
  for (let char of string) {
    if (obj[char] !== undefined) {
      delete obj[char];
    } else if (Object.values(obj).includes(char)) {
      for (let key in obj) {
        if (obj[key] === char) delete obj[key]
      }
    } else {
      return false;
    }
  }
  return true;

}



// TEST CASES
console.log(isBlockWord('BATCH'))      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true

