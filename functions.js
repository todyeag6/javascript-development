/*function printTxt(){ 
    console.log("Hello, world");
    }
printTxt();

function returnfunction(){
    return "Hello, Javascript";
}
returnfunction()
//wont display without console log*/

function prntinpt(message){
    console.log(message);
       
}
//prntinpt("needstext");
//prntinpt("100");
//prntinpt(100);




/*const funcBox = function(){
    console.log("I come from a function expression");    
};
funcBox();

const funcBox2 = function(length, width){
    console.log(length * width);    
};
funcBox2(20, 15);

/*arrow functions
const arrowFunc = () => {
    console.log("I come from an arrow function expression");
};
arrowFunc();
const arrowFunc2 = () => console.log("I come from an arrow function");
arrowFunc2() */


//scopes........................................................
function parentFunc(param1){
    const total = 100;
    // this is the inner function/nested
    function childFunc(){
        const result = total + param1
        console.log(result);
    }
    childFunc()
}
parentFunc(200)

//nesting function........................................................
function initializer(){
    const name = "Chrome Browser";
    function displayName(){
        console.log(name);
       
    }
    displayName()
}
initializer();

function outerFunc(param){
    const innerVar = 4
    function innerFunc(){
        return param + innerVar;
    }
    return innerFunc;
}

/*const functionHolder = outerfunction(6)
console.log(functionHolder());

console.log(outerFunc(6)());  //   ()used as placeholder to call innerFunc*/
//closure a closure function has access to variables in its parents function even after parent has executed
function makeCounter() {
    let count = 0;
    return function () { 
        return (count = count + 1);
    };
}
const counter = makeCounter()
console.log(counter());
console.log(counter());
console.log(counter());

const addFive = (function() {
    let total = 0;
    return function(){
        total = total + 5;
        return total;
    }
})();

addFive();
addFive();
console.log(addFive());

//default params
const subNum = (numb1, numb2 = 10)=>{
    return numb1 - numb2;

};
console.log(subNum(654));

const addNum = (n1, n2, n3, n4) => {
    return n1 + n2 + n3 + n4;
};
console.log(addNum(14, 13, 12, 13));


//rest param ... can hold as many arguements as required
const groupSample = (...param) => {
    console.log(param);
    
}
groupSample("a", "b", "c", "d")
groupSample("a", 2 , 2.29)








