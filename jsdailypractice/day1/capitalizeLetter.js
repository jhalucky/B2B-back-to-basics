let str = prompt("Enter the string : ")
const capitalizeLetter = (str) => {
    return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ")
}

// let str = prompt("Enter a str: ")

console.log(capitalizeLetter(str))