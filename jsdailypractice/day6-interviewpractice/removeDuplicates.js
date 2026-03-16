function removeDuplicates(arr) {
    console.log([...new Set(arr)]);
}

let arr = [1,2,3,4,4,4,4,5,5,6]
removeDuplicates(arr)