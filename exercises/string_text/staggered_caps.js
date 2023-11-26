function staggeredCase(string) {
  let array = string.split('')

  for (let index = 0; index < array.length; index++) {
    if (index % 2 === 0) {
      array[index] = array[index].toUpperCase();
    } else {
      array[index] = array[index].toLowerCase();
    }
  }
  return array.join('')
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"