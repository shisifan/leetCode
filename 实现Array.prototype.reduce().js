Array.prototype.myReduce = function (callback, initialValue) {
    const argsLength = arguments.length;
    if(argsLength === 1 && this.length === 0) {
        throw new Error;
    }
    let index = argsLength === 1 ? 1 : 0;
    let result = argsLength === 1 ? this[0] : initialValue;
    for(let i = index; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}

console.log([1,2,3].myReduce((sum, item) => sum + item));
