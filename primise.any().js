function any(promise) {  
    return new Promise((resolve, reject) => {
        let err = [];
        let index = 0;
        let len = promise.length;
        if(len === 0) {
            reject(err);
            return;
        }
        for(let i = 0; i < len; i++) {
            Promise.resolve(promise[i]).then(result => {
                resolve(result);
                return;
            }).catch(error => {
                err[i] = error;
                index++;
                if(index === len) {
                    reject(err);
                }
            })
        }
    })
}