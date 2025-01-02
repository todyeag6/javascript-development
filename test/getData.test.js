const { getData } = require(".index.js");

describe('getData function", function() {
    it ("should return an object constaining 3 bios", ()=>{
        const data = getData()
        expext(data)
    })