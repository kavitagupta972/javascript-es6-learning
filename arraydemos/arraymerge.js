console.log("array examples");
var arr1 = [10,20,30,40,50];
var arr2 = [1,2,3,4,5];
var arr3 = [100,200,300,400,500];


arr1.concat(90);
var resultArr = arr1.concat(arr2);
// console.log('arr1',arr1);
// console.log('resultant array', resultArr);
resultArr = arr1.concat(arr3, arr2);
console.log('resultant array', resultArr); 
resultArr = arr1.concat(arr3, 999);
console.log('arr1',arr1);
console.log('resultant array', resultArr); 