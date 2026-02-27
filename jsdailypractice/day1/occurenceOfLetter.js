// let str = prompt("Enter the string: ")

// let letter = "a"

// let count = 0

// for (let char of str) {
//     if (char === letter) {
//         count++
//     }
// }

// console.log(`${letter} occurs ${count} times`);


// method 2

let str = prompt("Enter the str: ")

let frequency = {}

for (let char of str) {
    if (frequency[char]) {
        frequency[char]++
    } else {
        frequency[char] = 1
    }
}

console.log(frequency)