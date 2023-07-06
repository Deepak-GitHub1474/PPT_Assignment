# Explain Hoisting in JavaScript.
  Hoisting in javascript is all about how the variable and function declared.
  What is the scope of variable and the function so during execution it give 
  the result accordingly.
    In JavaScript, when we declare a variable using the var keyword or declare 
    a function using the function keyword, these declarations are hoisted to the 
    top of their containing scope. This means that regardless of where the variables 
    and functions are declared within their scope, they are conceptually moved to the 
    top.

   - Variable Hoisting:
        console.log(x); // Output: undefined
        var x = 10;

    In above code, logging the x before the variable x is declared still it doesn't throw
    error. This is This is because the declaration var x is 
    hoisted to the top, so x exists within its scope, but it's initialized with the value 
    undefined. Therefore, when we log x, it prints `undefined`.

    - Function Hoisting:
        sayHello(); // Output: "Hello"
        function sayHello() {
        console.log("Hello");
        }
    
    In this example, the function sayHello is defined below the function call, but it still 
    executes without any error. This is because function declarations are also hoisted to the 
    top. So, when sayHello() is called, the function is already available.

    - Variable and Function Declarations Hoisting:
        var x = 10;
        function func() {
        console.log(x); // Output: undefined
        var x = 20;
        console.log(x); // Output: 20
        }
        func();

    In this example, there's a variable x defined outside the func function, and another variable 
    x defined within the function. Inside the function, the first console.log statement prints 
    undefined because the local variable x is hoisted to the top of the function scope, but it's 
    not yet assigned a value. The second console.log statement prints 20 because it refers to the 
    local variable x with the assigned value.

    To avoid confusion and unexpected behavior caused by hoisting, it's generally recommended to 
    declare variables and functions at the beginning of their respective scopes, making the code 
    more readable and easier to understand.



    