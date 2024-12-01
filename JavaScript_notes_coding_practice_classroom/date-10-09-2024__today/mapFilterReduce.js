const arr = [1, 2, 3, 4, 5]
let res = arr.map(() => {
    return 1
})
console.log(res, arr); // will not manipulate the original array
// ========================================================================

const arr1 = [1, 2, 3, 4, 5]
let res1 = arr1.map((ele, index) => { // currentValue, index
    return ele * 2 ; // it's upto you, any operation you can do
})
console.log(res1, arr1);

// ========================================================================

let arr2 = ["string1", "string2", "string3", "string4"]
console.log(arr2.map((ele)=> ele.toUpperCase())); // not required return keyword coz one line code

// othre way -> for loop
let res2 = [] // to store all values
for (let i = 0; i < arr2.length; i++) {
    res2.push(arr2[i].toUpperCase())
    
}
let reverse = [...arr2].reverse().map(str => str.toUpperCase())
console.log(reverse);

console.log(res2); // you don't have to write these syntax, one of the usecases of map-- react more you used "map" more and more in react.
console.log(arr2);

// ========================================================================


// filter method: if truthy values it catches else(falsy) ignored
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const res3 = arr3.reverse().filter((ele) => ele % 2 === 0  ).toString()
console.log(res3, arr3);
console.log( "jsdklf" + typeof [arr3]);



const arr4 = [2,3534,5,46,546,45,64,56,435,3]
console.log(arr4.fill(9, 1, 5));

console.log(...arr4.fill(9, 1, 5), arr); // manipulating existing array
console.log(arr4);


const arr5 = [1, 2, 3, 4, 5, 6]
console.log(arr5.every((ele) => ele % 2 === 0)) // if 
// console.log([arr5].every());

// only entire array true;
// --------------
console.log(arr5.every((ele) => ele % 2 === 0))
console.log(arr5);

console.log(arr5.some((ele) => ele % 2 === 0))  

// ek bhi satisfy karra condition I will execute. => some
// ek bhi satisfy nai kara to I false -> every
// ========================================================================

// example to understand every-some => time 8:11

// reduce
// reduce: it take two parameters, accumulater(previous value), currentValue
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = arr6.reduce((acc, ele) => {
    return acc + ele
}, 0) // initially shuru mai bolrau value 0 hai.
console.log(sum);
// this is one usage. there are lots of usage, operations 


// objects next - basics of OOPs
// data structure: t = 8_18 

// find
// find: 
const val = arr6.find((ele, ind) => {
    return ele === 2; // else -1
})
console.log(val);
// t - 8_30


// list of methods that are very much connected to loops