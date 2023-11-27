function phoneNumber(string) {
  let number = string.match(/[0-9]/g);

  if (number.length === 10) {
    return number.join('');
  } else if (number.length === 11 && number[0] === '1') {
    return number.join('').slice(1);
  }

  return `0000000000`;
}



console.log(phoneNumber('555-443-3321'));
console.log(phoneNumber('555.443.3321'));
console.log(phoneNumber('1-555-443-3321'));
console.log(phoneNumber('05554433321'));
console.log(phoneNumber('-555-443-3321'));
console.log(phoneNumber('5-443-3321'));
console.log(phoneNumber('000.000.0000'));