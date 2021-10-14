console.log(1) // 同步
setTimeout(() => {
    console.log(2) // 异步：宏任务 setTimeout1
    Promise.resolve().then(() => { // 异步：微任务 then1
        console.log(3)
    })
});
console.log(4) // 同步
new Promise((resolve,reject) => {
    console.log(5) // 同步
    resolve()
}).then(() => { // 异步：微任务 then2
    console.log(6)
    setTimeout(() => {
        console.log(7) // 异步：宏任务 setTimeout2
    })
})
console.log(8) // 同步

// 1 4 5 8 6 2 3 7

setTimeout(() => { // 异步：宏任务 setTimeout
    console.log(1)
}, 0)
console.log(2) // 同步
const p = new Promise((resolve) => { // p 是 then1 执行返回的新 Promise
    console.log(3) // 同步
    resolve()
}).then(() => { // 异步：微任务 then1
    console.log(4)
    // 拿着 p 重新 then
    p.then(() => { // 异步：微任务 then2
      console.log(5)
    })
})
console.log(6) // 同步 6
  
// 2 3 6 4 5 1

const p1 = new Promise((resolve, reject) => { // p1 是 then1 执行返回的新 Promise
    console.log(1) // 同步
    resolve()
}).then(() => { // 异步：微任务 then1
    console.log(2)
    const p2 = new Promise((resolve, reject) => { // p2 是 then2 执行返回的新 Promise
        console.log(3) // then1 里的 同步
        resolve()
    }).then(() => { // 异步：微任务 then2
      console.log(4)
      // 拿着 p2 重新 then
      p2.then(() => { // 异步：微任务 then3
        console.log(5)
      })
    })
    // 拿着 p1 重新 then
    p1.then(() => { // 异步：微任务 then4
      console.log(6)
    })
})
  
// 1 2 3 4 6 5 

new Promise((resolve, reject) => {
    console.log(1) // 同步
    resolve()
}).then(() => { // 异步：微任务 then1
    console.log(2) // then1 中的 同步
    new Promise((resolve, reject) => {
        console.log(3) // then1 中的 同步
        resolve()
    }).then(() => { // 异步：微任务 then2
        console.log(4)
    }).then(() => { // 异步：微任务 then3
        console.log(5)
    }).then(() => { // 异步：微任务 then4
        console.log(6)
    })
})
// 1 2 3 4 5 6

const p1 = new Promise((resolve, reject) => { // p1 是 then1 执行返回的新 Promise
    console.log(1) // 同步
    resolve()
}).then(() => { // 异步：微任务 then1
    console.log(2)
    const p2 = new Promise((resolve, reject) => { // p2 是 then2 执行返回的新 Promise
        console.log(3) // then1 里的 同步
        resolve()
    }).then(() => { // 异步：微任务 then2
        console.log(4)
        // 拿着 p2 重新 then
        p2.then(() => { // 异步：微任务 then3
            console.log(5)
        })
    })
    // 拿着 p1 重新 then
    p1.then(() => { // 异步：微任务 then4
        console.log(6)
    })
})
new Promise((resolve, reject) => {
    console.log(7) // 同步
    resolve()
}).then(() => {  // 异步：微任务 then5
    console.log(8)
})

// 1 7 2 3 8 4 6 5 

console.log(4); // 同步
setTimeout(function () {
    console.log(5); // 异步：宏任务 setTimeout
});
// async1函数可转换成
console.log(1) // 同步
new Promise((resolve, reject) => {
    console.log(3) // 同步
    resolve()
}).then(() => { // 异步：微任务 then1
    console.log(2)
})
// async1函数结束
new Promise(function (resolve, reject) {
    console.log(6); // 同步
    resolve();
}).then(function () { // 异步：微任务 then2
    console.log(7);
});
console.log(8); // 同步

// 4 1 3 6 8 2 7 5

async function async1() {
    console.log(1);
    await async2();
    console.log(2);
}
async function async2() {
    console.log(3);
}
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
        console.log(4)
    }, 1000);
}).then(() => {
    console.log(5)
    new Promise((resolve, reject) => {
        setTimeout(() => {
            async1()
            resolve()
            console.log(6)
        }, 1000)
    }).then(() => {
        console.log(7)
    }).then(() => {
        console.log(8)
    })
}).then(() => {
    console.log(9)
})
new Promise((resolve, reject) => {
    console.log(10)
    setTimeout(() => {
        resolve()
        console.log(11)
    }, 3000);
}).then(() => {
    console.log(12)
})
// 10 4 5 9 1 3 6 2 7 8 11 12

async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async start')
    return new Promise((resolve, reject) => {
        resolve()
        console.log('async2 promise')
    })
}
    console.log('script start')
    setTimeout(() => {
        console.log('setTimeout')
    }, 0);
async1()
new Promise((resolve) => {
    console.log('promise1')
    resolve()
}).then(() => {
    console.log('promise2')
}).then(() => {
    console.log('promise3')
})
console.log('script end')

// script start 
// async1 start 
// async start  
// async2 promise  
// promise1 
// script end  
// promise2  
// promise3  
// async1 end  
// setTimeout