/**Create a class called 'Rectangle' with properties for width and height. 
 * Include two methods to calculate rectangle area and perimeter.
 *  Create an instance of the 'Rectangle' class and calculate its area and perimeter. */


class Rectangle {
   
    #width;
    #height;

    constructor(width, height) {
      this.#width = width;
      this.#height = height;
    }

    getWidth() {
      return this.#width;
    }
  
    
    setWidth(newWidth) {
      if (newWidth > 0) {
        this.#width = newWidth;
      } else {
        console.error('Width must be a positive number.');
      }
    }
  
    getHeight() {
      return this.#height;
    }
  
    setHeight(newHeight) {
      if (newHeight > 0) {
        this.#height = newHeight;
      } else {
        console.error('Height must be a positive number.');
      }
    }
  
    calculateArea() {
      return this.#width * this.#height;
    }

    calculatePerimeter() {
      return 2 * (this.#width + this.#height);
    }
  
    displayDetails() {
      console.log(`Rectangle Details:`);
      console.log(`Width: ${this.#width}`);
      console.log(`Height: ${this.#height}`);
      console.log(`Area: ${this.calculateArea()}`);
      console.log(`Perimeter: ${this.calculatePerimeter()}`);
      console.log('--------------------------');
    }
  }

const myRectangle = new Rectangle(5, 10);
  
  
myRectangle.displayDetails();
  
console.log(`Original Width: ${myRectangle.getWidth()}`); 
console.log(`Original Height: ${myRectangle.getHeight()}`); 
  
  
myRectangle.setWidth(7);
myRectangle.setHeight(14);
  
 
myRectangle.displayDetails();
  