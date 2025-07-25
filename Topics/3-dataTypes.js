string // String is anything that is surrounded in double/single quotes or backticks
//Example
let name = "Alice";
let greeting = 'Hello';
let message = `Welcome, ${name}`;

number // Number is any number whether it is a decimal or a whole number
//Example
let age = 25;
let price = 19.99;

boolean // Boolean means a result that can only have one of two possible values: true or false
//Example
let isLoggedIn = true;
let hasPermission = false;

undefined // Undefined value is a condition where an expression does not have a correct value, although it is syntactically correct
//Example
function greet() {
  // no return value
}
let result = greet();
console.log(result); // undefined

null // Null is used when you explicitly set something as nothing
//Example
let selectedUser = null; // no user is currently selected




// Difference Between null and undefined
let a;
let b = null;

console.log(a); // undefined
console.log(b); // null