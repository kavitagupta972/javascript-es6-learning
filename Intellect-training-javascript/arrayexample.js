console.log("Array examples");
const alphabet = "Z";
const array = ["A", "B", "C", alphabet];

array[10] = "J";

// console.log(array[6]);

function demo(e) {
    console.log(e);
}
array.forEach(demo);
// array.forEach(e => console.log(e + " - alphabet"));


demo("Kavita", "gupta", "kkkk");