// PROBLEM
  // given a list of numbers in short-hand
  // only the significant part of the next number is written
  // numbers are always increasing
  // if the numebr

// RULES
  // range limits are inclusive
  // significant part is the 10's
  // if there is a - or :, then include all the numbers between the two (inclusive)
  // if there are supposed to be 2 digits or more in a number, find the next number that ends in that number

  

// EXAMPLES
// - "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// - "1-3, 1-2" --> 1, 2, 3, 11, 12
// - "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// - "104-2" --> 104, 105, ... 112
// - "104-02" --> 104, 105, ... 202
// - "545, 64:11" --> 545, 564, 565, .. 611

// INPUT: string of increasing numbers and alternative chars
// OUTPUT: array of numbers

// ALGO:
// range = numbers seprated by :, -, ..
// next number separated by ,

// topArray - iterate over array
  // if contains only numbers and is greater than previous index, push into array
  // if not greater than previous index
      // starting at first number in array
      // let count = firstnumber
      // while count does not endWith next Index number
      // finalArray.push(count + 1)
  // substringArray - if contains : or -, .. split string into array based on symbols
    // starting at first number in subStringArray
      // if final index, add to finalArr
      // if current number is less than previous number
        // add 1 to count until current number is greater than previous && endsWith current number
        // add to finalArr
      // else 
        // let count = firstnumber
        // add count to finalArr
        // while count does not endWith next Index number
          // add + 1 to count
          // finalArray.push(count)
// return finalArray
// CODE

function shortHand(string) {
  let finalArr = [];
  let topArray = string.split(',');
  topArray = topArray.map(num => num.trim());
  let onlyNumRegex = /^[0-9]+$/;
  let specialRegex = /(:|-|\.{2})/;


  for (let topInd = 0; topInd < topArray.length; topInd++) {
    if (onlyNumRegex.test(Number(topArray[topInd])) && (Number(topArray[topInd]) > (Number(finalArr[finalArr.length-1]) || 0 ))) {
      finalArr.push(topArray[topInd]);
    } else if (Number(topArray[topInd]) < Number(finalArr[finalArr.length - 1])) {
      let count = String(finalArr[finalArr.length - 1]);
      while (!count.endsWith(topArray[topInd])) {
        countNum = Number(count) + 1;
        // finalArr.push(countNum);
        count = String(countNum);
      }
      finalArr.push(count)
    } else if (specialRegex.test(topArray[topInd])) {                        // if we have special characters in substring
      let subStringArray = topArray[topInd].split(/[^0-9]/);                   // split subtring into numbers eg. 90, 2
      let currentStringNum = '';
      for (let subIndex = 0; subIndex < subStringArray.length; subIndex++) {
        if (subIndex === subStringArray.length - 1) {
          finalArr.push(currentStringNum);
        } else {
          currentStringNum = subStringArray[subIndex];
          if (Number(currentStringNum) < Number(finalArr[finalArr.length - 1])) {
            do {
              currentStringNum = Number(currentStringNum) + 1;
              currentStringNum = String(currentStringNum);
            } while (!currentStringNum.endsWith(subStringArray[subIndex]))
          }
          while (!currentStringNum.endsWith(subStringArray[subIndex+1])) {
            finalArr.push(currentStringNum);
            currentStringNum = Number(currentStringNum) + 1;
            currentStringNum = String(currentStringNum);
          }
        // } else {
        //   finalArr.push(subStringArray[subIndex]);
        // }
        }
      }
    }
  }
  return finalArr;
}

// TEST CASES

// console.log(shortHand("1, 3, 7, 2, 4, 1"));    // --> 1, 3, 7, 12, 14, 21
// console.log(shortHand("1-3, 1-2"));            // --> 1, 2, 3, 11, 12
// console.log(shortHand("1:5:2"));               // --> 1, 2, 3, 4, 5, 6, ... 12
// console.log(shortHand("104-2"));               // --> 104, 105, ... 112
// console.log(shortHand("104-02"));              // --> 104, 105, ... 202
console.log(shortHand("545, 64:11"));          // --> 545, 564, 565, .. 611))