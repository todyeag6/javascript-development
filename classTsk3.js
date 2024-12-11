/**Create a class called "Person" with properties for name, age and country. 
 * Include a method to display the person's details. 
 * Create two instances of the 'Person' class and display their details. */

// Person Class Definition
class Person {
    
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Country: ${this.country}`);
      console.log('========================');
        
    }
  }

const person1 = new Person('John Ashcroft', 30, 'United States');
const person2 = new Person('Don Juan', 25, 'Spain');
person1.displayDetails();
  
person2.displayDetails();
