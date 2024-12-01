var arr = ["a", "a", "a", "b", "b", "b", "b", "b", "c", "d", "d", "d", "d", "e", "e", "e"]

// obj = {
//     a: 3,
//     b: 5,
//     c: 1,
//     d: 4,
//     e: 3
// };

var res = arr.reduce((acc, ele) => {
    let obj = { ...acc }  // you can directly acc, but to seperate/copy you use spread, it'll anyhow redirect when with return keyword
    if(!obj[ele]){ // true when not encountered
        obj[ele] = 1; // this is creation of new key, assigning the value 1
    } else { 
        obj[ele] += 1;
    }
    // obj[ele] = obj[ele] ? + 1 : 1;
    return obj
}, {})
console.log(res);

// // let obj = {}
// // for (var i = 0; i < arr.length; i++){
// //     if(obj[arr[i]]){
// //         obj[arr[i]] += 1;
// //     } else { // it runs when first time encountered
// //         obj[arr[i]] = 1;
// //     }
// // }

// const products = [
//     { name: "Laptop", price: 10000, inStock: true},
//     { name: "Phone", price: 5000, inStock: false},
//     { name: "Tablet", price: 70000, inStock: true},
//     { name: "Monitor", price: 3000, inStock: false},
// ]

// const res = products
// // .filter(ele => ele.inStock)
// .map(ele => {
//     if(!ele.inStock){
//        return ele.name.toUpperCase()
//     }
//     return undefined;
// })
// console.log(res);

// var students = [
//     { name: "Syed", grade: "A" },
//     { name: "John", grade: "B" },
//     { name: "Altag", grade: "A" },
//     { name: "Sahil", grade: "A" },
//     { name: "Saleem", grade: "C" },
//     { name: "Kerren", grade: "A" },
// ]
// var res = {
//     A: ["Syed", "Mohd", "Saleem", "Altag"],
//     B: ["John"],
//     C: ["Sahil"]
// }
// var res = students.reduce((acc, ele) => {
//     let obj = { ...acc };
//     if (!obj[ele.grade]) {
//         obj[ele.grade] = []; // example: A: []
//     }
//     obj[ele.grade].push(ele.name)
//     return obj
// }, {})
// console.log(res);




// filterout Array, new Array,, that has list of stock that out of stock, and name of the product in uppercase
/////////////////////////////////////
// challenge: you have an array of repeated alphabets
//      . create an object, and within that object store the number of that alphabets repeating in the array
// 20th september
// today:

// const employees = [
//     { id: 1, name: 'Alice', salary: 5000 },
//     { id: 2, name: 'Bob', salary: 6000 },
//     { id: 3, name: 'Charlie', salary: 5500 }
// ];

// function updateSalary(id, val) {
//     let idx = employees.findIndex((ele) => ele.id === id)
//     if (idx > -1) {
//         employees[idx].salary = val
//     } else {
//         console.log("Wrong ID");

//     }
// }
// updateSalary(2, 8000)
// console.log(employees);

let obj = {
    a: 1,
    b: 2,  
    c: 3
}
delete obj.b;
console.log(obj);

// let obj2 = {
//     a: {...obj}.a = 33,
//     c: obj.c
// }
// console.log(obj2);
// console.log("original: ", obj);


// q2
// const users = [
//     { name: 'Alice', email: 'alice@example.com', password: 'password123', SSN: '123-45-6789' },
//     { name: 'Bob', email: 'bob@example.com', password: 'qwerty', SSN: '987-65-4321' }
// ];

// const maskedUsers = users.map(ele => {
//     return {
//         name: ele.name,
//         email: ele.email
//     }
// })

// console.log(maskedUsers);

// time < 8:00

// q3 time > 8 to 8:3

// const user = {
//     name: 'Alice',
//     email: 'alice@example.com',
//     age: 25
// };

// let userNew = {}
// for(let key in user){
//     userNew[key.toUpperCase()] = user[key]
// }
// console.log(userNew);





