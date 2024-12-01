// JS Assignment 3:
// 1. You have an array of employee objects, and you need to update the salary of an employee with a specific ID.

const employees = [
    { id: 1, name: 'Alice', salary: 5000 },
    { id: 2, name: 'Bob', salary: 6000 },
    { id: 3, name: 'Charlie', salary: 5500 }
];

const updateSalaryByempID = (empArr, id, updSalary) => {
    return empArr.map(ele => {
        if(ele.id == id) {
            return ele = {...ele, salary: updSalary}
        }
        return ele
    })
}

console.log(updateSalaryByempID(employees, 3, 6000))
console.log(employees);

const users = [
    { name: 'Alice', email: 'alice@example.com', password: 'password123', SSN: '123-45-6789' },
    { name: 'Bob', email: 'bob@example.com', password: 'qwerty', SSN: '987-65-4321' }
];
// approach 1
// const sanitizedUsers = users.map(({name, email})=> ({name, email}))
// approach 2
// const sanitizedUsers = users.map(user => {
//     const { password, name, ...rest } = user;
//     return rest;
// });
// approach 3
// const sanitizedUsers = users.map(user => 
//     Object.keys(user).reduce((acc, key) => {
//       if (!['password', 'SSN'].includes(key)) acc[key] = user[key];
//       return acc;
//     }, {})
//   );
// approach 4 :
// for (const user of users) {
//     delete user.password;
//     delete user.SSN;
// }
// console.log(users);

// approach 5
// const sanitizedUsers = users.map(({ password, SSN, ...rest }) => rest);

// console.log(sanitizedUsers);

// question 3:
const user = {
    name: 'Alice',
    email: 'alice@example.com',
    age: 25
};
// approach 1:
// for(const key in user){
//     upperKeys[key.toUpperCase()] = user[key]
// }

// approach 2: 

// const upperKeys = Object.keys(user).reduce((acc, key) => {
//     acc[key.toUpperCase()] = user[key]
//     return acc
// }, {});



// console.log(upperKeys);
