//JavaScript Arrays: From Basics to Advanced

//🟢 BASIC CONCEPTS
// 1. What is an Array?
// An array is a container that stores multiple values in a single variable.
//let fruits = ["apple", "banana", "mango"];

// 2. Creating Arrays
// let arr1 = [1, 2, 3];                      // Array literal
// let arr2 = new Array(4, 5, 6);             // Array constructor

// 3. Accessing Elements
// console.log(arr1[0]); // 1
// console.log(arr1[2]); // 3

// 4. Modifying Elements
// arr1[1] = 20;  // Changes 2 to 20
// console.log(arr1); // [1, 20, 3]

// 5. Array Length
// console.log(arr1.length); // 3

//🟡 INTERMEDIATE METHODS
// 6. Adding/Removing Elements
// | Method      | Action            | Example               |
// | ----------- | ----------------- | --------------------- |
// | `push()`    | Add to end        | `arr.push("grape")`   |
// | `pop()`     | Remove from end   | `arr.pop()`           |
// | `shift()`   | Remove from start | `arr.shift()`         |
// | `unshift()` | Add to start      | `arr.unshift("kiwi")` |

// 7. Splice & Slice
// splice(start, deleteCount, item1, item2...) – Add/Remove/Replace
// slice(start, end) – Extract sub-array
// let nums = [10, 20, 30, 40];
// nums.splice(1, 2); // Removes 20 and 30 => [10, 40]
// nums.slice(0, 2);  // [10, 20] (non-destructive)

// 8. Combining & Copying Arrays
// let a = [1, 2];
// let b = [3, 4];
// let c = a.concat(b); // [1, 2, 3, 4]
// let d = [...a, ...b]; // Spread operator

// 9. Convert to String
// let sentence = ["I", "love", "coding"];
// console.log(sentence.join(" ")); // "I love coding"

//🔵 LOOPING & SEARCHING
// 10. forEach() – Loop
// sentence.forEach(word => console.log(word));

// 11. indexOf() & includes()
// sentence.indexOf("love");  // 1
// sentence.includes("coding"); // true

// 12. find() & findIndex()
// let numbers = [5, 10, 15];
// let firstOver10 = numbers.find(n => n > 10); // 15
// let index = numbers.findIndex(n => n === 10); // 1

//🔶 TRANSFORMATION METHODS
// 13. map() – Transform Elements
// let squared = numbers.map(n => n * n);
// console.log(squared); // [25, 100, 225]

// 14. filter() – Keep Matching Elements
// let even = numbers.filter(n => n % 2 === 0);
// console.log(even); // [10]

// 15. reduce() – Single Result
// let sum = numbers.reduce((acc, val) => acc + val, 0);
// console.log(sum); // 30

// 16. some() & every()
// numbers.some(n => n > 12);  // true
// numbers.every(n => n > 4);  // true

// 🟣 ADVANCED METHODS
// 17. sort() – Custom Sorting
// let scores = [20, 5, 30];
// scores.sort();              // Wrong: [20, 30, 5]
// scores.sort((a, b) => a - b); // Correct: [5, 20, 30]

// 18. reverse() – Reverse Order
// scores.reverse(); // [30, 20, 5]

// 19. flat() – Flatten Nested Arrays
// let nested = [1, [2, [3]]];
// console.log(nested.flat(2)); // [1, 2, 3]

// 20. fill() – Fill with Static Values
// let filled = new Array(5).fill(0); // [0, 0, 0, 0, 0]

// 21. copyWithin() – Internal Copy
// let arr = [1, 2, 3, 4, 5];
// arr.copyWithin(1, 3); // [1, 4, 5, 4, 5]

// 22. from() – Convert to Array
// let str = "Vishal";
// let charArray = Array.from(str); // ['V','i','s','h','a','l']

// 🧩 ARRAY OF OBJECTS
// let users = [
//   { name: "Vishal", age: 21 },
//   { name: "Aman", age: 25 }
// ];
// let names = users.map(u => u.name); // ["Vishal", "Aman"]
// let adults = users.filter(u => u.age > 22); // [{name: "Aman", age: 25}]

// 🧠 PROBLEM-SOLVING PATTERNS
// 🔸 Remove Duplicates
// let dup = [1, 2, 2, 3];
// let unique = [...new Set(dup)]; // [1, 2, 3]

// 🔸 Count Frequency of Elements
// let items = ["a", "b", "a", "c"];
// let freq = items.reduce((acc, val) => {
//   acc[val] = (acc[val] || 0) + 1;
//   return acc;
// }, {});
// console.log(freq); // { a: 2, b: 1, c: 1 }

