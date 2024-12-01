// creating a function using declaration method - used function keyword in javascript.
// function add() { // Hey function, What is it(you) doing?
//     console.log(5 + 5); // this is just doing his work, it's only doing print/performing its operation
//     return; // what this crucial part doing? 
// } // this function is doing 2 operations: one is calculating 5 + 5, second is printing the value;
// console.log(add()); //so, when the value is returning, add() log is cathing that value and print it. undefined.
// //  add() // to execute, I have to invoke/call it.
// // add()
// // add()
// // add()
// // add()
// // add()

// --------------------------------------------------------------------------------------------------------------------------

// function add(a, b) { // now you can access a, b outside the function
//     var res = a + b
//     return res // you don't need to write return if you don't want to catch the value and store in variable. got it
// }
// // console.log(res); // because res is now functional scoped variable
// // const addition = add(5, 3)
// const addition = add(5) // if I give only 1 args instead of 2, what I'm doing is I'm adding 5 + undefined = NaN; 
// console.log(addition) // now this is called params, arguments ==> to make function dynamic.

// --------------------------------------------------------------------------------------------------------------------------

// copy-okay so now ES6 feature = default parameters.
function addd(a = 5, b) { // Default Parameters
    let res = a + b;
    return res;
}
// const adddition = addd(5) // I have given only 1 value, and second will be default  
// const adddition = typeof addd(NaN, 5) // giving falsy value and second param truthy value, so this prints only truthy and falsy ignored.
const adddition = typeof addd("", 5) // TYPE CASTING
console.log(adddition);

// in function every object behavior is different -- will cover when get to this.
// How does "this" keyword behave in different scenarios -- will cover when get to this. (objects arrays)

let multiply = (a, b) => {
    let res = a * b;
    return res
}
console.log(multiply(5, 5));
