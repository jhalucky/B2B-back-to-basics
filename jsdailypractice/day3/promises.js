const promiseNoOne = new Promise(function(resolve, reject) {
    setTimeout(function(){
         console.log("fuck you")
         resolve()
    },1000)
})

// promiseNoOne.then(console.log("Fuck you two times"));

promiseNoOne.then(function() {
    console.log("fuck you twice a day");
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Promise 2 needs to be resolved")
        resolve()
    },1000)
}). then(function() {
    setTimeout(function() {
        console.log("Promise 2 resolved");
    },1000)
})