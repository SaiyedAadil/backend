// Classes

// write a function to calculate electricity billl

// 0-50 = 2.5rs
// 50-100 = 4rs
// 100-200 = 6rs
// 200 > = 8rs

// challenge:

function calcElectricityBill(n) {
    let res = 0
    if (n >= 0 && n <= 50) {
        return c1(n)
    } else if (n >= 50 && n <= 100) {
        // return c1(n) + c2(n)
        return c1(50) + c2(n - 50)
    } else if (n >= 100 && n <= 200) {
        // return c1(n) + c2(n) + c3(n)
        return c1(50) + c2(50) + c3(n - 100)
    } else if (n > 200) {
        // return c1(n) + c2(n) + c3(n) + c4(n)
        return c1(50) + c2(50) + c3(100) + c4(n - 200)
    }
}

function c1(n) {
    return n * 2.5
}

function c2(n) {
    return n * 4
}
function c3(n) {
    return n * 6
}
function c4(n) {
    return n * 8
}
// console.log(calcElectricityBill(60))

// console.log(new Date().getFullYear());

//let see how we can inheritance in classes;

// you can inherit methods, ... from one class to another

class Student {

    constructor(nm) {
        this.name = nm;
        this.printName = function () {
            console.log(this.name);
        }
    }

    call() { // prototype in this
        console.log("Call from " + this.name);
        
    }
}

a = 10;
const s1 = new Student("Aadil")
const s2 = new Student("Adnan")
// console.log(s1.call, s2);
// console.log(s1);


// s1.call()
// s1.printName();

// inhertance - how you inherit in classes 
class StudentNew extends Student { // extends: used to inherit methods from one class to another
    constructor(nm) {
        super(nm) // what this does is? it'll initialize whatever constructor methods, that you have within studentclass, into this newStudent class
//         // i want to addd new prop
        this.newBranch = true; // you can able to access the properties and methods within the older class and utilize them again. You don't have to rewrite again everytihing 
        this.printName = false;
    }

    call() {
        console.log("Calling from IPhone");
    }
}


const std = new StudentNew("Sayeed")
// console.log(std, s1, s2);
// std.call() // calling Prototypes, you don't have multi-heritance, multi inheritance, those sort of things are not their own here coz this is not purely oops prog. lang. it is partially, but it's not completely, it's just oops prog. lang. 
console.log(std.printName);
s1.printName()
// s1.call 
// console.log(std.printName);
// // std.call()
// s1.printName();


// you can actually override, certain properties, methods.