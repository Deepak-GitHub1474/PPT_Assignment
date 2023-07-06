# Explain Class in JavaScript?

In JavaScript, a class is a template or blueprint for creating objects that share 
common properties and behaviors. It provides a way to define and create objects based 
on a predefined structure.class syntax in JavaScript provides a cleaner and more structured 
way to define objects and their behaviors. It promotes code reusability, encapsulation, 
and object-oriented design principles. 

Example:

class Product {
    constructor(n, pr){         
        this.name = n;
        this.price = pr;
    }
};
const var1 = new Product("iPhone",10000);
console.log(var1);
const var2 = new Product("Samsung",1000);
console.log(var2);
