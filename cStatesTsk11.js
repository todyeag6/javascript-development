/*Write a function to find the number of days in a given month.

Hints:

Month 2 is 29 days. Month 2 in a leap year is 28 days.

Months 4, 6, 9, and 11 have 30 days.

The rest is 31 days.*/

const manyDays=(month, year) => {
    if(month < 1 || month > 12){
        return;
    }
    if(month == 2) {
        if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            return 29;
          } else {
            return 28;
          }
        }else if (month == 4 || month==6 || month==9 || month==11) {
            console.log("month has 30 days");
        }else{
            console.log("month has 31 days.");
            
        }
            
}
console.log(manyDays(4,  2011));


