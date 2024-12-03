//Write a function to check if an input is a number or not.

const isNum = (num) => {
    return typeof num === 'number' && !isNaN(num);
}
console.log(isNum(15))
console.log(isNum(15.0987));
console.log(isNum("a"));
