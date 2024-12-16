/**Write a function that takes one argument. Return the result of a new Promise. 
 * Inside the promise will be a setTimeout function that will contain the resolve instance. 
 
* Resolve the Promise with texts that says :
 * `This task was ran ${arg} times` The arg is your function argument. 
 
* Set the timeout interval to 2 seconds. */

function runTask(arg) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`This task was ran ${arg} times`);
        }, 2000); // Set timeout interval to 2 seconds
    });
}

runTask(5).then((message) => {
    console.log(message); 
});



/**Write an asynchronous function that has one argument. 
 * Have a console log saying "Let's start the task" above the function. 
 * Create a variable to capture the returned resolved value from the await function from Task 1. 
 * Pass the argument from this function into the await function. 
 * Create another console log statement to print out that variable. */

console.log("Let's start the task");

async function executeTask(arg) {
    // Await the result of the runTask function from Task 1
    const result = await runTask(arg);

    // Log the resolved value
    console.log(result);
}

// Call the function with an example argument
executeTask(3);

/**Write a for loop to iterate 5 times. 
 * Call the async method from task 2 inside the loop and pass in the index from the loop 
 as the parameter. for the function. 
 * The output should look like the one in the image. */

 
 console.log("Let's start the task");

 async function executeTask(arg) {
     const result = await runTask(arg);
     console.log(result);
 }
 
 // Func from Task 1 
 function runTask(arg) {
     return new Promise((resolve) => {
         setTimeout(() => {
             resolve(`This task was ran ${arg} times`);
         }, 2000);
     });
 }
 
 // For loop to call the async function 5 times
 for (let i = 0; i < 5; i++) {
     executeTask(i);
 }
 

