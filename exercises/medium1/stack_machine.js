// PROBLEM
// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
// REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.


// EXAMPLES

// INPUT: string of commands
// OUTPUT: depends on commands

// ALGO
// given a string of commands
// initialize a stack with empty array
// initialize a register value of 0;
// split string into an array of commands
// iteratve over the array
  // depending on the value, provide appropriate actions
  // using switch 

// CODE
function minilang(commands) {
  let stack = [];
  let register = 0;
  let commandArr = commands.split(' ');

  for (let command of commandArr) {
    switch(command) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break; 
      case 'MULT':
        register *= stack.pop();
        break; 
      case 'DIV':
        register = register / stack.pop();
        break; 
      case 'REMAINDER':
        register = register % stack.pop();
        break; 
      case 'POP':
        register = stack.pop();
        break; 
      case 'PRINT':
        console.log(register)
        break; 
      default:
        register = Number(command);
      }
  }
}

// TEST CASES


console.log(minilang('PRINT'));
// 0

console.log(minilang('5 PUSH 3 MULT PRINT'));
// 15

console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// 5
// 3
// 8

console.log(minilang('5 PUSH POP PRINT'));
// 5

console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
// 5
// 10
// 4
// 7

console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
// 6

console.log(minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT'));
// 12

console.log(minilang('-3 PUSH 5 SUB PRINT'));
// 8

console.log(minilang('6 PUSH'));
// (nothing is printed because the `program` argument has no `PRINT` commands)