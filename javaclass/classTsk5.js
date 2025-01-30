/**Creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. 
 * Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. 
 * Override the display method to include the number of doors. */

// Vehicle Class Definition
class Vehicle {
    
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    displayDetails() {
      console.log(`Vehicle Details:`);
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log('--------------------------');
    }
  }
  
  class Car extends Vehicle {
    
    constructor(make, model, year, numberOfDoors) {
      super(make, model, year); 
      this.numberOfDoors = numberOfDoors;
    }

    displayDetails() {
      super.displayDetails(); 
      console.log(`Number of Doors: ${this.numberOfDoors}`);
      console.log('--------------------------');
    }
  } 
  
const myVehicle = new Vehicle('Dodge', 'Ram', 2020,);
const myCar = new Car('Chevy', 'Camaro', 2023, 2)
myVehicle.displayDetails();
myCar.displayDetails();
  
  