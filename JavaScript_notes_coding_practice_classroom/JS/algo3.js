// recursive method:

// there is an iterative approach, and recursive one

var num = 12345;
var a = num;
// var b = a % 10;
// console.log(b);

// function sumOfDigits(n) {
//     var a = n.toString()
//     var ar = a.split("")
//     var sum = 0;
//     ar.forEach((element) => {
//         sum += parseInt(element)
//     });
//     return sum    
// }
function sumOfDigits(n){
    // var sum = 0;
    
    // while(n > 0){
    //     sum += n % 10;
    //     n = parseInt(n / 10)
    // }
    // return sum
    // return (n % 10) // remainder milgaya
    if(n < 10){
        return n
    } else {
        return (n % 10) + sumOfDigits(parseInt(n / 10))
    }
}
const res = sumOfDigits(num)
console.log(res);


// function sumOfDigits(num) {
//     if (num < 10) {
//         return num;
//     } else {
//         return num % 10 + sumOfDigits(Math.floor(num / 10));
//     }
// }
// console.log(sumOfDigits(num))


