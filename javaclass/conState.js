/*simple simple if/else java will not go past if statement if there is no else to run
if(15>10){
    console.log("condition is true");
}else {
    console.log("This Condition is false");*/
    
/*
const ifExamp=(param) => {
     console.log("Before if statement.");

        if (param =="John") {                                                                                                                                                                                                  }
        console.log(`The param value is ${param}`);
    }

        console.log("After if statment.");

        const elseExamp = (param) => {
            if (param =='JavaScript'){
                console.log("The condition is true.");
            } else {
                console.log("The condition is false.");
                console.log("NO GOOD DUDE.");
            }
                
                
            }
            elseExamp("JavaScrt")

/*else if  statments
const examp = (param) => {
if (param <=5) {
    console.log("First check is true.");
    } else if (param <= 5){
    console.log("Second check is true.");
} else if (param <= 5) {
    console.log("THird check is tru ");
    
}
}
examp(10)*/
//logical ops with if statement


const logIfExamp = (num1, num2) => {
    if (num1 == 10 && num2 > 10){
        console.log("both are true.");
    } else {
        console.log("one or both are not true.");
}
if (num1 <= 9 || num2 >= 20){
    console.log("One of the conditions is true.");
}else {
    console.log("Both are False");
    
    }
    
}
logIfExamp(10, 20)    
// ternary ops ? :
const ternOps=(num1) => {
    const result= num1 > 10? "The value of num/param is greater than 10." : "is not greater than 10."
    

return num1 > 10
}
console.log(ternOps(15)); 

//switch statement requires break keyword
/*switch("Rgreen") {
    
    case "RED":
    console.log("FROM RED");
        break;
    case "Rgreen":
    console.log("FROM Rgreen")
        break;
    case "blue":
    console.log("FROM blue");
     default:
    console.log("This is from default.");
    break;
        
}*/

switch("Yes") {
    
    case "RED":
    console.log("FROM RED");
        break;
    case "Yes":
    console.log("FROM Rgreen")
        break;
    case "No":
    console.log("FROM blue");
     default:
    console.log("This is from default.");
    break;
        
}



    
        
        


