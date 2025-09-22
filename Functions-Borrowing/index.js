const person1 = { firstName: "Ali", lastName: "Khan" };
const person2 = { firstName: "Sara", lastName: "Ahmed" };

function fullName(city, country) {
  return `${this.firstName} ${this.lastName} from ${city}, ${country}`;
}

console.log(fullName.call(person1, "Lahore", "Pakistan"));
// Ali Khan from Lahore, Pakistan

console.log(fullName.apply(person2, ["Karachi", "Pakistan"]));
// Sara Ahmed from Karachi, Pakistan

const boundFunc = fullName.bind(person1, "Islamabad", "Pakistan");
console.log(boundFunc()); 
// Ali Khan from Islamabad, Pakistan
