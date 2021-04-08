console.log("Optional Parameter Demo");

function calculateTax(salary, tax = 10){
    return (salary * tax)/100;
}

console.log(calculateTax(50000, 20));
console.log(calculateTax(40000));