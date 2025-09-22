// Simple example of currying
const add = a => b => a + b;
add(2)(3); // 5

//Generic curry utility

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return (...next) => curried.apply(this, args.concat(next));
  };
}

// Usage
function sum(a, b, c) { return a + b + c; }
const cs = curry(sum);
cs(1)(2)(3); // 6
cs(1,2)(3);  // 6
