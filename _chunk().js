function chunk(items, size) {
    const res = [];
    if(size === 0) {
        return [];
    }
    for(let i = 0; i < items.length; i++) {
        res.push(items.slice(i, i + size));
    }
    return res;
}

function chunk(items, size) {
    const res = [];
    if(size < 1) {
        return res;
    }
    let buffer = [];
    for(let i = 0; i < items.length; i++) {
        buffer.push(items[i]);
        if(buffer.length === size) {
            res.push(buffer);
            buffer = [];
        }
    }
    if(buffer.length > 0) {
        res.push(buffer);
    }
    return res;
}
// console.log(chunk([1,2,3,4,5], 1));
console.log(chunk([1,2,3,4,5], 2));