## ......... Blog App .........

## Description

    This is a blog app which has many functionality like adding your own blogs,
    editing, deleting, and reading cpmplete blogs. Also users can watch public blogs too.
    there are user authorization is require to perform CRUD operation, which makes your
    blog secure.

## Usage

- TO use the application users needs to register first by filling all the inputs field.
- After successfully register user can use their email and password to login.
- As soon as user login, user will land on home page of blogs.
- Now user will have access to add their own blog, later can edit or delete their own blogs.
- There is My Blog navigation which will show only their own blogs.
- Easy to log out by just click on Logout button.

## API Endpoints

- **POST /user/register**: Register a new user.
- **POST /user/login**: Log in an existing user.
- **GET /logout**: Log out the user.
- **POST /blog/add**: Add a new blog.
- **GET /blog**: Get all blogs.
- **GET /blog/:blogID**: Get a blog by ID.
- **PATCH /blog/:id**: Update a blog.
- **DELETE /blog/:id**: Delete a blog.

- User Registration
  `POST /user/register`

- Request Body for User Registration

  `{
   "username": "Deepak Chaudhary",
   "email": "deep@example.com",
   "password": "yourPassword123"
 }`

- Response (Success):

  `{"msg": "User Registered Successfully"}`

- Response (Error - Email Already Exists):

  `{"msg": "Email already exists"}`

- Response (Error - Validation Failed):

  `{"msg": "All input fields are required"}`

- User Login
  `POST /user/login`

- Request Body for User Login:

  `{
    "email": "deep@example.com",
    "password": "yourPassword123"
  }`

- Response (Success):

  `{"msg": "User Login Successfully"}`

- Response (Error - Wrong Password):

  `{"msg": "Wrong Password"}`

- Response (Error - Account Not Found):

  `{"msg": "No Account associated with this email}`

- Response (Error - Validation Failed):

  `{"msg": "All input fields are required"}`

- Add new blog
  `POST /blog/add`

- Get all blog
  `GET /blog/`

- // Get Blog by ID
  `/blog/:blogID`

// Update Blog
`PATCH /blog/:id`

// Delete Blog
`DELETE /blog/:id`

// User Logout
`GET /logout`

# Error Handling

    In case of an error, the API will respond with an appropriate HTTP status code and an error
    message in the response body.

# Common HTTP Status Codes:

- 200 OK: The request was successful.
- 400 Bad Request: The request was invalid or could not be processed.
- 401 Unauthorized: Authentication failed or user is not authorized.
- 404 Not Found: The requested resource could not be found.
- 501 Not Implemented: The requested feature or functionality is not yet implemented.
  How to Run.
- Make sure you have Node.js and MongoDB installed on your system.
- Clone the repository and navigate to the root folder in your terminal.
- Create a .env file in the root folder and set the following environment variables:

  PORT=5000 # Set the port number for the server
  MONGO_URI=your_mongo_db_connection_string # Set the MongoDB connection string

# Install the dependencies mentioned below:

- Express.js: A web application framework for Node.js.
- Mongoose: A MongoDB ODM library for Node.js.
- Cors: A middleware for enabling CORS (Cross-Origin Resource Sharing).
- Dotenv: A module for loading environment variables from a .env file.
- Nodemon: A utility that helps in development by automatically restarting the server on code
  changes. (Development Dependency).

## Technologies and Dependencies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- jwt
- nodemon
- cookie-parser
- jsonwebtoken
- cors
- dotenv
