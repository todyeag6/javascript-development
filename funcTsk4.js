/*Write a function that takes two parameters; first parameter is a first name, and second is a last name. 
The function prints out a full name. Capitalize the first letter for the first and last name.*/

const nameO = (first, last) => {
    let name1 = first.charAt(0).toUpperCase() + first.slice(1);
    let name2 = last.charAt(0).toUpperCase() + last.slice(1);
    console.log(`${name1}, ${name2}`);
    
}
nameO("tommy", "kilmo")