function isPalindrome(str) {
    let newstr = str.split("").reverse().join("")
    if(newstr === str){
        console.log("is palindrome");
        
    }else {
        console.log("not palindrome");
        
    }
}

let str = "mam"

isPalindrome(str)