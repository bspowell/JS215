function isUppercase(string) {
  for (let value of string) {
    if ((/[^a-z]/i).test(value)) {
      continue;
    } else if (value !== value.toUpperCase()) {
      return false;
    }
  }
  return true;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true