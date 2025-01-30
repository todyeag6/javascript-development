/**Creates a class called 'Shape' with a method to calculate the area. 
 * Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. 
 * Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class. */

class Shape {
    calculateArea(){
        return 0;//default
    }
}
class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius
        }
        calculateArea() {
            return Math.PI * this.radius **2
        }
    }
class Triangle extends Shape {
        constructor(base, height) {
            super();
            this.base = base
            this.height = height
        }
        calculateArea() {
            return 0.5 * this.base * this.height;
        }
    }

const myCircle = new Circle(5);
const circleArea = myCircle.calculateArea();
console.log(`an area of a circle with ${myCircle.radius}: ${circleArea.toFixed(2)}`);
const myTri = new Triangle(10, 12);
const triArea = myTri.calculateArea();
console.log(`area of triangle with a base ${myTri.base} and height ${myTri.height}: ${triArea.toFixed(2)}`);