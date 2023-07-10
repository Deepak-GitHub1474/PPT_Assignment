let typingInput = document.getElementById("typing-input");
let addTodoBtn = document.getElementById("add-todo-btn");
let todosContainer = document.getElementById("todos-container");

addTodoBtn.onclick = () => {
    if (typingInput.value.length > 0) {
        let todoList = document.createElement("div");
        todoList.innerHTML =
            `${typingInput.value} <br>
                <p class="todo-status">Status: Pending</p>
                <button class="deleteBtn">Remove</button>
                <button class="mark-btn">Mark Completed</button>
                <button class="edit-task-btn">Edit Task</button>
           `;

        todosContainer.appendChild(todoList);
        todoList.className = "todo-list";

    } else {
        alert("Please write todo in the input box");
    }

    typingInput.value = "";
};

todosContainer.addEventListener("click", (event) => {
    let target = event.target;
    if (target.classList.contains("mark-btn")) {
        let todoStatus = target.parentNode.querySelector(".todo-status");
        todoStatus.innerHTML = "Status: Completed";
        target.style.backgroundColor = "#ffff00";
    } else if (target.classList.contains("deleteBtn")) {
        let todoList = target.parentNode;
        todosContainer.removeChild(todoList);
    }
});
