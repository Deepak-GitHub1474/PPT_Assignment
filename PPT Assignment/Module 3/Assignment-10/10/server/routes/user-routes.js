const express = require("express");
const route = express.Router();
const { registerValidation, loginValidation, verifyUser } = require("../middlewares/user-validation");
const userController = require("../controllers/user-controllers");

// User Action Controller
route.get("/", verifyUser, userController.userActionController);

// User Register
route.post("/user/register", registerValidation, userController.userRegister);

// User Login
route.post("/user/login", loginValidation, userController.userLogin);

// Add New Blog
route.post("/blog/add", verifyUser, userController.addNewBlog);

// Get All Blog
route.get("/blog/", userController.getAllBlog);

// Get Blog by ID
route.get("/blog/:blogID", userController.getBlogByID);

// Update Blog 
route.patch("/blog/:id", verifyUser, userController.updateBlogByID);

// Delete Blog
route.delete('/blog/:id', verifyUser, userController.deleteBlogID);

// User Logout
route.get("/logout", userController.UserLogout);

module.exports = route;


