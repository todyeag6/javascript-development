//traditional
const myHouse = new Object(); 
myHouse.foundation = "concrete";
myHouse["windowsize"] = 20;//key must be entered as a string " "
myHouse.windows = "Storm";
myHouse["doorcolor"] = "White";
// console.log(myHouse);

//new school
const myHouse2 = {foundation: "dirt", windows: "glass", porch: "wrap around", yard: "green" }
//console.log(myHouse2.windows);//access with key name to get the value
//console.log(myHouse["foundation"]);//access using square bracket syntax must use value as a string

//add to object
myHouse.doorcolor = "black";
myHouse["foundation"] = "dirt"
//console.log(myHouse);


const str = "some string";
const ranNum= Math.random();
const objVar = {};
const yourHouse = {};

yourHouse.doorcolor = "purple";
yourHouse.roof = "shingles";
yourHouse[str] = "This key name is a string";
yourHouse[ranNum]="this key name is a random number"
yourHouse[objVar]="This key name is an object"
yourHouse[""] = "This key name is an empty string"

//console.log(yourHouse[{}]);//access when keyname is {}
//console.log(yourHouse[""]);


// dynamically define the object property
const happy = {
    [ranNum]: "This key name is a string",
    [str]: "Some String"
};
//console.log(happy);

// loop an object
for (property in myHouse) {
 console.log(`The key name is: ${property}, and the value: ${myHouse[property]}`);
}


    
