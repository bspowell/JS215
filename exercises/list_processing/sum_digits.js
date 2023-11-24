function sum(num) {
  let numStr = '' + num;
  let total = numStr.split('').reduce((acc, curr) => Number(curr) + acc, 0);
  return total;
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45