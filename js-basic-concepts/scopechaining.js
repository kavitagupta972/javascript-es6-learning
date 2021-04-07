var a = 10;

printHello();
function printHello(){
    var x = 100;
    childPrintHello();
    function childPrintHello(){
        console.log('x', x);
        console.log('a', a);
    }
}