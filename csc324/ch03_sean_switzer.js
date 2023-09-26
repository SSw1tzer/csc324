// excercise #1 minimum
function min(x,y) {
    let rep = Math.abs(x - y);
    let minimum = 0;
    for (let i = 0; i <= rep; i++) {
        if(x > y) {
            x = x - 1;
            minimum = x;
        } else if ( x < y) {
            y = y - 1;
            minimum = y;
        } else if (x == y) {
            minimum = x;
        }
    }
    return minimum;
}

console.log(min(0, 10)); // gets a minimum of 0
console.log(min(0, -10)); // gets a minimum of -10
console.log(min(5,5)); // works even when values are equal
console.log(min(5,-5)); // works when the absolute value is the same

// excercise #2 recursion
function isEven(num){
    if (num < 0) {
        num = isEven(num + 2);
    } else {
        if (num == 0) {
            num = true;
        } else if (num == 1) {
            num = false;
        } else {
            num = isEven(num - 2);
        }
    }
    return num;
}

console.log(isEven(50)); // returns true
console.log(isEven(75)); // returns false
console.log(isEven(-1)); // fixed overflow problem returns false
console.log(isEven(-500)) // returns even and runs a negative value

// excercise #3 bean counting
function countBs (str) {
    let Bs = 0;
    for ( let i = 0; i <= str.length; i++){
        if(str[i] == "B"){
            Bs = Bs + 1;
        } 
    }
    return Bs;
}

console.log(countBs("BBC")); // returns 2
console.log(countBs("BBCDBDIBFBDBA")); // returns 6

function countChar(str, lett) {
    let letts = 0;
    for ( let i = 0; i <= str.length; i++){
        if(str[i] == lett){
            letts = letts + 1;
        } 
    }
    return letts;
}

console.log(countChar("kakkerlak", "k")); // returns 4
console.log(countChar("supercalifragilistic expialidocious", "i")); // returns 7 and functions with spaces
console.log(countChar("supercalIfragilIstic expialidocious", "i")); // returns 5 as it is case sensitive