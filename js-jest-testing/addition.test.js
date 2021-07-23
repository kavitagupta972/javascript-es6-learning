
const { TestScheduler } = require('@jest/core');
const calc = require('./addition');

// beforeAll, beforeEach, afterAll, afterEach
var a,b;
beforeAll(()=>{
    a = 10;
    b = 20;
    console.log(" before addition testing");
})
beforeEach(()=>{
    console.log(" before addition testing");
})
describe('putting all testcases together', ()=>{
    test('checking addition of two numbers', () =>{
        expect(calc.addition(a,b)).toBe(30); //matcher
    })
    
    
    test('checking not toBe addition of two numbers', () =>{
        expect(calc.addition(a,b)).not.toBe(40); //matcher
    })
    
    test('checking addition of two numbers', () =>{
        expect(calc.sub(a,b)).toBe(-10); //matcher
    })
})

describe('putting all testcases together111', ()=>{
    test('checking addition of two numbers', () =>{
        expect(calc.addition(a,b)).toBe(30); //matcher
    })
    
    
    test('checking not toBe addition of two numbers', () =>{
        expect(calc.addition(a,b)).not.toBe(40); //matcher
    })
    
    test('checking addition of two numbers', () =>{
        expect(calc.sub(a,b)).toBe(-10); //matcher
    })
})

afterAll(()=>{
    console.log("after execution of each test");
})

afterEach(()=>{
    console.log("after each test execution");
});