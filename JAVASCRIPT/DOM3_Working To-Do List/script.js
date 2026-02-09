/* * DOCU: Displays a temporary alert message with a custom color and hides it after 5 seconds.
 * @param {string} text - The message content to be displayed to the user
 * @param {string} color - The CSS color for the text ( "red" for errors/removal, "green" for success)
 * @returns {void} - Directly modifies the message element's display, text, and color
 * * Last Updated: 2026-02-09  
 * Author: Krishae Ann Dela Cruz  
 * Last Updated By: Krishae Ann Dela Cruz 
 */
function notification(text, color) {
    const message = document.getElementById("message");
    message.style.display = 'block';
    message.textContent = text;
    message.style.color = color;

    setTimeout(function() {
        message.textContent = '';
        message.style.display = 'none';
    }, 5000);
}

/* * DOCU: Adds a new task to the screen based on user input, with an option to remove it manually or auto-delete.
 * @param {None} - Reads the task text directly from the "task-input" element
 * @returns {void} - Dynamically creates and inserts task elements into the DOM
 * @throws {Alert} - Warns the user if they try to add an empty task
 * * Last Updated: 2026-02-09  
 * Author: Krishae Ann Dela Cruz  
 * Last Updated By: Krishae Ann Dela Cruz  
 */

function addTask(event) {

    event.preventDefault();
    const newTask = document.createElement("div");
    const taskText = document.createElement("p");
    const removeBtn = document.createElement("button");
    const taskInput = document.getElementById("task-input").value.trim();
    
    
    if (taskInput === "") {         
        notification("Please enter a task.", "red");
        return;
    }
    taskText.textContent = taskInput;      
    newTask.appendChild(taskText);
    notification("Task added successfully!", "green");
    

    removeBtn.textContent = "Remove";       
    newTask.appendChild(removeBtn);

    const container = document.getElementById("task-card");       
    container.appendChild(newTask);

    removeBtn.onclick = function() {     
        container.removeChild(newTask);
        notification("Task removed.", "red");
    };
        
    setTimeout(function() {       
        if (container.contains(newTask)) {
            container.removeChild(newTask);
            notification("Task auto-removed after 5 seconds.", "red");
        }}, 5000);

    
    document.getElementById("task-input").value = '';
}

