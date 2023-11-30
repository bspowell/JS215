// PROBLEM
  // write a function that takes a string argument
  // returns true if the word can be spelled using the set of blocks - only once per block
  // false, if a block is used more than once or cannot be spelled
//Rules
  // each block has two letters
  // only use one of the letters
  // letters on blocks are case insensitive

// EXAMPLES

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// 'BATCH';      // true
// 'BUTCH';      // false
  // [b,u,t,c,h]
  // keys = [b,x,d,c,n,..]
  // values = [o,k,...]
  // keys.include (b)
  // remove property delete Obj.property
  // value.include (a)
  // remove value
    // find property with that value (filter)
    // then with the property, delete from obj
// 'jest';       // true


// INPUT: string
// OUTPUT: boolean

// ALGO
  // given a string
  // make a copy of the const object
  // make string into an array, map to uppercase
  // iterate over the stringarray
    // if the current letter is included in the object keys array
      // remove property of copy obj with delete
    // if the current letter is included in the object value array
      // filter over the properties array, selecting the only value which the object property value matches the currrent letter
      // remove property of coppy obj with delete
    //if current letter cannot be found, return false;
  // if made it to the end of the array, return true;

// CODE
const BLOCK = {
  B:'O', X:'K', D:'Q', C:'P', N:'A',
  G:'T', R:'E', F:'S', J:'W', H:'U', V:'I', L:'Y', Z:'M',
}
function isBlockWord(string) {
  let blockCopy = dupObj();
  let stringArr = string.toUpperCase().split('');

  for (let letter of stringArr) {
    if (Object.keys(blockCopy).includes(letter)) {
      delete blockCopy[letter];
    } else if (Object.values(blockCopy).includes(letter)) {
      let pkey = Object.keys(blockCopy).filter(key => blockCopy[key] === letter)
      delete blockCopy[pkey[0]];
    } else {
      return false;
    }
  }
  return true;
}

function dupObj() {
  let newBlock = {};
  Object.keys(BLOCK).forEach(key => {
    newBlock[key] = BLOCK[key];
  })
  return newBlock;
}
// TEST CASES

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true