# What’s Async & Await Keyword in JavaScript

In JavaScript, the async and await keywords are part of the asynchronous programming model.
They provide a more readable and structured way to work with Promises and handle asynchronous 
operations and traditional try and catch to handle the error.

- Async: The async keyword is used to define an asynchronous function. It can be placed before 
  a function declaration, function expression, or arrow function. When a function is declared 
  as async, it always returns a Promise implicitly.

  async function fetchData() {
  // Asynchronous operations
  }

By using the async keyword, we can write asynchronous code that looks and behaves like synchronous 
code, allowing for a more sequential and readable programming style.

- Await: The await keyword is used within an async function to pause the execution until a Promise 
  is fulfilled or resolved. It can only be used inside an async function. When encountering the 
  await keyword, the execution of the async function is paused, and it waits for the Promise to 
  settle.

  async function processData() {
  const data = await fetchData();
  // Use the resolved data
  }

The use of await simplifies the handling of Promises and eliminates the need for explicit .then() 
and .catch() chains. It allows for better error handling by leveraging traditional try/catch blocks.



  
