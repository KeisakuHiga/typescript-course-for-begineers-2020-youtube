// unknown type is different from 'any' and stricter than 'any'
let userInput: unknown;
let userName: string;

userInput = 4;
userInput = 'Kei'
if (typeof userInput === 'string') {
  userName = userInput;
}