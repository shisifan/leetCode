// 1. 利用ES6 Set去重
let array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
function uniq1(array) {
    // return [...new Set(array)];  // new Set(array)  =>  数组    [...数组]   Array.from(set)
    return [...new Set(array)];
}
function uniq2(array) {
    // //Set数据结构转换成数组    ES6数组的新增方法  Array.from()   Array.of()
    return Array.from(new Set(array))
}
console.log(uniq2(array))
console.log(uniq1(array))

// 2. 利用for嵌套for，然后splice去重（ES5中最常用）
let array = [1,1,'true',true,'true',true,15,15,false,false,undefined,undefined,null,null,NaN,NaN,'NaN',0,0,'a','a',{},{}]
function unique(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(array[i] == array[j]) {
                array.splice(j, 1);
                j--;
            }
        }
    }
    return array;
}
console.log(unique(array));

// 3. 利用indexOf去重
let array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
function uniq3(array) {
    let res = [];
    for(let i = 0; i < array.length; i++) {
        if(res.indexOf(array[i]) === -1) {
            res.push(array[i]);
        }
    }
    return res;
}
console.log(uniq3(array));

// 4. 利用sort()
let array = [1,1,'true',true,'true',true,15,15,false,false,undefined,undefined,null,null,NaN,NaN,'NaN',0,0,'a','a',{},{}]
function unique(array) {
    if(!Array.isArray(array)) {
        console.log('type error!');
        return;
    }
    arr = array.sort();
    let arrays = [arr[0]];
    for(let i = 0; i < array.length; i++) {
        if(array[i] != array[i-1]) {
            arrays.push(array[i]);
        }
    }
    return arrays;
}
console.log(unique(array));

// 5. 利用Es7 includes
var array = [1,2,3,4,5,1,2,3,4,5];
function uniq4(arr) {
    let result = [];
    for(let i = 0; i < array.length; i++) {
        if(!result.includes(array[i])){
            result.push(array[i]);
        }
    }
    return result;
}
console.log(uniq4(array));

// 6. 利用hasOwnProperty
let array = [1,1,'true',true,'true',true,15,15,false,false,undefined,undefined,null,null,NaN,NaN,'NaN',0,0,'a','a',{},{}]
function unique(arr) {
    let obj = {};
    return arr.filter(function(item, index, arr) {
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    }) 
}
console.log(unique(array));

// 7. 利用filter
var array = [1,1,'true',true,'true',true,15,15,false,false,undefined,undefined,null,null,NaN,NaN,'NaN',0,0,'a','a',{},{}]
function unique(arr) {
	return arr.filter(function(item,index,arr) {
		// 当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
		return arr.indexOf(item,0) === index;
	})
}
console.log(unique(array));