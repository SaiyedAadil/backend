// array.js
var arr = []
arr[4] = "Saiyed"
// console.log(marks);


var marks = [65, 66, 78, 94, 45]
// var copy = marks.splice(1, 2)\
// slice -> returns copy, splice -> deletes from original 
var name1 ="aadil saiyed"
// console.log(copy, marks);

// marks.push(99) // add end manipulate-original-yes
// marks.pop() // remove end manipulate-original-yes
// marks.shift() // remove first m-original-yes
// console.log(marks.unshift(99)); //add start m-original-yes
// console.log(marks);

console.log(name1.split(" ").join("!"));
// console.log(marks.length);


// you don't have to remember these methods, just do make proper usedto that this method will do this. 
// not all problem have single solution: many of the problem you gonna solve, the multiple way to solve the problem
// the more problem that you do, with(in) more different ways, I wanna do this thing, I'll use this


// var copy = marks.slice(1, 2) // returns copy, not m-original one
// var copy = marks.splice(1, 3) // output, [66, 78, 94]
// var copy = marks.splice(2, 1) // output: 78
// console.log(copy, marks);

// console.log(marks.join("|"));  // in string it has split method
// console.log(name1.split("").join("!"));

// length property: count of values


function callBackFn(ele, index) {
    // console.log(val, index);
    return console.log(ele + index);
    
}

var a = marks.forEach(callBackFn) // it performs/return value and gone, it can't be stored in variable also
console.log(a);  // you'll get undefined...

// callBackFn(20, 2)

// var dupArr = [ ...marks ]  // two usage of spread operator, 1 is spread, and 2nd is rest parameter
// console.log(dupArr);
