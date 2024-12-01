// case of contacts:
const person = {
    profileImg: ".../img.png",
    firstName: "Syed",
    middleName: "",
    lastName: "Syeeduddin",
    mobile: [
        { no: 435615151561, type: "home" , isPrimary: false},
        { no: 654516565615, type: "mobile", isPrimary: true}
    ],
    email: "iamsayeeduddin@gmail.com",
    // address: [] // multiple address
    address: "Tolichowki, HYD",
    isBlocked: false,
    company: "OSV",
    position: "React Developer",
    changePrimary: function (type) {  // function responsible : checking primary, changing primary....
        this.mobile = this.mobile.map((ele) => {
            if(ele.type === type) { // condition, because I'm giving the type dynamically, true/false
                ele.isPrimary = true; // suppose isPrimary not in ele, then it'll create and assign itself
            } else {
                ele.isPrimary = false;
            }
            // ele.isPrimary = ele.type === type; // I'm comparing so don't need ternary oprtor as well, because it'll give true / true, false / false (simple)
            return ele;     
        })
    },

}
// console.log(person); objects do
const contactList = [person]

// console.log(person.mobile);
person.changePrimary("home") // I'm giving true value saying my primary is "home"
// console.log(person.mobile);

let obj1 = {
    a: 1,
    b: 2,
    c: 3
}

// let obj2 = obj1;
// obj2.b = 22; // affecting obj1 also (problem)
// let obj2 = {}

// for (let key in obj1) { // (solution (reflection of an object))
//    obj2[key] = obj1[key] // 
// } // instead of doing all of these

// let obj2 = { ...obj1 } // use spread operator, it is creating a copy, disconnecting reference and result stored without manipulating the original array

// let obj2 = JSON.stringify(obj1) // not updated obj2.b=10
let obj2 = JSON.parse(JSON.stringify(obj1)) // this will 


obj2.b = 10
console.log(obj1, obj2);

// let obj1 = {
//     a: 1,
// }
// let obj2 = obj1;
// obj2.b = 2;
// let obj2 = {}
// for (let key in obj1){
//     // obj2[] // can't I use dot notaion instead this bracket: the reason is: when you write it like this obj2.key, 
//     obj2[key] = obj1[key] // this is basically called reflection of an object
// }

// let obj2 = { ...obj1 } // spread operator, deep copy, operator work is to create a deep copy of this
// let obj2 = JSON.parse(JSON.stringify(obj1)) // this is called highest level of copy of object, any level= nested objects in object.
// obj2.b = 10 // obj2 will change but not affecting obj1 because of reflection, forin loop
// console.log(obj1, obj2);


// console.log(contactList);

// isPrime
// isPrime: reference type objects
// methods of objects:
// optimization
// scenarios
// .conditions
// comparison (nothing just true / true, false / false)
// today:
// practice objects with different questions, different scenarios
// rest paramters: related to functions


