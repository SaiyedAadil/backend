function fizzBuzz(n) {
    if(n % 3 === 0 && n % 5 ===0){
        return "FizzBuzz";
    } else if(n % 3 === 0){
        return "Fizz"
    } else if(n % 5 === 0){
        return "Buzz"
    }
    return n;
    
}
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(4)); 
// -------------------------------------------------
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function sumEvenNumbers(arrOfNum) {
    let evenNums = arrOfNum.filter(arr => arr % 2 === 0)
    // console.log(evenNums);
    let sum = evenNums.reduce((acc, curr) => acc + curr, 0)
    console.log(sum);
}
sumEvenNumbers(num)
// ----------------------------------------------------
function factorial(n) {
    if (n < 0) return  console.log(-1);  // invalid input
    let res = 1;
    for (let i = 2; i <= n; i++) { // multiply start with 2 till <= n
        res = res * i;
    }
    return res

}
console.log(factorial(4))
// ----------------------------------------------------------------
const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function findLargestNumber(arr) {
    let largest = arr[0]
    arr.forEach(n => {
        if(n > largest){
            largest = n;
        }
    });
    return largest
}
console.log(findLargestNumber(num1))
// -----------------------------------------------
function isPrime(n) { //checking:
    if(n <= 1) return false; 
    let prime = true;
    for (let i = 2; i < n; i++) {
         if(n % i === 0){
            prime = false
         }
    }
    return prime
}

console.log(isPrime(5));
console.log(isPrime(4));