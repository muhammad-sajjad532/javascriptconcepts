// Nullish Coalescing Operator (??) Example
const val = 0;
console.log(val || 10);  // 10  (because 0 is falsy)
console.log(val ?? 10);  // 0   (nullish coalescing keeps 0)

let name = '';
console.log(name || 'unknown'); // 'unknown'
console.log(name ?? 'unknown'); // ''  (keeps empty string)
