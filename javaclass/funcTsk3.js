//Change the function in Task 1 to an arrow function. Be sure to test this function using a console.log statement.

const joinStr = function (str1, str2) {
    let joined = (str1 + str2)
    return joined
}


console.log(joinStr("Hole in", " one"));

const joinStr2 = (input1, input2) => input1 + input2;
console.log(joinStr2("with a lil ", "elbow grease"));



