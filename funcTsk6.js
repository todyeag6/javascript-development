/*Write a JavaScript function that reverses a number. (Hint: Utilize String methods such as join(), split(), and reverse())

Example x = 12345;

Expected Output : 54321*/

function revNum(number) {
    let numRev = number.toString().split('').reverse().join('')
    return Number(numRev);
    
}
console.log(revNum(54321));
console.log(revNum(6544454335454));
console.log(revNum(-654e4654));//negatives not recognized as ints   .reverse?

// Instructor's feedback: Line 14 doesn't work. I think it is because the number is infinity or it passes the safe minimum that JS can handle. If you just console.log(-654e4654), you will see infinity printed out in the terminal.
