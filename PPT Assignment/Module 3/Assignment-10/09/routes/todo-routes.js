const express = require('express');
const router = express.Router();
const todoController = require("../controller/todo-controller");
const validateInput = require("../middlewares/todo-middleware")

router.get("/", todoController.viewAllTodos);
router.post("/add", validateInput, todoController.addTodos);
router.put("/update/:todo_number", todoController.updateTodos);
router.delete("/update/:todo_index", todoController.deleteTodos);

module.exports = router
