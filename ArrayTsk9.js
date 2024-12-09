/**There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

Example:

array1 = [1,0,2,3,4];

array2 = [3,5,6,7,8,13];

addTwoArrays([1,0,2,3,4], [3,5,6,7,8,13])

Expected Output : [4, 5, 8, 10, 12, 13] */



 
function addTwoArrays(array1, array2) {
        const maxLength = Math.max(array1.length, array2.length);
    const result = [];

        for (let i = 0; i < maxLength; i++) {
        const val1 = array1[i] !== undefined ? array1[i] : 0;
        const val2 = array2[i] !== undefined ? array2[i] : 0;
        result.push(val1 + val2);
    }

    return result;
}


const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];
const summedArray = addTwoArrays(array1, array2);
console.log(summedArray); 
