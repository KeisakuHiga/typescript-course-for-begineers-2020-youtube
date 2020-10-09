// never
let userInput: unknown;
let userName: string;

userInput = 4;
userInput = 'Kei'
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while(true) {}
}

const error = generateError('An error occurred', 500);
console.log(error);