// const product = {
//     productCategory: "Pen",
//     productName: "Parker Jotter Standard",
//     productPrice: 285,
//     isOfferAvailable: true,
//     discountPercent: 5, 
//     offerPrice: 270,
//     starsOnProduct: 4,
//     totalreviews: 7002
// }

// console.log(product);


// const profile = {
//     userName: "theluckyjha",
//     name: "Lucky(Peter's version)",
//     followers: 500,
//     following: 498,
//     bio: "crack and genius",
//     category: "Science and Technology",
//     noOfPosts: 12,
//     isVerfied: true,
// }

// profile.followers = 512

// console.log(profile);
// console.log(typeof profile.isVerfied);

// let str = prompt("Enter a string: ")


// const reverseString = (str) => {
//     let reversedStr = str.split("").reverse().join("")
//     console.log(reversedStr);
// }

// reverseString(str)

let count = 0;
let vowels = "aeiou";

let str = "function";

for (const i of str) {
    if(vowels.includes(i)){
        count++;
    }
    
}

console.log(count);

