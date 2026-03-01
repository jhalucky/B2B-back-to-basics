const lengthOfLongestSubstring = (str) => {
    let set = new Set()
    let left = 0;
    let maxLength = 0;

    for(let right = 0; right < str.length; right++) {
        // if duplicate found, shrink window from left

        while(set.has(str[right])) {
            set.delete(str[left]);
            left++;
        }

        set.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("abcddswe"));
console.log(lengthOfLongestSubstring("fcukyou"));
console.log(lengthOfLongestSubstring("tattooo"));
console.log(lengthOfLongestSubstring("ezsnippet"));
