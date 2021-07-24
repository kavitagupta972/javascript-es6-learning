console.log("let const var demo");
var x = 100;

(function printValues() {

    let functionScopeVar = 90;
    if (1) {
        var value = 200;
        let highValue = 999;
        console.log(highValue);
        console.log(value);
    }
    // console.log(highValue);
    console.log(value);

})();

// console.log(value);