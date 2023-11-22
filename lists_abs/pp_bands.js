let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  let newArr = data.map(obj => {
    return {
      name: capital(obj.name),
      country: 'Canada',
      active: obj.active,
    };
  })
  return newArr;
}

function capital(string) {
  return newStr = string.split(' ').map(value => {
    return value[0].toUpperCase() + value.slice(1);
  }).join(' ')
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]