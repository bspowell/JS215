let rls = require('readline-sync');

let name = rls.question('Whats your name? ');

if (name.endsWith('!')) {
  console.log(`HELLO ${name.slice(0,-1).toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}