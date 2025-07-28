var x = "Hello"
//Var can be updated and used throughout the code

let y = "Hola"
//let allows value to be modified after declaration

const pi = "3.14"
//const cannot be updated once declared 


// BLOCK & FUNCTION Scoped

// var is a function scoped 
// let and const are blocked scope

//Example
// if (true) {
//     var a = "hii"
// }
// console.log(a)
// This will work correctly 

// if (true) {
//     let a = "hii"
// }
// console.log(a)
//This will throw error as 'let' is been called outside the block
