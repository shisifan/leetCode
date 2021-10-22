function largestDiff(arr) {
    let res = [];
    if(arr.length === 0 || arr.length === 1) {
        return 0;
    }
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            res.push(Math.abs(arr[i]-arr[j]));
        }
    }
    
    return res.sort((a, b) => b - a)[0];
}
// console.log(largestDiff([-1, 2,3,10, 9]));
console.log(largestDiff([1]));