/*Write a function to check if a year is a leap year or not.

A leap year if it is divisible by 4 and not divisible by 100 OR divisible by 400.*/

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isLeapYear(1965))
  console.log(isLeapYear(1963))
  console.log(isLeapYear(1966))
  console.log(isLeapYear(1964))
