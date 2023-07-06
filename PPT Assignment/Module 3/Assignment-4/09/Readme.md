# How can you define default parameter values in ES6 functions?

- Default Parameters: ECMAScript 6 introduced the ability to define default parameter 
  values for function parameters. This simplifies the handling of missing arguments by 
  automatically assigning default values when arguments are not provided.

  function greet(name = 'Anonymous') {
      console.log(`Hello, ${name}!`);
  }

  greet();          // Output: Hello, Anonymous!
  greet('PW Skills');    // Output: Hello, PW Skills!

  In the example above, the greet() function has a parameter name with a default value of 'Anonymous'. 
  If no argument is provided when calling the function, or if the argument is undefined, the default 
  value will be used. When calling greet(), it outputs Hello, Anonymous!. When calling greet('PW Sills'), 
  it outputs Hello, PW Sills!.

# 

  function multiply(a, b = 2) {
        return a * b;
  }

  console.log(multiply(3));     // Output: 6 (b takes default value of 2)
  console.log(multiply(3, 4));  // Output: 12 (b is explicitly passed as 4)

  In this example, the multiply() function has a parameter b with a default value of 2. When calling 
  multiply(3), the default value is used, resulting in the output 6. When calling multiply(3, 4), 
  the provided argument 4 is used, resulting in the output 12.

