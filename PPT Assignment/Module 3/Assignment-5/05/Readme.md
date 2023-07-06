# What are Callbacks & Explain Callback Hell ?
- Callback: Callbacks are functions that are passed as arguments to other functions and are 
  executed at a later time or upon the completion of an asynchronous operation. They allow  
  to specify what should happen when a certain event or operation finishes.

- In JavaScript, callbacks are commonly used to handle asynchronous code, such as network 
  requests or file operations. When an asynchronous operation completes, instead of blocking 
  the program's execution, it invokes the provided callback function to handle the result or 
  error.

function greet(name, cbFunc) {
    console.log(`Hi ${name} this is main function`);
    cbFunc();
}

// callback function
function callbackFunc() {
  console.log('This is callback function');
}
// passing function as an argument
greet('Folks', callbackFunc)


- Callback Hell: Callback Hell is a situation that arises when working with multiple nested 
  callbacks, leading to code that is hard to read, understand, and maintain. It occurs when 
  there is excessive nesting of callbacks within callbacks, resulting in deeply indented and 
  hard-to-follow code structure.