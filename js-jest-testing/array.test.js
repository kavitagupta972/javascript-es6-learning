const { TestScheduler } = require('@jest/core');
const cloneArray = require('./array');

test("clone array reference testing", () => {
    const array = [1,2,3];
    expect(cloneArray(array)).not.toBe(array);
})

// test("clone array not equal reference testing", () => {
//     const array = [1,2,3];
//     expect(cloneArray(array)).toBe(array);
// })

test("clone array data testing", () => {
    const array = [1,2,3];
    expect(cloneArray(array)).toEqual(array);
})