function staggeredCase(string) {
  let counter = true;
  return string.split('').map(char => {
    if ((/[^a-z]/i).test(char)) {
      return char;
    } else if (counter === true) {
      counter = false;
      return char.toUpperCase();
    } else {
      counter = true;
      return char.toLowerCase();
    }
  }).join('');
}


console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"