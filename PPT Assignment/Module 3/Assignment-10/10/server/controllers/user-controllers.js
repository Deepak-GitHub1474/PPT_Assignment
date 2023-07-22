const UserModel = require("../models/user-model");
const PostModel = require("../models/post-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// New User blog update delete controll
exports.userActionController = (req, res) => {
    return res.json({ email: req.email, username: req.username })
}

// User Register
exports.userRegister = (req, res) => {
    const { username, email, password } = req.body;

    // Check if the email already exists in the database
    UserModel.findOne({ email: email })
        .then(existingUser => {
            if (existingUser) {
                // If email already exists, send a response indicating it
                res.status(400).send({ message: "Email already exists" })
            } else {
                // If email is unique, hash the password and create the new user
                bcrypt.hash(password, 10)
                    .then(hash => {
                        UserModel.create({ username, email, password: hash })
                            .then(user => {
                                // If user is created successfully, send the success response
                                res.status(200).send({ message: "Successfully registered", user: user });
                            })
                            .catch(err => res.json(err))
                    })
                    .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));
};


// User login controller
exports.userLogin = (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ email: user.email, username: user.username },
                            "jwt-secret-key", { expiresIn: "1d" })
                        res.cookie("token", token)
                        res.send("Success")
                    } else {
                        res.status(401).send({ msg: "Wrong Password" })
                    }
                })
            } else {
                res.status(404).send({ msg: "No Account associated with this email" })
            }
        })
}

// Add new blog
exports.addNewBlog = (req, res) => {
    const { title, description, file, email } = req.body;

    PostModel.create({
        title: title,
        description: description,
        file: file,
        email: email
    })
        .then(result => res.json("Success"))
        .catch(err => res.json(err))
}

// Get all blog
exports.getAllBlog = (req, res) => {
    PostModel.find()
        .then(posts => res.json(posts))
        .catch(err => res.json(err))
}

// get blog by id
exports.getBlogByID = (req, res) => {
    const blogID = req.params.blogID
    PostModel.findById({ _id: blogID })
        .then(post => res.json(post))
        .catch(err => console.log(err))
}

// Update blog by id
exports.updateBlogByID = (req, res) => {
    PostModel.findByIdAndUpdate(
        { _id: req.params.id },
        {
            title: req.body.title,
            file: req.body.file,
            description: req.body.description
        }
    ).then(result => res.json("Success"))
        .catch(err => res.json(err))
}

// Delete Blog
exports.deleteBlogID = (req, res) => {
    PostModel.findByIdAndDelete({ _id: req.params.id })
        .then(result => res.json("Success"))
        .catch(err => res.json(err))
}

// User Logout
exports.UserLogout = (req, res) => {
    res.clearCookie("token");
    return res.json("Success")
}