function any(promises) {  
    return new Promise((resolve, reject) => {
        let err = [];
        let index = 0;
        let len = promises.length;
        // len || resolve(promises);
        for(let i = 0; i < len; i++) {
            Promise.resolve(promises[i]).then(result => {
                resolve(result);
            }).catch(error => {
                err[i] = error;
                index++;
                if(index === len) {
                    reject(error)
                }
            })
        }
    })
}