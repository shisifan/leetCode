var removeElement = function(nums, val) {
    let ans = nums.length;
    for (let i = 0; i < ans;) {
        if (nums[i] == val) {
            nums[i] = nums[ans - 1];
            ans--;
        } else {
            i++;
        }
    }
    console.log(ans);
    return ans;
};
removeElement([3,2,2,3], 3);
removeElement([3,3],3);
