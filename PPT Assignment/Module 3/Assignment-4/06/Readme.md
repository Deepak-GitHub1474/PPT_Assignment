# What is template literals in ES6 and how do you use them?

- Template Literals: Template literals allow the creation of multiline strings and 
  provide string interpolation, enabling the embedding of expressions and variables 
  directly within strings using backticks (``) and `${}` placeholders.

- Basic Uses:

  const name = 'Deepak';
  const age = 28;

  const message = `My name is ${name} and I am ${age} years old.`;
  console.log(message);
// Output: My name is Deepak and I am 28 years old.

- Multiline Strings:
  
  const address = 
        `XYZ Main Street,
         City Name,
         Country`;

  console.log(address);
  
/* Output:
XYZ Main Street,
City Name,
Country
*/

- Expression Evaluation:

  const a = 10;
  const b = 5;

  const result = `The sum of ${a} and ${b} is ${a + b}.`;
  console.log(result);
// Output: The sum of 10 and 5 is 15.



