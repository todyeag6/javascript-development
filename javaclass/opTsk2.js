/*Write a function that takes 2 parameters. Using console log statements, utilize the below assignment

operators with your parameters.*/



const demoAssignOps = (a, b) => {
    console.log("a =", a);
    console.log("b =", b);

    let result = a;
    console.log("\nAfter '=': result =", result);

    result += b; 
    console.log("After '+=': result =", result);

    result -= b; 
    console.log("After '-=': result =", result);

    
    result *= b; 
    console.log("After '*=': result =", result);


    result /= b; 
    console.log("After '/=': result =", result);

    result %= b; 
    console.log("After '%=': result =", result);
};


demoAssignOps(15, 15);

