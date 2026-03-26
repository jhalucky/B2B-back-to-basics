let button = document.getElementById("button")
let mode = "dark";
let color;




const changeBgColor = (color) => {
    button.addEventListener("click", () => {
        document.body.style.backgroundColor = color
    })
}

if(mode === "dark") {
    button.addEventListener("click", changeBgColor("red"))
} else {
   button.addEventListener("click", changeBgColor("brown"))
}