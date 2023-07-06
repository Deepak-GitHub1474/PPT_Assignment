# How do you define an asynchronous function in JavaScript using async/await?

To define an asynchronous function in JavaScript using async/await, you simply 
use the async keyword before the function declaration. Here's the basic syntax:

async function functionName() {
  // Asynchronous code
}

Basic Example:

async function func(){
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = await response.json();
    console.log(data);
}
// func();