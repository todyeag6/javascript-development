//empty map collection using new key word
const mapOne = new Map()
mapOne.set("Kansas City", "Missouri");
mapOne.set("Dodge City", "Kansas");
mapOne.set("San Antonio", "Texas");
//console.log(mapOne);

//create a map collection using array syntax, can define immediately in line of code
const mapTwo = new Map([
    ["fruitOne", "grape"],
    ["fruitTwo", "plum"]
]);


// console.log(mapTwo);
// mapTwo.clear();
// console.log(mapTwo);
 const getDays=() => {
    const week=new Map()
    week.set(1, "Sunday");
    week.set(2, "Saturday");
    week.set(3, "Friday");
    week.set(4, "Thursday");
    week.set(5, "Wednesday")
    week.set(6, "Tuesday");
    week.set(7, "Monday");
    return week
 };

 //const weekSize = getDays().size;
 //const days=getDays()
 //const removedItem = days.delete(1);
 //console.log(days);
 //console.log(removedItem);

 //
 const accessMapItem = () => {
    const itemOne = mapOne.get("Kansas City");
    const itemTwo = mapTwo.get("fruitOne");
 
 //console.log(itemOne);
 //console.log(itemTwo);
 //console.log(mapOne.has("San Antonio"));
 //console.log(mapOne.has("San Ahggifntonio"));
}
 //accessMapItem()

 //loop a map collection
 //for(item of getDays()) {
   // console.log(item[1]);
//}
//using foreach
//getDays().forEach((value, key) => console.log(key + " and " + value));

console.log(mapOne.entries())
for(value of mapOne.entries()) {
    console.log(value);
    
}