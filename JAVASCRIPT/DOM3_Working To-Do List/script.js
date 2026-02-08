
function addTask() {
    const newTask = document.createElement("div");
    const taskText = document.createElement("p");
    const removeBtn = document.createElement("button");
    const taskInput = document.getElementById("task-input").value.trim();
    
    if (taskInput === "") {         // if empty input
        alert("Please enter a task.");
        return;
    }
    taskText.textContent = taskInput;       // add task text to p
    newTask.appendChild(taskText);

    removeBtn.textContent = "Remove";       // add remove button to task
    newTask.appendChild(removeBtn);

    const container = document.getElementById("task-card");        // insert task to container 
    container.appendChild(newTask);



    removeBtn.addEventListener("click",         // remove task on click
        function() {
            container.removeChild(newTask);
        });
        
    setTimeout(function() {        //  remove task after 5 seconds
        if (container.contains(newTask)) {
            container.removeChild(newTask);
        }}, 5000);
}

