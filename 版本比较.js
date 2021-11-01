function compare(v1, v2) {
    let s1 = v1.split('.');
    let s2 = v2.split('.');
    let p1 = 0, p2 = 0;
    while(p1 < s1.length && p2 < s2.length) {
        if(Number(s1[p1]) > Number(s2[p2])) {
            return 1;
        } else if(Number(s1[p1]) == Number(s2[p2])) {
            p1++;
            p2++;
        } else if(Number(s1[p1]) < Number(s2[p2])) {
            return -1;
        }
    }
    if(p1 === s1.length && p2 === s2.length) {
        return 0;
    }
}
console.log(compare('15.4.3', '5.4.4'));
// console.log(compare('12.1.0', '12.0.9'));