// 📘 Summary Table
// | Method      | Purpose                            | Changes Original? |
// | ----------- | ---------------------------------- | ----------------- |
// | `push()`    | Add to end                         | ✅ Yes            |
// | `pop()`     | Remove from end                    | ✅ Yes            |
// | `shift()`   | Remove from start                  | ✅ Yes            |
// | `unshift()` | Add to start                       | ✅ Yes            |
// | `splice()`  | Add/remove/replace anywhere        | ✅ Yes            |
// | `slice()`   | Copy part of array                 | ❌ No             |
// | `concat()`  | Merge arrays                       | ❌ No             |
// | `map()`     | Transform elements                 | ❌ No             |
// | `filter()`  | Keep items that match condition    | ❌ No             |
// | `reduce()`  | Get a single result (sum, product) | ❌ No             |
// | `find()`    | Get first matching item            | ❌ No             |
// | `sort()`    | Sort elements                      | ✅ Yes            |
// | `reverse()` | Reverse order                      | ✅ Yes            |
// | `flat()`    | Flatten nested array               | ❌ No             |
// | `fill()`    | Fill array with static value       | ✅ Yes            |
// | `from()`    | Convert to array                   | ❌ No             |

// 🚀 What to Practice Next?

// ✅ 1. Reverse a String Using Arrays
// 🔹 Problem:
// Reverse the string "hello" to get "olleh".
// 🔹 Solution:
// You can convert a string into an array using split(), reverse it using reverse(), and join it back using join().
// 🔹 Code:
let str = "hello";
// Step 1: Convert string to array
let arr1 = str.split(""); // ['h', 'e', 'l', 'l', 'o']
// Step 2: Reverse the array
arr1.reverse(); // ['o', 'l', 'l', 'e', 'h']
// Step 3: Join back to string
let reversedStr = arr1.join(""); // "olleh"
console.log(reversedStr); // Output: "olleh"

// ✅ 2. Find Duplicates in an Array
// 🔹 Problem:
// From the array [1, 2, 3, 2, 4, 3, 5], find the duplicate elements.
// 🔹 Solution:
// You can use a JavaScript object (or Map) to count the frequency of each element.
// 🔹 Code:
let arr2 = [1, 2, 3, 2, 4, 3, 5];
let frequency = {};
let duplicates = [];
arr2.forEach(num => {
  frequency[num] = (frequency[num] || 0) + 1;
});
for (let key in frequency) {
  if (frequency[key] > 1) {
    duplicates.push(Number(key));
  }
}
console.log(duplicates); // Output: [2, 3]

// ✅ 3. Flatten a Deep Nested Array
// 🔹 Problem:
// Flatten [1, [2, [3, [4]], 5]] into a one-dimensional array.
// 🔹 Solution:
// Use the .flat() method with depth set to Infinity.
// 🔹 Code:
let nested = [1, [2, [3, [4]], 5]];
let flatArray = nested.flat(Infinity);
console.log(flatArray); // Output: [1, 2, 3, 4, 5]
// 🔹 Alternate (Manual Recursive):
function flattenDeep(arr) {
  return arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
console.log(flattenDeep([1, [2, [3, [4]], 5]]));

// ✅ 4. Filter Students with Scores > 90
// 🔹 Problem:
// Given a list of students, get only those who scored above 90.
// let students = [
//   { name: "Vishal", score: 85 },
//   { name: "Riya", score: 92 },
//   { name: "Aman", score: 97 },
//   { name: "Sneha", score: 89 }
// ];
// 🔹 Solution:
// Use filter() to return only students with score > 90.
// 🔹 Code:
let topStudents = students.filter(student => student.score > 90);
console.log(topStudents);
/*
[
  { name: "Riya", score: 92 },
  { name: "Aman", score: 97 }
]
*/

// ✅ 5. Sort Array of Objects by Name or Age
// 🔹 Problem:
// Sort an array of objects by name (alphabetical) or age (ascending).
// let users = [
//   { name: "Vishal", age: 21 },
//   { name: "Aman", age: 25 },
//   { name: "Riya", age: 20 }
// ];
// 🔸 Sort by Name (A → Z)
users.sort((a, b) => a.name.localeCompare(b.name));
console.log(users);
/*
[
  { name: "Aman", age: 25 },
  { name: "Riya", age: 20 },
  { name: "Vishal", age: 21 }
]
*/
// 🔸 Sort by Age (Ascending)
users.sort((a, b) => a.age - b.age);
console.log(users);
/*
[
  { name: "Riya", age: 20 },
  { name: "Vishal", age: 21 },
  { name: "Aman", age: 25 }
]
*/