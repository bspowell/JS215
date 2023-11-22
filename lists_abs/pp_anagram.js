function anagram(word, list) {
  return list.filter(value => sorting(value, word));
}

function sorting(arrWord, word) {
  if (arrWord.length !== word.length) {
    return false;
  } else if (word.split('').sort().join('') === arrWord.split('').sort().join('')) {
    return true;
  } 
  return false;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]