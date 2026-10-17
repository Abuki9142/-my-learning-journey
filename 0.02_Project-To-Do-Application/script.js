// To-Do Application
// JavaScript Code

// ===============================
// Select HTML Elements
// ===============================

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const total = document.getElementById("total");
const completed = document.getElementById("completed");
const remaining = document.getElementById("remaining");

const clearCompletedBtn =
    document.getElementById("clearCompleted");

const filterButtons =
    document.querySelectorAll(".filters button");


// ===============================
// Variables
// ===============================

let tasks = [];

// Keep track of the current filter
let currentFilter = "all";


// ===============================
// Load Tasks From Local Storage
// ===============================

function loadTasks() {

    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {

        try {

            tasks = JSON.parse(savedTasks);

        } catch (error) {

            console.error("Failed to load tasks:", error);

            tasks = [];
        }
    }
}


// ===============================
// Save Tasks To Local Storage
// ===============================

function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}


// ===============================
// Add New Task
// ===============================

function addTask() {

    const taskText = taskInput.value.trim();

    // Check empty task
    if (taskText === "") {

        alert("Please enter a task");

        return;
    }

    // Create Task Object
    const newTask = {

        id: Date.now(),

        text: taskText,

        completed: false
    };

    // Add task to array
    tasks.push(newTask);

    // Save data
    saveTasks();

    // Clear input
    taskInput.value = "";

    // Display tasks
    displayTasks();

    // Update counter
    updateCounter();
}


// ===============================
// Add Button Event
// ===============================

addBtn.addEventListener("click", addTask);


// ===============================
// Enter Key Event
// ===============================

taskInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        addTask();
    }
});


// ===============================
// Display Tasks
// ===============================

function displayTasks() {

    taskList.innerHTML = "";

    let filteredTasks;

    // Apply current filter
    if (currentFilter === "completed") {

        filteredTasks = tasks.filter(function(task) {

            return task.completed === true;
        });

    } else if (currentFilter === "pending") {

        filteredTasks = tasks.filter(function(task) {

            return task.completed === false;
        });

    } else {

        filteredTasks = tasks;
    }


    // Create each task
    filteredTasks.forEach(function(task) {

        const li = document.createElement("li");

        li.setAttribute("data-id", task.id);


        // Add completed class
        if (task.completed) {

            li.classList.add("completed");
        }


        // Checkbox
        const checkbox =
            document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked = task.completed;


        checkbox.addEventListener(
            "change",
            function() {

                toggleTask(task.id);
            }
        );


        // Task text
        const taskText =
            document.createElement("span");

        taskText.textContent = task.text;


        // Edit button
        const editBtn =
            document.createElement("button");

        editBtn.textContent = "Edit";

        editBtn.classList.add("edit-btn");


        editBtn.addEventListener(
            "click",
            function() {

                editTask(task.id);
            }
        );


        // Delete button
        const deleteBtn =
            document.createElement("button");

        deleteBtn.textContent = "Delete";

        deleteBtn.classList.add("delete-btn");


        deleteBtn.addEventListener(
            "click",
            function() {

                deleteTask(task.id);
            }
        );


        // Add elements to li
        li.appendChild(checkbox);

        li.appendChild(taskText);

        li.appendChild(editBtn);

        li.appendChild(deleteBtn);


        // Add li to ul
        taskList.appendChild(li);

    });
}


// ===============================
// Complete / Uncomplete Task
// ===============================

function toggleTask(id) {

    tasks = tasks.map(function(task) {

        if (task.id === id) {

            task.completed = !task.completed;
        }

        return task;
    });

    saveTasks();

    displayTasks();

    updateCounter();
}


// ===============================
// Delete Task
// ===============================

function deleteTask(id) {

    tasks = tasks.filter(function(task) {

        return task.id !== id;
    });

    saveTasks();

    displayTasks();

    updateCounter();
}


// ===============================
// Edit Task
// ===============================

function editTask(id) {

    const task = tasks.find(function(task) {

        return task.id === id;
    });


    if (task) {

        const newText = prompt(
            "Edit your task:",
            task.text
        );


        if (
            newText !== null &&
            newText.trim() !== ""
        ) {

            task.text = newText.trim();

            saveTasks();

            displayTasks();
        }
    }
}


// ===============================
// Update Counter
// ===============================

function updateCounter() {

    // Total tasks
    const totalTasks = tasks.length;


    // Completed tasks
    const completedTasks =
        tasks.filter(function(task) {

            return task.completed === true;

        }).length;


    // Remaining tasks
    const remainingTasks =
        totalTasks - completedTasks;


    // Update HTML
    total.textContent = totalTasks;

    completed.textContent = completedTasks;

    remaining.textContent = remainingTasks;
}


// ===============================
// Filter Tasks
// ===============================

function filterTasks(filter) {

    // Save current filter
    currentFilter = filter;

    // Display tasks using current filter
    displayTasks();
}


// ===============================
// Filter Button Events
// ===============================

filterButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            const filter =
                button.dataset.filter;

            filterTasks(filter);
        }
    );
});


// ===============================
// Clear Completed Tasks
// ===============================

clearCompletedBtn.addEventListener(
    "click",
    function() {

        tasks = tasks.filter(function(task) {

            return task.completed === false;
        });

        saveTasks();

        displayTasks();

        updateCounter();
    }
);


// ===============================
// Start Application
// ===============================

loadTasks();

displayTasks();

updateCounter();