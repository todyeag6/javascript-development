/**Write JS code to check if an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] includes a given value. 
 * Ex.: If 8 is given, print “8 is present in the array.” If 30 is given, print “30 is not present in the array.” */

// Function to check if a value is present in the array using indexOf
function checkValueWithIndexOf(arr, value) {
    if (arr.indexOf(value) !== -1) {
        console.log(`${value} is present in the array.`);
    } else {
        console.log(`${value} is not present in the array.`);
    }
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
checkValueWithIndexOf(numbers, 8);  // Output: 8 is present in the array.
checkValueWithIndexOf(numbers, 30); // Output: 30 is not present in the array.
