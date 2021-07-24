console.log("spread demo");
const summerFruit = ["Water melon", "mango", "musk melon", "Apricot"];
const winterFruit = ["apple", "Pomegranate", "grapes"];

let fruits = summerFruit.concat(winterFruit);


fruits = [...summerFruit, ...winterFruit, "Pear", "Plum", ...["Pineapple", "Cherry"]];
console.log(fruits);

//===========================
function add(x, y, z) {
    console.log(x + y + z);
}

var arr = [1, 2, 3];
add(1, 2, 3);
add(...arr);