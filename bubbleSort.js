function bubbleSort(arr) {
    let t;
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([4,2,100,99,10000,-1, 99, 2]));