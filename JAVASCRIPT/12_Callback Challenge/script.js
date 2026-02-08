// 1. Custom Map Function
/* * DOCU: Goes through each item in the array, runs the callback function on it, and puts the results in a new array
 * @param {Array} num - The list of items to process
 * @param {Function} callback - The action to multiply each item by 2
 * @returns {Array} result1- A new list containing the doubled items
 * * Last Updated: 2026-02-08  
 * Author: Krishae Ann Dela Cruz  
 * Last Updated By: Krishae Ann Dela Cruz  
 */
console.log("1. Custom Map Function");

function customMap(num, callback) { 
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
/* * DOCU: Loops through the array and keeps only the items that pass the callback's validation.
 * @param {Array} num - The list of items to check
 * @param {Function} callback - A function that returns true to keep an item or false to skip it
 * @returns {Array} result2 - A new array containing only the items that passed the callback's validation
 * * Last Updated: 2026-02-08  
 * Author: Krishae Ann Dela Cruz  
 * Last Updated By: Krishae Ann Dela Cruz  
 */

console.log("\n2. Filter Function");

function filter(num, callback) { 
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
/* * DOCU: Checks if at least one item in the array passes the callback's validation.
 * @param {Array} num - The list of items to check  
 * @param {Function} callback - The test to run on each item  
 * @returns {boolean} result3 - Returns true if any item passes, otherwise returns false  
 * * Last Updated: 2026-02-08  
 * Author: Krishae Ann Dela Cruz  
 * Last Updated By: Krishae Ann Dela Cruz  
 */
console.log("\n3. Some Function");
function some(num, callback) { 
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
/* * DOCU: Checks if every single item in the array passes the callback's validation.
 * @param {Array} num - The list of items to check  
 * @param {Function} callback - The test to run on each item  
 * @returns {boolean} result4 - Returns true if all items pass; returns false if even one fails  
 * * Last Updated: 2026-02-08  
 * Author: Krishae Ann Dela Cruz  
 * Last Updated By: Krishae Ann Dela Cruz  
 */

console.log("\n4. Every Function");

function every(num, callback) { 
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
/* * DOCU: Loop through the array and combines all items into a single final value.
 * @param {Array} num - The list of items to combine
 * @param {Function} callback - A function that takes the current total and the next item to calculate a new total
 * @returns {number|any} result5 - The single value resulting from combining all items
 * * Last Updated: 2026-02-08  
 * Author: Krishae Ann Dela Cruz  
 * Last Updated By: Krishae Ann Dela Cruz  
 */
console.log("\n5. Reduce Function"); 

function reduce(num, callback) { 
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
/* * DOCU: Checks if a specific value or condition exists within the array.
 * @param {Array} num - The list of items to search through
 * @param {Function} callback - The condition used to find a specific item
 * @returns {boolean} result6 - Returns true if the item is found, otherwise returns false
 * * Last Updated: 2026-02-08  
 * Author: Krishae Ann Dela Cruz  
 * Last Updated By: Krishae Ann Dela Cruz  
 */
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