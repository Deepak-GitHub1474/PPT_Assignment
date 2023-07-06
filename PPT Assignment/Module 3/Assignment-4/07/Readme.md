# What’s difference between map & forEach?
  
  - forEach(): The forEach() method executes a provided function once for each element in an array. 
    It is primarily used for performing side effects, such as logging values, modifying external 
    variables, or calling other functions.
    The forEach() method does not return a value. It iterates over the array elements and applies 
    the provided function to each element.

  const numbers = [1, 2, 3, 4];
  numbers.forEach((num) => {
  console.log(num * 2); // Perform side effect
  });
  // Output: 2, 4, 6, 8


  - map(): The map() method creates a new array by calling a provided function on each element of the 
    original array. It is used to transform each element of an array and create a new array of the same 
    length with the transformed values.
    The map() method returns a new array containing the results of applying the provided function to each 
    element of the original array. The returned array has the same length as the original array.

  const numbers = [1, 2, 3, 4];
  const doubledNumbers = numbers.map((num) => {
  return num * 2; // Transform element
  });
  console.log(doubledNumbers);
// Output: [2, 4, 6, 8]


  



