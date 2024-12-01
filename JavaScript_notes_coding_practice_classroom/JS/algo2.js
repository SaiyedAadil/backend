// Binary Search:
// Binary Search ====== Array is always sorted;
// the condition(data you provided in array) it should must need to be sorted;

var arr = [24, 43, 56, 78, 99];
var k = 56; // find k in arr?
// var mid = (low + high) / 2 // first check mid is the value or not we are finding? based on that result you proceed left or right.

// break this array into 2 parts:
// let low = 0;
// let high = arr.length - 1;
// console.log(mid); // mid == k? than only 1 iteration happened;
// if not, then you have to decide wether to go left or right?
// var left = arr.slice(0, mid)
// var right = arr.slice(mid, arr.length)

function binarySearch(arr, k) {
  var low = 0,
    high = arr.length - 1;

    while (low <= high) {
        var mid = Math.ceil((low + high)/2)
        // console.log(mid);
        
        if(arr[mid] ===k) return true;
        if(arr[mid] > k) {
            high = mid - 1;
        } else {
            low = mid + 1
        }        
    }
    return false
}
const res = binarySearch(arr, -1) // you have to check all the scenarios, like giving false values, true values, create your own algo:
// that's how you write an algorithm
console.log(res);

// giving real life example: clothing shop, clothes are arrange in serailised manner, you were asked to go for 43, you go from >40 not start from 1;

