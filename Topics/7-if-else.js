//The if...else statement is used to execute different blocks of code based on conditions.

//1. Basic if Statement
//Syntax
if (condition) {
  // code to run if condition is true
}

//Example
const age = 18;
if (age >= 18) {
  console.log("You are an adult");
}
// Output: You are an adult



//2. if...else Statement
//Syntax
if (condition) {
  // if block
} else {
  // else block
}

//Example
const newAge = 16;
if (newAge >= 18) {
  console.log("You can vote");
} else {
  console.log("You are too young to vote");
}
// Output: You are too young to vote



//3. if...else if...else Statement
//Syntax
if (condition1) {
  // runs if condition1 is true
} else if (condition2) {
  // runs if condition2 is true
} else {
  // runs if none of the above conditions are true
}

//Example
let marks = 75;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 70) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Fail");
}
// Output: Grade: B



// | Statement Type        | Purpose                                   |
// | --------------------- | ----------------------------------------- |
// | `if`                  | Run code when condition is true           |
// | `if...else`           | Run code when true, otherwise run else    |
// | `if...else if...else` | Handle multiple conditions                |
// | Nested `if`           | Handle condition inside another condition |
