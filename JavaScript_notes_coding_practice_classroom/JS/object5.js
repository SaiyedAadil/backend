// // 4th way of creating objects all ways;
// object constructor, within it has method, object.create()

// const mobile = Object.create({}, {
//     name: { value: "Redmi Note13", enumerable: true, writable: true} ,// enumerable, makes it visible:,...// object descripter
//     // color: {configurable: },
//     color: {enumerable: true, configurable: true}

// })

// Object.defineProperties(mobile, color, {
//     value: "Red",
// })
const mobile = Object.create(
    {},
    {
        name: { value: "Redmi Note13", enumerable: true, writable: true }, // writable: ..., enumerable: ... , //// you can't define property directly, again you have propert
        // name: { value: "Redmi Note13", enumerable: true} // this entire thing is called property descripttor
    }
); // .create accepts two parameters, first one-will ignore it for now, the 2nd one is where you actually define properties and methods within the object.
mobile.name = "Redmi Note 15";
console.log(mobile);

// let mobile = {
//     name: "REdmi",
//     color: "Red",
//     price: "2000",
// }
// console.log(Object.entries(mobile));

// console.log(typeof NaN);
// console.log(Number.isNaN(NaN));

// console.log(typeof new String());

// constructor: work is to generate a new object

// console.log(new Date());
// time standards: isi, utc = following 0 only, gmt,
// making the program international level

// 4 way of creating objects:
// 1. Object literal
// 2. constructor
// 3. class
// 4. object constructor -> object.creae()
// tomorrw, this keyword: how does it bhave in different scenarios


