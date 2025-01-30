/*Write a function that takes 2 parameters. Using the below comparison operators, assign each to a const

variable. Write a console log statement using placeholders along with strings that describe each

operators followed by their output.*/

const demoCompOps = (a, b) => {
    // Comparison operators
    const isEqual = a == b; //  equality
    const isStrictEqual = a === b; // value and type equality
    const isNotEqual = a != b; // if values are not equal
    const isStrictNotEqual = a !== b; // if values or types are not equal
    const isLessThan = a < b; //  if a is less than b
    const isLessThanOrEqual = a <= b; //  if a is less than or equal to b
    const isGreaterThan = a > b; //  if a is greater than b
    const isGreaterThanOrEqual = a >= b; // if a is greater than or equal to b

    console.log(`${a} == ${b}: Checks if values are equal -> ${isEqual}`);
    console.log(`${a} === ${b}: Checks if values and types are equal -> ${isStrictEqual}`);
    console.log(`${a} != ${b}: Checks if values are not equal -> ${isNotEqual}`);
    console.log(`${a} !== ${b}: Checks if values or types are not equal -> ${isStrictNotEqual}`);
    console.log(`${a} < ${b}: Checks if a is less than b -> ${isLessThan}`);
    console.log(`${a} <= ${b}: Checks if a is less than or equal to b -> ${isLessThanOrEqual}`);
    console.log(`${a} > ${b}: Checks if a is greater than b -> ${isGreaterThan}`);
    console.log(`${a} >= ${b}: Checks if a is greater than or equal to b -> ${isGreaterThanOrEqual}`);
};


demoCompOps(10, 15);
