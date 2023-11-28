// PROBLEM
// write a function
// takes a string and returns an object
// object contains 3 properties:
  // % of chars in string that are lowercase
  // % of chars that are uppercase
  // % of chars that are neither

// rules
  // spaces count as characters
  // return percentages as strings with two decimals
  
// EXAMPLES
//'abCdef 123' --> { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
// 'AbCd +Ef'  --> { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// INPUT: string
// OUTPUT: object with percentages

// ALGO
// given a string
// break string up into characters array
// save string length as a variable
// count number of lowercase letters using Regexp match
  // divide length of matched array by original array length
  // round to two decimals toFixed(2)
  // add to object
// count number of uppercase letters using Regexp match
  // divide length of matched array by original array length
  // round to two decimals toFixed(2)
  // add to object
// count remaining chars
  // divide length of matched array by original array length
  // round to two decimals toFixed(2)
  // add to object

// CODE
function letterPercentages(string) {
  let lcase = findPercent(/[a-z]/g, string);
  let ucase = findPercent(/[A-Z]/g, string);
  let ncase = String((100 - Number(lcase) - Number(ucase)).toFixed(2))

  return {
    lowercase: lcase,
    uppercase: ucase,
    neither: ncase,
  }
}

function findPercent(regex, string) {
  let match = string.match(regex)
  if (match === null) return String('0.00');

  let percent = ((match.length / string.length) * 100).toFixed(2)
  return String(percent)
}


// TEST CASES

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }