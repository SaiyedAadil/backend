// // create in object: withing that store the number of times the repeated values:
// // count of object repeating in array:

// // for (let i = 0; i < arr.length; i++) {
// //     let obj = {}
// //     let findobj = arr.map((e) => {
// //         e.
// //     })

// // }
// var arr = ["a", "a", "b", "b", "b", "b", "b", "c", 'd', "d", "d", "d", "e", "e", "e"]
// var res = arr.reduce((acc, ele) => {
//     let obj = { ... acc }

//     if(!obj[ele]){
//         obj[ele] = 1;

//     } else {
//         obj[ele] += 1;
//     }
//     return obj; // shallow copy

// }, {})
// console.log(res);

// // let obj = {}
// // for(var i = 0; i < arr.length; i++){
// //     if(obj[arr[i]]){
// //         obj[arr[i]] += 1;
// //     } else {
// //         obj[arr[i]] = 1; 
// //     }
// // }
// // console.log(obj);
// we have a list of products:
// filter out the array, list array, should only container
// const products = [
//     {
//         name: "Laptop",
//         price: 10000,
//         inStock: true
//     },
//     {
//         name: "Mobile",
//         price: 5000,
//         inStock: false
//     },
//     {
//         name: "Tablet",
//         price: 7000,
//         inStock: true
//     },
//     {
//         name: "Tablet",
//         price: 3000,
//         inStock: false
//     }
// ]

// const res = products.filter((ele) => !ele.inStock).map( ele => ele.name.toUpperCase())
// console.log(res);

// array of students: with names and grades
// challenge: group students with grade

var students = [
    {
        name: "name1",
        grade: "A"
    },
    {
        name: "name2",
        grade: "B"
    },
    {
        name: "name3",
        grade: "C"
    },
    {
        name: "name4",
        grade: "A"
    },
    {
        name: "name5",
        grade: "A"
    },
    {
        name: "name6",
        grade: "C"
    },
    {
        name: "name7",
        grade: "B"
    },
    {
        name: "name8",
        grade: "B"
    },
]

let res = students.reduce((acc, ele) => {
    let obj = { ...acc }
    if(!obj[ele.grade]){
        obj[ele.grade] = []
    }
    obj[ele.grade].push(ele.name)
    return obj

}, {})

console.log(res);


