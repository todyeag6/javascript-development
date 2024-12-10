/**Add two more item pairs to the previous map object in task 3. */
const myMap = new Map([
    ['JavaScript', 'For Beginners'],
    ['Python', 'For Beginners'],
    ['PHP', 'For Beginners']
]);


myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
    myMap.set("Ruby", "For Beginners.");
    myMap.set("C++", "For Beginners.");
});
