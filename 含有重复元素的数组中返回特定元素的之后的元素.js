function elementAfter(arr, target){
    let res = [arr[0]];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== res[res.length - 1]){
            res.push(arr[i])
        }
    }
    console.log(res);
    for(let i = 0; i < res.length; i++){
        if(res[i] === target){
            return res[i+1];
        }
    }
    return undefined;
}
console.log(elementAfter([1,2,3,4,4,4,4, 100, 1000, 10000], 100));  