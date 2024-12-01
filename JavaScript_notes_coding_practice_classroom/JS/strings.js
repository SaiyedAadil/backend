var str = "Hello World Test World again World";
// console.log(str[12]);
// console.log(str.split(""));
// console.log(str.replaceAll("world", "Saiyed"));

// ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"];
// var res = str. // all methods showed in vs code related to strings

// use cases, control flow, these string methods: experiment...
// methods: email validation use these projects as it applies your methods to logic and build components

var email = "abcd@gmail.com"
var cond1 = email.includes("@")
var cond2 = email.includes(".", email.indexOf("@") + 2)
var cond3 = email.slice(email.indexOf("@"), email.indexOf("@") + 2);
var cond4 = cond3[1] !== "." ; 
console.log(cond1, cond2, cond3, cond4);
            



