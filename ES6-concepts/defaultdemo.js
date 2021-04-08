console.log("default concept in es6");
//counter calculation    
//before es6
// function incrementCounter(num, incrementVal){
//     console.log('increment value', incrementVal);
// //set default increment value as 1;
//     incrementVal  = incrementVal ||1;
//     return num+incrementVal;
// }
// console.log(incrementCounter(10,20));
// console.log(incrementCounter(100));

//after es6
// function calculateTax(salary, taxPercentage = 5, savings){
//     return ((salary+savings) * taxPercentage)/100;
// }

// console.log(calculateTax(20000, 5, 1000));
// console.log(calculateTax(20000, undefined, 1000));

function getDefaultTaxPercentage(){
    return 5;
}
function calculateTax1(taxPercentage = getDefaultTaxPercentage(), salary, savings){
    return ((salary+savings) * taxPercentage)/100;
}

console.log(calculateTax1(5, 20000, 1000));
console.log(calculateTax1(undefined, 20000, 1000));