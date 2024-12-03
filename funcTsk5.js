/*Write a function that calculates and returns an area of a circle.
 The function should have two parameters. One is a default parameter for the pi 3.14. 
 Fix the answer to two decimal places.*/
 
 function calcCircArea(radius, pi = 3.14){
    return (pi * radius * radius).toFixed(2);
 }
 console.log(calcCircArea(6));
 console.log(calcCircArea(12));
 console.log(calcCircArea(61));
 console.log(calcCircArea(-6));
 
// Instructor's feedback: Very good!
