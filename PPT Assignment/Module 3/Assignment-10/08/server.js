const express = require("express");
const app = express()

let counter = 1
const increment = (req, res)=> {
    counter++
    res.send({counter: counter})
}
const decrement = (req, res)=> {
    counter --
    res.send({counter: counter})
}

app.get("/", (req, res) => {
    res.send({counter: counter})
})

app.post("/increment", increment)
app.post("/decrement", decrement)


const PORT = 3000;
const LOCAL_HOST = "localhost"

app.listen(PORT, () => {
    console.log(`Server is running on http://${LOCAL_HOST}:${PORT}`);
})