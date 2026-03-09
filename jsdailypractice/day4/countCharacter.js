const text = "Quick questions are quite common in quizzes.";

function countCharacter(str, char) {
    let count = 0

    for(let letter of str.toLowerCase()) {
        if (letter === char.toLowerCase()) {
            count++;
        }
    }

    return count;
}

console.log(countCharacter(text, "q"));
