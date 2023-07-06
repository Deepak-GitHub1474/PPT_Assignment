# What are Promises & Explain Some Three Method of Promise.

- Promises are objects in JavaScript that represent the eventual completion or failure 
  of an asynchronous operation. They provide a way to handle asynchronous code in a more 
  organized and manageable manner. A Promise can be in one of three states: pending, fulfilled, 
  or rejected.

# Methods:

- then() method:
  The then() method is used to handle the successful fulfillment of a Promise. It takes two 
  arguments: a success callback and an optional error callback. The success callback is executed 
  when the Promise is fulfilled, and it receives the resolved value as an argument. The error 
  callback is executed when the Promise is rejected, and it receives the rejection reason as an 
  argument. The then() method returns a new Promise, allowing for chaining of multiple then() calls.

  promise.then(
  function(value) {
    // Handle fulfillment
  },
  function(error) {
    // Handle rejection
  }
 );

- catch() method:
  The catch() method is used to handle the rejection of a Promise. It is similar to providing only the 
  error callback in the then() method. The catch() method allows to handle errors in a more concise 
  way by attaching an error callback to the Promise chain. It returns a new Promise.

  promise.catch(function(error) {
  // Handle rejection
  });

- finally() method:
  The finally() method is execute whether the Promise is fulfilled or rejected. It allows to perform 
  cleanup actions or finalize certain operations.
