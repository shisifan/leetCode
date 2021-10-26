function allSettled(promises) {
    if (promises.length === 0) {
        return Promise.resolve([])
    }
    let result = [];
    let index = 0;
    let len = promises.length;
    return new Promise((resolve) => {
        for(let i = 0; i < len; i++) {
            Promise.resolve((promises[i]))
            .then(value => {
                result[i] = {status: 'fulfilled', value}
            })
            .catch(reason => {
                result[i] = {status: 'rejected', reason};
            })
            .finally(() => {
                index++;
                if(index === len) {
                    resolve(result);
                }
            })
        }
    })
}