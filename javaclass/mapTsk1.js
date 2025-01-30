/**Write a function with no parameters. Inside the function, create a map object of colors. 
 * Each key should be unique. Add a total of 6 colors to this map object. The function returns the map object when invok. */

function createColorMap() {
    const colorMap = new Map();

    // Adding six unique colors to the map
    colorMap.set('1', 'Red');
    colorMap.set('2', 'Green');
    colorMap.set('3', 'Blue');
    colorMap.set('4', 'Yellow');
    colorMap.set('5', 'Purple');
    colorMap.set('6', 'Orange');

    return colorMap;
}

const colors = createColorMap();

//colors.forEach((value, key) => {
    //console.log(`${key}: ${value}`);
//});

/**Write two functions for this task. The first function will have two parameters. 
 * Those parameters will be the value and key. 
 * The body of this function will have a console log statement to print out the key and value of a map object. 
 * The second function will have no parameters. It will use the function from task 1 and its forEach method. 
 * The parameter in the forEach method should be the name of the first function. 
 * The output should look similar to the one in the image. */

// Function 1: Logs the key and value of a map object
function logKeyValue(value, key) {
    console.log(`${key}: ${value}`);
}

function displayColorMap() {
    const colors = createColorMap(); // Obtaining the Map from Task 1
    colors.forEach(createColorMap);  // Using forEach with the logging function
    return colors;                   // Returning the Map object (optional based on requirement)
}

displayColorMap();
console.log(colors);



    
    
