
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

    removeBtn.addEventListener("click", 
        function() {
            container.removeChild(newTask);
        });
}

