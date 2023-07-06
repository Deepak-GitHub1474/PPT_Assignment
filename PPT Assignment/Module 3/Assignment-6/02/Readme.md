# Explain this Keyword and Its Purpose?

in javascript, the `this` keyword is a special keyword that refers to the current 
execution context or the object on which a method is being invoked. Its value is 
determined dynamically based on how a function is called or how an object method 
is accessed.

The purpose of the this keyword is to provide a way to refer to the object that the 
function or method belongs to. It allows functions and methods to access and 
manipulate the properties and methods of the object they are associated with.

Example 1:

const person = {
  name: 'Deepak',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // Output: Hello, my name is Deepak

In above example, the greet method of the person object uses this to refer to the 
object itself. this.name accesses the name property of the person object.

Example 2:

function Person(name) {
  this.name = name;
}

const person = new Person('Deepak');
console.log(person.name); // Output: Deepak

Example 3:

// class Product {
//     constructor(p){      
//         this.name = p;    // this key word is the same object which we are calling Product{}
//     }
// };
// const p = new Product("iPhone");
// console.log(p);


