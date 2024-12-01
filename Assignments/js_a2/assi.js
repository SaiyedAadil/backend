// 1. FizzBuzz

// - Write a function fizzBuzz that takes an integer n and:

// - Returns "Fizz" if the number is divisible by 3.

// - Returns "Buzz" if the number is divisible by 5.

// - Returns "FizzBuzz" if the number is divisible by both 3 and 5.

// - Otherwise, returns the number.

function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return "fizzBuzz"

    } else if (n % 3 === 0) {
        return "fizz"

    } else if (n % 5 === 0) {
        return "Buzz"

    } else {
        return n;
    }
}
// console.log(fizzBuzz(3));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));
// console.log(fizzBuzz(4)); 

// console.log("2nd way: ");

function fizzBuzz2(n) {
    return (n % 3 === 0 && n % 5 === 0) ? "FizzBuzz2" : (n % 3 === 0) ? "Fizz2" : (n % 5 === 0) ? "Buzz2" : n;
}


// console.log(fizzBuzz2(3));
// console.log(fizzBuzz2(5));
// console.log(fizzBuzz2(15));
// console.log(fizzBuzz2(4)); 

// optimized:
// const fizzBuzz = n => (n % 3 === 0 && n % 5 === 0) ? 'FizzBuzz' : (n % 3 === 0) ? 'Fizz' : (n % 5 === 0) ? 'Buzz' : n;
// console.log(fizzBuzz(4));
// =============================================================================
// question 2:
// 2. Sum of Even Numbers
// Write a function sumEvenNumbers that takes an array of numbers and returns the sum of all even numbers in the array.
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function sumEvenNumbers(n) {
//     const evenFiltered = n.filter(e => e % 2 === 0)  
//     const sum = evenFiltered.reduce((acc, curr) => acc + curr, 0)
//     console.log(sum);


// }
// 2nd way:
function sumEvenNumbers(arr) {
    return console.log(arr.reduce((acc, curr) => num % 2 === 0 ? acc + curr : acc, 0));


}
// sumEvenNumbers(num)
// ======================================================
// question 3
// 3. Factorial Calculation
// Write a function factorial that calculates the factorial of a given number using a loop. If the number is negative, return -1 to indicate an invalid input.


function factorial(n) {
    if (n < 0) {
        return -1
    }

    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= i;

    }
    return res
}

// console.log(factorial(5));
// question 4:
// 4. Find the Largest Number
// Write a function findLargestNumber that takes an array of numbers and returns the largest number using a loop.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function findLargestNumber(arr) {
//     if(arr.length === 0) return null;
//     let largest = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if(arr[i] > largest){
//             largest = arr[i]
//         }
//     }
//     return console.log(largest);
    
    
// 88=4}
// findLargestNumber(numbers)
// console.log(numbers);

// question: 5
// 5. Check Prime Number
// Write a function isPrime that takes a number and returns true if it's a prime number, and false otherwise.
function isPrime(n) {
    if (n <= 1) return false;
    let prime = true;
    for (let i = 2; i < n; i++){
        if (n % i === 0) prime = false;
    }
    return prime;
}


console.log(isPrime(5));
console.log(isPrime(4));
console.log(isPrime(2));
console.log(isPrime(1));
console.log(isPrime(0));

