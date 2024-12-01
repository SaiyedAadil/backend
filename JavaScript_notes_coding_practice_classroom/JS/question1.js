// calc electricity bill consumed units given
// challenge cal basis on tariff

// 0-50 = 2.5rs
// 50-100 = 4rs
// 100-200 = 6rs
// 200 > = 8rs
// scenario 1
    // . you consumed units = 50;
    
// units = 75;
// 4 categories, division of entire consumed units, 
// first 0 to 50 units will be *2.5 rate, then remaining 25, at 4rs, then the total will be right
// amount = (75 - 50) * 4;
// amount = amount + (50 * 2.5)

const calculateBill = (units) => {
    var amount = 0;

    if(units > 200){
        let chargeableUnits = units - 200;
        amount += chargeableUnits * 8;
        // probolem
        units = units - chargeableUnits 
    }

    if (units >= 100 && units <= 200){
        let chargeableUnits = units - 100 // range of calculation till
        amount += chargeableUnits * 6
        units = units - chargeableUnits

    }

    if (units >= 50 && units <= 100){
        let chargeableUnits = units - 50 // range of calculation till
        amount += chargeableUnits * 4
        units = units - chargeableUnits

    }
    amount = amount + units * 2.5;
    return amount

}
const bill = calculateBill(60)
console.log(bill)

// ===================== approch 2 ============================

// function calcElectricityBill(units) {
//     let price = 0
//     let u = units
//     let m;
//     if (u > 200) {
//         m = u - 200
//         price += m * 8
//         u = u - m
//     }

//     if (u >= 100 && u <= 200) {
//         m = u - 100
//         price += m * 6
//         u = u - m
//     }

//     if (u >= 50 && u <= 100) {
//         m = u - 50 // 10
//         price += m * 4
//         u = u - m
//     }

//     price += u * 2.5

//     return price


// }
// const bill = calcElectricityBill(60) 
// console.log(bill)


// units > 0 && units <= 50
// units >= 50 && units <= 100
// n >= 100 && n <= 200
// n > 200
// console.log(calcElectricityBill(60))

// 0-50 = 2.5rs
// 50-100 = 4rs
// 100-200 = 6rs
// 200 > = 8rs