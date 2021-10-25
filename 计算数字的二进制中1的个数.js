function countOne(num) {
    let res = [];
    let l;
    while(num) {
        l = num % 2;
        res.push(l);
        num = Math.floor(num / 2);
    }
    let flag = 0;
    for(let i = 0; i < res.length; i++) {
        if(res[i] === 1) {
            flag++;
        }
    }
    return flag;
}
console.log(countOne(257799));