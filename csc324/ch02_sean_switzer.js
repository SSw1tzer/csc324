// Excercise 1: Looping a triangle
let hash = "";
let hashCount = 0;
while(hashCount < 7) {
    hash = hash + "#";
    hashCount = hashCount + 1;
    console.log(hash);
}

// used a while loop and a variable to create a loop of the desired length

// Excercise 2: FizzBuzz
let numbers = 0;
while(numbers < 100) {
    numbers = numbers + 1;
    if (numbers%3 == 0 && numbers%5 == 0) { //looks for numbers divisible by both 3 and 5
        console.log("FizzBuzz");
    } else if(numbers%3 == 0) {  //looks for numbers divisible by 3
        console.log("Fizz");
    } else if (numbers%5 == 0) { //looks for numbers divisible by 5
        console.log("Buzz");
    } else {
        console.log(numbers);
    } 
}


// Excercise 3: Checkerboard
// had to look up a program for the initial code, credit to stackoverflow

function checkerboard (para = 8) {   
    if (para % 2 == 0) {
    for (var x = 1; x <= para; x++) {
        let str = "";
         for (var y = 1; y <= para; y++) {
            if (x % 2){
                if (y % 2){
                    str = str + " ";
                } else {
                    str = str + "#";
                }
         } else if (y % 2) {
            str = str + "#";
         } else {
            str = str + " ";
         }
        }
        console.log(str)
    }
    } else {
        console.log("para must be an even number!")
    }
}

checkerboard();  // uses the base parameters of 8
checkerboard(para = 10); // uses the parameter of 10, parameter can be any even number
checkerboard(para = 9); // returns the line "para must be an even number"

// program loops based on the rows and columns changing which symbol is added to the string 
// depending on if its an even row, an even column, or both. While also checking to ensure that 
// the parameter is even to make an even number of columns and rows in the checkerboard