/*Write a function that takes two parameters. Using an if else statement, compare the two parameters

together using the == operator. Use a console log statement for the if block and else block that outputs

whether these two parameters are equal to each other. Test this function using both number and string

values.*/

function lieDetect(param1, param2) {
    if (param1==param2) {
        console.log("The two parameters are equal");
    
     } else {
        console.log("The two parameters are not equal");
        
    }
}
lieDetect(456, 456)
lieDetect("345, 345")
