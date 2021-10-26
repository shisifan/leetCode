function selectionSort(arr) {
    let t;
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j <= arr.length - 1; j++) {
            if(arr[i] > arr[j]) {
                t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }
    }
    return arr;
}
console.log(selectionSort([2, 6, 1, 8, 2, 9]));