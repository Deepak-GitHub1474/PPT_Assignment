# Explain SetTimeOut and setInterval.

setTimeout and setInterval are JavaScript higher order asynchronus functions that allow to 
schedule the execution of a callback function at a specified time or repeatedly after a certain 
interval. They are commonly used for implementing timers, animations, periodic updates, 
and other time-related operations in web applications.

- setTimeout:
  The setTimeout function schedules the execution of a callback function after a specified 
  delay (in milliseconds). It takes two arguments: the callback function to be executed and 
  the delay in milliseconds.

  `setTimeout(callback, delay);`
  
  After the specified delay, the JavaScript event loop will execute the callback function 
  asynchronously.

  Example:

  console.log("Start");

  setTimeout(() => {
    console.log("Callback executed after 2000 milliseconds");
  }, 2000);

  console.log("End");

- setInterval:
  The setInterval function is similar to setTimeout, but it repeatedly executes a callback 
  function at a specified interval. It takes two arguments: the callback function to be 
  executed and the interval duration in milliseconds. To stop the interval execution, you can 
  use the clearInterval function, passing it the interval ID returned by setInterval.

  `setInterval(callback, interval);`

let count = 0;

const intervalID = setInterval(() => {
  console.log(`Interval count: ${count}`);
  count++;

  if (count >= 5) {
    clearInterval(intervalID);
  }
}, 1000);

In this example, the callback function is executed every 1000 milliseconds (1 second). It logs the 
current count value and increments it. After count reaches 5, the clearInterval function is called, 
stopping the execution of the interval.


