# What’s Constructor And Its Purpose?

In JavaScript, a constructor is a special method used for creating and initializing objects 
based on a class or function. It is called automatically when an object is instantiated using 
the new keyword. The purpose of a constructor is to set initial values, define properties and 
methods, and perform any necessary setup or initialization tasks for the object.

The constructor allows to define the initial state and behavior of an object and provides a 
blueprint for creating multiple instances of the same type of object.

Example-1:

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Creating an instance of the Person object using the constructor
const person1 = new Person("Deepak", 28);

In above example, the Person function acts as a constructor for creating person objects. It takes 
two parameters, name and age, which are used to set the initial values of the object's name and age 
properties.When the new keyword is used with the Person constructor, a new instance of the Person 
object is created. The constructor is automatically called, and the name and age arguments passed 
to the constructor are used to initialize the object's properties.

Example-2:

 class Product {
     constructor(){                             // Default constructor
         console.log("This is constructor");
    }

    display(){
         console.log("This is a product");
     }
 };
 const p = new Product();
