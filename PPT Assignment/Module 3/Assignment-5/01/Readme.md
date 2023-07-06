# What’s difference between Synchronous and Asynchronous?

Synchronous and Asynchronous are two different ways of executing tasks or operations in JavaScript. 
They refer to the timing and order in which tasks are performed and how the program handles the flow 
of execution.

# Synchronous: 
- In a synchronous operation, each task must complete before moving on to the next task. 
  The program waits for a task to finish before proceeding to the next line of code. Synchronous 
  execution refers to a sequential and blocking process. 

- Synchronous execution is single-threaded, meaning only one task is performed at a time. During 
  synchronous execution, if a task takes a long time to complete, the entire program or application 
  may be delayed or appear unresponsive until the task is finished.

# Asynchronous:

- Asynchronous execution allows tasks to start, run, and complete independently of each other and the 
  main program flow. In an asynchronous operation, tasks can be initiated and run concurrently without 
  blocking the program's execution.

- Asynchronous operations typically involve non-blocking I/O, network requests, timers, or event-driven 
  programming models. When an asynchronous task is initiated, the program does not wait for its completion 
  but proceeds to the next line of code. Asynchronous operations often involve callbacks, promises, or 
  async/await syntax to handle the completion or errors of asynchronous tasks.

Example:

  let count = 1;

  console.log(`First console count: ${count++}`);

  setTimeout(() => {
      console.log(`Inside setTimeout, Second log count: ${count++}`);
  }, 10000);

  console.log(`Third log count: ${count++}`);

In above example,

let count = 0;
console.log(`Execution Count Star: ${count++}`);
console.log(`Execution Count : ${count++}`);

lines of code are executed sequentially in a synchronous manner. The program waits for each line to 
complete before moving on to the next line and below code allows tasks to start, run, and complete 
independently of each other and the main program flow.

setTimeout(() => {
    console.log(`Inside setTimeout, Execution Count: ${count++}`);
}, 10000);

The setTimeout function schedules the execution of the callback function after a specified delay of 
10,000 milliseconds (10 seconds) in this case. It does not block the program's execution but instead 
registers the callback function to be executed later asynchronously. The program continues to execute 
the next lines of code without waiting for the callback to be invoked.

After the delay of 10 seconds, the callback function inside the setTimeout will be executed asynchronously, 
and the corresponding console.log statement will be logged. The exact timing of this asynchronous execution 
depends on the browser or environment.