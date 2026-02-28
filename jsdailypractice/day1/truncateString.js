// const truncateString = (str, length) => 
//     str.length > length ? str.slice(0, length) + "..." : str;


// console.log(truncateString("ARYAN IS LODU", 5));


// m2

const truncateString = (str, length) => {
    if(str.length <= length) {
        return str;
    }
    return str.slice(0, length) + "..."
}

console.log(truncateString("bsdk, boht saaf dil ke", "4"));
