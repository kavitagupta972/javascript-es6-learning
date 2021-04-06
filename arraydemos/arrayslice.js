console.log("array examples");
var laptops = ["lenovo","hp","dell","macbook air","macbook pro", "acer","samsung"];
console.log(laptops);

var resultantLaptops = laptops.slice(2);
console.log("resultant laptops", resultantLaptops);
resultantLaptops = laptops.slice(3,5);//starting position 3, ending position 5,but not include 5
console.log("resultant laptops", resultantLaptops);
console.log(laptops.toString());