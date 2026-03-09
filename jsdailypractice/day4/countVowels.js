// using for of loop

const word = "ANONymous"

const vowels = ['a','e','i','o','u']

// function countVowels(word, vowels) {
//     let count = 0;
//     for (const w of word.toLowerCase()) {
//         if (vowels.includes(w)){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels(word, vowels))


// using for loop

let count = 0;

for (let i = 0; i < word.length; i++) {
    if(vowels.includes(word[i])){
        count++;
    }
}

console.log(count);
