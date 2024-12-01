// Async Await
// intention: there are typically step by step in nature
const addAsync = (a, b) => {
  return new Promise((res, rej) => {
    setTimeout(function () {
      if (a === 0) rej("Invalid Input Add ");
      var c = a + b;
      res(c);
    }, 1000);
  });
};
const subAsync = (a, b) => {
  return new Promise((res, rej) => {
    setTimeout(function () {
      if (a === 0) rej("Invalid Input Sub");
      var c = a - b;
      res(c);
    }, 2000);
  });
};
const mulAsync = (a, b) => {
  return new Promise((res, rej) => {
    setTimeout(function () {
      if (a === 0) rej("Invalid Input Mul");
      var c = a * b;
      res(c);
    }, 500);
  });
};

// const init = async () => {}
// const init = async function() => {

// }

async function init() {
  try {
    const addRes = await addAsync(-5, 5); // calling a function which is return a promise
    console.log(addRes);
    const subRes = await subAsync(addRes, 5);
    const mulRes = await mulAsync(subRes, 2);
    console.log(mulRes);
  } catch (error) {
    console.log(error);
  }
}
init();


// developer friendly, handle efficient, using objects not string;
// api saying: I've already displayed skeloton, but I don't have the data, 
// swiggy example:
// backend understand the requests,
// backend will query the database, in it's language, like location, ...|details
// then backend take the response then sends the response to frotend\
// backend assume as kitchen, 
// mediator, waiter, or ;;;
// api is simply lines of code, web socket 
// It's simply backend handles req, res and gives the lines of code;


// db server, frontend server, backend server = fullstack ap
// majorly used async in apis


// next will entirely, js project;
// dom
// doubt clearing the sessions; I'll be available online, sir will give time slot, google meet;
// not

// websocke is similar to http, only 1 difference


// How do you implement a recursive function?
// handle these recursive, 


// monday: 
// tues: will start dom manipulation in js


