const str = prompt("Enter string: ");

const reverseWords = (str) => {
    return str.split(" ").reverse().join(" ");
}

console.log(reverseWords(str))
console.log(str)
console.log(reverseWords(str));
