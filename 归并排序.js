function mergeSort(arr) {
    let len = arr.length;
    if(len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, len);
    let mergeSortLeft = mergeSort(left);
    let mergeSortRight = mergeSort(right);
    return merge(mergeSortLeft, mergeSortRight);
}
const merge = (left, right) => {
    const res = [];
    while(left.length && right.length) {
        if(left[0] <= right[0]) {
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }
    while(left.length) {
        res.push(left.shift());
    }
    while(right.length) {
        res.push(right.shift());
    }
    return res;
}

console.log(mergeSort([1, 3, 2, 6, 4, 9, 7]));