let str = prompt("Enter new str: ").toLowerCase()

let frequency = {}

// count letters

for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1
}

// find first non-repeating

for (let char of str) {
    if (frequency[char] === 1) {
        console.log("First non-repating letters: ", char)
        break
    }
}