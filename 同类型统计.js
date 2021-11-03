const arr = ['1a', '2b', '13c', '5a']
function test(arr) {
    if (!Array.isArray(arr)) {
        return
    }
    const map = new Map()
    for (let i = 0, len = arr.length; i < len; i++) {
        const key = arr[i].slice(-1)
        if (map.has(key)) {
            const val = map.get(key)
            val.count++;
            val.sum += +arr[i].slice(0, -1)
            continue;
        }
        map.set(key, {
            count: 1,
            sum: +arr[i].slice(0, -1)
        })
    }
    const result = Array.from(map.values()).sort((x, y) => y.count - x.count)[0].sum
    return result
}

console.log(test(arr)); // 6