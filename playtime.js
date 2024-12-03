/*let age=25;
const nameo = 'Todd'
console.log(age,nameo);
    let num1=(15)
    let num2=(16)
    console.log(num1 + num2);

    const dob=(1977)
        console.log(dob);
        //let dob=(1455); const delcared above cant change

       let faveFruit = ['banana', 'apple', 'pear', 'plum', 'grape'];
        console.log(faveFruit[3]);

const auto = ['chevy', 'dodge', 'ford', 'Lambo'];
console.log(auto[3]);

const zippo = null;
console.log(typeof zippo);

const myAge = 47
const myCity = "KC"
console.log(`I am ${myAge} and I live in ${myCity}`);

let var1=("Changeable")
console.log(var1);

var1=("money talks");
console.log(var1);

const test = (15.55555)
console.log(typeof test);
let tests = (age);
console.log(typeof tests);

let person = {
    name:"John",
    age:30,
    city:"GrainValley"
};
 
  console.log(person.city, person.age, person.name);*/

  function areaRect(length, width) {
    return length*width
    
}
console.log(areaRect(45, 16));
console.log(areaRect(99, 99));
 
function compNum(num1, num2){
    return num1==num2//add another = and first example becomes false
}
console.log(compNum(45, "45"));
console.log(compNum(23, 23));
//conditions for odd or even return
let number = 16
if (number % 2 ===0){
    console.log("The number is even.");
}else{
    console.log("The number is odd");
    
}

let age = 45;
if (age < 18 || age > 25) {
    console.log("The person is either a child or a senior.");
}else{
    console.log("The person is neither");
}

//ternary operator for if/else only for simple simple
let loggedOut = true ? "Welcome" : "Please log in"
console.log(loggedOut);
let loggedIn = false ? "welcome" : "Log in fool"
console.log(loggedIn);

let var1 = 15
var1++
console.log(var1);
var1++
console.log(var1);
var1++
console.log(var1);
var1++
console.log(var1);
//math using += -= *= /+
let var2 = 50
let diff= var2 *= 5
console.log(diff);
// modulus to find remainders
let divider = 100 % 9
console.log(divider);

let number3 = 15;
if (number3 >= 10 && number3  <= 20){
    console.log("The number is between 10 and 20");
} else {
    console.log("The number is not between 10 and 20")
}

let hour=(15) 
    if (hour < 12) {
        console.log("good Morning");        
    } else {
        if (hour >= 12) {
            console.log("Good Afternoon");
        }
    }
    


















  
        
