function totalArea(rectangles) {
  let squares = rectangles.filter(sub => sub[0] === sub[1])
  let areas = squares.map(rectangle => rectangle[0] * rectangle[1]);
  return areas.reduce((sum, area) => sum + area);
}


let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141