//Create a Map with three item pairs using an Array syntax.


const myMap = new Map([
    ['JavaScript', 'For Beginners'],
    ['Python', 'For Beginners'],
    ['PHP', 'For Beginners']
]);


myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
