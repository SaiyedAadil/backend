/// Logical Operators
// Title: Mastering Logical Operators and Control Flow in JavaScript

// understand where operators use, example: right use of this operator in this particular situation/condition/scenario/
/// Falsy -- > false, 0, "", null, undefine, NaN
/// Truthy -- > everything else {} [] " "

// true && false && true && false

///AND Operator - (ek bhi false aagaya to F)

// A | B | R = A && B
// T | T | T
// T | F | F
// F | T | F
// F | F | F
// conclusion of this table: but if both true will true else other false

/// OR Operator - (ek bhi true aagaya to T)

// A | B | R = A || B
// T | T | T
// T | F | T
// F | T | T
// F | F | F

/// NOT Operator

// A | !A
// T | F
// F | T

// control flow statemnts: if, if else - what is if, els, those are essentially known as control flow statements or conditional statements, you use it very often in writing code: when you want to perform different actions on different decisions
    // allow the user either go through the operation or don't go through the operation

// examples of logical 

// console.log("Sayeed" && null); // experiment
// console.log("Sayeed" && {});

// if({}){ // it's a truthy value to run the scope of this if condition
//     console.log(null && "Sayeed" ); 
// }
// ornd, oprtr, return values

// T && T --> T 2nd
// T || T --> T 1st
// F || T --> T 2nd
// F && T --> F 1st
// T || F --> T 1st
// T && F --> T 2nd
// 

if ({} && null) {
    console.log("Helllloooo");
} else if ({} && null) {
    console.log("Second Cond");
} else if ({} && null) {
    console.log("Second Cond");
} else if ({} && null) {
    console.log("Second Cond");
} else if ({} && null) {
    console.log("Second Cond");
} else if ({} && null) {
    console.log("Second Cond");
} else {
    console.log("False");
}

// let's example: 0 is the starting of your day:

let time = 20;
if (time > 0 && time < 12){
    console.log("Good Morning");
} else if (time > 12 && time < 18) {
    console.log("Good Afternoon");
} else if (time > 18 && time < 24) {
    console.log("Good Evening");
} else {
    console.log("Wrong Time");
} 

