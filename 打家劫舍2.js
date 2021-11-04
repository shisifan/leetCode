var rob = function(nums) {
    const len = nums.length;
    if(len == 0) {
        return 0;
    } else if(len == 1) {
        return nums[0];
    } else if(len == 2) {
        return Math.max(nums[0], nums[1]);
    } else {
        return Math.max(robRange(nums, 0, len - 2), robRange(nums, 1, len - 1))
    }
};
let robRange = (nums, start, end) => {
    let first = nums[start];
    let second = Math.max(nums[start], nums[start + 1]);
    for (let i = start + 2; i <= end; i++) {
        const temp = second;
        second = Math.max(first + nums[i], second);
        first = temp;
    }
    return second;
}
console.log(rob([2,3,2]));