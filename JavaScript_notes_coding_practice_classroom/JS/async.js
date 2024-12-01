console.log(1 + 1);

const fn = () => { // timout handler function
    console.log(2 + 2);
}

setTimeout(fn, 2000); // calls the fn funciton once after 2s;

setInterval(fn, 1000 ); // calling the function every 1s, execute the code every 1s

console.log(3 + 3);


