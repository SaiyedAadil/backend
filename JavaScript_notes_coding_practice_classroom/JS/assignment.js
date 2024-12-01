/// Problem 1

var age = 22;
var canDrive = age >= 18 ? "Yes" : age > 0 ? "No" : "Wrong Age"; // if less than wrong age, nested condition, multiple condition

// if (age >= 18) {
//     canDrive = "Yes"
// } else {
//     canDrive = "No";
// }

// console.log(canDrive);

// Problem 2
var num = 354416;
var result = num % 2 === 0 ? "Even" : "Odd"
// console.log(result);

// Problem 3

let num1 = 10; // you can change value and see what happens
let num2 = 100;
let max = num1 >= num2 ? num1 : num2;

// console.log(max);

// Problem 4

let score = 66;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else if (score >= 70 && score < 80) {
    grade = "C";
} else if (score >= 60 && score < 70) {
    grade = "D";
} else if (score < 60) {
    grade = "F";
}

// console.log(grade);


