//optional chaining example
const user = {
    name : "Sajjad",
    address : {
        street : "123 islamabad",
        city : "islamabad",
        country : "Pakistan"
    }
}

console.log(user?.address?.street); //123 islamabad
console.log(user?.contact?.phone); //undefined
console.log(user?.contact?.phone?.number); //undefined