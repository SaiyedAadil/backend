// Problem 1: Declare a variable age and assign it a number value. Use if-else to check if the age is 18 or above. If it is, set another variable canDrive to "Yes". Otherwise, set canDrive to "No". Print canDrive to the console.
// -------------------------------------------------------------
// let age = 20;
// let canDrive;
// if(age >= 0 && age <= 18){
//     canDrive = "No"
// } else{
//     canDrive = "Yes"
// }
// console.log(canDrive);
// /////// == If toNum user write's string other than number == ///////
let age = "44";
let canDrive;
//// console.log(isNaN(age));

let toNum = Number(age)
if (isNaN(toNum)) {
    canDrive = "Wrong-invalid number"
}
else if (toNum >= 0 && toNum <= 18) {
    canDrive = "No, you less than 18"
}
else {
    canDrive = "Yes you can drive..."
}
console.log(canDrive);
// ================== 1 COMPLETE ======================

// ================== 2 Start ===================

// Problem 2: Declare a variable number and assign it a value. Use if-else to check if the number is even or odd. Store the result in a variable called result with the value "Even" or "Odd". Print result to the console.
// -------------------------------------------------------------
let number = 24;
let result;
if(number %2==0){
    result="even"
} else{
    result="odd"
}
console.log(result);

// ================== 2 COMPLETE ======================

// ================== 3 Start ===================
// Problem 3: Declare two variables num1 and num2 and assign them number values. Use if-else to check which number is greater and store the greater number in a variable called max. Print max to the console.
// -------------------------------------------------------------
let num1 = 531;
let num2 = 65;
let max;
if(num1 >= num2){
    max = `${num1} is greater than ${num2}`
} else{
    max = `${num1} is less than ${num2}`
}
console.log(max);

// ================== 3 COMPLETE ======================

// ================== 4 Start ===================
//// Problem 4: Declare a variable score and assign it a number value. Use if-else statements to assign a grade based on the value of score:

//// 90 and above: "A"
//// 80 to 89: "B"
//// 70 to 79: "C"
//// 60 to 69: "D"
//// Below 60: "F"
// -------------------------------------------------------------
let score = 99;
if(score>=90){
    console.log("A");
} else if(score >= 80 && score <= 89){
    console.log("B");
} else if(score >= 70 && score <= 79){
    console.log("C");
} else if(score >= 60 && score <= 69){
    console.log("D");
} else if(score <= 60){
    console.log("F");
}
// ================== 4 COMPLETE ======================




