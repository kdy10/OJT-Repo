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
        alert("Please enter a task.");
        return;
    }
    taskText.textContent = taskInput;      
    newTask.appendChild(taskText);

    removeBtn.textContent = "Remove";       
    newTask.appendChild(removeBtn);

    const container = document.getElementById("task-card");       
    container.appendChild(newTask);

    removeBtn.onclick = function() {     
            container.removeChild(newTask);
        };
        
    setTimeout(function() {       
        if (container.contains(newTask)) {
            container.removeChild(newTask);
        }}, 5000);

    
    document.getElementById("task-input").value = '';
}

