function firstDuplicate(str) {
    let res = [];
    let flag = 0;
    for(let i = 0; i < str.length; i++) {
        if(res.includes(str[i])) {
            flag = 1;
            return str[i];
        } else {
            res.push(str[i]);
        }
    }
    if(flag == 0) {
        return null;
    }
}
console.log(firstDuplicate('abca'));