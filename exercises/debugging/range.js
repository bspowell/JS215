function range(start, end) {
  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function range(start = 0, end) {
  return range(start, end);
}

// Examples

console.log(range(10, 20));
console.log(range(5));