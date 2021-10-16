const arr = [10, 2, 2 , 1, 0, 0, 10]
function findSingle(arr) {
    let res = 0;
    arr.forEach( (num) => {
        res ^= num;
    })
    return res;
}
// function findSingle(arr) {
//     const single = new Set();
//     arr.forEach((num) => {
//       if (single.has(num)) {
//         single.delete(num);
//       } else {
//         single.add(num);
//       }
//     });
//     return single.values().next().value;
// }
console.log(findSingle(arr) ); 