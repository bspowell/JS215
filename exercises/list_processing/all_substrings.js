function substrings(string) {
  let arr = [];
  for (let ind = 0; ind <= string.length; ind++) {
    for (let index = ind + 1; index <= string.length; index++) {
      arr.push(string.slice(ind, index))
    }
  }
  return arr;
}


console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]