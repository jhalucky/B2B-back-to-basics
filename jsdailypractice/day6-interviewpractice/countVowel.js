let str = "fuckoff"

function countVowels(str) {
    let count = 0
    let vowels = "aeiou"

    for (let char of str.toLowerCase()) {
        if(vowels.includes(char)){
            count++;
        }
    }

    console.log(count);
    
}

// let str = "fuckoff"

countVowels(str)