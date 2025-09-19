# Closure Effect

## 📌 Definition
A closure is a function that remembers its surrounding state (lexical environment) even after the outer function has finished executing.

## ✅ Example
```js
function x(){
  var a = 25;
  function y(){
    console.log(a);
  }
  y();
}

x();