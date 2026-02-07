// Exercise 1: Writing Your First Callback Function
console.log("Exercise 1: Writing Your First Callback Function");

function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}
function subtract(a, b) {
    return a - b;
}
function divide(a, b) {
    return a / b;
}

console.log(calculate(5, 3, add));      
console.log(calculate(4, 2, multiply)); 
console.log(calculate(20, 7, subtract));
console.log(calculate(10, 2, divide));



// Exercise 2: Using Callbacks with setTimeout
console.log("\nExercise 2: Using Callbacks with setTimeout");


function delayedMessage(message, delay, callback, secondCallback) {
    secondCallback("Hello, second callback!");
    setTimeout(() => {
        callback(message);
    }, delay);

}

delayedMessage("Hello, world!", 2000, 
    function(msg) {
        console.log(msg);
    }, 
    function(secondMsg) {
        console.log(secondMsg);
    }
);



// Exercise 3: Looping with Callbacks
console.log("\nExercise 3: Looping with Callbacks");

function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        if (callback(i) === false) {
            break;
        }
    }
}

repeatTask(3, function(index) {
    console.log("Iteration:", index);
    if (index === 2) {
        return false; 
    }
});
