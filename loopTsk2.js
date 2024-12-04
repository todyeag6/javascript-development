/*Using a for loop, display all the numbers divisible by 3. Your starting

number is 0 and your total number is 30. Utilize a modulus to obtain your results. The output should look like the one in the image.*/

function forTsk() {
    for (let number = 0; number <= 30; number++) {
        if (number % 3 === 0) {
            console.log(`${number} divisible by three`);
        }else{
            console.log(`${number} Not Divisible by three`);
            
        }
        }           
}
forTsk()