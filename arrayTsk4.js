/*Write a function that takes a string as input and returns true if the string is a palindrome and false otherwise.
 Ex.: isPalindrome(“racecar”) -> true. isPalindrome(“hello”) -> false */

 function isPalindrome(str) {
    if (typeof str !== 'string') {
        return false;
    }

    const normalizedStr = str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = normalizedStr.length - 1;

    while (left < right) {
        if (normalizedStr[left] !== normalizedStr[right]) {
            return false; // Mismatch found
        }
        left++;
        right--;
    }

    return true; // No mismatches found
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));   
console.log(isPalindrome("No lemon, no melon")); 
