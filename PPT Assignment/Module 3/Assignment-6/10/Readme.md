# What’s Super Keyword & What it does?

The super keyword in JavaScript is used to call functions or access properties on 
an object's parent or superclass. It provides a way to refer to the parent class 
and access its members from within a subclass. The super keyword is commonly used 
in constructor functions and method overrides to invoke the parent's constructor 
or method.


# Calling the Parent Constructor:
In a subclass constructor, the super() method is used to call the constructor of 
the parent class and initialize the inherited properties. It allows the subclass 
to inherit and set up the properties defined in the parent class.

class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // Calling the Parent constructor
    this.age = age;
  }
}

const child = new Child("Deepak", 28);
console.log(child.name); // Output: Deepak
console.log(child.age); // Output: 28

# Accessing Parent Methods:
The super keyword can be used to access and invoke methods defined in the parent class. 
It allows the subclass to extend or override parent methods while retaining access to the 
original implementation.

class Parent {
  greet() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
  greet() {
    super.greet(); // Calling the Parent method
    console.log("Hello from Child");
  }
}

const child = new Child();
child.greet();
// Output:
// Hello from Parent
// Hello from Child
