var sortArray = function(nuts) {
    if (nuts.length < 2) return nuts;
    return  quickSort(nuts, 0, nuts.length - 1);
};

function quickSort(nuts, left, right) {
    if (left >= right) return;
    let pivotIndex = partition(nuts, left, right)
    quickSort(nuts, left, pivotIndex - 1)
    quickSort(nuts, pivotIndex + 1, right)
    return nuts;
}

function partition (nuts, left, right) {
    let pivot = right;
    let leftIndex = left;
    for (let i = left; i < right; i++) {
        if (nuts[i] < nuts[pivot]) {
            [nuts[leftIndex], nuts[i]] = [nuts[i], nuts[leftIndex]];
            leftIndex++;
        }
    }
    [nuts[leftIndex], nuts[pivot]] = [nuts[pivot], nuts[leftIndex]];
    return leftIndex;
}
console.log(sortArray([5,2,3,1]));