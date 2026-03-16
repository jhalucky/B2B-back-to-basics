let str = "Hello, World!"

function reverseString(str) {
    newStr = str.split('').reverse().join('')
    console.log(newStr);
    
}
reverseString(str)