console.log("array examples");
var laptops = ["lenovo","hp","dell","acer","samsung"];
console.log(laptops);

// var removedLaptops = laptops.splice(2,1,"MacBook Air", "MacBook Pro");
// console.log('removed laptops', removedLaptops);
// console.log('resultant list of laptops', laptops);

// var removeFirst = laptops.splice(0,1);
// console.log('resultant list of laptops', laptops);
// var removeAll = laptops.splice(0, laptops.length);
// console.log('resultant list of laptops', laptops);
var removeLast = laptops.splice(laptops.length-1, 1);
console.log('resultant list of laptops', laptops);