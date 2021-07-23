console.log("Printing pyramids...!!!!");
const rows = 5;
let patternString = "";
for( let outer = 1; outer <= rows; outer++){ 
    //loop for spaces
    for(let inner = 1; inner < outer; inner++){
        patternString += " ";
    }
    //loop for stars   inner = outer * 2 - 1
    /**
     * 2*(5 - 1) + 1 = 9
     * 2(5-2) +1 = 7
     * 2(5-3) + 1 = 5
     * 2(5-4) + 1 = 3
     * 2(5-5) + 1 = 1
     */
    for(let inner = 1; inner <= 2*(rows - outer) + 1 ; inner++){
        patternString += "*";
    }
    patternString += "\n";
}

console.log(patternString);