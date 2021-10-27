Promise.all = function (promise) {
  return new Promise((resolve, reject) => {
    let result = [];
    let index = 0;
    let len = promise.length;
    if (len === 0) {
      resolve(result);
      return;
    }
    for (let i = 0; i < len; i++) {
      Promise.resolve(promise[i])
        .then((data) => {
          result[i] = data;
          index++;
          if (index === len) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};
