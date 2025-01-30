/*Write a JS code to calculate the sum of digits in a number. Ex.: If 385 is given, the sum is 16. 
If 123 is given, the sum is 6.*/

const addDigits = (num) => {
    if (typeof num !== 'number' || isNaN(num)) {
        return "Not Valid"

    }
      num = Math.abs(num)
      const digits = num.toString()
       let sum = 0;

for (let index in digits) {
    sum += parseInt(digits[index]);

}
    return sum
}
console.log(addDigits(-123))
console.log(addDigits(6745));

// Instructor's feedback: Watch your indentations and spaces in your codes for easy readability and good code organization.
