# Difference between var & let?
  
  The main difference between var and let in JavaScript is how they handle variable scoping and hoisting.

  - Variable Scoping:

  - var: Variables declared with var are function-scoped. This means that they are accessible 
    throughout the entire function in which they are declared, regardless of block boundaries.

  - let: Variables declared with let are block-scoped. They are limited to the block in which 
    they are defined, such as within an if statement or a for loop or inside a function. 
    Variables declared with let are not accessible outside of their block scope.

    Example:
    function example() {
        if (true) {
        var x = 10;
        let y = 20;
      }
        console.log(x); // Output: 10 (var is accessible outside the block)
        console.log(y); // ReferenceError: y is not defined (let is not accessible outside the block)
    }
    example();

    In the above code, x declared with var is accessible outside the if block, while y declared with 
    let is limited to the block scope and cannot be accessed outside of it.

  -  Hoisting:

  - var: Variable declarations using var are hoisted to the top of their function scope or global scope. 
    This means that even if a variable is declared later in the code, it can still be accessed before its 
    declaration. However, only the declaration is hoisted, not the assignment or initialization.

  - let: Variable declarations using let are also hoisted, but they are not initialized or accessible until 
    the actual declaration is encountered during runtime. This creates a Temporal Dead Zone (TDZ), as discussed 
    earlier, where accessing the variable before its declaration results in a ReferenceError.

    Example:
    console.log(x); // Output: undefined (var is hoisted)
    console.log(y); // ReferenceError: y is not defined (let is in TDZ)
    var x = 10;
    let y = 20;

  In the code above, x is hoisted and initialized with undefined, so it can be accessed before its declaration. 
  On the other hand, accessing y before its declaration throws a ReferenceError because it is in the TDZ.
