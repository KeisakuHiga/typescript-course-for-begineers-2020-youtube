// functions
function add(n1: number, n2: number) {
  return n1 + n2;
}
function printResult(num: number): void {
  console.log('Result: ' + num);
}
// function printResult(num: number): undefined {
//   console.log('Result: ' + num)
//   return;
// }
// printResult(add(5, 12));
 // define function type precisely
let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult;
// combineValues = 5; // this does not work
console.log(combineValues(5, 4));