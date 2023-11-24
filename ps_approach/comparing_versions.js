function compareVersions(version1, version2) {
  let v1 = version1.split('.');
  let v2 = version2.split('.');

  if (!checkNumbers(v1) || !checkNumbers(v2)) return null;

  let largest = Math.max(v1.length, v2.length)

  for (let index = 0; index < largest; index++) {
    let test1 = v1[index] || 0;
    let test2 = v2[index] || 0;

    if (test1 > test2) {
      return 1;
    } else if (test1 < test2) {
      return -1;
    }
  }
  return 0;
}

function checkNumbers(array) {
  let newArr = array.map(value => Number(value));
  return newArr.every(value => Number.isInteger(value))
}

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1


