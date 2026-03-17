// palindrome String

// method 1: using if-else
// function reverseString(str) {
//     let reversedStr = str.split('').reverse().join('')
//     if(reversedStr === str) {
//         console.log("true");
//     } else {
//         console.log("false");
        
//     }
// }

// method 2: using ternary operator
// const reverseString = (str) => {
//   let reversedStr = str.split('').reverse().join('')
//   console.log(reversedStr === str ? 'its palindrome' : 'not palindrome');
// }

// let str = "fuckoff"
// reverseString(str)



// method 3: ternary inline operator
const isPalindrome = (str) => str === str.split('').reverse().join('')

console.log(isPalindrome("fuckoff") ? 'yes' : 'no');


