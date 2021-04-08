//Object.assign

const obj1 = {a:1, b:2};
const obj2 = {a:3, c:5};
const obj3 = {a:33, c:55, d:111};
console.log("obj2", obj2);
const resultantObj = Object.assign(obj2, obj1);
console.log("resultantObj",resultantObj);
console.log("obj1", obj1);
console.log("obj2", obj2);
const resultantObj1 = Object.assign(obj3, obj2, obj1,{temp : "temporary data"});
console.log("resultantObj",resultantObj1);