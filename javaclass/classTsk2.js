/**Write a Person class. Have 4 attributes that belong to the person. They should include the # to make them private. 
 * The constructor should have the same attributes as 4 arguments (parameters). Include the ‘this’ keyword and # inside your constructor. 
 * Your class should have getter and setter methods for each attribute. Include one method within your person class as a behavior of the class. */

class Person {
    #firstName;
    #lastName;
    #age;
    #gender;

    constructor(firstName, lastName, age, gender) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
        this.#gender = gender;
    }
    
    get age() {
        return this.#age;
    }
    set age(age) {
        this.#age = age;
    }
    
    get gender() {
        return this.#gender;
    }
    set gender(gender) {
        this.#gender = gender;
    }

    get fullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    get firstName() {
        return this.#firstName;
    }
    get lastName() {
        return this.#lastName;
    }
}

const person = new Person('Jane', 'Doe', 28, 'female'); 
const person1 = new Person('Tom', 'Clancy', 87, 'weird'); 

console.log(person.fullName); // Jane Doe
console.log(person1.firstName); // Tom
console.log(person1.lastName); // Clancy

