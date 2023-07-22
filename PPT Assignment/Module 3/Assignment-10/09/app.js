const express = require('express');
const bodyParse = require("body-parser")
const app = express()
app.use(express.json())
app.use(bodyParse.json())

const todoRoutes = require("./routes/todo-routes")

app.use("/", todoRoutes)

module.exports = app