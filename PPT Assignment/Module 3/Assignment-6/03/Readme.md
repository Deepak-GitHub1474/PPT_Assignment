# What's Call Apply Bind Method & Difference Between them.

  In JavaScript, the call, apply, and bind methods are used to manipulate the `this` 
  value of a function and explicitly set the context in which the function is executed. 
  They are commonly used when we need to control how a function is invoked and specify 
  the value of this.

- call method:
  The call method is used to invoke a function and explicitly specify the value of this 
  and pass arguments individually. It takes the value to be used as this as the first 
  argument, followed by the individual arguments to be passed to the function.

  Example:

  function greet() {
    console.log(`Hello, ${this.name}`);
  }

  const person = {
    name: 'PW SKills'
  };

  greet.call(person); // Output: Hello, PW SKills

  In this example, the `call` method is used to invoke the greet function with the person object 
  as the value of this. It allows the greet function to access the name property of the person 
  object.

- apply method:
  The apply method is similar to the call method, but it accepts arguments as an array or an 
  array-like object. It allows us to pass an array of arguments to the function.

  Example:

  function greet(message, punctuation) {
    console.log(`${message}, ${this.name}${punctuation}`);
  }

  const person = {
    name: 'PW Skills'
  };

  greet.apply(person, ['Hello', '!']); // Output: Hello, PW Skills!

  In this example, the `apply` method is used to invoke the greet function with the person object 
  as the value of this. The arguments 'Hello' and '!' are passed as an array using apply, allowing 
  the greet function to receive them as separate arguments.

- bind method:
  The bind method is used to create a new function with a specified value for this, without invoking 
  the function immediately. It returns a new function that can be invoked later.

  Example:

  function greet() {
      console.log(`Hello, ${this.name}!`);
  }

  const person = {
    name: 'PW Skills'
  };

  const greetPerson = greet.bind(person);
  greetPerson(); // Output: Hello, PW Skills!

  In this example, the `bind` method is used to create a new function greetPerson with the person object 
  bound as the value of this. The greetPerson function can be invoked later, and it will always have the 
  person object as the this value.

#  Differences between call, apply, and bind are:

- call and apply invoke the function immediately, whereas bind returns a new function that can be invoked 
  later. 
  
- call accepts arguments individually, while apply accepts arguments as an array or array-like object.
  
- call and apply set the this value and invoke the function, whereas bind creates a new function with the 
  this value bound, but doesn't invoke it.

