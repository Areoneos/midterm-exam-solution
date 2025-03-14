// Task array to store tasks
let tasks = [];
let taskId = 1; // Auto-incrementing ID

// Function to add a new task
function addTask(name, description) {
    const task = {
        id: taskId++,
        name,
        description
    };
    tasks.push(task);
    console.log(`✅ Task added: ${name}`);
}

// Function to view all tasks
function viewTasks() {
    if (tasks.length === 0) {
        console.log("📌 No tasks available.");
        return;
    }
    console.log("\n📋 Task List:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id} | Name: ${task.name} | Description: ${task.description}`);
    });
}

// Function to update a task
function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (!task) {
        console.log(`⚠️ Task with ID ${id} not found.`);
        return;
    }
    task.name = newName;
    task.description = newDescription;
    console.log(`✏️ Task ID ${id} updated.`);
}

// Function to delete a task
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        console.log(`⚠️ Task with ID ${id} not found.`);
        return;
    }
    tasks.splice(index, 1);
    console.log(`🗑️ Task ID ${id} deleted.`);
}

// 🚀 Testing CRUD Operations
addTask("Buy groceries", "Get milk, eggs, and bread.");
addTask("Study JavaScript", "Practice Node.js and Express.");
viewTasks();

updateTask(1, "Buy groceries", "Get milk, eggs, bread, and fruits.");
viewTasks();

deleteTask(2);
viewTasks();
