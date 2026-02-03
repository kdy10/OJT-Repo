// Task 1: Calculate the Total Cost of Items

let item1 = 20;
let item2 = 30;
let item3 = 40;
let totalCost = item1 + item2 + item3;

console.log("The total cost of the items is $" + totalCost);



// Task 2: Calculate the Average of Three Numbers

let num1 = 50;
let num2 = 25;
let num3 = 65;
let average = (num1 + num2 + num3) / 3;

console.log("The average is: " + average);


// Task 3: Odd or Even Checker

let num = 77;

if (num % 2 == 0){
    console.log(num + " is an even number.");
}
else{
    console.log(num + " is an odd number.");
}


// Task 4: Calculate Discounts

let originalPrice = 200;
let discountPercentage = 15;
let discountAmount = (originalPrice * discountPercentage) / 100;
let discountedPrice = originalPrice - discountAmount;

console.log("The discounted price is: $" + discountedPrice + "."); 


// Bonus Task (Optional): Reverse Percentage Calculation

let finalPrice = 170;
let reverseDiscountPercentage = 15;
let reverseOriginalPrice = finalPrice / (1 - (reverseDiscountPercentage / 100));

console.log("The original price before the discount was: $" + reverseOriginalPrice + ".");