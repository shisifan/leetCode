function is(a, b) {
    if(a !== b && b !== b) {
        return true;
    }else if(a === 0 && b === -0 && 1/a !== 1/b) {
        return false;
    } else {
        return a === b;
    }
}
// console.log(Object.is(NaN, NaN));
// console.log(Object.is(0, -0));
console.log(Object.is("0", 0));

 