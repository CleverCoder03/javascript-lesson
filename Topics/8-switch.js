//What is switch in JavaScript?
//The switch statement is used to perform different actions based on different values of a single expression. It's a cleaner alternative to multiple if...else if statements when checking for equality (===).

//Syntax
switch(expression) {
  case value1:
    // code to execute if expression === value1
    break;

  case value2:
    // code to execute if expression === value2
    break;

  default:
    // code to execute if no case matches
}



//Important Points:
// expression is evaluated once.
// Each case is compared using strict equality (===).
// break prevents fall-through (i.e., avoids executing the next case).
// default is optional and runs if no case matches.



//Example 1: Basic switch with break
let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("Banana is yellow");
    break;
  case "apple":
    console.log("Apple is red");
    break;
  case "orange":
    console.log("Orange is orange");
    break;
  default:
    console.log("Fruit not found");
}
// Output: Apple is red



//Example 2: Without break (Fall-through)
let grade = "B";
switch (grade) {
  case "A":
    console.log("Excellent");
  case "B":
    console.log("Good");
  case "C":
    console.log("Fair");
  default:
    console.log("Try again");
}
/*
Output:
Good
Fair
Try again
→ Because no 'break' was used!
*/



//Example 3: With default
let day = 8;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
// Output: Invalid day



//switch vs if...else if
// | Feature  | `switch`                           | `if...else`                          |
// | -------- | ---------------------------------- | ------------------------------------ |
// | Checks   | Exact matches (`===`)              | Any condition (`>`, `<`, `==`, etc.) |
// | Best for | Multiple exact values              | Complex conditions or ranges         |
// | Syntax   | Cleaner with many discrete options | More flexible                        |



//When to Use switch:
// When you have many fixed values to compare against a single variable.
// When the values are exact (like case "admin", case "user").
// When readability is important for multi-branch equality logic.



//Real-life Use Case Example:
let role = "admin";
switch (role) {
  case "admin":
    console.log("Welcome Admin");
    break;
  case "editor":
    console.log("Welcome Editor");
    break;
  case "viewer":
    console.log("Welcome Viewer");
    break;
  default:
    console.log("Role not recognized");
}

