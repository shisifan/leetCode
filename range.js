// 可迭代对象
let range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,
            next() {
                if(this.current <= this.last) {
                    return {done: false, value: this.current++}
                } else {
                    return {done: true};
                }
            }
        }
    }
};
for(let value of range) {
    console.log(value);
}

// 异步可迭代对象
let rangeAsync = {
    from: 1,
    to: 5,
    [Symbol.asynciterator]() {
        return {
            current: this.from,
            last: this.to,
            async next() {
                await new Promise(resolve => setTimeout(resolve, 1000))
                if(this.current <= this.last) {
                    return {done: false, value: this.current++}
                } else {
                    return {done: true};
                }
            }
        }
    }
};
(async () => {
    for await(let value of rangeAsync) {
        console.log(value);
    }
})()


