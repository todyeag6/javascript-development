/**Write a JS program to compute the sum and product of an array of integers.
 *  For example, [1, 2, 3, 4, 5, 6] is given, its sum is 21. Its product is 720. */

// Function to compute sum and product using a for loop
function computeSumAndProduct(arr) {
    let sum = 0;        
    let product = 1;    

    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];        
        product *= arr[i];    
    }

    return { sum, product }; 
}
const numbers = [1, 2, 3, 4, 5, 6, 7];
const result = computeSumAndProduct(numbers);

console.log(`Array: [${numbers.join(', ')}]`);
console.log(`Sum: ${result.sum}`);         
console.log(`Product: ${result.product}`); 
