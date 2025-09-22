//pass by value
let a = 5;
function change(x) { x = 10; }
change(a);
console.log(a); // 5

//pass by reference
let obj = {name: "Ali"};
function modify(o) { o.name = "Sara"; }
modify(obj);
console.log(obj.name); // Sara

//hybrid case
function reset(o) { o = {}; }
reset(obj);
console.log(obj); // still {name: "Sara"}

