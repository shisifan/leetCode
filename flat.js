const arr = [1, [2], [3, [4]]];

// flat(arr)
// [1, 2, 3, [4]]

// flat(arr, 1)
// [1, 2, 3, [4]]

// flat(arr, 2)
// [1, 2, 3, 4]

// function flat(arr, depth = 1) {
//     if (depth > 0) {
//         return arr.reduce((total, item) => {
//             return total.concat(Array.isArray(item) ? flat(item, depth - 1) : item)
//         }, []);
//     } else {
//         return arr;
//     };
// };
function flat(arr, depth = 1) {
    if (depth > 0) {
        return arr.reduce((total, item) => {
            return total.concat(Array.isArray(item) ? flat(item, depth - 1) : item)
        }, []);
    } else {
        return arr;
    };
}
function flat(arr = [], depth) {
    while(arr.some(item => (Array.isArray(item) && depth > 0))) {
        arr = [].concat(...arr);
        depth--; 
    }
    return arr;
};
Array.prototype.flat = function () {
    let arr = [];
    this.forEach(item => {
        if(Array.isArray(item)){
            arr = arr.concat(item.flat());
        }else{
            arr.push(item);
        }
    })
    return arr;
}
Array.prototype.flat = function() {
	return this.toString()		//"1,2,3,4"
        .split(",")   		//["1", "2", "3", "4"]
        .map(item => +item);//[1, 2, 3, 4]
};
console.log([1,[2,[3,4]]].flat())//[1, 2, 3, 4]

console.log(flat(arr));
// console.log(flat(arr, 1));
// console.log(flat(arr, 2));