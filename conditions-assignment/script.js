// Task 1: Grading System
console.log("Task 1: Grading System");

let score = 87;

if (score >= 90 && score <= 100){
    console.log("Grade A");
}
else if (score >=80 && score < 90){
    console.log("Grade B");
}
else if (score >=70 && score < 80){
    console.log("Grade C");
}
else if (score >=60 && score < 70){
    console.log("Grade D");
}
else {
    console.log("Grade F");
}


// Task 2: Weather Advisor
console.log("\n\nTask 2: Weather Advisor");

let temperature = 25;

if (temperature < 0){
    console.log("It's freezing outside! Bundle up!");
}
else if (temperature >= 0 && temperature <= 15){
    console.log("It's cold outside. Wear a jacket.");
}
else if (temperature >= 16 && temperature <= 30){
    console.log("The weather is nice. Enjoy your day!");
}
else {
    console.log("It's hot outside. Stay hydrated!");
} 


// Task 3: Eligibility Checker
console.log("\n\nTask 3: Eligibility Checker");

let age = 21;

if (age < 13){
    console.log("You are too young for this activity.");
}
else if (age >= 13 && age <= 17){
    console.log("You need parental permission.");
}
else {
    console.log("You are eligible for this activity.");
}


// Task 4: Ticket Price Calculator
console.log("\n\nTask 4: Ticket Price Calculator");

// let age = 23; // commenting so it doesnt produce error/conflict with task3
let isMember = false;
let ticketPrice;

if (age < 12){
    ticketPrice = "free";
}
else if (age >= 12){
    if (isMember){
        ticketPrice = "$10";
    }
    else {
        ticketPrice = "$15";
    }
}
console.log("Ticket Price is " + ticketPrice);


// Task 5: Challenge Task (Optional): Leap Year Checker
console.log("\n\nTask 5: Leap Year Checker");
function isLeapYear(year){
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 == 0)){
        return true;
    }
    else {
        return false;
    }
}
console.log("2020: " + isLeapYear(2020)); 
console.log("2023: " + isLeapYear(2023));
console.log("2004: " + isLeapYear(2004));
console.log("1993: " + isLeapYear(1993));
console.log("2043: " + isLeapYear(2043));

