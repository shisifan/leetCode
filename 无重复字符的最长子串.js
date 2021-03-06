function lengthOfLongestSubstring (s) {
    let window = {};
    let left = 0;
    let right = 0;
    let res = 0;
    while(right < s.length) {
        let c = s[right];
        right ++;
        window[c] = (window[c] || 0) + 1;
        while(window[c] > 1) {
            let d = s[left];
            left++;
            window[d]--;
        }
        res = Math.max(res, right - left);
    }
    return res;
}
console.log(lengthOfLongestSubstring("abcabcbb"));