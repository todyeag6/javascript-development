/*Write a function that takes 1 parameter. Using a switch statement that takes the parameter, and the

below table, output the description using a console log statement. Ensure that a default message

outputs ‘Not a valid grade’ in the switch. Test this function using different parameters.
E Excellent

V Very Good

G Good

A Average

F Fail */

const evalGrade = (grade) => {
    switch (grade) {
        case "E":
            console.log("excellant");            
            break
        case "V":
              console.log("Very GOOD");            
              break
        case "G":
              console.log("good");            
              break
        case "A":
              console.log("average");            
              break 
        case "F":
                console.log("fail");            
                break 
        default:
            console.log("Not a valid grade.");            
            break;
    }
}

evalGrade("E");

