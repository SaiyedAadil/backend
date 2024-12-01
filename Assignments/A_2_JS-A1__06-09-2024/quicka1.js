let age = 20;
let canDrive;
if(age >= 0 && age <= 18){
    canDrive = "No"
} else{
    canDrive = "Yes"
}
console.log(canDrive);
// --------------------------------------------------------
let number = 24;
let result;
if(number %2==0){
    result="even"
} else{
    result="odd"
}
console.log(result);
// --------------------------------------------------------
let num1 = 2;
let num2 = 1;
let max;
if(num1 >= num2){
    max = `${num1} is greater than ${num2}`
} else{
    max = `${num1} is less than ${num2}`
}
console.log(max);
// --------------------------------------------------------
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
// --------------------------------------------------------