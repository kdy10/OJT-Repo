// Task 1: Custom Array Filter
console.log("Task 1: Custom Array Filter");

function customFilter(arr, callback) {
    var even = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            even.push(arr[i]);
        }
    }
    return even;
}

function isEven(num) {
    return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers); 


// Task 2: Countdown Timer
console.log("\nTask 2: Countdown Timer");

function countdown(start, callback) {
    let delay = 1000; 
    for (let i = start; i >= 0; i--) {
        setTimeout(() => {
            callback(i);
        }, delay);
        delay += 1000;
    }
}

function displayNumber(num) {
    console.log(num);
}

countdown(5, displayNumber);



// Task 3: Simple Event Listener
console.log("\nTask 3: Simple Event Listener");

function createButton(buttonText, callback) {
    console.log("Button: " + buttonText);
    callback();
}

function buttonClicked() {
    console.log("Button Clicked!");
}

createButton("Click Me", buttonClicked);  



// Task 4: Task Runner
console.log("\nTask 4: Task Runner");

function runTasks(tasks) {
    for (let i = 0; i < tasks.length; i++) {
        setTimeout(() => {
            tasks[i]();
        }, i * 1000);   
    }
}
function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

runTasks([task1, task2, task3]); 



// Task 5: Interactive Quiz Game (Extra Miles)
console.log("\nTask 5: Interactive Quiz Game (Extra Miles)");

function askQuestion(question, choices, correctAnswer, callback) {
    let userResponse = 4;
    
    console.log(question);
    console.log("Choices: " + choices);
    console.log("User response: " + userResponse);

    if (userResponse == correctAnswer) {
        callback(true);
    } else {        
        callback(false);
    }
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
}

askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);