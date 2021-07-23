function sum(x, y) {
    console.log(x + y);
}
var sub = function subtraction(x, y) {
    var result = 10;
    console.log(x - y);
}
var div = function(x, y) {
    var result = 10;
    console.log(x / y);
}
sub(20, 5);
// IIFE
(function() {
        console.log("I am IIFE");
    }

)();
xyz();