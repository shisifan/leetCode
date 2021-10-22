// function curry(fn, args) {
//     let length = fn.length;
//     let arg = args || [];
//     return function() {
//       newArgs = arg.concat(Array.prototype.slice.call(arguments));
//       if(newArgs.length < length) {
//         return curry.call(this, fn, newArgs);
//       } else {
//         return fn.apply(this, newArgs);
//       }
//     }
// }
// function multiFn(a, b, c) {
//     return a + b + c;
// }
// let multi = curry(multiFn);


// console.log(multi(2,3)(4));
// // console.log(multi(2)(3)(4));
// // console.log(multi(2,3,4));
// // console.log(multi(2)(3,4));


// 实现一个add方法，使计算结果能够满足如下预期：
function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}

add(1)(2)(3)                // 6
add(1, 2, 3)(4)             // 10
add(1)(2)(3)(4)(5)          // 15
add(2, 6)(1)                // 9
