function palindromes(string) {
  let substrings = getSubstrings(string);
  substrings = substrings.filter(sub => checkPal(sub));

  return substrings;
}

function checkPal(string) {
  
  let leng = string.length

  if (leng < 2) return false;

  if (leng % 2 === 0) { //even number of characters
    let firstHalf = string.slice(0, leng / 2)
    let secondHalf = string.slice(leng / 2 + 1, leng)

    if (secondHalf.split('').reverse().join() !== firstHalf ) return false;

  } else { 
    let firstHalf = string.slice(0, Math.floor(leng / 2))
    let secondHalf = string.slice(Math.ceil(leng / 2), leng)

    if (secondHalf.split('').reverse().join('') !== firstHalf ) return false;
  }
  return true;
}


function getSubstrings(string) {
  let arr = [];
  for (let ind = 0; ind <= string.length; ind++) {
    for (let index = ind + 1; index <= string.length; index++) {
      arr.push(string.slice(ind, index));
    }
  }
  return arr;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]


// build a function to create all substrings array
// iterate over array for each substring
// iterate over each string to see if a palidrome
  // if odd number, iterate 
// 
// 
// 

