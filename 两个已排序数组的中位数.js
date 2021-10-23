function median(arr1, arr2) {
    let res = arr1.concat(...arr2);
    res.sort((a, b) => a - b);
    console.log(res);
    let len = res.length;
    let sum = 0;
    if(len % 2 === 0) {
        for(let i = 0; i < len; i++) {
            sum += res[i];
            console.log(sum);
        }
        return sum/len;
    } else {
        return res[Math.floor(len/2)]
    }
}
console.log(median([84,245,308,340,422,433,513,956,956],[7,100,193,200,681] ));