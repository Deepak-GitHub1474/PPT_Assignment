# What are the major features introduced in ECMAScript 6?
  
- ECMAScript defines the syntax, semantics, and features of the language, 
  and specifies how it should be implemented. 

# Major features in ECMAScript 6 are:

- Block-scoped Variables: The introduction of let and const keywords allows the declaration 
  of block-scoped variables, providing better control over variable scoping and reducing the 
  need for immediately invoked function expressions (IIFEs) to create new scopes.

- Arrow Functions: Arrow functions provide a concise syntax for writing function expressions. 
  They have lexical scoping of this, making it easier to capture the correct value of this within 
  the function. Arrow functions are especially useful in callbacks and for writing shorter and more 
  readable code.

- Classes: ECMAScript 6 introduced class syntax, providing a more convenient and familiar way to 
  define classes and work with object-oriented programming concepts. Classes can have constructors, 
  methods, inheritance, and static members, simplifying the creation of reusable and organized code.

- Template Literals: Template literals allow the creation of multiline strings and provide string 
  interpolation, enabling the embedding of expressions and variables directly within strings using 
  backticks (``) and `${}` placeholders.

- Destructuring Assignment: Destructuring assignment allows extracting values from arrays or objects 
  into individual variables. It provides a concise way to assign multiple values at once, making code 
  more expressive and reducing the need for temporary variables.

- Default Parameters: ECMAScript 6 introduced the ability to define default parameter values for function 
  parameters. This simplifies the handling of missing arguments by automatically assigning default values 
  when arguments are not provided.

- Spread Operator: The spread operator (...) allows the expansion of iterable objects like arrays or strings 
  into individual elements. It can be used for array concatenation, function arguments, and object copying, 
  providing a concise and flexible syntax.

- Promises: Promises provide a more robust way to handle asynchronous operations and avoid callback hell. 
  Promises represent the eventual completion or failure of an asynchronous operation and allow chaining of 
  operations and handling of errors using then() and catch() methods.