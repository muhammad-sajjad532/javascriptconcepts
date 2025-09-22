# Shallow Copy vs Deep Copy

## Shallow Copy
- Creates a new object but only one level deep.
- Nested objects/arrays are still shared by reference.

### Examples
```js
let obj = { name: "Ali", address: { city: "Lahore" } };
let shallow = { ...obj };
shallow.address.city = "Karachi";
console.log(obj.address.city); // "Karachi"
