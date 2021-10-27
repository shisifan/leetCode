// 1. 使用reduce
function flatten(arr) {
    return arr.reduce((result, item) => {
        return result.concat(Array.isArray(item) ? flatten(item) : item)
    }, []);
}
// 2. toString & split
function flatten(arr) {
    return arr.toString().split(",").map(function(item){
        return Number(item);
    })
}
// 3. join & split
function flatten(arr) {
    return arr.join(",").split(",").map(item => {
        return parseInt(item)
    })
}

// 4. 递归
function flatten(arr) {
    var res = [];
    arr.map(item => {
        if(Array.isArray(item)) {
            res = res.concat(flatten(item));
        } else {
            res.push(item);
        }
    })
    return res;
}

// 5. 扩展运算符
function flatten(arr) {
    while(arr.some(item => Array.isArray(item))){
        arr = [].concat(...arr);
    }
    return arr;
}
console.log(flatten([1, [2, 3, [4, 5]]]));