/*Write a JS code to find the number of digits in a number.
 Ex.: If 123 is given, there are three digits. If 5837547 is given, there are seven digits.*/String.lengeth

const countDigits=(num) => {
    if(typeof num !== 'number' || isNaN(num)){
        return "Not a valid number.";
                
    }
    num = Math.abs(num);
        return num.toString().length
        
        
     
     
}
console.log(countDigits(22))


console.log(countDigits(10e2));       
console.log(countDigits(5847));  
console.log(countDigits(-456));      
console.log(countDigits(0));        
