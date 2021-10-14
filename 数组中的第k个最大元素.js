var findKthLargest = function(numb, k) {
    numb.sort((a, b) => b - a);
    return numb[k-1];
};
console.log(findKthLargest([3,2,1,5,6,4], 2));