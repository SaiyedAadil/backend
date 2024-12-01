// class before promise and promise class was 03-10-2024
const addAsync = (a, b, cb) => {
   setTimeout(function () {
      if (a === 0) return cb(null, "Invalid Input") // stopping further if this condition satisfies - callback fn used to handle the async error result and can be used in many ways;
      a++
      b++
      var c = a + b
      cb(c) // in this line your work is done
   }, 0);
};
var a, b, c = 0;
const subAsync = (a, b, cb) => {
   setTimeout(function () {
      if (a === 0) return cb(null, "Invalid Input") // stopping further if this condition satisfies - callback fn used to handle the async error result and can be used in many ways;
      a++
      b++
      var c = a - b
      cb(c) // in this line your work is done
   }, 0);
};
const mulAsync = (a, b, cb) => {
   setTimeout(function () {
      if (a === 0) return cb(null, "Invalid Input") // stopping further if this condition satisfies - callback fn used to handle the async error result and can be used in many ways;
      a++
      b++
      var c = a * b
      cb(c) // in this line your work is done
   }, 0);
};
addAsync(10, 5, function (res, err) {
   if (!err) {
      console.log(res, "Add");
   } else {
      console.log(err);
   }
})
subAsync(15, 5, function (res, err) {
   if (!err) {
      console.log(res, "sub");
   } else {
      console.log(err);
   }
})
mulAsync(2, 5, function (res, err) {
   if (!err) {
      console.log(res, "mul");
   } else {
      console.log(err);
   }
})

// calbackfn: what are we expecting from this? failure, success
// 4 imp oper: callstack, webapi, callback queue, even loop


// dependent: fn within fn, cathing values from higher order to inner to inner
// fn within fn:
// based
// promise: microtask que;
// setTimeout: Task Que api;

// variables,
// \callings
// success scenario, error scenario, res, err
// how these functions executed?
// how does js execute - diagram
// Task Queue;, CallStack:
// parallel execution code:
// step by step: async 1 resolve, then async2 resolve, then so on, that is : dependent on countrie, then state, then city:
// Promise: fullfille, break;
