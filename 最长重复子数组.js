var findLength = function(nums1, nums2) {
    let num = -1;
    let n = 0;
    for (let i = 0; i < nums1.length; i++) {
        n = 0;
        let p = i;
        for(let j = 0; j < nums2.length - i; j++) {
            
        }
        num = Math.max(num, n);
    }
    return num;
};
console.log(findLength([0,0,0,0,1], [1,0,0,0,0]));
// console.log(findLength([0,0,0,0,0], [0,0,0,0,0]));