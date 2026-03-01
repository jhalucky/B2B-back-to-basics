const isAnagram = (str1, str2) => {
    const cleaned1 = str1.toLowerCase().split("").sort().join("")    
    const cleaned2 = str2.toLowerCase().split("").sort().join("")    

    return cleaned1 === cleaned2;
}

console.log(isAnagram("silent","listen"))
console.log(isAnagram("tip","pit"))
console.log(isAnagram("ludo","lodu"))
console.log(isAnagram("world","word"))
console.log(isAnagram("dog","god"))