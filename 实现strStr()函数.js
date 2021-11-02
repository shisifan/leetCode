// 1. indexOf()
let strStr = function (haystack, needle) {
    return haystack.indexOf(needle);
}

// 2. for循环
let strStr = function (haystack, needle) {
    if(needle === "") return 0;
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle[0]) {
            var flag = true;
            for(let j = 1; j < needle; j++) {
                if(haystack[i + j] != needle[j]) {
                    flag = false;
                    break;
                }
            }
            if(flag) return i;
        }
    }
    return -1;
}

//  3. substring
let strStr = function (haystack, needle) { 
    if(needle === "") return 0;
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle[0]) {
            if(haystack.substring(i, i + needle.length) === needle) 
                return i;
        }
    }
    return -1;
}
console.log(strStr("aaaaa", "bba"));

