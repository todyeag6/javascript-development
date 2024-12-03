/*Write a function to check if a triangle is equilateral, scalene, or isosceles.

Equilateral if values for all are equal.

Isosceles if side1 is equal to side2 or side2 is equal to side3.

Scalene if all sides are unequal.*/

const classTri = (side1, side2, side3) => {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
        console.log("Invalid sides for a triangle.");
        return;
    }

    if (side1 === side2 && side2 === side3) {
        console.log("Equilateral");
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        console.log("Isosceles");
    } else {
        console.log("Scalene");
    }
};


classTri(3, 3, 3);
classTri(3, 4, 4); 
classTri(3, 4, 5); 
classTri(-1, 2, 3); 





