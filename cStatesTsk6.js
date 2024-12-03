//Write a function to find the largest of three numbers.

const findBig = (num1, num2, num3) => {
    return Math.max(num1, num2, num3);
}
console.log(findBig(5, 23, 34));
console.log(findBig(5, 45.6, 34));
console.log(findBig(5, 1, 88));
console.log(findBig(5, -23, 3.4));
