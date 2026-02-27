// const str = prompt("Enter a string: ");


// q1- Reverse a String
export default function reverseaString(str) {
   return str.split("").reverse().join("") //split is used to split a string and reverse() is used to reverse 
}

// const reversedStr = reverseaString(str)
// alert(reversedStr)

let input = prompt("Enter the string: ")
let result = reverseaString(input)

console.log(result)




