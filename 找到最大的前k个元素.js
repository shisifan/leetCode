function topK(arr, k) {
    if(arr.length === 0) {
        return [];
    }
    if(arr.length === 1) {
        return arr;
    }
    arr.sort((a, b) => b - a);
    let res = [];
    for(let i = 0; i < k; i++) {
        res.push(arr[i]);
    }
    return res;
}
console.log(topK([1,10,8,9,10,2,3,4,8,8,6], 4));