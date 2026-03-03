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
   console.log("Promise 2 has been resolved");
   
})


const promiseThree = new Promise(function(resolve, reject) {
   setTimeout(function() {
    resolve({username: "Lucky Jha", email: "lucky@luckyworks.in"})
   },1000)
})

promiseThree.then(function(user) {
   console.log(user);
   console.log("Bhak bsdk");
   
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = false
        if(!error) {
            resolve({username:"bsdk", fullform: "bade saaf dil ka"})
        } else {
            reject("ERROR: Something went wrong")
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then((username)=> {
   console.log(username);
   
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("Finally the error is either resolved or rejected")
)

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({username:"js", password: "123"})
        } else {
            reject("ERR: JS went wrong")
        }

    },1000)
});

async function consumePromiseFive() {
   try {
     const response = await promiseFive;
     console.log(response);
   } catch (error) {
    console.log(error)
   }
}

consumePromiseFive();