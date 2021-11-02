// let containsNearbyDuplicate = function(nums, k) {
//     let flag = 0;
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[i] === nums[j]){
//                 if(Math.abs(i - j) <= k) {
//                     flag = 1;
//                     return true;
//                 }
//             }
//         }
//     }
//     if(flag === 0) {
//         return false;
//     }
// }
let containsNearbyDuplicate = function(nums, k) {
    let hash = {};
    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]] == null) {
            hash[nums[i]] = i;
        } else {
            let step = i - hash[nums[i]];
            if(step <= k) {
                return true;
            } else {
                hash[nums[i]] = i;
            }
        }
    }
    return false;
}
console.log(containsNearbyDuplicate([99,99], 2));