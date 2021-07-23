const { TestScheduler } = require('@jest/core');
const Person = require('./person');

test(" test Person object", ()=> {
    let personObj = new Person("kavita", "gupta");
    let testObj = {firstName:"kavita", lastName:"gupta"};
    expect(personObj).toEqual(testObj);
})

test(" test Person object", ()=> {
    let personObj = new Person("kavita", "gupta");
   // let testObj = {firstName:"kavita", lastName:"gupta"};
    expect(personObj).toBe(personObj);
})

test("test person object functions", () => {
    let personObj = new Person("kavita", "gupta");
    expect(personObj.fullName()).toBe("kavita gupta");
})