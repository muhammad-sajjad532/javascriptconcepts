let globalVar = "I am global";

function outer() {
  let outerVar = "I am outer";

  function inner() {
    let innerVar = "I am inner";
    console.log(innerVar);   // ✅ found in inner
    console.log(outerVar);   // ✅ found in outer
    console.log(globalVar);  // ✅ found in global
  }

  inner();
}

outer();

//shadowing
let a = 10;

function demo() {
  let a = 20;  // shadows global a
  console.log(a);  // 20
}

demo();
console.log(a);  // 10


//Example
let theme = "dark";

function setupUI() {
  let buttonText = "Click Me";

  document.getElementById("btn").addEventListener("click", function() {
    console.log(buttonText); // Accesses outer scope
    console.log(theme);      // Accesses global scope
  });
}


//Muti level scope chain
function a() {
  let aVar = "A variable";
  function b() {
    let bVar = "B variable";
    function c() {
      console.log(aVar); // Found in parent scope
      console.log(bVar); // Found in immediate parent
    }
    c();
  }
  b();
}
a();

