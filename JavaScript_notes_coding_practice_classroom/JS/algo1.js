// Linear Search:
//      . what is linear searchl
//      . goes in line, checking each one by one

var arr = [12, 234, 45, 32, 23, 4, 57, 34, 3, 45, 4, 57, 7, 2, 4342, 3, 26, 46];
var k = 342; // find k in arr?
let index = -1;

console.time("loop");
// arr.forEach((ele, idx) => {
//     console.log(ele === k ? `${k } exist at index ${idx}` : `${k} does not exist`);
// });

arr.forEach((ele, idx) => {
    if (ele === k) {
        index = idx;
        return;
    }
});

console.timeEnd("loop");

console.log(
    index > -1 ? k + " exist at index " + index : k + " does not exist"
);
