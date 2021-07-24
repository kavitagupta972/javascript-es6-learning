console.log("default demo !!!");

function incrementCounterValue(num, incrementVal) {
    incrementVal = incrementVal || 1;
    console.log(num + incrementVal);
}

// incrementCounterValue(100, 5);
// incrementCounterValue(100);

function incrementCounterValue(num, incrementVal = 1) {
    console.log(num + incrementVal);
}


// incrementCounterValue(100, 5);
// incrementCounterValue(100, undefined);

function calculateTax(salary, savings, taxPercent = 5) {
    console.log((salary + savings) * (taxPercent / 100));
}

calculateTax(1000, 200);
calculateTax(1000, 200, 5);