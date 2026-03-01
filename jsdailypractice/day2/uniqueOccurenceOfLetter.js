// pseudocode

// input from the user
// convert it to lowercase
// find the frequency of each char using loop
// add 1 so that no char have 0 freq
// compare the freq of the char, with cond. freq[char]===1, and add break statement, so that after finding its first char it will come out of the loop

let str = prompt("Enter the str: ").toLowerCase();

let frequency = {}

// count char

for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1
}

// find first non-repeating letter

for (let char of str) {
    if (frequency[char] === 1) {
        console.log("first non-repeating char is: ", char)
        break
    }
}