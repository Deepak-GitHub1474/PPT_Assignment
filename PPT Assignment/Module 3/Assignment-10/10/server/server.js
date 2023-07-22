// Dependencies:
const express = require("express");
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config();

// Express Instance
const server = express();

// Middlewares
server.use(express.json());

server.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}))

server.use(cookieParser());
server.use(express.static("public"))

// User Routing
const userRoutes = require("./routes/user-routes")
server.use("/", userRoutes)

// DB
const connectDB = require('./config/db');

// Listening to server
const PORT = process.env.PORT || 8000

server.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on http://localhost:${PORT}`);
});

