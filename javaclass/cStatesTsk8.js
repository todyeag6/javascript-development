//Write a function to find if a number is present in given range. The function has three parameters. Two are for the start and end of the range, and one is for the number to check.

const locNum = (start, end, num) => {
    if (num >= start && num <= end) {
        console.log(`${num} is located within the given range.`);
    } else {
        console.log(`${num} is not located within the range.`);
    }
};


locNum(460, 9000, 760);
locNum(100, 200, 50);   
locNum(300, 300, 300);  e
