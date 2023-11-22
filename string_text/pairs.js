function isBalanced(string) {
  let count = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] === '(') {
      count += 1;
    } else if (string[index] === ')') {
      count -= 1;
      if (count < 0) return false;
    }
  }
  return count === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false