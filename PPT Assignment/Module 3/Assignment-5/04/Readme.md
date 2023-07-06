# What are the ways we have to handle Async Code in JS?

In JavaScript, there are several ways to handle asynchronous code and manage the flow of execution. 
These techniques allow to work with asynchronous operations, such as network requests, file I/O, 
timers, etc, in a structured and manageable manner. Here are some common ways to handle asynchronous 
code in JavaScript:

- Callbacks: Callbacks are a traditional way to handle asynchronous operations in JavaScript. 
  A callback is a function that is passed as an argument to another function and is invoked once the 
  asynchronous operation is complete. Callbacks can be used to execute code after an asynchronous 
  operation finishes or to handle errors. 

- Promises: Promises provide a more structured and readable way to handle asynchronous code. A promise 
  represents the eventual completion or failure of an asynchronous operation and allows to chain 
  multiple asynchronous operations together. Promises have three states: pending, fulfilled, or rejected. 
  They can be resolved with a value or rejected with an error.

- Async/await: Async/await is a modern syntax introduced in ECMAScript that allows for more concise and 
  synchronous-looking code when working with asynchronous operations.The async keyword is used to define 
  an asynchronous function, which returns a promise implicitly. Inside an async function, we can use the 
  await keyword to pause the execution and wait for a promise to resolve before proceeding.Async/await 
  greatly simplifies the syntax for handling promises and makes the code look more sequential and readable.

Example:

console.log("Start");

function executeAfterDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Delayed execution");
      resolve();
    }, 2000);
  });
}

async function main() {
  console.log("Next line of code");
  await executeAfterDelay();
  console.log("Last piece of code");
}

main();

console.log("End");

In this code, used an asynchronous function executeAfterDelay() that returns a promise. Inside this function, 
used setTimeout to introduce a delay of 2000 milliseconds (2 seconds) before executing the code inside the 
callback function. The resolve() call is used to fulfill the promise.

In the main() function, log "Next line of code" after the initial console.log("Start"). Then await the 
execution of executeAfterDelay() by using the await keyword. This causes the execution of main() to pause until 
the promise from executeAfterDelay() is resolved. Once the promise is resolved, "Delayed execution" is logged, 
and the execution of main() resumes to log "Last piece of code".