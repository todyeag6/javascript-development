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
for (property in myHouse) {}
 ////console.log(`The key name is: ${property}, and the value: ${myHouse[property]}`);
//

/////
/*
if (Object.hasOwn(myHouse, property)) {
    console.log(myHouse[property]);
    
}

const VolumeCalculater = {
    findCubeVol:function (side) {
        return side * 3
    },
    findCylindeVol: (cylinderRadius, cylinderHeight) => {
        return 3.14 * cylinderRadius **2 * cylinderHeight;
    }
};
console.log(VolumeCalculater.findCylindeVol(20,50));*/
/////objects can have mixture of properties
const animal = {
    type: "mammal",
    sound: () => console.log("roaor"),
    skin: "fur",
    gender: "male",
    arrayKey: [],
    objkey: {}

};
//animal.sound()
//console.log(animal.type);

class Person {
    #hairColor
    #skinColor
    constructor(firstName, lastName, eyeColor, hairColor, skinColor, footSize) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.eyeColor = eyeColor;
        this.footSize = footSize;
        this.#hairColor = hairColor;//can only be accessed with getter ssetters
        this.#skinColor =skinColor;  //can only be accessed with getter ssetters      
        }
        static staticProperty1= "This property only belongs to the class person itself."
        static staticMethodProp(){
            return "this method property only belong to class person"
        }
        run(){
            console.log("the person can run"); 
              
            }
            speak(language) {
                console.log(this.firstName = " speaks " + language);
    }
}

//const curtis = new Person("Curtis", "Axel", "blue", 45, "glows in the dark");
//const lilly = new Person("Lilly", "Axel", "blue", "brown", "invisible");
//console.log(Person.staticProperty1);
//console.log(Person.staticMethodProp());

class City {
    constructor(population, size, economy, name) {
        this.population = population;
        this.size = size;
        this.economy = economy;
        this.name = name;
    }
    grow(){
        console.log("It is growing rapidly");
        
    }
}
class KansaCity extends City {
    constructor(cityFountains) {
      super(

      )     
     this.cityFoountains = cityFountains
    }}
    const Kc= new KansaCity(10000, "Fairly good", "Kansas City", 5000);
    console.log(Kc.cityFoountains);
    