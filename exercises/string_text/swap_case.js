function swapCase(string) {
  return string.split(' ').map(word => {
    return word.split('').map(letter => {
      return (/[a-z]/).test(letter) ? letter.toUpperCase() : letter.toLowerCase();
    }).join('');
  })
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"