function leadingSubstrings(string) {
  let arr = [];
  for (let index = 0; index < string.length; index++) {
    arr.push(string.substring(0, index + 1));
  }
  return arr;
}


console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]