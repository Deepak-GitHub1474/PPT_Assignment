const express = require("express");
const app = express()

const randomNumber = (req, res)=> {
    const randomNum = Math.floor(Math.random() * 10 + 1)
    res.send({random: randomNum})
}

app.get("/random", randomNumber)


const PORT = 3000;
const LOCAL_HOST = "localhost"

app.listen(PORT, () => {
    console.log(`Server is running on http://${LOCAL_HOST}:${PORT}`);
})