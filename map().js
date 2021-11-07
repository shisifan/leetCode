Array.prototype.myMap = function (callback, thisObj) {
  const result = [];
  this.forEach((...args) => {
    const index = args[1];
    result[index] = callback.apply(thisObj, args);
  });
  return result;
}
[(1, 2, 3)].myMap((num) => num * 2);
