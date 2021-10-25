// 普通
function throttle(func, delay) {
    let last = 0;
    return function() {
        let now = Date.now();
        if(now >= delay + last) {
            func.apply(this, arguments);
            last = now;
        } else {
            console.log("距离上次调用时间差不满足要求～");
        }
    }
}

// 定时器
function throttle(func, delay) {
    let timer = null;
    return function() {
        if(!timer) {
            func.apply(this, arguments);
            timer = setTimeout(() => {
                timer = null;
            }, delay);
        } else {
            console.log("上一个定时器未完成～");
        }
    }
}

function throttle(func, wait) {
    let waiting = false;
    let lastArg;
    return function() {
        if(!waiting) {
            waiting = true;
            func.apply(this, arguments);
            setTimeout(() => {
                waiting = false;
                if(lastArg) {
                    func.apply(this, lastArg);
                }
            }, wait)
        } else {
            lastArg = [...arguments];
        }
    }
}