console.log("Printing pyramids...!!!!");
let patternString = "";
for( let outer = 1; outer <= 9; outer++){ 
    for(let inner = 1; inner <= outer; inner++){
        patternString += "*";
    }
    patternString += "\n";
}

console.log(patternString);