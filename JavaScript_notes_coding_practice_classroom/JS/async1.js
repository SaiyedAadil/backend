const addAsync = (a, b, cb) => {
    console.log("Line 2");
    setTimeout(function () {
        if (a === 0) return cb(null, "Invalid Input") // stopping further if this condition satisfies - callback fn used to handle the async error result and can be used in many ways;
        console.log("Line 4");
        a++
        b++
        var c = a + b
        console.log(c, "Line 8"); // ok
        cb(c) // in this line your work is done
    }, 2000);
    console.log("Line 11");
}

let res = 0

const fn = (val, err) => { // callback to handle the async result
    if (err) { // that's what essentially callback function can be used for
        console.log(err);
    } else {
        res = val;
        console.log(res, "coming from res");
    }
}

addAsync(0, 5, fn)
// console.log(res);


// programmatically: you are making a request to the swiggy server, it gives back a response only your order gets places, right? 
// payment gateways like googlepay, phonepay;

// washing machine example
