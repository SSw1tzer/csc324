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
