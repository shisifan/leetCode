var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while(low <= high){
        const mid = Math.floor((high - low) / 2) + low;
        const num = nums[mid];
        if(num === target){
            return mid; 
        }else if(num > target){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    return -1;
};
console.log(search([-1,4,7,9,11,23], 11));