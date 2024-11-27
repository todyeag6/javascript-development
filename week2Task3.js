/*Given two strings below, concatenate them to produce ‘John Smith’.

const firstName = ‘John’

const lastName = ‘Smith’*/

const firstName = "John"
const lastName = "Smith"
// let name1 = `${firstName} ${lastName}`//using backtick for template literals using strings within ${} 
<<<<<<< HEAD
// let name1 = `${firstName} ${lastName}`
let name1 = `${firstName} ${lastName}`
let name2 = `${lastName} ${firstName}`
console.log(name2 + " " + name1);
//lastName  Name1&2
const nam1 = `${firstName} ${name2} ${name1} ${lastName}`;
console.log(nam1)
console.log(nam1 + " " + name2 + " " + lastName + " " + firstName);
=======

let name1 = firstName + " " + lastName;//+ operator combines strings, space needed to be added
console.log(name1)
console.log(firstName.concat(" ", lastName))
>>>>>>> da8112221a26f2acb95fcdda9f2fd01e82c5247a
