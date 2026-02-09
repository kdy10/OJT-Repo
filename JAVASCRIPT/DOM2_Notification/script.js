/* * DOCU: Creates a new notification with a message and a close button.
 * @returns {void} - Directly modifies by adding and removing elements
 * * Last Updated: 2026-02-09  
 * Author: Krishae Ann Dela Cruz  
 * Last Updated By: Krishae Ann Dela Cruz  
 */

function showNotification() {
    const newTask = document.createElement("div");
    const taskText = document.createElement("p");
    const removeBtn = document.createElement("button");

    taskText.textContent = "You have a new notification!";
    newTask.appendChild(taskText);
    
    removeBtn.textContent = "X";
    newTask.appendChild(removeBtn);

    const container = document.getElementById("notif-card");
    container.appendChild(newTask);

    removeBtn.onclick = function() {
            container.removeChild(newTask);
        };
}

