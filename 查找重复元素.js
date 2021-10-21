// function find(arr) {
//     let ret = [];
//     arr.sort((a, b) => a - b);
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] == arr[i+1] && ret.indexOf(arr[i]) == -1)
//             ret.push(arr[i]);
//     }
//     return ret;
// }

// 哈希表
var findRepeatChar = function(arr) {
    const len = arr.length;
    const hash = new Map();
    //遍历一次记录每个元素的出现次数
    for(let i = 0;i < len; i++) {
        if(!hash.has(arr[i])) {
            hash.set(arr[i],1);
        } else {
            let count = hash.get(arr[i]);
            count++;
            hash.set(arr[i],count);
        }
    }
    console.log(hash);
    //找出重复出现的元素并返回
    const res = [];
    for(let key of hash.keys()) {
        if(hash.get(key) !== 1) {
            res.push(key);
        }
    }
    return res;
};
console.log(findRepeatChar([1,2,4,4,3,3,1,5,3]));
// console.log(find([1,1,1,2,3,4,4,7,8]));