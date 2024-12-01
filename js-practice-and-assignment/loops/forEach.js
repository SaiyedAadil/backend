//// *forEach* loop to practice javascript loops methods, with question categorised in easy-medium-hard-extreme based on levels of beginner, intermediate, advanced, experience.

// // ======================= EASY - beginner level =======================
// --------------------------------------------------------------------
// // question 1 - under this easy
// challenge: Task: Iterate over an array of numbers and print each number.
// Question: Write a function that takes an array of numbers as input and uses forEach to print each number to the console.
// --> {code}
let arr1 = [1, 2, 3, 4, 5];
function printEachToConsole() {
    arr1.forEach((e) => console.log(e));
}
// printEachToConsole()
// --------------------------------------------------------------------
// // question 2 - under this easy
// challenge:Simple Array Iteration
// Write a forEach loop to iterate over the following array and log each element to the console:
// const fruits = ['apple', 'banana', 'cherry'];
// --> {code}
const fruits = ["apple", "banana", "cherry"];
// fruits.forEach(console.log);

// --------------------------------------------------------------------
// question 3 - under this easy method
// challenge: Create an array of numbers. Using a forEach loop, print the square of each number to the console.
// let arr2 = ["str 1", "str 2", "str 3", "str 4","str 5"]
let arr2 = [1, 2, 3, 4, 5];

arr2.forEach((num) => {
    // console.log(num ** 2)
});
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(console.log.bind(null, Math.pow));
// --------------------------------------------------------------------
// question 4 : Write a function that uses forEach to print each element of an array to the console.
// 1 way;
// let arr3 = [1, 2, 3, 4, 5].forEach(e => console.log(e))
// 2nd way:
// [1, 2, 3, 4, 5].forEach(console.log)
// --------------------------------------------------------------------
// --------------------------------------------------------------------

// // ======================= MEDIUM - intermediate level =======================
// --------------------------------------------------------------------
// question 1: under this medium level
// Task: Modify array elements using forEach.
// challenge: Given an array of numbers, write a function that uses forEach to multiply each element by 2 and store the result in a new array. Return the new array and console it.

const numbers = [1, 2, 3, 4, 5];
const doubled = [];
numbers.forEach((e) => {
    // how many times it is iterating?
    doubled.push(e * 2);
});
// console.log(doubled, numbers);
// 2nd way:
const arr4 = [1, 2, 3, 4, 5];
// arr4.forEach(e => console.log(e * 2));

// --------------------------------------------------------------------
// question 2 - under this medium:
// challnge: Object Property Iteration:
// Use forEach to iterate over the properties of the following object and log each property name and value to the console:
const person = { name: "John", age: 30, city: "New York" };
// Object.keys(person).forEach(key => console.log(`Key: ${key}, Value: ${person[key]}`))

// --------------------------------------------------------------------
// question 3 - under this medium:
// challenge: Given an array of strings, use a forEach loop to capitalize the first letter of each string and print the modified strings to the console.
const str1 = ["sjslkrj", "wejroi", "eorsji", "gsvn", "bverijn"];
str1.forEach((e) => {
    // console.log(e.charAt(0).toUpperCase() + e.slice(1));
    // console.log(e.slice(1, 3));
});
// console.log("orig: ", str1);

// --------------------------------------------------------------------
// question 4: challenge: Create a function that uses forEach to calculate the sum of all even numbers in an array.
const arr5 = [1, 2, 3, 4, 5, 6];
function sumOfEven(w) {
    let sum = 0;
    arr5.forEach((e) => {
        if (e % 2 === 0) {
            sum += e;
        }
    });
    console.log(sum);
}
// sumOfEven()
// 2nd way:
const sumEvenNumbers = (arr) =>
    arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);

const numbs = [1, 2, 3, 4, 5, 6];
// console.log(sumEvenNumbers(numbs)); // Output: 12
// --------------------------------------------------------------------
// // ======================= HARD - advanced level =======================
// --------------------------------------------------------------------
// question 1 - in this hard level:
// challenge/Task: Sum and average calculation using forEach.
// Question: Create a function that accepts an array of numbers and uses forEach to calculate the sum and average of the elements. Return an object containing the sum and the average.
const sumAndAverage = (arr) => {
    // let sum = 0;
    let sum = 0;
    // arr.forEach(num => sum += num);
    arr.forEach((num) => (sum += num));
    // return { sum, average: sum / arr.length };
    return { sum, average: sum / arr.length };
};

