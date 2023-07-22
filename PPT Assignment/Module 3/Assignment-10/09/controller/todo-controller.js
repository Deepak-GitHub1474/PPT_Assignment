const todoList = require("../model/todo-model")

// GET
exports.viewAllTodos = (req, res) => {
    res.send(todoList)
    console.log("All todos list.")
}

// POST
let todo_number = 2
exports.addTodos = (req, res) => {
    const { todo_title, todo_deadline } = req.body
    const newTodo = {
        todo_number: ++todo_number,
        todo_title,
        todo_deadline
    }
    todoList.push(newTodo)
    res.status(201).send(newTodo)
    console.log("Todo created successfully.")
}

// PUT
exports.updateTodos = (req, res) => {
    const updatedTodo = +req.params.todo_number

    if (todoList[updatedTodo]) {
        todoList[updatedTodo] = req.body
        res.status(200).send(todoList[updatedTodo])
        console.log("Todo updated successfully");
    } else {
        res.status(400).send({
            message: "Todo not found."
        })
    }
}

// DELETE
exports.deleteTodos = (req, res) => {
    const todoIndex = +req.params.todo_index;
    if (todoList[todoIndex]) {
      todoList.splice(todoIndex, 1);
      res.status(200).send({
        message: "Todo deleted successfully"
      });
    } else {
      res.status(400).send({
        message: "Todo not found."
      });
    }
  };
  

