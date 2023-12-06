
// PROBLEM
// - function takes two arguments - word and string
// - returns an integer representing the number fo times the word appears

// INPUT
// - word string
// - text string

// OUTPUT
// - integer 
// - number of times word appeares in string

// RULES
// - words breaks are spaces
// - inputs will always be provided
// - some words will included periods and commas

// APPROACH 
// use match to match all 
// 

// EXAMPLES

// QUESTIONS / EDGE CASES
// - will the string contain anything else but alphabetical characters??

// ALGO
// - given a string
// - split into array of words
// -

// CODE

// TEST CASES
function searchWord(word, text) {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  const newString = text.replace(regex, `**${word.toUpperCase()}**`);

  console.log(newString)
  // return matches ? matches.length : 0;
}


const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('SED', text);      // 3