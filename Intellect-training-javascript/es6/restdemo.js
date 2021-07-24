console.log("Rest Demo !!!");

// function add(x, y, z, a) {
//     return x + y + z + a;
// }

// console.log(add(1, 2, 3, 4));


function add(count, ...arr) {
    console.log(arr);
    // return x + y + z + a;
}

// function add1(...arr, count) {
//     console.log(arr);
//     // return x + y + z + a;
// }

console.log(add(1, 2, 3, 4, 7, 8, 9, 10));