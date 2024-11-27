/*Assigning the below string to their own variable. Include the empty spaces before and after the

quotation marks

“ This statement has empty spaces “

Log the string above in the terminal utilizing the below string methods.

a. includes()

b. at()

c. trim()

d. toLowerCase() */

const SENTENCE = " This statement has empty spaces "; 
//using include() to return true/false response
console.log(SENTENCE.includes("ateme"));
// console.log(SENTENCE.includes("thi"));//case sensitive = false
//at() uses index to locate character
// console.log(SENTENCE.at(10));
// console.log(SENTENCE.at(-3));
console.log(SENTENCE.at(-13));
//tolowercase use
console.log(SENTENCE.toLowerCase());
//using trim() for purpose removing spaces at front and back of sentence structure
console.log(SENTENCE.trim().toLowerCase());//chained methods