/*Write a JavaScript function that returns a string that has letters in alphabetical order. (Hint: Utilize String sort() method).

Example string : 'webmaster'

Expected Output : 'abeemrstw'

Assume punctuation and numbers symbols are not included in the passed string.*/

function alphOrder(input) {
    let ordered = input.split('').sort().join('');
    return ordered;
}
console.log(alphOrder("zxytredsujhbhbjhgv"));
console.log(alphOrder("kjhbbkjherbggjhbhhgdzzgfvgjhgb"));

