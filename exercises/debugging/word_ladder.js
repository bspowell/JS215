// PROBLEM

// INPUT
// OUTPUT

// RULES

// QUESTIONS

// EXAMPLES / TEST CASES

// ALGO

// CODE
"use strict";

let ladder = '';

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail