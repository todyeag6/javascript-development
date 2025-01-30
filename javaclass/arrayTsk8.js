//Write a function to remove duplicate items from an array.
// Ex.: removeDuplicates([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]) -> [1, 2, 3, 4, 5, 6, 7, 8]

function removeDuplicates(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Input must be an array.");
    }

    return arr.reduce((uniqueArr, currentItem) => {
        if (!uniqueArr.includes(currentItem)) {
            uniqueArr.push(currentItem);
        }
        return uniqueArr;
    }, []);
}


const numbers = [1, 1, 2, 2, 4, 4, 5, 4, 7, 8, 7, 3, 6];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); 
