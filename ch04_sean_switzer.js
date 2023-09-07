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



// Optional
// Excercise 3 A list


//Excercise 4 Deep Comparison