console.log("Rest Operator Demo");

//before es6
// function sum(num1, num2, num3, num4){
//     return num1+num2+num3+num4;
// }

// console.log(sum(10,20,30,40));

//after es6
function sum(num, ...arguments ){ //function sum(...arguments, num) this is not correct
    let result = 0; 
    console.log("arguments list", arguments);
    arguments.forEach(function(arg){
        result = result + arg;
       // result += arg;
    });
    return result;
}

console.log(sum(10,20));//2
console.log(sum(10,20,30));//3
console.log(sum(10,20,30,40));//4