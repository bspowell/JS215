function checkSum(string) {
  let newStr = string.match(/[0-9]/g);
  newStr = newStr.reverse().map((digit, index) => {
    if (index % 2 !== 0) {
      let newNum = Number(digit) * 2;
      if (newNum >= 10) return newNum -= 9;
      return newNum;
    }
    return digit;
  })

  let newNum = newStr.reduce((acc, value) => acc + Number(value), 0)


  return newNum % 10 === 0;
}




console.log(checkSum('8763'));      // true
console.log(checkSum('1111'));      // false
console.log(checkSum('—43156'));    // false
console.log(checkSum('8)7-6.$3'));  // true
console.log(checkSum('000'));
console.log(checkSum('2323 2005 7766 3554'));

