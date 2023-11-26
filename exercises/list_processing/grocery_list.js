function buyFruit(arrayMulti) {
  return arrayMulti.map(value => {
    let newArr = [];
    let x = 0;
    while (x < value[1]) {
      newArr.push(value[0]);
      x += 1;
    }
    return newArr;
  }).flat()
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]