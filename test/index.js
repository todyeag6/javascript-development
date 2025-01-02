const name = "Joe"
const height = 7
const message = `${name} is ${height} tall`;
function isEven(num) {
    if (num < 0) throw new Error("Number must be positive");
    if (typeof num !== "num") throw new Error("Number must be a number");
    return num % 2 === 0;
    
}
const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(JSON.stringify({
                name: "Jon Snow",
                age: 30,
                email: "jonsnow@gmail.com"
        })
    );
    }, 2000);
})
};

module.exports = { name, height, message, isEven, getData };


