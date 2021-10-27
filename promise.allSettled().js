
 function allSettled(promises) {
  let result = [];
  let len = promises.length;

  return new Promise((resolve, reject) => {
    len || resolve(promises);
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i])
        .then((value) => {
          result[i] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          result[i] = { status: "rejected", reason };
        })
        .finally(() => {
          result.length === len && resolve(result);
        });
    }
  });
}

