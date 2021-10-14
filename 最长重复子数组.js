var findLength = function(nums1, nums2) {
    let res = [];
    for (let i = 0; i < nums1.length; i++) {
        for(let j = 0; j < nums2.length; j++) {
            if(nums1[i] == nums2[j]){
                res.push(nums1[i]);
            }
        }
    }
    return (Array.from(new Set(res))).length;
};
console.log(findLength([0,0,0,0,0], [0,0,0,0,0]));