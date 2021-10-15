function curry(fn) {
    return function curryInner(...args) {
        if (args.length >= fn.length) 
            return fn(...args);
        return (...args2) => curryInner(...args, ...args2);
    };
}  
const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}
const curriedJoin = curry(join)
console.log(curriedJoin(1, 2, 3, 4)); // 1_2_3