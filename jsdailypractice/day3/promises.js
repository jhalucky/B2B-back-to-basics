const promiseNoOne = new Promise(function(resolve, reject) {
    setTimeout(function(){
         console.log("fuck you")
         resolve()
    },5000)
})

// promiseNoOne.then(console.log("Fuck you two times"));

promiseNoOne.then(function() {
    console.log("fuck you twice a day");
})