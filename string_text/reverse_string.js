function reverse(string) {
  let newSt = '';
  for (let index = string.length-1; index >= 0; index--) {
    newSt += string[index];
  }
  return newSt;
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"