const numbers1 = [1, 342, 243, 4, 5, 6];
//   console.log(sumAndAverage(numbers1));
// --------------------------------------------------------------------
// question 2 - in this hard level:
// challenge: Nested Array Iteration
// Task: Write a forEach loop to iterate over the following nested array and log each inner array element to the console:
const nestedArray = [
    [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
    ],
    [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
    ],
];
// nestedArray.flat(Infinity).forEach(console.log);
// 2nd way:
nestedArray.forEach((innerArr) => {
    innerArr.forEach((elem) => {
        // console.log(elem);
    });
});
// --------------------------------------------------------------------
// question 3 - in this hard level:
// challenge 3: You have an array of objects, each representing a person with properties like name, age, and city. Use a forEach loop to create a new array containing only the names of people older than 30.
// --> {code}
const personObj = [
    {
        name: "Name1",
        age: 23,
        city: "Bangalore",
    },
    {
        name: "Name2",
        age: 54,
        city: "Hyderabad",
    },
    {
        name: "Name3",
        age: 87,
        city: "Ahmedabad",
    },
    {
        name: "Name4",
        age: 32,
        city: "Gurgaon",
    },
    {
        name: "Name5",
        age: 25,
        city: "Delhi",
    },
];
const nameOver30 = [];

personObj.forEach((person) => {
    if (person.age > 30) {
        nameOver30.push(person.name);
    }
});

// console.log(nameOver30);

// --------------------------------------------------------------------
// question 4 - in this hard level:
// challenge: Implement a function that uses forEach to flatten a nested array (an array containing other arrays) into a single-level array.
function flattenArray(nestedArr) {
    const flatArray = [];
    nestedArr.forEach(innerArray => {
        innerArray.forEach(element => {
            flatArray.push(element)
        });
    });
    return flatArray;
}

const nestedArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//   console.log(flattenArray(nestedArr)); // Output: [1, 2, 3,..., 9]
//   2nd Way: 
const nestedArray2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//   console.log(nestedArray2.reduce((acc, curr) => acc.concat(curr), [])); 
// --------------------------------------------------------------------
// // ======================= EXTREME - experience level =======================
// question 1 - in this extreme experience level:
// challenge: Task: Complex object iteration and data transformation.
// Question: You are given an array of objects where each object represents a person with name, age, and salary properties. Use forEach to create a new array that contains only the names of people whose age is above 25 and salary is greater than $50,000. Return this new array of names.
const employees = [
    { name: 'John', age: 30, salary: 60000 },
    { name: 'Alice', age: 20, salary: 70000 },
    { name: 'Bob', age: 35, salary: 55000 },
    { name: 'Charlie', age: 40, salary: 80000 },
    { name: 'David', age: 25, salary: 45000 }
]
const eligibleEmp = []
employees.forEach(person => {
    if (person.age > 25 && person.salary >= 50000) {
        eligibleEmp.push(person.name)
    }
})
// console.log( "eligibleEmp: ", eligibleEmp);

// --------------------------------------------------------------------
// question 2 - for this extreme level:
// challenge: Filtering and Mapping
// Use forEach to iterate over the following array, filter out odd numbers, and create a new array with double the value of each even number:
// --> { c o d e }
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const oddNum = numArr.filter(num => num % 2 === 0);
const doubledEvens = numArr.filter( num => num %2 ===0).map(num => num ** 2);


console.log(oddNum, doubledEvens);
// ----------------------- continue 1
// numArr.forEach((num, i) => {
//     if(num %2 !== 0){
//         oddNum.push(num)
//     } else {
//         doubledEvens.push(num * 2)
//     }
// })
// console.log(oddNum, doubledEvens);
// Output: [4, 8, 12, 16, 20]

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// --------------------------------------------------------------------
