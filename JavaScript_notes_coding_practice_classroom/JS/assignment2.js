/*
Assignment 2:
    . JS Assignment 2
        1. FizzBuzz

        Write a function fizzBuzz that takes an integer n and:

        Returns "Fizz" if the number is divisible by 3.

        Returns "Buzz" if the number is divisible by 5.

        Returns "FizzBuzz" if the number is divisible by both 3 and 5.

        Otherwise, returns the number.

        2. Sum of Even Numbers

        Write a function sumEvenNumbers that takes an array of numbers and returns the sum of all even numbers in the array.

        3. Factorial Calculation

        Write a function factorial that calculates the factorial of a given number using a loop. If the number is negative, return -1 to indicate an invalid input.

        4. Find the Largest Number

        Write a function findLargestNumber that takes an array of numbers and returns the largest number using a loop.

        5. Check Prime Number

        Write a function isPrime that takes a number and returns true if it's a prime number, and false otherwise.

========================================================================
*/
/// first condition is important
// for (var i = 1; i < 20; i++){
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if ( i % 5 === 0 ) {
//         console.log("Buzz");
//     } else if ( i % 3 === 0 ) {
//         console.log("Fizz");
//     } else {
//         console.log(i);
//     }
// }

/* Question: 2. Sum of Even Numbers
    Write a function sumEvenNumbers that takes an array of numbers and returns the sum of all even numbers in the array.
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// approach 1
// const res = arr.filter(ele => ele % 2 === 0).reduce((acc, val) => acc + val, 0);
// approach 2
// const res1 = arr.reduce((acc, val) => {
//     if (val % 2 === 0){
//         return acc + val
//     } else {
//         return acc;
//     }
// })
// const res = arr.reduce((acc, val) => (val % 2 === 0 ? acc + val : acc), 0)
// console.log(res);

// you can pass function in methods

function fact(n) {
    if (n < 0) return -1
    let res = 1; 
    for (var i = n; i >= 1; i--){
        res = res * i;
    }
    return res
}

// console.log(fact(3));

// there are typically two ways for how program works: 1 is recursion, 2nd is step by step method  

// question 3
const findLargestNumber = (ar) => {
    return ar.reduce((acc, val) => { // why are we using reduce: because we are performing an opration at the end of the loop, we not wanting any kind or arra,filter,storing or other stuff, and we expecting in a different type, not necessary array;
        if(val > acc){
            return val;
        }
        return acc
    }, ar[0]);
};
// console.log(findLargestNumber(arr));


// question 4

const isPrime = (n) => {
    if (n < 2) return false;
    // let multiples = 2;
    for(var i = 2; i < n; i++){
        if ( n % i === 0){ // remainder zero aaya means divide hoyga or false aajayega prime
            // multiples++;
            return false;
        }
        // if (multiples > 2) return false;
    }
    return true
}

const res = isPrime(7)
console.log(res);
