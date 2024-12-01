// const add =  new Promise((res, rej) => {
//     let a = 5;
//     let b = 10;
//     if(a !== 5) {
//         res(a + b)
//     } else {
//         rej("Invalid Input")
//     }
// })
// // console.log(add);
// add.then((res) => console.log(res)).catch((rej) => console.log(rej))
// Handling Async Operations using Promises
// Pending, fulfilled & Rejected

const addAsync = (a, b) => {
  return new Promise((res, rej) => {
    setTimeout(function () {
      if (a === 0) rej("Invalid Input");
      var c = a + b;
      res(c);
    }, 1000);
  });
};
const subAsync = (a, b) => {
  return new Promise((res, rej) => {
    setTimeout(function () {
      if (a === 0) rej("Invalid Input");
      var c = a - b;
      res(c);
    }, 2000);
  });
};
const mulAsync = (a, b) => {
  return new Promise((res, rej) => {
    setTimeout(function () {
      if (a === 0) rej("Invalid Input");
      var c = a * b;
      res(c);
    }, 500);
  });
};

// addAsync(10, 5)
//   .then((res) => console.log(res, "add"))
//   .catch((err) => console.log(err));
// subAsync(10, 5)
//   .then((res) => console.log(res, "sub"))
//   .catch((err) => console.log(err));
// mulAsync(10, 5)
//   .then((res) => console.log(res, "mul"))
//   .catch((err) => console.log(err));
addAsync(0, 5)
  .then((addRes) => {
    console.log(addRes);
    return subAsync(addRes, 5);
  }) // chaining or step by step promise execution.
  .then((subRes) => mulAsync(subRes, 2))
  .then((mulRes) => console.log(mulRes))
  .catch((err) => console.log(err))
  .finally(() => console.log("The Promise Execution completes"))
console.log(addAsync(10, 5));



Promise.any([addAsync(0, 5), subAsync(0, 5), mulAsync(0, 2)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
// parallely execution, then then
// if encounters single error it won't print out any, throws only error
// takes all promise, returns the single promise;
// .all , .any (either, first one gets resolved it will printed out), 

// subAsync(10, 5)
//   .then((res) => console.log(res, "sub"))
//   .catch((err) => console.log(err));
// mulAsync(10, 5)
//   .then((res) => console.log(res, "mul"))
//   .catch((err) => console.log(err));
//7-55--57-8

// another way to handle promise- async await keywords:
// step by step execution of code, 





