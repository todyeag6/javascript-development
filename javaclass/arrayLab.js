//create an array
const arrayOne = ["a","b", "c", "d", "e"]
//console.log(arrayOne);
const arrayTwo = new Array("you", "me", "he", "she")
//console.log(arrayTwo);
const arrayThree = ["me", 2, 3, "the", 31.43, -1, ["apple", "orange", "grape", [ "bob", "john"]]]
//console.log(arrayThree);
//const arrayItemContainer = arrayTwo[3];//access array item
//console.log(arrayItemContainer)

//arrayThree[2]=68//how to change the array
//console.log(arrayThree[2]);
//arrayThree[6][1]=5
//console.log(arrayThree);

//looping an array
//for (let index = 0; index < arrayThree[6][3].length; index++) {// looping contents of arrays
  //  console.log(arrayThree[6][3][index]);

   
//}
//loop  array with for/of
//for (item of arrayTwo) {
 //   console.log(item);
//}

//for/each
//arrayTwo.forEach(function processItem(itemFromForEAchMethoed){
 // console.log(itemFromForEAchMethoed);
    
//})
//identical results from both upper and below example

//arrayTwo.forEach((itemFromForEachMethoed) => {
   // console.log(itemFromForEachMethoed);
//})

//join
//const container = arrayTwo.join(", ");//joins item into a string
// console.log(container);

//slice
// const cont = arrayTwo.slice(0, 2);
// console.log(cont);

//pop
// const popUp = arrayTwo.pop()
// console.log(arrayTwo);

// const revArray = arrayTwo.shift()
// console.log(arrayTwo);             

//shallow copy of array

const arrayOneCopy=arrayOne
console.log(arrayOneCopy);
console.log(arrayOne);




