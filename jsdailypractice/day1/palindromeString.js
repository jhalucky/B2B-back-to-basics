



// let str = prompt("Enter a string: ").toLocaleUpperCase()
// let newStr = reverseaString(str)


// function palindromeOrNot(str, newStr) {
    
//     if (str === newStr) {
//         console.log("It is palindrome")
//     } else {
//         console.log("Not a palindrome")
//     }
// }

// palindromeOrNot(str, newStr)


function isPalindrome(str) {
    const originalStr = str.toLowerCase()
    const reversedStr = str.split('').reverse().join('')
    return originalStr === reversedStr;
}
let str = prompt("Enter the str: ")
console.log(isPalindrome(str));
// console.log(isPalindrome("str"))

