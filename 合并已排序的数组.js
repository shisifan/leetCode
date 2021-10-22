let arrList = [
    [1,1,1,100,1000,10000],
    [1,2,2,2,200,200,1000],
    [1000000,10000001],
    [2,3,3]
];
function merge(arrList) {
    let res = [];
    for(let i = 0; i < arrList.length; i++) {
        res.push(...arrList[i]);
    }
    return res.sort((a, b) => a - b);
}
console.log(merge(arrList));