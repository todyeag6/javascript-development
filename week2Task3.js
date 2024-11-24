/*Given two strings below, concatenate them to produce ‘John Smith’.

const firstName = ‘John’

const lastName = ‘Smith’*/

const firstName = "John"
const lastName = "Smith"
// let name1 = `${firstName} ${lastName}`//using backtick for template literals using strings within ${} 

let name1 = firstName + " " + lastName;//+ operator combines strings, space needed to be added
console.log(name1)