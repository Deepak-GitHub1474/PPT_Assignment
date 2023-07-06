# Explain Temporal Dead Zone?
  
  The Temporal Dead Zone (TDZ) in JavaScript occurs when accessing a variable 
  before it is declared. When using the let and const keywords to declare variables, 
  they are hoisted to the top of their block scope, similar to how var declarations 
  are hoisted. However, unlike var, variables declared with let and const remain 
  uninitialized in the TDZ until the point of declaration.

  The TDZ behavior applies only to block-scoped variables declared with let and const. 
  Variables declared with var are also hoisted but do not have a TDZ. They are initialized 
  with the value undefined during hoisting.

  To avoid Temporal Dead Zone situation, Declare variables at the beginning of the scope 
  or block where they are used, Which ensure that they are accessible at the point of usage. 
  This helps to prevent errors caused by accessing variables of TDZ.

  console.log(x); // Output: ReferenceError: x is not defined
  let x = 10;

  console.log(x); // Output: ReferenceError: x is not defined
  const x = 10;

  In the code above, we try to access the variable x before its declaration. However, instead 
  of outputting undefined, it throws a ReferenceError because we are accessing x within its TDZ. 
  Only after the declaration of x is encountered will it be accessible.

  console.log(x); // Output: ReferenceError: x is not defined
  const x = 10;
  Similarly, when using const, the TDZ behavior is the same. Accessing x before 
  its declaration will result in a ReferenceError.



