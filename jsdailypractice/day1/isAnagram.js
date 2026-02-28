const isAnagram = (str1, str2) => {
    const clean1 = str1.toLowerCase().split("").sort().join("")
    const clean2 = str2.toLowerCase().split("").sort().join("")

    return clean1 === clean2
}

console.log(isAnagram("lodu", "ludo"))
console.log(isAnagram("world", "word"))
console.log(isAnagram("spine", "pine"))
console.log(isAnagram("nip", "pin"))
console.log(isAnagram("dog", "god"))