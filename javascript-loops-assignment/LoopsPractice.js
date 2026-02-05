// 1. Multiplication Table Generator
console.log("Task 1: Multiplication Table Generator");

let number = 7;
for (let i = 0; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
    
}


// 2. Sum of First N Natural Numbers
console.log("\n\nTask 2: Sum of First N Natural Numbers");

let n = 7;
let sum = 0;
for (let i = 0; i <= n; i++) {
    sum += i;
}
console.log("The sum of the first " + n + " numbers is: " + sum);


// 3. Array Elements Printer
console.log("\n\nTask 3: Array Elements Printer");

let arr = [3, 6, 9, 12, 15];
for (let i = 0; i < arr.length; i++) {
    console.log("Array Element: " + arr[i]);
}



// 4. Pattern Printer
console.log("\n\nTask 4: Pattern Printer");


for (let row = 0; row < 5; row++) {
    let pattern = "";
    for (let col = 0; col <= row; col++) {
        pattern += "*";
    }
    console.log(pattern);
}


// 5. Reverse Array Elements
console.log("\n\nTask 5: Reverse Array Elements");

let arr2 = [2, 4, 6, 8, 10];
for (let i = arr2.length-1; i >= 0; i--) {
    console.log("Reversed Element: " + arr2[i]);
}
    