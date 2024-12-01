// for(var i = 1; i < 10; i++){
//     if(i % 3 === 0 && i % 5 === 0){ // 1st condition should be this
//         console.log("FizzBuzz");
//     } else if(i % 5 ===0){
//         console.log('Buzz');
//     } else if(i % 3 === 0){
//         console.log("Fizz");
//     } else {
//         console.log(i);
//     }
// }
// ====================
// now even sum question, you can do multiple way: short, long

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const res = arr.filter(ele => ele % 2 === 0).reduce((acc, val) => acc + val, 0)
const res = arr.filter(ele => ele % 2 === 0)
// reduce((acc, val) => acc + val, 0)
console.log(res);

// ====================
function factorial(n) {
    if (n < 0) return -1;
    let res = 1;
    for (let i = n; i >= 1; i--) {
        res *= i;
    }
    return res;
}
// console.log(factorial(-1565));

// ==================
// largest: 
const findLargestNumber = (arr) => {
    return arr.reduce((acc, val) => {
        if(val > acc){
            return val
        }
        return acc;
    }, arr[0])
}
// console.log(findLargestNumber(arr))
// ================
// prime: what is a prime number? ans: the multiples of itself and 1
const isPrime = (n) => {
    if(n < 2) return false; // that's the only edge case is there
    // let multiples = 2;
    for (let i = 2; i < n; i++) {
        if(n % i === 0){ // if this is true
            // multiples++
            return false;
        }
        // if(multiples > 2) return false;
    }
    return true;
}
const res2 = isPrime(3)  // what is happening over here, try to undrstand this thing.
console.log(res2);



// new
// objects: real life entity
let obj = {}
obj["full name"] = "Syed Sayeed"
obj.classNo = 5;
console.log(obj["full name"]);



