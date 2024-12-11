/**Write a Person class. Have 4 attributes that belong to the person. They should include the # to make them private. 
 * The constructor should have the same attributes as 4 arguments (parameters). Include the ‘this’ keyword and # inside your constructor. 
 * Your class should have getter and setter methods for each attribute. Include one method within your person class as a behavior of the class. */

class Person {
    #firstName
    #lastName
    #age
    #gender

    constructor(firstName, lastName, age, gender) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
        this.#gender = gender;
    }
    
    getAge() {
        return this.#age;
    }
    setAge() {
        this.#age = age;
    }
    getgender() {
        return this.#gender
    }
    setLastName() {
        this.#gender = gender
    }
    introduce() {
        console.log(
          `Hello, my name is ${this.#firstName} ${this.#lastName}. I am ${this.#age} years old and ${this.#gender}.`
        );
    }
}

const person = new Person('Jane', 'Doe', 28, 'female');
person.introduce(); 
const person1 = new Person('Tom', 'Clancy', 87, 'wierd');
person1.introduce(); 