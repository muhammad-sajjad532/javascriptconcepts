let x = 10; // primitive
let y = x;
y++;
console.log(x, y); // 10, 11

let arr1 = [1, 2];
let arr2 = arr1;
arr2.push(3);
console.log(arr1); // [1,2,3]  (same reference)
