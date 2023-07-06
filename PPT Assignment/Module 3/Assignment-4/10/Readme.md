# What is the purpose of the spread operator (...) in ES6?

  Spread Operator: The spread operator (...) allows the expansion of iterable objects like 
  arrays or strings into individual elements. It can be used for array concatenation, function 
  arguments, and object copying, providing a concise and flexible syntax.

  Example-1:

    const str = 'PWSKILLS';
    const charArray = [...str];

    console.log(charArray);
// Output: ['P', 'W', 'S', 'K', 'I', 'L', 'L', 'S']

  Example-2:

   const array1 = [1, 2, 3];
   const array2 = [4, 5, 6];

   const newArray = [...array1, ...array2];

   console.log(newArray);
// Output: [1, 2, 3, 4, 5, 6]

  eXAMPLE-3:

  function sum(a, b, c) {
      return a + b + c;
  }

  const numbers = [1, 2, 3];
  const result = sum(...numbers);

console.log(result);
// Output: 6




