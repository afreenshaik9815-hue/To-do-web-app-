function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskDate = document.getElementById("taskDate");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskInput.value} (${taskDate.value})</span><br><br>

        <button onclick="toggleComplete(this)">
            Complete
        </button>

        <button onclick="editTask(this)">
            Edit
        </button>

        <button onclick="deleteTask(this)">
            Delete
        </button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
    taskDate.value = "";
}

function toggleComplete(button) {
    button.parentElement.classList.toggle("completed");
}

function editTask(button) {
    const span = button.parentElement.querySelector("span");

    const updatedTask = prompt(
        "Edit your task:",
        span.textContent
    );

    if (updatedTask !== null && updatedTask !== "") {
        span.textContent = updatedTask;
    }
}

function deleteTask(button) {
    button.parentElement.remove();
}