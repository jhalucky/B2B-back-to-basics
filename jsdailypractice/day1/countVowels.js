const vowels = ['a', 'e', 'i', 'o', 'u']

const str = prompt("Enter the new string: ").split('')
let count = 0

// for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//         count++
//     }
// }

// console.log("No. of vowels: ", count);

     

for (let char of str) {
 if (vowels.includes(char)) {
    count++
 }   
}

console.log("No of vowels: ", count)