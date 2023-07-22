# Explain Middlewares in NodeJS ?

Middleware is function in Node Js which is a special type of function which has control 
on `request`, `response`, `next`. middleware refers to a mechanism that allows you to 
add functionality to the request/response processing pipeline. 

When a request is made to a Node.js server, it goes through a series of middleware 
functions before reaching the final route handler. Each middleware function can perform 
certain tasks, modify the request/response objects, or terminate the request-response 
cycle.

Middlewares in Node.js can be used for a variety of purposes, such as request logging, 
authentication, authorization, error handling, parsing request bodies, and much more. 
They provide a flexible way to extend and customize the behavior of your application's 
request handling process.

<!-- Please check the index.js file where i demonstrated the self define middleware.
     There are bunch of inbuilt middleware to use. -->