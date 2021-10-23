function * range(from, to) {
    while(from <= to) {
        yield from++;
    }
}
console.log(range(1, 4));