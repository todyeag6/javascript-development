/*Write a function to perform arithmetic operations on two numbers based on the operator name given. Ex.: If (2, 2, ‘add’) is given, do the addition operation and return the result. 
If (5, 10, ‘multiply’), do the multiplication operation and return the result.
Print an appropriate error message if a given operation name is invalid.*/


const calculate = (num1, num2, operation) => {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) {
                return "Error: Division by zero is not allowed.";
            }
            return num1 / num2;
        default:
            return "Error: Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'.";
    }
};


console.log(calculate(2, 2, 'add'));        
console.log(calculate(5, 10, 'multiply')); 
console.log(calculate(10, 0, 'divide'));  
console.log(calculate(7, 3, 'modulus'));   

