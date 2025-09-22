let user = {
  id: 1,
  name: "Sajjad",
  preferences: {
    theme: "dark",
    notifications: true
  }
};

// ❌ Using shallow copy
let userCopy = { ...user };
userCopy.preferences.theme = "light";

console.log(user.preferences.theme); // "light" (original changed!)

// ✅ Using deep copy
let safeCopy = structuredClone(user);
safeCopy.preferences.theme = "light";

console.log(user.preferences.theme); // "dark"

// Shallow vs Deep Copy examples

// Shallow Copy Example
let user = {
  name: "Sajjad",
  address: { city: "Islamabad", zip: 44000 }
};

let shallow = { ...user };
shallow.address.city = "Lahore";

console.log("Original after shallow:", user.address.city); // Lahore (changed!)


// Deep Copy Example
let deep = structuredClone(user);
deep.address.city = "Karachi";

console.log("Original after deep:", user.address.city); // Lahore (unchanged)


// Array shallow copy
let arr = [1, 2, [3, 4]];
let arrShallow = [...arr];
arrShallow[2][0] = 99;

console.log("Original array:", arr); // [1,2,[99,4]]


// Deep copy with JSON
let arrDeep = JSON.parse(JSON.stringify(arr));
arrDeep[2][0] = 123;

console.log("Original after deep:", arr); // unchanged [1,2,[99,4]]

