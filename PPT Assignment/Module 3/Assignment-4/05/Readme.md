# What is the difference between let and const in ES6?

- Variable Assignment:

- let: Variables declared with let can be reassigned with a new value. This means you 
  can assign a different value to a let variable after its initial assignment.

- const: Variables declared with const are read-only constants. Once a value is assigned 
  to a const variable, it cannot be reassigned. Attempts to reassign a const variable will 
  result in a runtime error.

  let x = 10;
  x = 20; // Valid
  console.log(x); // Output: 20

  const y = 10;
  y = 20; // Error: Assignment to constant variable.

- Initialization:

- let: Variables declared with let can be declared without an initial value. They will be 
  initialized with the value undefined by default.

- const: Variables declared with const must be initialized with a value at the time of declaration. 
  If a value is not assigned, it will result in a syntax error.

  let x; // Initialized with undefined
  const y; // Syntax Error: Missing initializer in const declaration
