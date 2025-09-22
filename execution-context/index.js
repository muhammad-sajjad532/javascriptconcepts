// execution-context.js - examples and tests

// 1) Hoisting - function declaration vs expression
console.log('typeof fDecl:', typeof fDecl); // "function"
console.log('typeof fExpr:', typeof fExpr); // "undefined"

function fDecl() { return 'I am a declaration'; }
var fExpr = function() { return 'I am an expression'; };

// 2) var vs let/const and TDZ
console.log('varX before declaration:', varX); // undefined
// console.log('letY before declaration:', letY); // ReferenceError if uncommented
var varX = 1;
let letY = 2;

// 3) Call stack example
function one(){ two(); console.log('in one'); }
function two(){ three(); console.log('in two'); }
function three(){ console.log('in three'); }
one();

// 4) Event loop ordering
console.log('script start');
setTimeout(()=> console.log('timeout callback'), 0);
Promise.resolve().then(()=> console.log('promise callback'));
console.log('script end');

// 5) Closure & execution context relation (for completeness)
function makeCounter() {
  let count = 0; // lives in the function's LexicalEnvironment
  return function increment() {
    count++;
    return count;
  };
}

const c = makeCounter();
console.log('counter:', c()); // 1
console.log('counter:', c()); // 2
