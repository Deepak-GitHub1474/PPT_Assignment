# How can you destructure objects and arrays in ES6?

- Destructuring Assignment: Destructuring assignment allows extracting values from arrays or objects 
  into individual variables. It provides a concise way to assign multiple values at once, making code 
  more expressive and reducing the need for temporary variables.

- Destructuring Objects:
  To destructure objects, use curly braces {} to define the pattern and match it with the object's 
  structure. The pattern consists of variable names that correspond to the object's property names.

  Example:

    const person = {
      name: 'Deepak Chaudhary',
      age: 28,
      address: {
        city: 'Patna',
        country: 'INDIA'
      }
    };

    const { name, age, address: { city, country } } = person;

    console.log(name);    // Output: 'Deepak Chaudhary'
    console.log(age);     // Output: 28
    console.log(city);    // Output: 'Patna'
    console.log(country); // Output: 'INDIA'

- Destructuring Arrays:
  To destructure arrays, use square brackets [] to define the pattern and match it with the 
  array's elements. The pattern consists of variable names that correspond to the positions or 
  indices of the array elements.

  Example:

    const numbers = [1, 2, 3, 4];
    const [first, second, , fourth] = numbers;

    console.log(first);  // Output: 1
    console.log(second); // Output: 2
    console.log(fourth); // Output: 4


