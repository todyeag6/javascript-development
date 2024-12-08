/*Using your array of ice cream flavors from task 1, write a function and use the array’s join method to join all the items. The output should like the one in the image.
 Hint: The output is just one line of string.*/

 const iceCream = ["choc.", "straw", "neoplo", "mint", "choc. chip", "bunny tracks", "vanilla", "banana split", "cookies n cream", "egg nog"]
 for (item of iceCream) {
    // console.log(item);
    } 
const creamContainer = iceCream.join(", ");
console.log(creamContainer);
     
