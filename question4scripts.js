let tasks = [];

document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    let taskInput = document.getElementById("taskInput").value;
    if (taskInput.trim() === "") {
        alert("Please enter a valid task!");
        return;
    }
    let taskId = tasks.length + 1;
    tasks.push({ id: taskId, name: taskInput });

    document.getElementById("taskInput").value = "";
    renderTasks();
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${task.name}
            <span>
                <button class="edit" onclick="editTask(${task.id})">Edit</button>
                <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
            </span>
        `;
        taskList.appendChild(li);
    });
}

function editTask(id) {
    let newTask = prompt("Edit task:");
    if (newTask) {
        let task = tasks.find(task => task.id === id);
        task.name = newTask;
        renderTasks();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}
