//Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope (either global or function scope) during the compilation phase, before the code is executed.

function test(){
    console.log(x)
    var x = "hii"
    console.log(x)
}
test()

//OUTPUT
// undefined
// hii

//This happens because in function javascript hoist all the variable names at start before initialisation, so while executing the function runs without error and gives undefined before initialisation and then actual value

function testLet(){
    console.log(x)
    let x = "hii"
    console.log(x)
}
testLet()


//But while using let keyword it throws error saying "Cannot access 'x' before initialization" 