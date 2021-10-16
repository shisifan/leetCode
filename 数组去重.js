// 遍历数组法
let arr = [2, 8, 5, 0, 5, 2, 6, 7, 2];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if(newArr.indexOf(arr[i]) === -1){
        newArr.push(arr[i]);
    }
}
console.log(newArr); // [ 2, 8, 5, 0, 6, 7 ]

// 数组下标判断法
let arr = [2, 8, 5, 0, 5, 2, 6, 7, 2]
let newArr = []
for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
        newArr.push(arr[i])
    }
}
console.log(newArr) // [2, 8, 5, 0, 6, 7]

// 排序后相邻去除法
let arr = [2, 8, 5, 0, 5, 2, 6, 7, 2];
arr.sort();
let newArr = [arr[0]];
for(let i = 1; i < arr.length; i++) {
    if(arr[i] !== newArr[newArr.length - 1]) {
        newArr.push(arr[i])
    }
}
console.log(newArr);

// 优化的遍历数组法
let arr = [2, 8, 5, 0, 5, 2, 6, 7, 2];
let newArr = [];
for(let i = 0; i < arr.length; i++) {
    for(let  j = i + 1; j < arr.length; j++) {
        if(arr[i] === arr[j]) {
            i++;
            j = i;
        }
    }
    newArr.push(arr[i]);
}
console.log(newArr);

// 数组遍历法

let arr = ['a', 'a', 'b', 'c', 'b', 'd', 'e', 'a'];
let newArr = [];
for(let i = 0; i < arr.length; i++) {
    let bl = true;
    for(let j = 0; j < newArr.length; j++) {
        if(arr[i] === newArr[j]) {
            bl = false;
            break;
        }
    }
    if (bl) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);
