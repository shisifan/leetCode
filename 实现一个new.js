/**
 * new 的作用：
 *  创建一个新对象obj
 *  把obj的_proto_指向 Dog.prototype 实现继承
 *  执行构造函数，传递参数，改变this执行Dog.call(obj, args)
 *  最后把obj赋给sanmao
 */


// 第一种
var _new = function () {
    let constructor = Array.prototype.shift.call(arguments);
    let args = arguments;
    const obj = new Object();
    obj._proto_ = constructor.prototype;
    constructor.call(obj, ...args);
    return obj;
}

// 第二种
function _new(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, arg);
    return ret instanceof Object ? ret : obj;
}

function _new(fn, ...args) {
    // 获取构造函数的原型
    const prototype = fn.prototype;
    const obj = Object.create(prototype);
    const res = fn.apply(obj, args);
    if(!res || typeof res != 'object') {
        return obj;
    }
    return res;
}