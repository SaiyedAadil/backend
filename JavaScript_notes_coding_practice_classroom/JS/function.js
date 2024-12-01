function add(a = 7, b) { // accepting arguments in function as parameters, 
    // default parameter value, when value for b is not found - when value arrives, it'll replace or else appears ;)
    // var res = 5 + 5;
    var res = a + b;
    return res
}

// Title: Functions, Default Parameters, and Arrow Functions in JavaScript

// console.log(res);
// console.log(add());

// add() // function can be executed as many times as you call it.
// add()
// add()
// add()

// note: in function, be remember the block scoped and global scopes, you cannot globally access those variables that is initialize into the function;
// arguments and parameters for making function dynamic
// const addition = add( 5) // passing arguments
const addition = add(true, 5) // try changing true to null, undefined, booleans etc.
// console.log(addition);

// type casting: suppose when incident occurs for string to number, it'll convert the number to string.

// arrow function : 

const subtract = function (a, b = 10) {
    var res = a - b;
    return res;
}

// subtract = -0 // this some illogic, but you can't assign for that const
// console.log(subtract());
// console.log(undefined - 10);

// subtract = -0

let multiply = (a, b) => {
    var res = a * b;
    return res
    console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhh"); // gone because return keyword
};

console.log(multiply(5, 5));

