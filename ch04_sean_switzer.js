// Excercise 1 The Sum of a Range

// Part 1: Range Function
function range (start,end) {
    let numberAr = [];
    let numbers = 0;
    if(start < end) {
    for(let i = start; i<=end; i++){
        numbers = i;
        numberAr.push(numbers);
    }
} else {
    for (let i = start; i>=end; i--) {
        numbers = i;
        numberAr.push(numbers);
    }
}
    return numberAr;
}

console.log(range(1, 10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1)); //[5, 4, 3, 2]
console.log(range(-10,10)); //[-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(10,-10)); //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10]

// Part 2: Sum Function
function sum(array = []) {
    let numSum = 0;
    for (let i = 0; i < array.length; i++) {
        numSum = numSum + array[i];
    }
    return numSum;
}

console.log(sum(range(1, 10))); //55
console.log(sum(range(5, 2))); //14
console.log(sum(range(6, 36))); //651
console.log(sum(range(7, 24))); //279

// Excercise 2 Reversing an Array
function reverseArray(array = []) {
    let len = array.length;
    let revArr = [];
    for (let i = 1; i <= len; i++) {
        revArr.push(array[len-i]);
    }
    return revArr;
}

console.log(reverseArray(["A", "B", "C"])); // → ["C", "B", "A"];
console.log(reverseArray(["A", "B", "C", "D", "E"]));
console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]));


function reverseArrayInPlace(array = []) {
    let len = Math.floor(array.length/2);  //Math.floor rounds down to allow the function to find the outersides of the array
    let holdValEnd = [];
    let holdValBeg = [];
    for (let i = 1; i <= len; i++) {  // finds and stores the end values of the array entering them from the end
        holdValEnd.push(array[array.length - i]);
    }
    for (let z = 0; z < len; z++) {  // finds and stores the beggining values of the array entering them from the beggining
        holdValBeg.unshift(array[array.length - (array.length - z)]);
        }
    array.splice(0, len, holdValEnd); // splices the held value of the end numbers of the array into the original now at the beggining
    array.splice(array.length - len, len, holdValBeg); // splices the beggining values into the original now at the end
    return array;
}


// couldn't figure out how to remove brackets from final array, 
// tried coercing into a string, separating the string, and many other actions but to no avail.
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
let arrayValue1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
reverseArrayInPlace(arrayValue1);
console.log(arrayValue1);