//below is called object destructure

const { name, height, message, isEven } = require( "./index.js");

describe("test variable", () => {
    it("should return Joe", () => {
        expect(name).toEqual("Joe")
    });

    test("height should be less than 7", () => {
        expect(height).toBeLessThan(9);
        expect(height).toBeGreaterThan(6);
    });
    it("Should include the name and height", ()=>{
        expect(message).toContain(name);
        expect(message).toContain(height.toString());
    });
    
});

describe("isEven function", () => {
    it("should return true if number is even", () => {
        expect(isEven(2)).toBe(true);
    });
})



