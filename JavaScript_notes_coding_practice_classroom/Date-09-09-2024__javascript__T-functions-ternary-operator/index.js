let age = -51;
let canDrive = age >= 18 ? "Yes" : age > 0 ? "No" : "Wrong age";
console.log(canDrive);

let num = 5
let result = num % 2 === 0 ? "Even" : "Odd"
console.log(result);

var num1 = 554;
var num2 = 55
var max = num1 >= num2 ? num1 : num2;

console.log(max);

var score = 57;
var grade;

if(score >= 90){
    grade = "A"
} else if(score >= 80 && score < 90) {
    grade = "B"
} else if(score >= 70 && score < 80) {
    grade = "C"
} else if(score >= 60 && score < 70) {
    grade = "D"
} else if(score < 60) {
    grade = "F"
}
console.log(grade);


