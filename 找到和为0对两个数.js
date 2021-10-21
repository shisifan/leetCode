function findTwo(arr) {
    let res = [];
    let flag = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] == 0) {
                flag = 1;
                res.push(arr.indexOf(arr[i]));
                res.push(arr.indexOf(arr[j]));
                break;
            }
        }
    }
    if(flag == 0) {
        return null;
    }
    return res;
}
console.log(findTwo([1,2,3,-1]));