// 1. Custom Map Function
console.log("1. Custom Map Function");

function customMap(num, callback) { //  loops thru each element in the array and do the callback, push the result tot he result array
    let result1 = [];  // added 1 to name so it wont conflict with others.
    for (let i = 0; i < num.length; i++) {
        result1.push(callback(num[i]));
    }
    return result1; 
}
let numbers = [1, 2, 3];
let doubled = customMap(numbers, 
    function(num) { 
        return num * 2; 
    });

console.log(doubled);



// 2. Filter Function
console.log("\n2. Filter Function");

function filter(num, callback) { // loops thru each element in the array and do the callback. if its return true, push the element to the filtered array
    let filtered = [];
    for (let i = 0; i < num.length; i++) {
        if (callback(num[i])=== true) {
            filtered.push(num[i]);
        }
    }
    return filtered;
}
let result2 = filter([1,2,3,4,15],   // added 2 to name so it wont conflict with others.
    function(val) { 
        return val<10; 
    });

console.log(result2); 



// 3. Some Function
console.log("\n3. Some Function");

function some(num, callback) { // loops thru each element in the array and do the callback. if it finds a num > 5, return true,  else return false.
    for (let i = 0; i < num.length; i++) {
        if (callback(num[i])=== true) {
            return true;
        }
    }
    return false;
}
let result3 = some([1,2,3,4],   // added 3 to name so it wont conflict with others.
    function(val) { 
        return val>5; 
    });
console.log(result3);



// 4. Every Function
console.log("\n4. Every Function");

function every(num, callback) { // loops thru each element in the array and do the callback. if it finds a num <= 0, return false,  else return true.
    for (let i = 0; i <num.length; i++) {
        if (callback(num[i])=== false) {
            return false;
        }
    }
    return true;
}

let result4 = every([1,2,3],    // added 4 to name so it wont conflict with others.
    function(val) { 
        return val>0; 
    });
console.log(result4); 



// 5. Reduce Function
console.log("\n5. Reduce Function"); 

function reduce(num, callback) { // loop thru each element in the array and combines/adds them into one value 
    let acc = 0;
    for (let i = 0; i < num.length; i++) {
        acc = callback(acc, num[i]);
    }
    return acc;
}

let sum = reduce([1,2,3], 
    function(acc, num) { 
        return acc + num; 
    });
console.log(sum);



// 6. Includes Check
console.log("\n6. Includes Check");

function includes(num, callback) {
    for (let i=0; i < num.length; i++) {
        if (callback(num[i]) === true) {
            return true;
        }
    }
    return false;
}

let result6 = includes([1,2,3],   // added 6 to name so it wont conflict with others.
    function(val) { 
        return val===2; 
    });
console.log(result6); 