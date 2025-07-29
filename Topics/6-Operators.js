//Arithmetic Operators

// | Symbol | Name           | Description                               | Example  | Output |
// | ------ | -------------- | ----------------------------------------- | -------- | ------ |
// | `+`    | Addition       | Adds two values                           | `5 + 3`  | `8`    |
// | `-`    | Subtraction    | Subtracts one value from another          | `5 - 3`  | `2`    |
// | `*`    | Multiplication | Multiplies two values                     | `5 * 3`  | `15`   |
// | `/`    | Division       | Divides one value by another              | `6 / 3`  | `2.0`  |
// | `%`    | Modulus        | Returns remainder of division             | `5 % 3`  | `2`    |
// | `**`   | Exponentiation | Raises to the power of (Python & JS ES7+) | `2 ** 3` | `8`    |


//Unary Operators

// | Symbol | Name      | Description                       | Example      | Output      |
// | ------ | --------- | --------------------------------- | ------------ | ----------- |
// | `++`   | Increment | Adds 1 to a value (not in Python) | `x = 5; ++x` | `6` (in JS) |
// | `--`   | Decrement | Subtracts 1 from a value          | `x = 5; --x` | `4` (in JS) |


//Assignment Operators

// | Symbol | Name                | Description                           | Example         | Final Value of x |
// | ------ | ------------------- | ------------------------------------- | --------------- | ---------------- |
// | `=`    | Assignment          | Assigns right value to left variable  | `x = 10`        | `10`             |
// | `+=`   | Add and Assign      | Adds right to left and assigns        | `x += 5` (x=10) | `15`             |
// | `-=`   | Subtract and Assign | Subtracts right from left and assigns | `x -= 2` (x=15) | `13`             |
// | `*=`   | Multiply and Assign | Multiplies and assigns                | `x *= 3` (x=13) | `39`             |
// | `/=`   | Divide and Assign   | Divides and assigns                   | `x /= 3` (x=39) | `13.0`           |


//Comparison Operators

// | Operator | Name                  | Description                                          | Example     | Result  |
// | -------- | --------------------- | ---------------------------------------------------- | ----------- | ------- |
// | `==`     | Equal to              | Checks if values are equal (type conversion in JS)   | `5 == '5'`  | `true`  |
// | `===`    | Strictly equal to     | Checks if values **and types** are equal             | `5 === '5'` | `false` |
// | `!=`     | Not equal to          | Checks if values are **not** equal (type conversion) | `5 != '6'`  | `true`  |
// | `!==`    | Strictly not equal to | Checks if values or types are not equal              | `5 !== '5'` | `true`  |
// | `>`      | Greater than          | Checks if left is greater than right                 | `6 > 5`     | `true`  |
// | `<`      | Less than             | Checks if left is less than right                    | `3 < 5`     | `true`  |
// | `>=`     | Greater than or equal | Checks if left ≥ right                               | `5 >= 5`    | `true`  |
// | `<=`     | Less than or equal    | Checks if left ≤ right                               | `4 <= 3`    | `false` |


//Ternary Operator (Conditional Operator)

// condition ? value_if_true : value_if_false;
//Example:
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // Output: Adult

